function PerksAndTraining() {
  const C = RP.perks;
  const section = {
    padding: '96px 0',
    background: 'var(--stone-50)',
    borderBottom: '1px solid var(--border)',
  };
  const head = { maxWidth: 1100, margin: '0 auto 40px', padding: '0 64px', textAlign: 'center' };
  const eyebrow = {
    fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.18em',
    color: 'var(--gold-700)', marginBottom: 14,
  };
  const h2 = {
    fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4.4vw, 52px)',
    textTransform: 'uppercase', color: 'var(--forest-900)', margin: 0,
    lineHeight: 0.98, fontWeight: 600,
  };
  const sub = {
    fontFamily: 'var(--font-serif)', color: 'var(--fg)', fontSize: 17,
    lineHeight: 1.55, margin: '14px auto 0', maxWidth: '58ch',
  };

  const grid = {
    maxWidth: 1200, margin: '0 auto', padding: '0 64px',
    display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 32, alignItems: 'stretch',
  };

  // Play hard — photo card
  const photoCard = {
    position: 'relative', overflow: 'hidden',
    borderRadius: 'var(--radius-md)', border: '1px solid var(--border)',
    minHeight: 460, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
  };
  const photoImg = {
    position: 'absolute', inset: 0, width: '100%', height: '100%',
    objectFit: 'cover', zIndex: 0,
  };
  const photoScrim = {
    position: 'absolute', inset: 0, zIndex: 1,
    background:
      'linear-gradient(180deg, rgba(12,31,23,0.15) 0%, rgba(12,31,23,0.35) 40%, rgba(12,31,23,0.92) 100%)',
  };
  const photoBody = { position: 'relative', zIndex: 2, padding: '28px 32px 32px', color: '#fff' };
  const photoEb = {
    fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.2em',
    color: 'var(--gold-400)', marginBottom: 10,
  };
  const photoH = {
    fontFamily: 'var(--font-display)', textTransform: 'uppercase',
    fontSize: 32, color: '#fff', margin: '0 0 10px', lineHeight: 1, fontWeight: 600,
  };
  const photoP = {
    fontFamily: 'var(--font-serif)', color: 'var(--stone-200)',
    fontSize: 15, lineHeight: 1.55, margin: 0, maxWidth: '44ch',
  };
  const photoMeta = {
    display: 'flex', gap: 10, alignItems: 'center', marginTop: 18,
    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em',
    textTransform: 'uppercase', color: 'var(--gold-400)',
  };
  const pin = {
    display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
    background: 'var(--gold-500)',
  };

  // Training card
  const trainCard = {
    background: 'var(--white)', border: '1px solid var(--border)',
    borderTop: '4px solid var(--forest-800)',
    borderRadius: 'var(--radius-md)',
    padding: '26px 28px 28px',
    display: 'flex', flexDirection: 'column',
  };
  const trainTopRow = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: 12, marginBottom: 8,
  };
  const trainEb = {
    fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.2em',
    color: 'var(--gold-700)',
  };
  const trainH = {
    fontFamily: 'var(--font-display)', textTransform: 'uppercase',
    fontSize: 24, color: 'var(--forest-900)', margin: '0 0 8px',
    lineHeight: 1.05, fontWeight: 600,
  };
  const trainP = {
    fontFamily: 'var(--font-sans)', color: 'var(--fg)',
    fontSize: 14, lineHeight: 1.55, margin: '0 0 18px',
  };
  const ratePill = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em',
    textTransform: 'uppercase', color: 'var(--forest-800)',
    background: 'var(--forest-100)', border: '1px solid var(--forest-200)',
    padding: '4px 10px', borderRadius: 999, width: 'fit-content',
    whiteSpace: 'nowrap',
  };
  const recentEb = {
    fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.2em',
    color: 'var(--fg-muted)', marginBottom: 12,
    paddingTop: 16, borderTop: '1px solid var(--border)',
  };
  const recentList = {
    display: 'flex', flexDirection: 'column', gap: 12,
    margin: 0, padding: 0, listStyle: 'none',
  };
  const recentItem = {
    display: 'grid', gridTemplateColumns: '14px 1fr', gap: 12,
    alignItems: 'start',
  };
  const recentDot = {
    width: 8, height: 8, borderRadius: 2,
    background: 'var(--gold-500)', marginTop: 7,
  };
  const recentDotMuted = { ...recentDot, background: 'var(--stone-300)' };
  const recentText = {
    fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600,
    color: 'var(--forest-900)', lineHeight: 1.3,
  };
  const recentBadge = {
    fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 700,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'var(--gold-700)', marginLeft: 8,
    verticalAlign: '2px',
  };
  const recentSub = {
    fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 12.5,
    color: 'var(--fg-muted)', marginTop: 2, fontWeight: 400, display: 'block',
    lineHeight: 1.4,
  };

  const sessions = C.training.sessions;

  return (
    <section id="perks" style={section}>
      <div style={head}>
        <div style={eyebrow}>{C.eyebrow}</div>
        <h2 style={h2}>{C.heading}</h2>
        <p style={sub}>{C.sub}</p>
      </div>

      <div style={grid}>
        {/* LEFT — Annual summer party photo card */}
        <div style={photoCard}>
          <img src="assets/photos/patrollers-dinner.jpg" alt="" style={photoImg} />
          <div style={photoScrim} />
          <div style={photoBody}>
            <div style={photoEb}>{C.party.eyebrow}</div>
            <h3 style={photoH}>{C.party.title}</h3>
            <p style={photoP}>{C.party.body}</p>
            <div style={photoMeta}>
              <span style={pin} />
              <span>{C.party.meta}</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Training card */}
        <div style={trainCard}>
          <div style={trainTopRow}>
            <div style={trainEb}>{C.training.label}</div>
            <span style={ratePill}>{C.training.pill}</span>
          </div>
          <h3 style={trainH}>{C.training.title}</h3>
          <p style={trainP}>{C.training.body}</p>

          <div style={recentEb}>{C.training.recentLabel}</div>
          <ul style={recentList}>
            {sessions.map((s, i) => (
              <li key={i} style={recentItem}>
                <span style={i === 0 ? recentDot : recentDotMuted} />
                <span style={recentText}>
                  {s.title}
                  {i === 0 && <span style={recentBadge}>{C.training.mostRecentBadge}</span>}
                  <span style={recentSub}>{s.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
window.PerksAndTraining = PerksAndTraining;
