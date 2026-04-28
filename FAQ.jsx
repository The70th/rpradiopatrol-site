const { useState: useFaqState } = React;

function FAQ() {
  const [open, setOpen] = useFaqState(0);
  const items = [
    {
      q: "What's the time commitment?",
      a: "Two hours per month is all we ask — and it's one of the easiest, lowest-commitment ways to get involved in the neighborhood. Patrollers set their own schedule and choose when they go out. Some do more, some do exactly the two hours. Both are great.",
    },
    {
      q: 'Who can join?',
      a: "Any Rosedale Park resident 18 or older with a valid driver's license. We also welcome volunteers 16 or 17 with a valid driver's license, provided a parent rides with them as their patrol partner.",
    },
    {
      q: 'Does this count for high school community service hours?',
      a: "Yes! Patrol time counts toward community service hours for high schoolers. Many of our younger volunteers use it for NHS, service scholarships, and school-based volunteer requirements.",
    },
    {
      q: 'Do I need any special training?',
      a: "No. Once approved, you'll ride along on two practice patrols with an experienced team — you'll learn the radio protocol and what to watch for. Most people feel settled in after those two rides.",
    },
    {
      q: 'What if I see something between patrols?',
      a: "Emergency — call 911. Always, every time. For non-emergencies, the Detroit non-emergency line is the right place to report. We don't replace those channels; we add extra eyes and ears on top of them.",
    },
    {
      q: 'Do patrollers carry weapons?',
      a: "No. This is a civilian observation patrol. We do not confront, detain, or pursue. Anything urgent is relayed to base or directly to 911.",
    },
  ];
  return (
    <section id="faq" className="rp-faq">
      <div className="rp-section-head">
        <div className="rp-eyebrow">FAQ</div>
        <h2>Common questions</h2>
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
