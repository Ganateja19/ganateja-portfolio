export const personalData = {
  name: "Ganateja Thurpati",
  role: "Data Engineer",
  bio: "Great data engineering isn't just about architecture; it's about asking the right questions, understanding business context, and building systems that compound in value. Passionate about data governance and observability. Advocate for data contracts, schema-first thinking, and cultures where data quality is non-negotiable.",
  email: "ganateja02@gmail.com",
  socials: {
    github: "https://github.com/Ganateja19",
    linkedin: "https://www.linkedin.com/in/ganateja/"
  },
  aboutParagraphs: [
    "Data Engineer with over 5 years of experience in building scalable, cloud-native data platforms, specializing in supply chain analytics. Expertise in designing and maintaining robust data pipelines that ensure data accuracy and accessibility, while implementing data modeling and governance practices.",
    "Proven track record of developing reporting solutions using SQL and Power BI, translating operational needs into actionable insights. Highly skilled in architecting cloud-native data lakehouses, establishing data contracts and schema cataloging, and orchestrating workflows using Apache Airflow and dbt across AWS and Snowflake environments."
  ],
  whoIAm: "Continuous learner obsessed with data reliability and quality. I've spent 5+ years transforming raw data into actionable intelligence—whether scaling pipelines to 500GB+ daily throughput or preventing $28K in unnecessary costs through smarter architecture. I believe great data engineering isn't just about building pipelines; it's about asking the right questions, understanding business context, and designing systems that compound in value over time. Passionate about data governance, observability, and schema-first thinking. I'm always exploring emerging tools, cost optimization patterns, and real-time streaming innovations to stay ahead of the curve.",
  whyDataEngineering: "I'm drawn to data engineering because it sits at the intersection of architecture and impact. Every pipeline I build directly shapes the decisions an organization makes.",
  currentlyExploring: [
    "Real-time ML Pipelines",
    "Cost Optimization Strategies",
    "Data Mesh Patterns",
    "Event-Driven Architectures"
  ],
  keyBeliefs: [
    { statement: "Data quality over data volume", icon: "shield" },
    { statement: "Observability prevents outages", icon: "eye" },
    { statement: "Schema governance scales organizations", icon: "layers" },
    { statement: "Cost efficiency is a feature", icon: "zap" }
  ]
};

export const impactMetrics = [
  { value: "500GB+", label: "Daily Ingestion" },
  { value: "60%", label: "Fewer Failures" },
  { value: "$28K", label: "Annual Savings" },
  { value: "20+", label: "Production Pipelines" }
];

export const skillCategories = [
  {
    category: "DATA ENGINEERING",
    skills: ["Python", "SQL", "PySpark", "Data Modeling", "ETL/ELT", "Medallion Architecture", "AWS S3", "AWS Glue", "Snowflake", "Airflow", "dbt", "Data Contracts"]
  },
  {
    category: "ERP & SYSTEMS",
    skills: ["Salesforce", "Oracle", "Power Query", "System Integration", "API Connectors"]
  },
  {
    category: "REAL-TIME PROCESSING",
    skills: ["AWS Kinesis", "Kafka", "Apache Spark", "Stream Processing", "Windowing", "Batch Processing", "Distributed Systems"]
  },
  {
    category: "DATA QUALITY & GOVERNANCE",
    skills: ["Great Expectations", "Data Contracts", "Schema Management", "Data Lineage", "Master Data Management", "Data Quality Frameworks", "Monitoring & Alerting", "Anomaly Detection", "SLA Management", "Compliance"]
  },
  {
    category: "CLOUD & PLATFORMS",
    skills: ["AWS (S3, Glue, Kinesis, Lambda, CloudWatch)", "Snowflake", "Power BI", "Tableau", "Looker", "PostgreSQL", "MySQL", "SQL Server"]
  },
  {
    category: "ORCHESTRATION & AUTOMATION",
    skills: ["Apache Airflow", "dbt", "N8N", "Prefect", "Dagster", "CI/CD Pipelines", "GitHub Actions", "GitLab CI", "Jenkins"]
  },
  {
    category: "AI & EMERGING",
    skills: ["LangChain", "Prompt Engineering", "RAG", "Vector Databases", "OpenAI API", "Anomaly Detection", "Feature Engineering", "ML Models"]
  },
  {
    category: "DEVOPS & INFRASTRUCTURE",
    skills: ["Docker", "Kubernetes", "Git", "GitHub", "GitLab", "Linux/Bash", "Jenkins"]
  }
];

export const experience = [
  {
    company: "United Healthcare Group",
    role: "Data Engineer",
    period: "Oct 2024 - Present"
  },
  {
    company: "Capgemini",
    role: "Data Engineer",
    period: "Jan 2022 - Dec 2023"
  },
  {
    company: "Tech Mahindra",
    role: "Junior Data Engineer",
    period: "Sep 2020 - Dec 2021"
  },
  {
    company: "BDSR Solutions LLP",
    role: "Data Science Intern",
    period: "Feb 2020 - Jul 2020"
  },
  {
    company: "Verzeo",
    role: "Machine Learning Intern",
    period: "Apr 2020 - May 2020"
  }
];

