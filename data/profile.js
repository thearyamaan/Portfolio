// ---------------------------------------------------------------------------
// All site copy lives here. Components hold layout only.
// ---------------------------------------------------------------------------

export const identity = {
  name: "Aryamaan Upadhyay",
  role: "Computer Science undergraduate, MIT Bengaluru",
  summary:
    "I work on how institutions hold up against new technology — evaluating frontier models against verifiable ground truth, modelling why governance stalls, and building the tools that make the analysis usable.",
  resume: "/Aryamaan-Upadhyay-Resume.pdf",
};

// Figures count up on scroll; prefix/suffix keep the animation on the number only.
export const metrics = [
  { prefix: "AIR ", value: 217, suffix: "", label: "MVPP Government Scholarship" },
  { prefix: "", value: 100, suffix: "%", label: "BRICS Mathematics Challenge" },
  { prefix: "", value: 15, suffix: "+", label: "Domains evaluated for frontier models" },
  { prefix: "", value: 11, suffix: "", label: "Experts on the ISM panel" },
];

export const contact = {
  email: "the.aryamaan.upadhyay@gmail.com",
  phone: "+91 70114 34159",
  location: "Bengaluru, India",
  linkedin: "https://www.linkedin.com/in/aryamaan-upadhyay-ishie/",
  github: "https://github.com/thearyamaan", // <-- add your handle
};

export const research = [
  {
    id: "deepfakes",
    title:
      "Deepfakes in India: Institutional Vulnerability, Governance Barriers, and an Interpretive Structural Model of Critical Success Factors",
    venue: "Department of Management Studies, IIT Delhi",
    role: "Research Intern",
    period: "May – Jul 2026",
    status: "Recommended for conference presentation",
    abstract:
      "Indian policy commentary catalogues the gaps in deepfake governance without saying which to close first. Eleven screened experts judged all fifteen pairwise relationships among six critical success factors; the results were resolved into a hierarchy and classified by driving power and dependence.",
    finding:
      "Legal Framework Strength is the sole root driver — every expert endorsed its influence on governance protocols, which mediate everything downstream. Coordination, enforcement capacity and platform accountability sit at identical coordinates and move as one triad. Workforce training is driven from above but operationally detached, so it needs its own mandate rather than being assumed as a by-product.",
    methods: [
      "Interpretive Structural Modelling",
      "MICMAC analysis",
      "Expert elicitation",
      "Sensitivity analysis",
    ],
    contributions: [
      "Derived seven candidate success factors from the regulatory, institutional and technological literature; carried the six actionable ones into pairwise judgement.",
      "Screened sixteen responses to a panel of eleven on pre-stated inclusion and response-quality criteria.",
      "Built the consensus matrix and transitive closure, which added two implied links.",
      "Established robustness: the hierarchy holds from 64 to 73 per cent consensus.",
      "Authored the manuscript, including a full audit trail of votes, matrices and level partitions.",
    ],
  },
  {
    id: "cvit",
    title: "CVIT Summer School on AI",
    venue: "IIIT Hyderabad",
    role: "Selected Participant",
    period: "2026",
    status: "Completed",
    abstract:
      "CVIT's intensive programme on computer vision and machine learning, drawing participants from across the country.",
    methods: ["Computer vision", "Deep learning", "Research methodology"],
    contributions: [
      "Selected in first year, against a cohort drawn largely from senior undergraduates and postgraduates.",
    ],
  },
];

// MICMAC coordinates as reported in the paper (Table 6).
// IACM, CBE and PAML are exactly co-located at dependence 5 / driving 3.
export const micmac = {
  axisMax: 7,
  caption: "11 experts · 15 pairwise judgements · two-thirds consensus",
  note: "Hierarchy invariant from 64% to 73% consensus. The Linkage quadrant is empty.",
  factors: [
    { code: "LFS", name: "Legal Framework Strength", driving: 6, dependence: 1 },
    { code: "IGP", name: "Institutional Governance Protocols", driving: 5, dependence: 2 },
    { code: "IACM", name: "Inter-Agency Coordination", driving: 3, dependence: 5 },
    { code: "CBE", name: "Capacity Building for Enforcement", driving: 3, dependence: 5 },
    { code: "PAML", name: "Platform Accountability & Labelling", driving: 3, dependence: 5 },
    { code: "WCT", name: "Workforce Capability and Training", driving: 1, dependence: 3 },
  ],
};

