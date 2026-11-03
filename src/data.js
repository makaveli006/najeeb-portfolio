// Content sourced from CV_Mohammed_Najeeb.pdf. Edit here to update the site.
export const profile = {
  name: 'Mohammed Najeeb',
  initials: 'MN',
  title: 'ELV Draftsman & Design Engineer',
  location: 'Based in Abu Dhabi, UAE',
  intro:
    'I am an ELV and MEP design engineer based in the UAE, specializing in security, fire alarm, and electrical system drawings.',
  tagline:
    '5 years of experience in ELV, Fire Alarm, and MEP Electrical design and drafting — from pre-bid designs to final as-built submittals.',
  email: 'najeeb.pkdn@gmail.com',
  phone: '+971542692066',
  linkedin: 'https://www.linkedin.com/in/mohammednajeebp/',
  about: [
    "I'm an ELV Draftsman and Design Engineer with 5 years of experience in ELV, Fire Alarm, and MEP Electrical design and drafting, with a strong record of supporting high-performance teams and streamlining processes.",
    'I prepare shop drawings, schematics, riser diagrams, rack and cable layouts, and as-built submittals for CCTV, Access Control, Intercom, Data, PA/BGM, and Fire Alarm systems — coordinated with architectural, structural, and MEP services and aligned with standards such as SIRA, ADMCC, NFPA, FM, and UL.',
    "I hold a Bachelor's Degree in Electronics & Instrumentation Engineering, attested and recognized for UAE employment, and a valid UAE Driving License — mobile and flexible for site-based roles.",
  ],
}

export const featured = {
  label: 'Current Role',
  title: 'ELV DRAFTSMAN',
  subtitle: 'Precedence Infotech LLC · Dubai',
  link: '#experience',
}

// `icon` keys map to components in icons.jsx
export const topics = [
  { label: 'CCTV', icon: 'cctv', isNew: true },
  { label: 'Access Control', icon: 'access' },
  { label: 'Intercom', icon: 'intercom' },
  { label: 'Fire Alarm', icon: 'fire' },
  { label: 'PA / BGM', icon: 'speaker' },
  { label: 'Data Networks', icon: 'network' },
  { label: 'MEP Electrical', icon: 'electrical' },
  { label: 'Explore More', icon: 'arrow', href: '#experience' },
]

export const stats = [
  { value: '5+', label: 'Years experience' },
  { value: '4', label: 'Companies' },
  { value: '2', label: 'Countries — UAE & India' },
]

export const highlights = [
  {
    title: 'Attested Degree',
    text: "Bachelor's Degree in Electronics & Instrumentation Engineering — attested and recognized for UAE employment.",
  },
  {
    title: '5 Years Experience',
    text: 'ELV, Fire Alarm, and MEP Electrical Design and Drafting, supporting high-performance teams and streamlining processes.',
  },
  {
    title: 'UAE Driving License',
    text: 'Valid UAE Driving License — mobile and flexible for site-based roles.',
  },
]

export const skills = [
  {
    group: 'Software',
    items: ['AutoCAD', 'Bluebeam Revu', 'Navisworks', 'DIALux', 'PlanSwift', 'Notifier Drag & VDrop', 'MS Office'],
  },
  {
    group: 'Systems',
    items: ['CCTV', 'Access Control', 'Intercom', 'Data', 'PA / BGM', 'Fire Alarm', 'MATV', 'Telephone', 'Lighting & Power'],
  },
  {
    group: 'Standards & Deliverables',
    items: ['SIRA', 'ADMCC', 'NFPA', 'FM', 'UL', 'Shop Drawings', 'As-Built', 'Riser Diagrams', 'BOQ / BOM', 'SLDs'],
  },
]

export const experience = [
  {
    role: 'ELV Draftsman',
    org: 'Precedence Infotech LLC',
    location: 'Dubai, UAE',
    period: 'Mar 2026 — Present',
    points: [
      'Prepare detailed ELV shop drawings, layouts, schematics, and installation drawings based on project specifications, engineering designs, and client requirements.',
      'Develop CCTV, Access Control, Intercom, Data, PA/BGM, and other ELV system drawings using AutoCAD.',
      'Coordinate ELV drawings with architectural, structural, MEP, and other services to ensure proper integration and clash detection using Navisworks.',
      'Review drawings for accuracy, completeness, constructability, and compliance with project requirements and applicable standards.',
      'Prepare and maintain shop drawings, as-built drawings, cable layouts, rack layouts, schematic diagrams, equipment layouts and schedules.',
      'Coordinate with engineers, consultants, and site teams to resolve design issues and incorporate approved design changes.',
      'Conduct site surveys and verify existing site conditions to update drawings and support accurate installation requirements.',
      'Provide drafting and technical support during construction and installation, including resolving drawing-related site queries and coordination issues.',
    ],
  },
  {
    role: 'ELV Draftsman',
    org: 'FederalTec Technology LLC',
    location: 'Dubai, UAE',
    period: 'Mar 2024 — Mar 2026',
    points: [
      'Designed Security System (CCTV, Access Control, Intercom) architecture as per client requirements in accordance with the AI system, aligned with SIRA and ADMCC standards.',
      'Prepared final As-Built Submittals containing Shop Drawings, FOV Drawing, Schematic Diagram, Control Room Layout, Rack Layout, and Cable Layout Designs using AutoCAD.',
      'Supported Pre-Bid Designs with Riser Diagram, Network System Architecture Diagram, and BOQ Preparation using Bluebeam.',
      'Conducted continuous site surveys and implemented design changes based on site conditions to meet client requirements.',
    ],
  },
  {
    role: 'Fire Alarm Design Engineer',
    org: 'GoIGNIS Technologies LLP',
    location: 'Haryana, India',
    period: 'Dec 2022 — Jan 2024',
    points: [
      'Designed building Fire Alarm Systems using codes & standards including NFPA, FM, UL & local AHJ guidelines.',
      'Prepared final submittals containing Floor Plan Layouts, Riser Diagrams, Battery Calculation, Voltage Drop Calculation, Device cut sheets, wiring details, etc.',
      'Prepared Electrical Schematics & As-Built Drawing Designs and bills of materials (BOMs) and technical documentation.',
    ],
  },
  {
    role: 'MEP Electrical Design Engineer',
    org: 'MEDAC Enterprises Pvt. Ltd.',
    location: 'Calicut, India',
    period: 'Sep 2021 — Dec 2022',
    points: [
      'Designed lighting systems using DIALux and developed Power Layouts.',
      'Produced shop drawings for ELV systems: Fire Alarm, Data, Telephone, CCTV, MATV, PA Layouts.',
      'Performed panel scheduling, voltage drop calculations, and cable tray design & coordination of various MEP services with respect to cable tray.',
      'Prepared SLDs, short circuit calculations, and capacitor bank sizing for power factor correction.',
    ],
  },
]

export const education = [
  {
    degree: 'B.Tech — Applied Electronics & Instrumentation Engineering',
    school: 'Government Engineering College, Kozhikode',
    detail: 'APJ Abdul Kalam Technological University (KTU), Kerala, India',
    period: '2021',
  },
]
