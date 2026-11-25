/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE. Edit this file to update the site.
 * ─────────────────────────────────────────────────────────────
 *
 *  • Any text wrapped in square brackets, e.g. "[Add your email]",
 *    is a PLACEHOLDER. It is highlighted on the page so you can spot it.
 *    Replace it with real content (and drop the brackets).
 *  • Links left as an empty string ("") are hidden on the live site.
 *    In `npm run dev` they show up as dashed "add link" hints.
 */

export type Link = { label: string; href: string }

export type Project = {
  title: string
  tagline?: string
  description: string
  highlights?: string[]
  tech: string[]
  demo: string // live demo / paper / slides URL — "" to hide
  demoLabel?: string // button text for `demo`, default "Live demo"
  source: string // GitHub repo URL — "" to hide
  status?: string
  image?: { src: string; alt: string } // optional picture, e.g. "./images/x.jpg" in /public/images
}

export type TimelineItem = {
  title: string
  org: string
  period: string
  location?: string
  points: string[]
}

export const site = {
  // Used in <title>, meta tags and the footer
  name: 'Jayakrishna Ajithkumar Jayasree',
  shortName: 'Jayakrishna',
  role: 'Data Engineer · M.Sc. Digital Engineering @ OvGU',
  location: 'Magdeburg, Germany',
  availability: 'Open to Werkstudent roles · up to 20 h/week',
}

export const hero = {
  greeting: "Hi, I'm",
  intro:
    'Data engineer with 2.5 years of experience at Cognizant building and migrating ETL pipelines with ' +
    'Azure Data Factory, Databricks, PySpark and SQL. Now doing my M.Sc. in Digital Engineering at ' +
    'Otto-von-Guericke-University Magdeburg, where I work on graph neural network surrogates for industrial particle simulations.',
  cvUrl: '', // e.g. "./cv.pdf" (put the file in /public) — "" hides the button
}

export const about = {
  paragraphs: [
    'I studied Mechanical Engineering with an automotive focus at Amrita School of Engineering, then moved into data. ' +
      'At Cognizant Technology Solutions in Kochi I started as an intern on TB-scale ingestion pipelines and went on to ' +
      'spend 2.5 years as a Data Engineer, migrating 40+ Informatica pipelines to Azure Databricks and building CI/CD ' +
      'and validation workflows around them.',
    "Today I'm doing a Master's in Digital Engineering at OvGU Magdeburg, focusing on machine learning, AI, data " +
      'warehousing and data mining. In the Autonomous Multisensor Systems Group I build Graph Network Simulators in ' +
      'PyTorch that replace physics-based DEM solvers with a learned model. I also co-authored a clinical NLP paper ' +
      'presented as a poster at CLiC-it 2026 in Palermo.',
    "I'm Microsoft Azure and Databricks certified and looking for a working-student role in data engineering or ML. " +
      'Outside of work I write on Medium and play football and cricket.',
  ],
  facts: [
    { label: 'Based in', value: 'Magdeburg, Germany' },
    { label: 'Studying', value: 'M.Sc. Digital Engineering, OvGU' },
    { label: 'Experience', value: '2.5 yrs Data Engineer + 7-month internship' },
    { label: 'Certified', value: 'Azure Data Engineer · Databricks DE' },
    { label: 'Languages', value: 'English C2 · German B1 · Malayalam (native) · Hindi · French A1' },
  ],
}

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Programming & Querying',
    items: ['Python (OOP, pandas, PySpark)', 'SQL', 'PostgreSQL', 'R (basic)', 'PowerShell'],
  },
  {
    group: 'Cloud & Data Platforms',
    items: ['Microsoft Azure', 'Azure Data Factory', 'Databricks', 'Azure Synapse', 'Data Lake', 'Terraform'],
  },
  {
    group: 'Machine Learning & Research',
    items: ['PyTorch', 'Graph Neural Networks', 'NLP (TF-IDF, ClinicalBERT)', 'HPC / SLURM (V100 GPUs)', 'Matplotlib'],
  },
  {
    group: 'DevOps & Workflow',
    items: ['CI/CD (Azure DevOps)', 'Git & GitHub', 'Agile / Scrum', 'JIRA', 'Confluence'],
  },
]

