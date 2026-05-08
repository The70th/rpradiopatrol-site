function Header() {
  return (
    <header className="rp-header">
      <div className="rp-strip">
        <span>Emergency · call <b>911</b></span>
        <span className="sep">·</span>
        <span>RPRadioPatrol@gmail.com</span>
      </div>
      <div className="rp-nav">
        <a href="#" className="rp-mark">
          <img src="assets/logo-forest-transparent.png" alt="Radio Patrol — Rosedale Park" />
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#join">How to join</a>
          <a href="#faq">FAQ</a>
          <a href="#patrol-map">Coverage Map</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="#join" className="rp-btn rp-btn-primary">Join our team →</a>
      </div>
    </header>
  );
}
window.Header = Header;
