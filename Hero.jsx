function Hero() {
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
        <div className="rp-eyebrow">Volunteer civilian patrol · Rosedale Park, Detroit</div>
        <h1>Neighbors looking<br/>out for neighbors.</h1>
        <p className="rp-lede">
          The Rosedale Park Radio Patrol is a volunteer organization made up of
          interested neighbors who look out for the safety and well-being of all
          people in Rosedale Park. We are a community owned, community operated,
          community watch.
        </p>
        <div className="rp-hero-cta">
          <a href="#join" className="rp-btn rp-btn-gold">Join our team →</a>
          <a href="#about" className="rp-btn rp-btn-ghost-light">How the patrol works</a>
        </div>
        <div className="rp-hero-meta">
          <span><b>1,600</b> homes in the neighborhood</span>
          <span className="sep">·</span>
          <span>Community owned &amp; operated</span>
          <span className="sep">·</span>
          <span>Sanctioned by <b>DPD</b></span>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
