
export const personalData = {
  name: "Ganateja Thurpati",
  role: "Data Scientist",
  bio: "Analytical and detail-oriented Data Scientist with 5+ years of experience driving data-backed decision-making.",
  email: "ganateja19@gmail.com",
  socials: {
    github: "https://github.com/Ganateja19",
    linkedin: "https://www.linkedin.com/in/ganateja/"
  },
};

export const skills = {
  "Analytics & Programming": ["Python", "R", "SQL", "SAS", "Java", "Node.js"],
  "Packages": ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow", "Seaborn", "PyTorch"],
  "Databases": ["SQL Server", "PostgreSQL", "MySQL", "Oracle", "Snowflake"],
  "Data Management": ["ETL workflows", "Data Validation", "QA/QC workflows", "Google Analytics"],
  "Visualization": ["Power BI", "Tableau", "Excel", "Ad-hoc reporting", "KPI & scorecard design"],
  "Automation & Workflows": ["Microsoft Power Platform", "Airflow", "Informatica", "API integrations"],
  "Clouds & Devops": ["AWS", "Azure", "GCP", "Git", "GitHub"],
};

export const experience = [
  {
    company: "United Healthcare Group",
    role: "Data Analyst",
    period: "10/2025 – Present",
    description: [
      "Developed dynamic Power BI dashboards with advanced visual analytics and designed interactive Tableau dashboards integrating AWS and multi-source data to deliver real-time insights for stakeholders.",
      "Optimized and designed SQL functions, complex queries, stored procedures, indexing strategies, and performance tuning to improve query speed and database efficiency across large datasets.",
      "Led Agile-driven data projects, ensuring high-quality code, smooth sprint execution, and on-time delivery of analytics solutions.",
      "Engineered Python-based ETL scripts using PySpark that reduced clinical data processing latency by 35%, enabling near real-time ingestion of 500GB+ daily patient records.",
      "Developed scalable data pipelines using AWS Glue, enabling automated ingestion, transformation and integration with downstream analytics layers.",
      "Integrated pipelines with GCP BigQuery to support seamless cross-cloud data processing and analytics workloads.",
      "Engineered AWS Lambda for real-time processing and used Azure Data Factory to orchestrate automated ETL workflows.",
      "Developed predictive models using TensorFlow to identify high-risk patient segments, contributing to a 12% reduction in hospital readmission rates."
    ]
  },
  {
    company: "University of Memphis",
    role: "Data Analyst",
    period: "01/2024 – 09/2025",
    description: [
      "Architected a seamless data pipeline between Workday Finance and Snowflake, consolidating $50M+ in annual budget data and reducing multi-departmental reporting overhead by 25%.",
      "Automated scheduled Python refresh pipelines for budget and spend KPIs, reducing manual data pulls and refresh effort by ~30%.",
      "Designed and maintained Power BI dashboards tracking budget vs. actuals, burn rate, forecast variance, and cost center performance, improving visibility for operational planning.",
      "Implemented data quality checks and validation rules to improve reliability and reduce reporting discrepancies in budget datasets.",
      "Used R for trend analysis and statistical testing on budget KPIs producing reproducible outputs to support periodic operational reviews.",
      "Partnered with operations stakeholders to gather requirements, define KPI logic, and produce documentation/user guides so non-technical users could interpret metrics confidently."
    ]
  },
  {
    company: "Capgemini",
    role: "Data Analyst",
    period: "01/2022 – 12/2023",
    description: [
      "Developed and maintained SQL queries, views, and stored procedures to support enterprise reporting across CRM and operational systems.",
      "Built automated ETL workflows using Python, Node.js, SQL, and AWS (Lambda, S3, Airflow) to process high-volume datasets and deliver analysis-ready tables.",
      "Optimized Snowflake warehouse performance and query execution plans, reducing dashboard refresh times by 30% and improving system reliability.",
      "Reduced manual reporting effort by 40% by automating recurring KPI refreshes, scheduled data loads, and standardized report outputs.",
      "Instituted data quality controls within Snowflake pipelines, including reconciliation checks and anomaly monitoring, to ensure data accuracy.",
      "Partnered with product owners and business stakeholders to gather requirements, define KPI logic, and document metric definitions and reporting specifications."
    ]
  },
  {
    company: "Tech Mahindra",
    role: "Data Analyst",
    period: "09/2020 – 12/2021",
    description: [
      "Developed 15+ Tableau dashboards and Excel reports, improving data visualization efficiency and insights.",
      "Optimized complex SQL queries and tuned database performance to enhance the accuracy and speed of software analytics reporting.",
      "Automated data validation using Python and Airflow, ensuring high data quality and consistency.",
      "Built big data pipelines with Hadoop, Hive, and Spark, improving processing speed and scalability.",
      "Translated complex data into actionable insights, supporting product and feature improvements effectively.",
      "Integrated GitLab for version control and collaboration, streamlining data workflows and version tracking."
    ]
  }
];

