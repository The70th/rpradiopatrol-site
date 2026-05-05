// Stamps a coordinate grid onto template.pdf and saves debug-grid.pdf.
// Vertical lines every 20 pt (with x label every 40 pt at top).
// Horizontal lines every 10 pt (with y label every 20 pt at left).
const fs = require('node:fs/promises');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

(async () => {
  const tpl = await fs.readFile('api/template.pdf');
  const pdf = await PDFDocument.load(tpl);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const page = pdf.getPage(0);
  const { width: W, height: H } = page.getSize();
  const red = rgb(1, 0, 0);
  const blue = rgb(0, 0, 1);

  // Vertical lines & x labels
  for (let x = 0; x <= W; x += 20) {
    page.drawLine({
      start: { x, y: 0 }, end: { x, y: H },
      thickness: 0.25, color: red, opacity: 0.4,
    });
    if (x % 40 === 0) {
      page.drawText(String(x), { x: x + 1, y: H - 10, size: 5, font, color: blue });
    }
  }
  // Horizontal lines & y labels
  for (let y = 0; y <= H; y += 10) {
    page.drawLine({
      start: { x: 0, y }, end: { x: W, y },
      thickness: 0.25, color: red, opacity: 0.4,
    });
    if (y % 20 === 0) {
      page.drawText(String(y), { x: 2, y: y + 1, size: 5, font, color: blue });
    }
  }
  await fs.writeFile('api/debug-grid.pdf', await pdf.save());
  console.log('wrote api/debug-grid.pdf');
})();
