function Header() {
  const C = RP.header;
  return (
    <header className="rp-header">
      <div className="rp-strip">
        <span>{C.emergencyText} <b>{C.emergencyNumber}</b></span>
        <span className="sep">·</span>
        <span>{C.email}</span>
      </div>
      <div className="rp-nav">
        <a href="#" className="rp-mark">
          <img src="assets/logo-forest-transparent.png" alt={C.logoAlt} />
        </a>
        <nav>
          <a href="#about">{C.nav.about}</a>
          <a href="#join">{C.nav.join}</a>
          <a href="#faq">{C.nav.faq}</a>
          <a href="#patrol-map">{C.nav.map}</a>
          <a href="#contact">{C.nav.contact}</a>
        </nav>
        <a href="#join" className="rp-btn rp-btn-primary">{C.joinButton}</a>
      </div>
    </header>
  );
}
window.Header = Header;
