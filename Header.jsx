/* Shared site header — rendered on BOTH index.html and apply.html.
   This file is the single source of truth for header markup; do not
   hand-copy header HTML into pages. */
function Header() {
  const C = RP.header;
  const [menuOpen, setMenuOpen] = React.useState(false);

  // On apply.html the section anchors live on the home page.
  const onApply = /apply\.html$/i.test(window.location.pathname);
  const p = onApply ? 'index.html' : '';

  const links = [
    { href: `${p}#about`, label: C.nav.about },
    { href: `${p}#join`, label: C.nav.join },
    { href: `${p}#faq`, label: C.nav.faq },
    { href: `${p}#patrol-map`, label: C.nav.map },
    { href: `${p}#contact`, label: C.nav.contact },
  ];

  return (
    <header className="rp-header">
      <div className="rp-nav">
        <a href={p || '#'} className="rp-mark">
          <img src="assets/logo-forest-transparent.png" alt={C.logoAlt} />
        </a>
        <nav>
          {links.map((l, i) => (
            <a key={i} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a href="apply.html" className="rp-btn rp-btn-apply">{C.applyButton}</a>
        <button
          type="button"
          className="rp-nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="rp-mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={'rp-nav-toggle-icon' + (menuOpen ? ' is-open' : '')}>
            <span></span><span></span><span></span>
          </span>
        </button>
      </div>
      {menuOpen && (
        <div id="rp-mobile-menu" className="rp-mobile-menu">
          {links.map((l, i) => (
            <a key={i} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
window.Header = Header;
