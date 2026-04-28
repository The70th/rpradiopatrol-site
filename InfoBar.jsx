function InfoBar() {
  const items = [
    {
      n: '01',
      t: 'Patrol the neighborhood',
      d: 'Volunteers patrol in their own vehicles, on their own schedule — day or night, any time that works for them. There are no assigned shifts.',
    },
    {
      n: '02',
      t: 'Stay on the radio',
      d: 'Patrollers stay in radio contact with a base operator throughout the patrol. You are never out there alone.',
    },
    {
      n: '03',
      t: 'Report what you see',
      d: 'Anything out of place is called in to base — or directly to 911 in a real emergency. We observe and report. We never confront.',
    },
  ];
  return (
    <section id="about" className="rp-infobar">
      <div className="rp-section-head" style={{ textAlign: 'center' }}>
        <div className="rp-eyebrow">How the patrol works</div>
        <h2>As easy as 1&ndash;2&ndash;3.</h2>
        <p className="rp-section-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          The whole job is three things, done together. A pair of patrollers drives
          the neighborhood, a base operator stays in constant contact, and what we
          see gets reported.
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