export const ismLevels = [
  { level: "III", role: "Outcomes", items: ["IACM", "CBE", "PAML", "WCT"] },
  { level: "II", role: "Mediator", items: ["IGP"] },
  { level: "I", role: "Driver", items: ["LFS"] },
];

export const consensusLinks = [
  { link: "LFS \u2192 IGP", votes: "11 / 11", note: "Unanimous" },
  { link: "IGP \u2192 IACM", votes: "11 / 11", note: "Unanimous" },
  { link: "IGP \u2192 WCT", votes: "10 / 11", note: "" },
  { link: "IACM \u2194 PAML", votes: "8 / 11", note: "Strongest mutual" },
];

// Every pairwise judgement from Table 3 of the paper, in survey order.
// dir: "V" one-way, "X" mutual, "O" below the two-thirds threshold.
export const voteLedger = [
  { pair: "LFS \u2192 IGP", votes: "11/11", dir: "V" },
  { pair: "LFS \u2192 IACM", votes: "9/11", dir: "V" },
  { pair: "LFS \u2192 CBE", votes: "10/11", dir: "V" },
  { pair: "LFS \u2192 PAML", votes: "10/11", dir: "V" },
  { pair: "LFS \u2192 WCT", votes: "8/11", dir: "V" },
  { pair: "IGP \u2192 IACM", votes: "11/11", dir: "V" },
  { pair: "IGP \u2192 CBE", votes: "9/11", dir: "V" },
  { pair: "IGP \u2192 PAML", votes: "9/11", dir: "V" },
  { pair: "IGP \u2192 WCT", votes: "10/11", dir: "V" },
  { pair: "IACM \u2192 CBE", votes: "9/11", dir: "V" },
  { pair: "IACM \u2194 PAML", votes: "8/11", dir: "X" },
  { pair: "IACM \u00b7 WCT", votes: "7/11", dir: "O" },
  { pair: "CBE \u2192 PAML", votes: "10/11", dir: "V" },
  { pair: "CBE \u00b7 WCT", votes: "7/11", dir: "O" },
  { pair: "PAML \u00b7 WCT", votes: "6/11", dir: "O" },
];

export const experience = [
  {
    id: "handshake",
    org: "Handshake AI",
    role: "AI Model Evaluation Fellow",
    period: "Jul 2026 — Present",
    mode: "Remote",
    stack: ["Prompt design", "Primary-source verification", "Failure analysis"],
    points: [
      "Author multi-hop search prompts across fifteen domains, built to surface reproducible failures in frontier models.",
      "Verify every answer against primary sources — filings, regulatory records, archival material — so each task carries unambiguous ground truth.",
      "Document reasoning chains and failure diagnostics that return to research labs as training signal.",
    ],
  },
  {
    id: "iitd",
    org: "IIT Delhi",
    role: "Research Intern, Dept. of Management Studies",
    period: "May — Jul 2026",
    mode: "New Delhi",
    stack: ["ISM", "MICMAC", "Survey design", "Policy analysis"],
    points: [
      "Modelled six governance factors into a three-level hierarchy using ISM and MICMAC.",
      "Ran the expert elicitation end to end: instrument design, screening, matrix construction, closure.",
      "Turned a preliminary review into a full manuscript at the supervisor's request.",
    ],
  },
];

