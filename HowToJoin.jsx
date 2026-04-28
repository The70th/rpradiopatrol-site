function HowToJoin() {
  const sectionStyle = {
    padding: '96px 0 104px',
    background: 'var(--forest-800)',
    color: 'var(--stone-50)',
    borderBottom: '4px solid var(--gold-600)',
    position: 'relative',
  };
  const headStyle = {
    maxWidth: 1100,
    margin: '0 auto 40px',
    padding: '0 64px',
    textAlign: 'center',
  };
  const eyebrowStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: 'var(--gold-400)',
    marginBottom: 14,
  };
  const h2Style = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(36px, 4.4vw, 52px)',
    textTransform: 'uppercase',
    color: '#fff',
    margin: 0,
    lineHeight: 0.98,
    fontWeight: 600,
    letterSpacing: '0.01em',
  };
  const subStyle = {
    fontFamily: 'var(--font-serif)',
    color: 'var(--stone-200)',
    fontSize: 17,
    lineHeight: 1.55,
    margin: '14px auto 0',
    maxWidth: '54ch',
  };

  const gridStyle = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 64px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
    alignItems: 'stretch',
  };

  const cardBase = {
    background: 'var(--forest-900)',
    border: '1px solid var(--forest-700)',
    borderRadius: 'var(--radius-md)',
    padding: '28px 28px 32px',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    position: 'relative',
    minHeight: 340,
  };
  const cardFeatured = {
    ...cardBase,
    background: 'var(--gold-600)',
    color: 'var(--forest-900)',
    border: '1px solid var(--gold-700)',
    boxShadow: '0 16px 32px rgba(12,31,23,.45)',
    transform: 'translateY(-8px)',
  };

  const numRow = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 14,
    borderBottom: '1px solid var(--forest-700)',
  };
  const numRowFeatured = {
    ...numRow,
    borderBottomColor: 'rgba(19,42,32,.25)',
  };
  const numBadge = {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    letterSpacing: '0.1em',
    color: 'var(--forest-900)',
    background: 'var(--gold-500)',
    padding: '4px 10px',
    borderRadius: 2,
    fontWeight: 700,
  };
  const numBadgeOnGold = {
    ...numBadge,
    background: 'var(--forest-900)',
    color: 'var(--gold-400)',
  };
  const stepLabel = {
    fontFamily: 'var(--font-sans)',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--gold-400)',
  };
  const stepLabelOnGold = { ...stepLabel, color: 'var(--forest-800)' };

  const h3Style = {
    fontFamily: 'var(--font-display)',
    textTransform: 'uppercase',
    fontSize: 24,
    color: '#fff',
    margin: '8px 0 0',
    lineHeight: 1.1,
    letterSpacing: '0.01em',
  };
  const h3OnGold = { ...h3Style, color: 'var(--forest-900)' };

  const pStyle = {
    margin: 0,
    color: 'var(--stone-200)',
    fontSize: 15,
    lineHeight: 1.6,
    fontFamily: 'var(--font-sans)',
  };
  const pOnGold = { ...pStyle, color: 'var(--forest-900)' };

  const ctaWrap = { marginTop: 'auto', paddingTop: 18 };

  const cardCtaBtn = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'var(--forest-900)',
    color: 'var(--gold-400)',
    padding: '12px 20px',
    borderRadius: 'var(--radius)',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
    border: '1px solid var(--forest-950)',
  };

  const timeChip = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--gold-400)',
    background: 'rgba(200,162,75,0.08)',
    border: '1px solid var(--forest-700)',
    padding: '4px 10px',
    borderRadius: 999,
    width: 'fit-content',
  };
  const timeChipOnGold = {
    ...timeChip,
    color: 'var(--forest-900)',
    background: 'rgba(19,42,32,0.1)',
    border: '1px solid var(--gold-700)',
  };

  const footnote = {
    maxWidth: 1100,
    margin: '48px auto 0',
    padding: '0 64px',
    textAlign: 'center',
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    color: 'var(--stone-300)',
    fontSize: 15,
  };

  return (
    <section id="join" className="rp-join" style={sectionStyle}>
      <div style={headStyle}>
        <div style={eyebrowStyle}>How to join</div>
        <h2 style={h2Style}>Three steps to get on the radio.</h2>
        <p style={subStyle}>
          Radio Patrol is a volunteer organization sanctioned by the Detroit Police
          Department. Joining is straightforward, but the process is real — and it
          keeps the neighborhood safe.
        </p>
      </div>

      <div style={gridStyle}>
        {/* STEP 1 — FEATURED CARD with CTA */}
        <div style={cardFeatured}>
          <div style={numRowFeatured}>
            <span style={numBadgeOnGold}>01</span>
            <span style={stepLabelOnGold}>Start here</span>
          </div>
          <h3 style={h3OnGold}>Submit your application</h3>
          <p style={pOnGold}>
            Complete the online application — name and contact information.
            It is a formal application to a DPD-sanctioned volunteer organization,
            and we review every one.
          </p>
          <div style={ctaWrap}>
            <a href="#apply" style={cardCtaBtn}>
              Start application →
            </a>
          </div>
        </div>

        {/* STEP 2 */}
        <div style={cardBase}>
          <div style={numRow}>
            <span style={numBadge}>02</span>
            <span style={stepLabel}>Review</span>
          </div>
          <h3 style={h3Style}>Detroit Police review</h3>
          <p style={pStyle}>
            Your application is reviewed by the Detroit Police to ensure no
            violent offenders are able to join. We’ll reach out when
            you’ve been approved.
          </p>
          <div style={ctaWrap}>
            <span style={timeChip}>Typically less than 1 week</span>
          </div>
        </div>

        {/* STEP 3 */}
        <div style={cardBase}>
          <div style={numRow}>
            <span style={numBadge}>03</span>
            <span style={stepLabel}>Ride along</span>
          </div>
          <h3 style={h3Style}>Two practice patrols</h3>
          <p style={pStyle}>
            Once approved, you’ll go out on two practice patrols with an
            experienced team. You’ll learn radio protocol, the route, and
            what to watch for. After that, you’re ready to patrol on your
            own schedule.
          </p>
          <div style={ctaWrap}>
            <span style={timeChip}>Two ride-alongs</span>
          </div>
        </div>
      </div>

      <p style={footnote}>
        Two hours a month is all we ask — you choose when.
      </p>
    </section>
  );
}
window.HowToJoin = HowToJoin;
