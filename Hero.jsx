function Hero() {
  const C = RP.hero;
  return (
    <section
      className="rp-hero rp-hero-photo"
      style={{ position: 'relative', overflow: 'hidden', minHeight: 560 }}
    >
      <img
        className="rp-hero-bg"
        src="assets/photos/patrollers-group.jpg"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
      <div
        className="rp-hero-scrim"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(90deg, rgba(12,31,23,0.94) 0%, rgba(12,31,23,0.80) 45%, rgba(12,31,23,0.38) 100%)',
        }}
      />
      <div className="rp-hero-inner" style={{ position: 'relative', zIndex: 2 }}>
        <div className="rp-eyebrow">{C.eyebrow}</div>
        <h1>{C.headlineTop}<br/>{C.headlineBottom}</h1>
        <p className="rp-lede">{C.lede}</p>
        <div className="rp-hero-cta">
          <a href="#join" className="rp-btn rp-btn-gold">{C.joinButton}</a>
          <a href="#about" className="rp-btn rp-btn-ghost-light">{C.aboutButton}</a>
        </div>
        <div className="rp-hero-meta">
          <span><b>{C.homesCount}</b> {C.homesLabel}</span>
          <span className="sep">·</span>
          <span>{C.ownedLabel}</span>
          <span className="sep">·</span>
          <span>{C.sanctionedText} <b>{C.sanctionedBy}</b></span>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