export const projects = [
  {
    name: "CivicLens",
    context: "Vibe2Ship Hackathon — Coding Ninjas & Google for Developers",
    description:
      "Civic reporting that skips the complaint form. A citizen photographs the problem; the model classifies the damage, infers the responsible department, and routes the report there.",
    architecture: [
      "Gemini Vision classifies damage type and severity from the photo",
      "Cloud Functions handle routing and department mapping",
      "Firebase for auth, storage and the live report feed",
    ],
    stack: ["React", "Firebase", "Gemini Vision", "Cloud Functions", "Google AI Studio"],
  },
  {
    name: "Adaptive Heat-Safe Work System",
    context: "Hardware and IoT",
    description:
      "Outdoor workers get heat-stress guidance after the fact, if at all. This reads biometric and environmental streams from wearable sensors and turns them into live exposure thresholds for the site.",
    architecture: [
      "Wearable array captures body and ambient conditions continuously",
      "Python layer computes rolling heat-stress indices per worker",
      "Breaches escalate as site-level alerts, not individual notifications",
    ],
    stack: ["Wearable sensors", "Python", "Real-time analytics"],
  },
  {
    name: "FinCalc",
    context: "Investment and wealth calculator",
    description:
      "A calculator for the questions people actually ask: what a monthly plan compounds to, and whether a deposit beats a fund at a given rate. The engine runs live further down this page.",
    architecture: [
      "Future value from the standard annuity-due formulation",
      "Quarterly-compounded deposit path against annual fund growth",
      "Streamlit for the desktop tool, React for the web port",
    ],
    stack: ["Python", "Streamlit", "NumPy"],
  },
];

export const analytics = {
  programme: "Business Analytics & Strategy, Finlatics",
  period: "Dec 2025 — Jul 2026",
  applications: [
    { area: "Profitability", method: "Regression and driver decomposition" },
    { area: "Tourism", method: "Predictive analytics on demand seasonality" },
    { area: "Pricing", method: "Scenario and what-if analysis" },
    { area: "Reporting", method: "Power BI dashboards" },
  ],
};

export const skills = [
  { group: "Languages", items: ["Python", "Java", "C", "C++ (learning)", "SQL (learning)"] },
  { group: "Frameworks", items: ["React", "Next.js", "Streamlit", "Firebase", "Gemini API"] },
  { group: "Analytics", items: ["Power BI", "Excel", "Regression", "MECE", "ISM / MICMAC"] },
  { group: "Research", items: ["Expert elicitation", "Survey design", "Source verification"] },
];

export const credentials = [
  { name: "Claude Code 101", issuer: "Anthropic" },
  { name: "Copado DevOps AI", issuer: "Copado" },
  { name: "Gemini Certified Student", issuer: "Google" },
  { name: "Industrial AI — Text Classification", issuer: "1Stop · IIT Kharagpur · Personifwy" },
  { name: "India AI Impact Buildathon", issuer: "HCL GUVI" },
  { name: "Business Analytics & Strategy", issuer: "Finlatics" },
];

export const leadership = [
  {
    role: "President",
    org: "The Literature Society",
    note: "Runs the society's programming, editorial standards and committee.",
  },
  {
    role: "Student Ambassador for Global Engagement",
    org: "Dept. of Internationalisation",
    note: "Represents the institute to prospective and visiting international students.",
  },
  {
    role: "Core Committee",
    org: "Student Research Committee, Research Office",
    note: "Supports research programming across the institute.",
  },
  {
    role: "Working Committee",
    org: "MAHE Innovation Centre (E-Cell)",
    note: "Scripts for BECon, MOONSHOT and the MIC podcast; Entrepreneurship Summit brochure.",
  },
  {
    role: "Working Committee",
    org: "Office of Alumni Relations",
    note: "Alumni outreach and speaker programming; hosted the office's inaugural event.",
  },
  {
    role: "Editor",
    org: "Mimansa — Debate, Journalism & Public Speaking",
    note: "Newsletter editor; four Behes debating medals.",
  },
  {
    role: "Organising Committee",
    org: "Falak · Techsolstice · Rubaru",
    note: "Cultural, technical and MAHE-wide festivals.",
  },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  institute: "Manipal Institute of Technology, Bengaluru",
  marks: [
    { label: "Class X", value: "92%" },
    { label: "Class XII", value: "80%" },
  ],
};

export const sections = [
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "finance", label: "Analysis" },
  { id: "toolkit", label: "Toolkit" },
  { id: "leadership", label: "Leadership" },
  { id: "contact", label: "Contact" },
];