export const projects = [
  {
    title: "Iris Classifier UI",
    description: "Designed and developed an end-to-end machine learning web application that enables real-time classification of iris flower species based on user-provided biometric measurements. This application bridges machine learning concepts with frontend delivery, showcasing the ability to translate predictive models into intuitive, business-ready tools.",
    techStack: ["Python", "scikit-learn", "HTML5", "CSS3", "JavaScript"],
    link: "https://ganateja19.github.io/iris-classifier-ui/",
    github: "https://github.com/Ganateja19/iris-classifier-ui",
    image: "/iris-project.jpeg",
  },
  {
    title: "Chocolate Sales Dashboard",
    description: "An interactive dashboard analyzing chocolate sales performance. Visualizes key metrics such as sales by region, product category performance, and trend analysis to drive business insights.",
    techStack: ["Data Visualization", "Dashboarding", "Analytics"],
    link: "https://github.com/Ganateja19/Interactive-Chocolate-Sales-Performance-Dashboard",
    github: "https://github.com/Ganateja19/Interactive-Chocolate-Sales-Performance-Dashboard",
    image: "/chocolate-dashboard.jpg",
  },
  {
    title: "EduMind AI - Student Performance Predictor",
    description: "An end-to-end Machine Learning application that predicts student performance based on various academic and demographic factors. Designed to help educators identify at-risk students and provide early interventions.",
    techStack: ["Python", "Machine Learning", "Streamlit", "Scikit-learn"],
    link: "https://github.com/Ganateja19/EduMind-AI-End-to-End-Student-Performance-Predictor",
    github: "https://github.com/Ganateja19/EduMind-AI-End-to-End-Student-Performance-Predictor",
    image: "/edumind-ai.png",
  },
];

export const education = [
  {
    institution: "University of Memphis",
    degree: "Master of Science in Data Science",
    period: "Memphis, TN",
    coursework: "Fundamentals of Data Science, Machine Learning, Database Systems (SQL), Data Mining, Advanced Statistical Learning, Big Data Analytics, Neural Networks, Data Visualization."
  },
  {
    institution: "Indian Institute of Information Technology, Jabalpur",
    degree: "Bachelor of Technology in Electronics & Communication Engineering",
    period: "India",
    coursework: "Data Structures & Algorithms, Probability & Statistics, Linear Algebra, Digital Signal Processing, Database Management Systems, Object-Oriented Programming, Computer Networks, Microprocessors & Interfacing."
  }
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "/AWS_Cloud_Practioner.jpg"
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Databricks",
    image: "/Databricks_GENAI.jpg"
  },
  {
    title: "Lean Six Sigma Green Belt",
    issuer: "Council for Six Sigma Certification",
    image: "/Lean_Sixsigma.png"
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    image: "/Coursera_GD.png"
  },
  {
    title: "AWS Certified Machine Learning",
    issuer: "Amazon Web Services",
    image: "/AWS_ML&AI.png"
  },
  {
    title: "Databricks Lakehouse Fundamentals",
    issuer: "Databricks",
    image: "/Databricks_Fundamentals.jpg"
  },
  {
    title: "Verzeo Certification",
    issuer: "Verzeo",
    image: "/Verzeo.jpg"
  }
];
