function InfoBar() {
  const C = RP.infoBar;
  const items = C.steps;
  return (
    <section id="about" className="rp-infobar">
      <div className="rp-section-head" style={{ textAlign: 'center' }}>
        <div className="rp-eyebrow">{C.eyebrow}</div>
        <h2>{C.heading}</h2>
        <p className="rp-section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {C.sub}
        </p>
      </div>
      <div className="rp-infobar-grid">
        {items.map(i => (
          <div
            key={i.n}
            className="rp-infobar-cell"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            <div className="rp-num">{i.n}</div>
            <h3>{i.t}</h3>
            <p style={{ maxWidth: '32ch' }}>{i.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
window.InfoBar = InfoBar;