export const projects = [
  {
    title: "Iris Classifier UI",
    description: "Designed and developed an end-to-end machine learning web application that enables real-time classification of iris flower species based on user-provided biometric measurements. This application bridges machine learning concepts with frontend delivery, showcasing the ability to translate predictive models into intuitive, business-ready tools.",
    techStack: ["Python", "scikit-learn", "HTML5", "CSS3", "JavaScript"],
    link: "https://ganateja19.github.io/iris-classifier-ui/",
    github: "https://github.com/Ganateja19/iris-classifier-ui",
    image: "./iris-project.jpeg",
  },
  {
    title: "Chocolate Sales Dashboard",
    description: "An interactive dashboard analyzing chocolate sales performance. Visualizes key metrics such as sales by region, product category performance, and trend analysis to drive business insights.",
    techStack: ["Data Visualization", "Dashboarding", "Analytics"],
    link: "https://github.com/Ganateja19/Interactive-Chocolate-Sales-Performance-Dashboard",
    github: "https://github.com/Ganateja19/Interactive-Chocolate-Sales-Performance-Dashboard",
    image: "./chocolate-dashboard.jpg",
  },
  {
    title: "EduMind AI - Student Performance Predictor",
    description: "An end-to-end Machine Learning application that predicts student performance based on various academic and demographic factors. Designed to help educators identify at-risk students and provide early interventions.",
    techStack: ["Python", "Machine Learning", "Streamlit", "Scikit-learn"],
    link: "https://github.com/Ganateja19/EduMind-AI-End-to-End-Student-Performance-Predictor",
    github: "https://github.com/Ganateja19/EduMind-AI-End-to-End-Student-Performance-Predictor",
    image: "./edumind-ai.png",
  },
  {
    title: "Real-Time Healthcare Data Platform & Feature Store",
    description: "Engineered a real-time healthcare data platform using PySpark, AWS Glue, and Kinesis, implementing medallion architecture and a centralized feature store to enable scalable analytics and ML workflows.",
    techStack: ["PySpark", "AWS Glue", "Kinesis", "AWS Lambda", "Medallion Architecture"],
    link: "https://github.com/Ganateja19/healthcare-data-platform",
    github: "https://github.com/Ganateja19/healthcare-data-platform",
    image: "./Healthcare.jpg",
  },
  {
    title: "Enterprise Data Lakehouse with Medallion Architecture",
    description: "Architected a cloud-native data lakehouse on AWS S3, Glue, and Snowflake, building scalable batch and streaming pipelines with optimized data models and governance for enterprise analytics.",
    techStack: ["AWS S3", "AWS Glue", "Snowflake", "dbt", "Airflow"],
    link: "https://github.com/Ganateja19/data-lakehouse",
    github: "https://github.com/Ganateja19/data-lakehouse",
    image: "./Datalakehouse-medallion.png",
  },
  {
    title: "Streaming Data Pipeline for Real-Time Analytics",
    description: "Developed low-latency streaming pipelines using Amazon Kinesis, PySpark Streaming, and AWS Lambda, enabling near real-time data processing and analytics for business-critical use cases.",
    techStack: ["Amazon Kinesis", "PySpark Streaming", "AWS Lambda", "AWS S3", "CloudWatch"],
    link: "https://github.com/Ganateja19/streaming-pipeline",
    github: "https://github.com/Ganateja19/streaming-pipeline",
    image: "./Realtime.png",
  }
];

export const education = [
  {
    institution: "University of Memphis",
    degree: "Master of Science in Data Science",
    period: "Memphis, TN",
    coursework: "Fundamentals of Data Science, Machine Learning, Database Systems (SQL), Data Mining, Advanced Statistical Learning, Big Data Analytics, Neural Networks, Data Visualization.",
    image: "./UofM.jpg"
  },
  {
    institution: "Indian Institute of Information Technology, Jabalpur",
    degree: "Bachelor of Technology in Electronics & Communication Engineering",
    period: "India",
    coursework: "Data Structures & Algorithms, Probability & Statistics, Linear Algebra, Digital Signal Processing, Database Management Systems, Object-Oriented Programming, Computer Networks, Microprocessors & Interfacing.",
    image: "./IIITDMJ.jpg"
  }
];

export const certifications = [
  {
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    image: "./Salesforce AI associate.png"
  },
  {
    title: "Supply Chain Management A-Z: Operations & Logistics",
    issuer: "Udemy",
    image: "./Supply_Chain_Management_Logistics.png"
  },
  {
    title: "Generative AI Bootcamp",
    issuer: "Outskill",
    image: "./GEN_AI_Certification.png"
  },
  {
    title: "3-Day Generative AI Bootcamp",
    issuer: "GrowthSchool / Outskill",
    image: "./3_Day_AI_Bootcamp.png"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "./AWS_Cloud_Practioner.jpg"
  },
  {
    title: "AWS Certified Machine Learning",
    issuer: "Amazon Web Services",
    image: "./AWS_ML&AI.png"
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Databricks",
    image: "./Databricks_GENAI.jpg"
  },
  {
    title: "Databricks Lakehouse Fundamentals",
    issuer: "Databricks",
    image: "./Databricks_Fundamentals.jpg"
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    image: "./Coursera_GD.png"
  },
  {
    title: "Lean Six Sigma Green Belt",
    issuer: "Council for Six Sigma Certification",
    image: "./Lean_Sixsigma.png"
  },
  {
    title: "Verzeo Certification",
    issuer: "Verzeo",
    image: "./Verzeo.jpg"
  }
];
