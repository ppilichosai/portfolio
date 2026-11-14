export const site = {
  name: "Panagiotis Dimitrios Pilichos",
  shortName: "Panagiotis Pilichos",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-project.vercel.app",
  linkedin: "https://www.linkedin.com/in/panagiotis-dimitrios-pilichos/",
  email: "ppilichos@gmail.com",
  phone: "+306977665364",
  phoneDisplay: "+30 697 766 5364",
  cvUrl: "", // e.g. "/cv/Panagiotis-Pilichos-CV.pdf" once you add the file to /public/cv
};
// Employers, titles and dates (same in both languages; descriptions live in en.ts / el.ts)
export const roles = [
  { org: "Alpha Supporting Services (Alpha Bank Group)", role: "Senior IT Project Manager / Service Owner", when: ["May 2025 to present", "Μάιος 2025 έως σήμερα"] },
  { org: "Infonet Systems at Eurobank S.A.", role: "IT Project Manager, Banking Infrastructure", when: ["Sept 2024 to May 2025", "Σεπτ 2024 έως Μάιος 2025"] },
  { org: "Entersoftone Impact", role: "Lead IT Project Manager, Software Solutions and Technology Delivery", when: ["Nov 2023 to Oct 2024", "Νοέμ 2023 έως Οκτ 2024"] },
  { org: "KSM / iComm at Public Power Corporation (PPC)", role: "IT Coordinator and Project Manager", when: ["May 2023 to Nov 2023", "Μάιος 2023 έως Νοέμ 2023"] },
  { org: "Silvare / Accenture at National Bank of Greece", role: "EDW Engineer, Banking Data Warehouse", when: ["Feb 2023 to May 2023", "Φεβ 2023 έως Μάιος 2023"] },
  { org: "Sword S.A. Group", role: "IT Service Management Consultant, EU Taxation and Customs Applications", when: ["Mar 2022 to Feb 2023", "Μάρτ 2022 έως Φεβ 2023"] },
];
export const edu = [
  { y: 2013, t: "Executive Development Diploma in ICT Management", i: "Athens Information Technology (AIT)" },
  { y: 2008, t: "MSc in Electronic Commerce", i: "Kingston University London" },
  { y: 2006, t: "Degree in Accounting", i: "Technological Educational Institute of Piraeus" },
];
export const certs = [
  { y: 2018, t: "ITIL® Foundation in IT Service Management", i: "AXELOS / PeopleCert" },
  { y: 2006, t: "Train the Trainer", i: "Infotest" },
  { y: 1997, t: "First Certificate in English", i: "University of Cambridge (Local Examinations Syndicate)" },
];
export const tags = ["Google Project Management Certificate", "Microsoft Azure Fundamentals", "Agile and Scrum", "ClickUp Expert", "Jira, Microsoft Project"];
