function Footer() {
  const C = RP.footer;
  return (
    <footer id="contact" className="rp-footer">
      <div className="rp-footer-top">
        <div className="rp-footer-brand">
          <img src="assets/logo-white.png" alt="Radio Patrol" />
          <p>{C.brand}</p>
        </div>
        <div className="rp-footer-cols">
          <div>
            <h5>{C.contactHeading}</h5>
            <ul>
              <li><b>{C.emergencyLabel}</b> · {C.emergencyValue}</li>
              <li><a href={`mailto:${C.email}`}>{C.email}</a></li>
            </ul>
          </div>
          <div>
            <h5>{C.neighborsHeading}</h5>
            <ul>
              {C.neighbors.map((n, i) => (
                <li key={i}><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="rp-footer-bottom">
        <span>{C.copyright}</span>
        <span className="rp-callsign">{C.callsign}</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