export const projects: Project[] = [
  {
    title: 'Clinical Deterioration Signals in ICU Notes',
    tagline: 'Poster · CLiC-it 2026, Palermo · co-author',
    description:
      'Temporal linguistic escalation patterns in clinical narratives before clinical deterioration, presented at ' +
      'CLiC-it 2026, the Twelfth Italian Conference on Computational Linguistics (Palermo, 14–16 Sept 2026). We compared ' +
      'TF-IDF + Logistic Regression, 512-token truncated ClinicalBERT and a sliding-window ClinicalBERT on MIMIC-III notes.',
    highlights: [
      'Sliding-window ClinicalBERT won on every metric — AUROC 0.838, AUPRC 0.856 (DeLong p < 0.0001)',
      'Sliding windows cover 99.9% of tokens vs 75.1% with 512-token truncation',
      '10,124 text windows from 9,261 MIMIC-III admissions',
    ],
    tech: ['Python', 'pandas', 'Bio_ClinicalBERT', 'TF-IDF', 'MIMIC-III'],
    demo: '', // add the paper link here once it's in the proceedings
    demoLabel: 'Read paper',
    source: 'https://github.com/jayakrishnaaj/Clinical_Deterioration_HCNLP_2025',
    status: 'Presented',
    image: {
      src: './images/clic-it-2026-poster.jpg',
      alt: 'Conference poster "Temporal linguistic escalation patterns in clinical narratives prior to clinical deterioration" at CLiC-it 2026 in Palermo',
    },
  },
  {
    title: 'Prediction of Particle Trajectories using AI',
    tagline: 'Research · OvGU Autonomous Multisensor Systems Group',
    description:
      'A GNN-based AI surrogate for industrial DEM (Discrete Element Method) simulations: a Graph Network Simulator ' +
      'in PyTorch that learns spherical-particle dynamics and replaces the physics-based solver with a learned model, ' +
      'as a step towards an industrial-plant digital twin.',
    highlights: ['Trained on an HPC cluster with V100 GPUs (SLURM)', 'Combines GNS with an Ensemble Kalman Filter', 'Team lab project'],
    tech: ['PyTorch', 'GNNs', 'EnKF', 'SLURM', 'Python'],
    demo: '',
    source: 'https://github.com/jayakrishnaaj/Prediction_of_Particle_Trajectories_using_AI_AMS',
    status: 'Research',
  },
  {
    title: 'EUR → INR Transfer Outlook',
    tagline: 'DSWP course project · OvGU',
    description:
      'Data science project on the outlook for EUR-to-INR money transfers, combining ECB exchange-rate data with ' +
      "India's CPI data from MOSPI. [Add 1–2 sentences: the question you answer, the model, and the app.]",
    tech: ['Python', 'Jupyter', 'Git', '[Add libraries]'],
    demo: '',
    source: '', // add https://github.com/jayakrishnaaj/eur_to_inr_transfer_outlook once it's public
    status: 'In progress',
  },
  {
    title: 'Insurance Cloud Migration',
    tagline: 'Cognizant Technology Solutions',
    description:
      'Modernised insurance data infrastructure by migrating legacy on-premises systems to the Azure cloud platform, ' +
      'enabling real-time analytics, better operational efficiency and regulatory compliance.',
    tech: ['Azure', 'Azure Data Factory', 'Databricks', 'PySpark'],
    demo: '',
    source: '',
    status: 'Industry',
  },
  {
    title: 'Rural Challenges Mapping with QGIS',
    tagline: 'Team project · project coordinator',
    description:
      'Led a 5-member team as project coordinator to create a technical GIS map identifying the challenges faced by a ' +
      'rural village in Uttar Pradesh, India.',
    tech: ['QGIS', 'GIS mapping', 'Team leadership'],
    demo: '',
    source: '',
  },
]

export const experience: TimelineItem[] = [
  {
    title: 'Data Engineer',
    org: 'Cognizant Technology Solutions',
    period: '05/2023 – 09/2025',
    location: 'Kochi, India',
    points: [
      'Migrated 40+ Informatica pipelines to Azure Databricks (PySpark) with reusable ADF frameworks — 30% faster processing, 25% less manual setup and 80% fewer failures.',
      'Introduced Azure DevOps CI/CD and QA-integrated validation workflows, cutting deployment cycles from hours to minutes and production defects by ~40%.',
      'Closed monitoring gaps with ADF-integrated notification notebooks and worked with cross-functional teams to embed testing in downstream data workflows.',
    ],
  },
  {
    title: 'Data Engineering Intern',
    org: 'Cognizant Technology Solutions',
    period: '09/2022 – 03/2023',
    location: 'Kochi, India',
    points: [
      'Built high-throughput ingestion and PySpark SQL pipelines over TB-scale flight and transaction data, with sub-second query performance and 15% better data quality.',
      'Implemented JSON schema validation and exception handling to catch malformed records before downstream processing.',
      'Worked in Agile/Scrum cycles, managing sprint planning and task visibility in JIRA.',
    ],
  },
]

export const education: TimelineItem[] = [
  {
    title: 'M.Sc. Digital Engineering',
    org: 'Otto-von-Guericke-University Magdeburg',
    period: '10/2025 – present',
    location: 'Magdeburg, Germany',
    points: ['Focus: machine learning, AI, data warehousing, data mining, data visualisation.'],
  },
  {
    title: "Bachelor's in Mechanical Engineering (Automotive)",
    org: 'Amrita School of Engineering',
    period: '06/2018 – 08/2022',
    location: 'Kollam, India',
    points: [],
  },
]

export const certifications: string[] = [
  'Microsoft Certified: Azure Data Engineer Associate',
  'Databricks Certified Data Engineer Associate',
  'Cognizant certified in Generative AI',
  'AI For Everyone — Coursera',
]

export const publications: { title: string; venue: string; href: string }[] = [
  {
    title: 'Temporal Linguistic Escalation Patterns in Clinical Narratives Prior to Clinical Deterioration: A MIMIC-III Analysis Using TF-IDF and ClinicalBERT',
    venue: 'CLiC-it 2026 — Twelfth Italian Conference on Computational Linguistics, Palermo (poster, co-author)',
    href: '',
  },
  {
    title: 'Influence of Si3N4 on the tribological behaviour of stir cast Cu-10Sn / xSi3N4 metal matrix composite for bearing applications',
    venue: 'Friction and Wear in Composite Materials',
    href: '',
  },
  {
    title: 'Evaluating the Impact of Si3N4 on the Metallurgical and Mechanical Behaviour of Stir Cast Cu–Sn/Si3N4 Metal Matrix Composite for Potential Automobile Application',
    venue: 'International Journal of Metalcasting',
    href: '',
  },
]

export const contact = {
  blurb:
    "I'm looking for a working-student role in data engineering or ML (up to 20 hours a week) and happy to talk about data pipelines, Azure/Databricks or ML research. Email is the fastest way to reach me.",
  email: 'krishnaajith1898@gmail.com',
  socials: {
    github: 'https://github.com/jayakrishnaaj',
    linkedin: '', // e.g. "https://www.linkedin.com/in/your-handle"
  },
  // Extra links. Empty hrefs are hidden on the live site.
  other: [{ label: 'Medium', href: '' }] as Link[],
}
