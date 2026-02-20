export const resume = {
  name: "Darshan Potnis",
  headline: "Data Analyst • Data Engineer",
  location: "Los Angeles, CA (Open to Relocate)",
  email: "potnisd@usc.edu",
  phone: "+1-213-271-6779",

  links: {
    linkedin: "https://www.linkedin.com/in/darshan-potnis-9304a3218/",
    github: "https://github.com/DarshanPotnis",
  },

  summary:
    "Data Analyst with strong SQL and Python skills delivering KPI reporting, product & growth analytics, and executive dashboards. Proven ability to translate business questions into clean metrics, reliable datasets, and actionable insights across 10M+ records. Experienced with PostgreSQL, Snowflake, Power BI, data quality checks, and cross-functional stakeholder reporting.",

  /* =========================
     HERO / HIGHLIGHTS
     ========================= */
  highlights: [
    {
      label: "Analytics",
      value: "SQL • Python",
      logos: ["python", "snowflake"],
    },
    {
      label: "Warehousing",
      value: "PostgreSQL",
      logos: ["postgresql"],
    },
    {
      label: "Dashboards",
      value: "Executive KPIs",
      logos: ["powerbi"],
    },
    {
      label: "Data Ops",
      value: "Airflow Pipelines",
      logos: ["apacheairflow"],
    },
  ],

  /* =========================
     PROJECTS
     ========================= */
  projects: [
    {
      title: "GTM Funnel & Product Analytics",
      description:
        "End-to-end product and GTM funnel analysis from signup to activation using Snowflake and SQL.",
      stack: ["Snowflake", "SQL", "Python"],
      highlights: [
        "100% lead enrichment, avg 3.15 days to enrichment",
        "84% workflow creation vs 25% data export",
        "Identified dominant user paths & time-to-value gaps",
      ],
    },
    {
      title: "CFO-Style Reporting & Governance Platform",
      description:
        "Executive KPI reporting platform with standardized metrics, governance, and automated refresh.",
      stack: ["SQL", "Python", "Power BI", "PostgreSQL"],
      highlights: [
        "Single source of truth for executive KPIs",
        "Automated Power BI dashboards",
        "RBAC, audit logging, and data-quality checks",
      ],
    },
    {
      title: "F1 Telemetry Analytics Platform",
      description:
        "High-frequency time-series analytics to compare driver and car performance across conditions.",
      stack: ["Python", "SQL", "PostgreSQL", "Time-Series"],
      highlights: [
        "Optimized analytics views for fast comparisons",
        "Detected trends & anomalies across laps",
        "Strategy insights via telemetry features",
      ],
    },
  ],

  /* =========================
     EXPERIENCE
     ========================= */
  experience: [
    {
      company: "99 Yards",
      location: "Remote",
      role: "Data Engineer Intern",
      date: "Jun 2025 — Aug 2025",
      bullets: [
        "Owned recurring KPI reporting datasets used by stakeholders for weekly decision-making.",
        "Built and maintained FastAPI services powering dashboards and ad-hoc analysis with validation and monitoring.",
        "Automated data refresh and reporting via Airflow/cron, improving freshness and reducing manual reporting effort.",
        "Optimized data delivery performance through profiling and batching; reduced response time by 25%.",
      ],
    },
    {
      company: "Scientox Technologies",
      location: "Mumbai, India",
      role: "Data Analyst Intern",
      date: "Oct 2022 — Apr 2023",
      bullets: [
        "Developed Python/SQL ETL pipelines processing 10M+ records supporting executive dashboards.",
        "Implemented data validation rules improving accuracy and reduced downstream reporting issues.",
        "Standardized recurring analytics workflows using Airflow, shortening refresh cycles.",
        "Supported production analytics through incident triage and root cause analysis.",
      ],
    },
  ],

  /* =========================
     SKILLS
     ========================= */
  skills: [
    {
      category: "Analytics",
      items: [
        "KPI Design",
        "Funnel Analysis",
        "Cohort Analysis",
        "Segmentation",
        "Root Cause Analysis",
        "Stakeholder Reporting",
      ],
    },
    {
      category: "SQL & Warehousing",
      items: [
        "SQL",
        "PostgreSQL",
        "Snowflake",
        "Data Modeling",
        "Query Optimization",
      ],
    },
    {
      category: "Python",
      items: ["pandas", "numpy", "Automation", "Data Validation"],
    },
    {
      category: "Visualization",
      items: ["Power BI", "Tableau", "Looker"],
    },
    {
      category: "Data Engineering",
      items: ["ETL / ELT", "Airflow", "Data Quality", "Monitoring"],
    },
    {
      category: "Tools",
      items: ["AWS (S3, EC2)", "Docker", "Git", "Linux", "CI/CD"],
    },
  ],

  /* =========================
     EDUCATION
     ========================= */
  education: [
    {
      institution: "University of Southern California",
      location: "Los Angeles, CA",
      degree: "Master's of Science in Applied Data Science",
      date: "Jan 2024 — Dec 2025",
      logo: "usc",
    },
    {
      institution: "BSE Institute",
      location: "Mumbai, India",
      degree: "Post Graduate Diploma in Predictive Analytics",
      date: "Jan 2022 — Jul 2023",
      logo: "bse",
    },
    {
      institution: "Mumbai University",
      location: "Mumbai, India",
      degree: "Bachelor's of Science in Computer Science",
      date: "Aug 2019 — Jun 2022",
      logo: "mumbai-university",
    },
  ],

  /* =========================
     ACHIEVEMENTS
     ========================= */
  achievements: [
    "Finalist — USC Data Science Hackathon: Forecasted Lyft demand using weather and traffic data; improved dashboard latency by 30%.",
    "Winner — FinTech Hackathon: Led team to build anomaly detection service; reduced false positives by 18%.",
  ],
} as const;
