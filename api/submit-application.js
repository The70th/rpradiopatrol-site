const fs = require('node:fs/promises');
const path = require('node:path');
const { PDFDocument } = require('pdf-lib');
const { Resend } = require('resend');

const PATROL_NAME = 'Rosedale Park';
const PATROL_PRESIDENT = 'Trajan Centers';

const REQUIRED_FIELDS = [
  'name',
  'dateOfBirth',
  'sex',
  'race',
  'address',
  'city',
  'state',
  'zip',
  'driversLicense',
  'emergencyContactName',
  'emergencyContactPhone1',
  'serviceAvailability',
  'typedSignature',
  'date',
];

function nameSlug(value, fallback) {
  return String(value || fallback || '').replace(/[^A-Za-z0-9]/g, '') || fallback;
}

function splitName(fullName) {
  const parts = String(fullName || '').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { first: 'Applicant', last: 'Applicant' };
  if (parts.length === 1) return { first: parts[0], last: parts[0] };
  return { first: parts[0], last: parts[parts.length - 1] };
}

function splitPhone(formatted) {
  const digits = String(formatted || '').replace(/\D/g, '');
  if (digits.length === 0) return { area: '', rest: '' };
  if (digits.length < 10) return { area: digits.slice(0, 3), rest: digits.slice(3) };
  return {
    area: digits.slice(0, 3),
    rest: digits.slice(3, 6) + '-' + digits.slice(6, 10),
  };
}

async function buildFilledPdf(data) {
  const templatePath = path.join(process.cwd(), 'api', 'template.pdf');
  const templateBytes = await fs.readFile(templatePath);
  const pdf = await PDFDocument.load(templateBytes);
  const form = pdf.getForm();

  const set = (name, value) => {
    try {
      form.getTextField(name).setText(String(value ?? ''));
    } catch (err) {
      console.warn(`PDF field not found or not a text field: ${name}`);
    }
  };

  const home = splitPhone(data.homePhone);
  const cell = splitPhone(data.cellPhone);
  const work = splitPhone(data.workPhone);
  const em1 = splitPhone(data.emergencyContactPhone1);
  const em2 = splitPhone(data.emergencyContactPhone2);

  set('Name', data.name);
  set('DateOfBirth', data.dateOfBirth);
  set('Sex', data.sex);
  set('Race', data.race);
  set('Address', data.address);
  set('City', data.city);
  set('State', data.state);
  set('ZipCode', data.zip);

  set('HomeAreaCode', home.area);
  set('HomePhone', home.rest);
  set('CellAreaCode', cell.area);
  set('CellPhone', cell.rest);
  set('WorkAreaCode', work.area);
  set('WorkPhone', work.rest);

  set('DriversLicense', data.driversLicense);
  set('EmergencyContact', data.emergencyContactName);
  set('EmergencyAreaCode1', em1.area);
  set('EmergencyPhone1', em1.rest);
  set('EmergencyAreaCode2', em2.area);
  set('EmergencyPhone2', em2.rest);

  set('PatrolAvailability', data.serviceAvailability);
  set('RadioPatrolName', PATROL_NAME);
  set('RadioPatrolPresident', PATROL_PRESIDENT);
  set('SignatureOfApplicant', data.typedSignature || data.name);
  set('Date', data.date);

  form.flatten();
  return pdf.save();
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let data = req.body;
  if (typeof data === 'string') {
    try { data = JSON.parse(data); } catch { data = null; }
  }
  if (!data || typeof data !== 'object') {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!data[field]) {
      return res.status(400).json({ error: `Missing field: ${field}` });
    }
  }

  if (!data.homePhone && !data.cellPhone) {
    return res.status(400).json({
      error: 'At least one of Home Phone or Cell Phone is required.',
    });
  }

  let pdfBytes;
  try {
    pdfBytes = await buildFilledPdf(data);
  } catch (err) {
    console.error('PDF generation failed:', err);
    return res.status(500).json({ error: 'Failed to generate PDF' });
  }

  const { first, last } = splitName(data.name);
  const filename = `RadioPatrol_Application_${nameSlug(last, 'Applicant')}_${nameSlug(first, 'Applicant')}.pdf`;
  const debugMode = String(req.query?.debug || '') === '1';

  if (debugMode) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    return res.send(Buffer.from(pdfBytes));
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'Email not configured — set RESEND_API_KEY in environment variables',
    });
  }

  try {
    const resend = new Resend(apiKey);
    const { error: sendError } = await resend.emails.send({
      from: 'Radio Patrol <onboarding@resend.dev>',
      to: 'resend@trajan.mozmail.com',
      subject: `New Radio Patrol Application — ${data.name}`,
      text:
        'A new membership application has been submitted. ' +
        'The completed DPD application form is attached.',
      attachments: [{ filename, content: Buffer.from(pdfBytes) }],
    });
    if (sendError) {
      console.error('Resend error:', sendError);
      return res.status(502).json({ error: 'Failed to send email' });
    }
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(502).json({ error: 'Failed to send email' });
  }

  return res.status(200).json({ ok: true });
};
