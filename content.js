/* ============================================================================
   ROSEDALE PARK RADIO PATROL #23  --  WEBSITE TEXT
   ============================================================================

   This is the ONE file you edit to change any words on the website.

   HOW TO EDIT (no coding needed):
     1. Find the section you want (they are in the same order as the website,
        top to bottom: header, hero, infoBar, howToJoin, perks, faq, map, footer).
     2. Change the words BETWEEN the quotation marks.  Leave everything else
        exactly as it is -- the quotation marks, the colons, and the commas.
     3. Save the file and re-deploy (push to GitHub / Vercel as usual).

   THREE RULES THAT KEEP THINGS FROM BREAKING:
     - Keep both quotation marks around your text:  title: "Your words here",
     - Keep the comma at the end of each line.
     - If your text needs an apostrophe, just type it normally (it's, you'll).
       Do NOT type a plain double-quote (") inside the words -- use single
       quotes if you need a quote mark inside a sentence.

   That's it. You cannot break the layout from this file -- only the wording.
   ========================================================================== */

window.RP = {

  /* ---- HEADER (top bar + navigation) ----------------------------------- */
  header: {
    emergencyText: "Emergency · call",
    emergencyNumber: "911",
    email: "RPRadioPatrol@gmail.com",
    logoAlt: "Radio Patrol — Rosedale Park",
    nav: {
      about: "About",
      join: "How to join",
      faq: "FAQ",
      map: "Coverage Map",
      contact: "Contact",
    },
    joinButton: "Join our team →",
  },

  /* ---- HERO (big banner at the very top) ------------------------------- */
  hero: {
    eyebrow: "Volunteer civilian patrol · Rosedale Park, Detroit",
    headlineTop: "Neighbors looking",
    headlineBottom: "out for neighbors.",
    lede:
      "The Rosedale Park Radio Patrol is a volunteer organization made up of " +
      "interested neighbors who look out for the safety and well-being of all " +
      "people in Rosedale Park. We are a community owned, community operated, " +
      "community watch.",
    joinButton: "Join our team →",
    aboutButton: "How the patrol works",
    homesCount: "1,600",
    homesLabel: "homes in the neighborhood",
    ownedLabel: "Community owned & operated",
    sanctionedText: "Sanctioned by",
    sanctionedBy: "DPD",
  },

  /* ---- INFO BAR ("As easy as 1-2-3") ----------------------------------- */
  infoBar: {
    eyebrow: "How the patrol works",
    heading: "As easy as 1–2–3.",
    sub:
      "The whole job is three things, done together. A pair of patrollers drives " +
      "the neighborhood, a base operator stays in constant contact, and what we " +
      "see gets reported.",
    steps: [
      {
        n: "01",
        t: "Patrol the neighborhood",
        d: "Volunteers patrol in their own vehicles, on their own schedule — day or night, any time that works for them. There are no assigned shifts.",
      },
      {
        n: "02",
        t: "Stay on the radio",
        d: "Patrollers stay in radio contact with a base operator throughout the patrol. You are never out there alone.",
      },
      {
        n: "03",
        t: "Report what you see",
        d: "Anything out of place is called in to base — or directly to 911 in a real emergency. We observe and report. We never confront.",
      },
    ],
  },

  /* ---- HOW TO JOIN (three step cards) ---------------------------------- */
  howToJoin: {
    eyebrow: "How to join",
    heading: "Three steps to get on the radio.",
    sub:
      "Radio Patrol is a volunteer organization sanctioned by the Detroit Police " +
      "Department. Joining is straightforward, but the process is real — and it " +
      "keeps the neighborhood safe.",
    step1: {
      label: "Start here",
      title: "Submit your application",
      body:
        "Complete the online application — name and contact information. " +
        "It is a formal application to a DPD-sanctioned volunteer organization, " +
        "and we review every one.",
      button: "Start application →",
    },
    step2: {
      label: "Review",
      title: "Detroit Police review",
      body:
        "Your application is reviewed by the Detroit Police to ensure no " +
        "violent offenders are able to join. We\u2019ll reach out when " +
        "you\u2019ve been approved.",
      chip: "Typically less than 1 week",
    },
    step3: {
      label: "Ride along",
      title: "Two practice patrols",
      body:
        "Once approved, you\u2019ll go out on two practice patrols with an " +
        "experienced team. You\u2019ll learn radio protocol, the route, and " +
        "what to watch for. After that, you\u2019re ready to patrol on your " +
        "own schedule.",
      chip: "Two ride-alongs",
    },
    footnote: "Two hours a month is all we ask — you choose when.",
  },

  /* ---- PERKS & TRAINING ------------------------------------------------ */
  perks: {
    eyebrow: "Work hard, play hard",
    heading: "More than just patrols.",
    sub:
      "Patrollers work hard — and we make sure the work is rewarded. Our patrol " +
      "hours are paid by the City of Detroit, and once a year we put every dollar " +
      "we earn back into the group with a proper celebration.",
    party: {
      eyebrow: "Annual summer party",
      title: "One night. On the Patrol's dime.",
      body:
        "Every summer we throw a party for the whole Patrol — a catered dinner " +
        "at a great restaurant, or a night out at a fun center. It's on us, it " +
        "adds up to a real thank-you, and it's a chance to celebrate a year of " +
        "looking out for our community.",
      meta: "Once a year · All volunteers welcome",
    },
    training: {
      label: "City-Wide Radio Patrol trainings",
      pill: "~4 / year · Free",
      title: "Ongoing, free training.",
      body:
        "The City-Wide Radio Patrol holds short, genuinely useful training " +
        "sessions roughly four times a year. Open to every volunteer, and the " +
        "skills carry long after your shift ends.",
      recentLabel: "Recent sessions",
      mostRecentBadge: "Most recent",
      sessions: [
        {
          title: "Narcan & opioid response",
          sub: "How to recognize an overdose and administer Narcan.",
        },
        {
          title: "Human trafficking awareness",
          sub: "What to look for, how to report safely.",
        },
        {
          title: "Graffiti & vandalism response",
          sub: "Documenting incidents and working with the city.",
        },
      ],
    },
  },

  /* ---- FAQ ------------------------------------------------------------- */
  faq: {
    eyebrow: "FAQ",
    heading: "Common questions",
    items: [
      {
        q: "What's the time commitment?",
        a: "Two hours per month is all we ask — and it's one of the easiest, lowest-commitment ways to get involved in the neighborhood. Patrollers set their own schedule and choose when they go out. Some do more, some do exactly the two hours. Both are great.",
      },
      {
        q: "Who can join?",
        a: "Any Rosedale Park resident 18 or older with a valid driver's license. We also welcome volunteers 16 or 17 with a valid driver's license, provided a parent rides with them as their patrol partner.",
      },
      {
        q: "Does this count for high school community service hours?",
        a: "Yes! Patrol time counts toward community service hours for high schoolers. Many of our younger volunteers use it for NHS, service scholarships, and school-based volunteer requirements.",
      },
      {
        q: "Do I need any special training?",
        a: "No. Once approved, you'll ride along on two practice patrols with an experienced team — you'll learn the radio protocol and what to watch for. Most people feel settled in after those two rides.",
      },
      {
        q: "What if I see something between patrols?",
        a: "Emergency — call 911. Always, every time. For non-emergencies, the Detroit non-emergency line is the right place to report. We don't replace those channels; we add extra eyes and ears on top of them.",
      },
      {
        q: "Do patrollers carry weapons?",
        a: "No. This is a civilian observation patrol. We do not confront, detain, or pursue. Anything urgent is relayed to base or directly to 911.",
      },
    ],
  },

  /* ---- COVERAGE MAP ---------------------------------------------------- */
  patrolMap: {
    eyebrow: "Patrol Coverage",
    heading: "Our Patrol Coverage Area",
    sub:
      "Rosedale Park Radio Patrol #23 serves the Rosedale Park neighborhood, " +
      "bounded by the streets below.",
    boundaryLabel: "Boundary streets",
    boundaries: [
      { dir: "North", street: "Grand River Ave" },
      { dir: "East", street: "Southfield Freeway (M-39)" },
      { dir: "South", street: "Lyndon Ave (with extension south to Acacia between Faust and Southfield)" },
      { dir: "West", street: "Evergreen Rd" },
      { dir: "Interior boundary", street: "Outer Dr / Fenkell Ave" },
    ],
  },

  /* ---- FOOTER ---------------------------------------------------------- */
  footer: {
    brand:
      "A volunteer civilian patrol serving the Rosedale Park neighborhood of " +
      "Detroit, sanctioned by the Detroit Police Department under the Citizens " +
      "Radio Patrol Program.",
    contactHeading: "Contact",
    emergencyLabel: "Emergency",
    emergencyValue: "911",
    email: "RPRadioPatrol@gmail.com",
    neighborsHeading: "Neighbors",
    neighbors: [
      { label: "Rosedale Park Improvement Assn.", href: "#" },
      { label: "North Rosedale Park Civic Assn.", href: "#" },
      { label: "Grandmont-Rosedale CDC", href: "#" },
      { label: "DPD 8th Precinct", href: "#" },
    ],
    copyright: "© 2026 Rosedale Park Radio Patrol",
    callsign: "RP-BASE · 10-4",
  },

};
