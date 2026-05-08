function PatrolMap() {
  const mapRef = React.useRef(null);
  const leafletInstance = React.useRef(null);

  const BOUNDARY = [
    [42.3772, -83.2268],
    [42.3695, -83.2268],
    [42.3695, -83.2335],
    [42.3735, -83.2335],
    [42.3735, -83.2398],
    [42.3762, -83.2398],
    [42.3762, -83.2415],
    [42.3748, -83.2415],
    [42.3748, -83.2440],
    [42.3762, -83.2440],
    [42.3828, -83.2440],
    [42.3828, -83.2365],
    [42.3858, -83.2320],
    [42.3858, -83.2295],
    [42.3772, -83.2268],
  ];

  React.useEffect(() => {
    if (typeof L === 'undefined' || !mapRef.current || leafletInstance.current) return;

    const map = L.map(mapRef.current, {
      center: [42.375, -83.233],
      zoom: 14,
      scrollWheelZoom: false,
    });
    leafletInstance.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    L.polygon(BOUNDARY, {
      color: '#C9A84C',
      weight: 2,
      fillColor: '#0E2318',
      fillOpacity: 0.3,
    })
      .addTo(map)
      .bindPopup('Rosedale Park Radio Patrol #23 — Patrol Coverage Area');

    return () => {
      map.remove();
      leafletInstance.current = null;
    };
  }, []);

  const sectionStyle = {
    padding: '96px 0 104px',
    background: 'var(--stone-50)',
    color: 'var(--fg)',
    borderTop: '4px solid var(--gold-600)',
    borderBottom: '4px solid var(--gold-600)',
  };
  const innerStyle = {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 32px',
  };
  const headStyle = { textAlign: 'center', marginBottom: 32 };
  const eyebrowStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: 'var(--gold-700)',
    marginBottom: 14,
  };
  const h2Style = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(36px, 4.4vw, 52px)',
    textTransform: 'uppercase',
    color: 'var(--forest-900)',
    margin: 0,
    lineHeight: 0.98,
    fontWeight: 600,
    letterSpacing: '0.01em',
  };
  const subStyle = {
    fontFamily: 'var(--font-serif)',
    color: 'var(--fg)',
    fontSize: 17,
    lineHeight: 1.55,
    margin: '14px auto 0',
    maxWidth: '60ch',
  };
  const mapWrapStyle = {
    width: '100%',
    height: 450,
    borderRadius: 12,
    overflow: 'hidden',
    border: '1px solid var(--border-strong)',
    boxShadow: '0 6px 18px rgba(12,31,23,.12)',
  };
  const listWrapStyle = {
    marginTop: 28,
    background: 'var(--white)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    padding: '20px 28px',
  };
  const listTitleStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--gold-700)',
    margin: '0 0 14px',
  };
  const listStyle = {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '10px 24px',
    fontFamily: 'var(--font-serif)',
    fontSize: 15,
    color: 'var(--fg)',
  };
  const dirLabelStyle = {
    fontFamily: 'var(--font-sans)',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--forest-800)',
    marginRight: 6,
  };

  return (
    <section id="patrol-map" style={sectionStyle}>
      <div style={innerStyle}>
        <div style={headStyle}>
          <div style={eyebrowStyle}>Patrol Coverage</div>
          <h2 style={h2Style}>Our Patrol Coverage Area</h2>
          <p style={subStyle}>
            Rosedale Park Radio Patrol #23 serves the Rosedale Park neighborhood,
            bounded by the streets below.
          </p>
        </div>

        <div
          ref={mapRef}
          id="patrol-map-leaflet"
          className="rp-patrol-map"
          style={mapWrapStyle}
          aria-label="Map of Rosedale Park Radio Patrol coverage area"
        />

        <div style={listWrapStyle}>
          <p style={listTitleStyle}>Boundary streets</p>
          <ul style={listStyle}>
            <li><span style={dirLabelStyle}>North</span> Grand River Ave</li>
            <li><span style={dirLabelStyle}>East</span> Southfield Freeway (M-39)</li>
            <li><span style={dirLabelStyle}>South</span> Lyndon Ave (with extension south to Acacia between Faust and Southfield)</li>
            <li><span style={dirLabelStyle}>West</span> Evergreen Rd</li>
            <li><span style={dirLabelStyle}>Interior boundary</span> Outer Dr / Fenkell Ave</li>
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .rp-patrol-map { height: 300px !important; }
        }
      `}</style>
    </section>
  );
}
window.PatrolMap = PatrolMap;
