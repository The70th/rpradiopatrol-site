const { useState: useFaqState } = React;

function FAQ() {
  const [open, setOpen] = useFaqState(0);
  const C = RP.faq;
  const items = C.items;
  return (
    <section id="faq" className="rp-faq">
      <div className="rp-section-head">
        <div className="rp-eyebrow">{C.eyebrow}</div>
        <h2>{C.heading}</h2>
      </div>
      <div className="rp-faq-list">
        {items.map((it, i) => (
          <div key={i} className={`rp-faq-item ${open === i ? 'is-open' : ''}`}>
            <button className="rp-faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{it.q}</span>
              <span className="rp-faq-toggle">{open === i ? '\u2013' : '+'}</span>
            </button>
            {open === i && <div className="rp-faq-a">{it.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
window.FAQ = FAQ;
