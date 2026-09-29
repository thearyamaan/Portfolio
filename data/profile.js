// ---------------------------------------------------------------------------
// All site copy lives here. Components hold layout only.
// ---------------------------------------------------------------------------

export const identity = {
  name: "Aryamaan Upadhyay",
  role: "Computer Science undergraduate, MIT Bengaluru",
  summary:
    "I work on how institutions hold up against new technology — evaluating frontier models against verifiable ground truth, modelling why governance stalls, and building the tools that make the analysis usable. I also write: poetry, scripts and editorial.",
};

// One PDF per audience. The files live in public/resume/ under these exact
// names; the picker opens whichever the visitor chooses.
export const resumes = [
  {
    id: "ai",
    label: "AI & Engineering",
    tagline: "LLM evaluation, machine learning, full-stack",
    file: "/resume/Aryamaan-Upadhyay-AI-Engineering.pdf",
    focus: [
      "Model evaluation at Handshake AI",
      "Deep learning at Personifwy, via IIT Kharagpur",
      "CivicLens, FinCalc, independent eval research",
    ],
  },
  {
    id: "finance",
    label: "Finance & Analytics",
    tagline: "Financial analytics, fintech, quantitative tooling",
    file: "/resume/Aryamaan-Upadhyay-Finance-Analytics.pdf",
    focus: [
      "SEC filing extraction and verification",
      "Finlatics cases on pricing and profitability",
      "FinCalc compounding models",
    ],
  },
  {
    id: "writing",
    label: "Writing & Editorial",
    tagline: "Poetry, scriptwriting, editing",
    file: "/resume/Aryamaan-Upadhyay-Writing-Editorial.pdf",
    focus: [
      "Founding editor, Literature Society newsletter",
      "Lead script writer, NEC 2026",
      "First place, alèy 2026 poetry competition",
    ],
  },
];

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
  github: "https://github.com/thearyamaan",
};

export const research = [
  {
    id: "deepfakes",
    title:
      "Deepfakes in India: Institutional Vulnerability, Governance Barriers, and an Interpretive Structural Model of Critical Success Factors",
    venue: "Department of Management Studies, IIT Delhi",
    role: "Research Intern, under Prof. Ravi Shankar",
    period: "Jul 2026",
    status: "Full paper in preparation for submission",
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
    id: "llm-eval",
    title:
      "A failure-mode taxonomy for document-grounded question answering in frontier models",
    venue: "Independent research",
    role: "Author",
    period: "2026 — ongoing",
    status: "In progress, built on an original test set",
    abstract:
      "Evaluation work surfaces the same failures repeatedly: fabricated figures, incomplete traversal of long lists, wrong-column reads in dense tables. This organises those patterns into a taxonomy and tests them against an original set, so the failures can be measured rather than reported anecdotally.",
    methods: ["Failure-mode taxonomy", "Test-set construction", "Document-grounded QA"],
    contributions: [
      "Building the test data independently of platform work, so the set can be published alongside the findings.",
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
  { link: "LFS → IGP", votes: "11 / 11", note: "Unanimous" },
  { link: "IGP → IACM", votes: "11 / 11", note: "Unanimous" },
  { link: "IGP → WCT", votes: "10 / 11", note: "" },
  { link: "IACM ↔ PAML", votes: "8 / 11", note: "Strongest mutual" },
];

// Every pairwise judgement from Table 3 of the paper, in survey order.
// dir: "V" one-way, "X" mutual, "O" below the two-thirds threshold.
export const voteLedger = [
  { pair: "LFS → IGP", votes: "11/11", dir: "V" },
  { pair: "LFS → IACM", votes: "9/11", dir: "V" },
  { pair: "LFS → CBE", votes: "10/11", dir: "V" },
  { pair: "LFS → PAML", votes: "10/11", dir: "V" },
  { pair: "LFS → WCT", votes: "8/11", dir: "V" },
  { pair: "IGP → IACM", votes: "11/11", dir: "V" },
  { pair: "IGP → CBE", votes: "9/11", dir: "V" },
  { pair: "IGP → PAML", votes: "9/11", dir: "V" },
  { pair: "IGP → WCT", votes: "10/11", dir: "V" },
  { pair: "IACM → CBE", votes: "9/11", dir: "V" },
  { pair: "IACM ↔ PAML", votes: "8/11", dir: "X" },
  { pair: "IACM · WCT", votes: "7/11", dir: "O" },
  { pair: "CBE → PAML", votes: "10/11", dir: "V" },
  { pair: "CBE · WCT", votes: "7/11", dir: "O" },
  { pair: "PAML · WCT", votes: "6/11", dir: "O" },
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
      "Design adversarial multi-hop prompts across fifteen domains to surface hallucination, retrieval and reasoning failures in frontier models with web search.",
      "Extract and verify figures from primary financial documents — SEC 10-K, 10-KSB and DEF 14A filings, property schedules, executive compensation tables.",
      "Identify recurring failure modes, from fabricated figures to wrong-column reads in dense tables, and document each with a source-grounded trajectory.",
    ],
  },
  {
    id: "iitd",
    org: "IIT Delhi",
    role: "Research Intern, Dept. of Management Studies",
    period: "Jul 2026",
    mode: "New Delhi",
    stack: ["ISM", "MICMAC", "Survey design", "Policy analysis"],
    points: [
      "Modelled six governance factors into a three-level hierarchy using ISM and MICMAC.",
      "Ran the expert elicitation end to end: instrument design, screening, matrix construction, closure.",
      "Turned a preliminary review into a full manuscript at the supervisor's request.",
    ],
  },
  {
    id: "personifwy",
    org: "Personifwy",
    role: "AI Intern, via 1Stop with Kshitij, IIT Kharagpur",
    period: "Dec 2025 — Apr 2026",
    mode: "Remote",
    stack: ["TensorFlow", "CNNs", "Transfer learning", "NLP"],
    points: [
      "Built four deep learning projects in TensorFlow spanning NLP and computer vision.",
      "Pet face classification with a CNN using transfer learning and data augmentation.",
      "Landmark detection framed as regression-based keypoint localisation.",
    ],
  },
  {
    id: "finlatics",
    org: "Finlatics",
    role: "Business Analytics Programme",
    period: "Dec 2025 — Jul 2026",
    mode: "Remote",
    stack: ["MECE", "Power BI", "Regression", "Excel"],
    points: [
      "Solved cases on profitability, pricing strategy and tourism using the MECE framework.",
      "Built forecasts, what-if scenarios, regression models and interactive dashboards.",
    ],
  },
];

