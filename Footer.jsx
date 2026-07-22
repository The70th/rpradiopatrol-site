function Footer() {
  const C = RP.footer;
  return (
    <footer id="contact" className="rp-footer">
      <div className="rp-footer-top">
        <div className="rp-footer-brand">
          <img src="assets/logo-white.png" alt="Radio Patrol" />
          <p>{C.brand}</p>
        </div>
        {/* Contact column removed intentionally — a "Contact Us" form is planned
            for this spot in a future iteration. The footer keeps id="contact" as
            the anchor for the header's Contact nav link and the future form. */}
        <div className="rp-footer-cols">
          <div>
            <h5>{C.neighborsHeading}</h5>
            <ul>
              {C.neighbors.map((n, i) => (
                <li key={i}><a href={n.href} target="_blank" rel="noopener noreferrer">{n.label}</a></li>
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