export const projects = [
  {
    name: "CivicLens",
    context: "Vibe2Ship Hackathon — Coding Ninjas & Google for Developers",
    description:
      "Civic reporting that skips the complaint form. A citizen photographs the problem; the model classifies damage by type and severity, and Cloud Functions route the report to the right department.",
    architecture: [
      "Gemini Vision classifies damage type and severity from the photo",
      "Real-time map with severity-coded pins and role-based citizen and authority views",
      "Learned React and Firebase during the hackathon itself",
    ],
    stack: ["React", "Firebase", "Firestore", "Gemini Vision", "Cloud Functions", "Maps API"],
  },
  {
    name: "FinCalc",
    context: "Indian investment returns calculator",
    description:
      "A calculator for the questions people actually ask: what a monthly plan compounds to, and whether a deposit beats a fund at a given rate. The engine runs live further down this page.",
    architecture: [
      "SIP future value, compound growth and quarterly FD compounding",
      "Synced slider and exact-entry inputs, lakh and crore formatting",
      "Growth charts and year-by-year tables",
    ],
    stack: ["Python", "Streamlit", "Pandas", "NumPy", "Matplotlib"],
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
];

export const analytics = {
  programme: "Business Analytics & Strategy, Finlatics",
  period: "Dec 2025 — Jul 2026",
  applications: [
    { area: "Profitability", method: "Regression and driver decomposition" },
    { area: "Tourism", method: "Predictive analytics on demand seasonality" },
    { area: "Pricing", method: "Scenario and what-if analysis" },
    { area: "Reporting", method: "Power BI dashboards, MECE-structured" },
  ],
};

export const skills = [
  { group: "Languages", items: ["Python", "Java", "C", "C++ (learning)", "SQL (learning)"] },
  {
    group: "ML & AI",
    items: ["TensorFlow", "CNNs", "Transfer learning", "NLP", "Gemini API", "LLM red-teaming"],
  },
  {
    group: "Web & Cloud",
    items: ["React", "Next.js", "Streamlit", "Firebase", "Cloud Functions", "Vercel"],
  },
  {
    group: "Data & Analytics",
    items: ["Pandas", "NumPy", "Matplotlib", "Power BI", "Excel", "ISM / MICMAC"],
  },
  {
    group: "Finance",
    items: ["Time value of money", "SEC filings", "MECE case analysis", "Compounding maths"],
  },
];

export const credentials = [
  { name: "Claude Code 101", issuer: "Anthropic" },
  { name: "Copado DevOps AI", issuer: "Copado" },
  { name: "Gemini Certified Student", issuer: "Google" },
  { name: "Business Analytics Programme", issuer: "Finlatics" },
  { name: "India AI Impact Buildathon", issuer: "HCL GUVI" },
  { name: "Smart India Hackathon 2026", issuer: "AI dementia-care platform, in progress" },
  { name: "NISM Series V-A", issuer: "Mutual Fund Distributors, in progress" },
  { name: "Bloomberg Market Concepts", issuer: "In progress" },
];

export const leadership = [
  {
    role: "Joint Secretary",
    org: "IEEE Computational Intelligence Society",
    note: "Organising a two-day AI security event — a prompt injection lecture and a hands-on jailbreak CTF. Lead sponsorship and grant outreach.",
  },
  {
    role: "President",
    org: "The Literature Society",
    note: "Lead a seven-member core committee and am founding the society's bimonthly newsletter as a legacy publication.",
  },
  {
    role: "Associate",
    org: "Office of Alumni Relations",
    note: "Run alumni outreach and weekly metric reports — one week reached 225 alumni, 145 new connections, 53 emails secured.",
  },
  {
    role: "Member",
    org: "Student Research Committee, Research Office",
    note: "Supports research programming across the institute.",
  },
  {
    role: "Working Committee",
    org: "MAHE Innovation Centre (E-Cell), 2025–26",
    note: "Scripted BECon Bengaluru and MOONSHOT; built the Entrepreneurship Summit brochure.",
  },
  {
    role: "Student Ambassador",
    org: "SAGE, Dept. of Internationalisation",
    note: "Represents the institute to prospective and visiting international students.",
  },
  {
    role: "Organising Committee",
    org: "Falak · Techsolstice · Rubaru",
    note: "Cultural, technical and MAHE-wide festivals.",
  },
];

export const writing = {
  lede:
    "An engineer's precision applied to language, from metrical poetry to fact-checked research prompts.",
  award: {
    title: "A Latitude of Labour",
    prize: "First place, Rhyme and Rhythm",
    venue: "alèy 2026 Literature Festival, MILHS, MAHE Bengaluru",
    theme: "Waves of Hope",
  },
  roles: [
    {
      role: "Founding Editor-in-Chief",
      org: "The Literature Society Newsletter",
      note: "Bimonthly online publication: essays, stories, poems, reviews and guest editorials from professors and alumni. Built an editorial board through open interviews so it outlasts my term.",
    },
    {
      role: "Lead Script Writer",
      org: "National Entrepreneurship Challenge 2026, E-Cell IIT Bombay",
      note: "One of two lead writers for Team MIT BLR Visionaries — LinkedIn blog series, presentation scripts and voiceovers. Co-wrote the team's vision and tagline.",
    },
    {
      role: "Newsletter Editor",
      org: "Mimansa, Debate, Journalism & Public Speaking",
      note: "Four medals across four editions of the Behes Debating Competition.",
    },
    {
      role: "Founding Member and Editor",
      org: "Cerebria, Mount Carmel School",
      note: "Political Affairs and Social Issues desk; wrote, edited and proofread final editions.",
    },
  ],
  hosted: ["BECon Bengaluru chapter, IIT Delhi E-Cell", "Office of Alumni Relations inaugural event"],
};

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  institute: "Manipal Institute of Technology, Bengaluru",
  marks: [
    { label: "CGPA", value: "7.53" },
    { label: "Class XII", value: "80%" },
    { label: "Class X", value: "92%" },
  ],
};

export const sections = [
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "finance", label: "Analysis" },
  { id: "toolkit", label: "Toolkit" },
  { id: "leadership", label: "Leadership" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];
