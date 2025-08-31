// Centralized content configuration - edit this file to update your portfolio
export interface ExperienceItem {
  role: string;
  company: string;
  period?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  skills?: string[];
  logo?: string; // Path to company logo
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  github?: string;
  demo?: string;
  image?: string;
  logo?: string; // Path to project/organization logo
  featured?: boolean;
}

export interface CompetitionItem {
  title: string;
  event: string;
  placement: string;
  date: string;
  description?: string;
  team?: string;
  skills?: string[];
  href?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  honors?: string[];
  specialisation?: string[];
  majors?: string[];
  relevant_coursework?: string[];
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description?: string;
  highlights?: string[];
  team_size?: string;
  skills?: string[];
  logo?: string; // Path to organization logo
}

// Your experience data - edit this to update your experience
export const experienceData: ExperienceItem[] = [
  {
    "role": "Data Science Intern",
    "company": "Thiess",
    "period": "Dec. 2024 -- Feb.2025",
    "summary": "Developed a statistical learning state machine using Gaussian Mixture Models and IMM-EKF for real-time truck operation classification and sensor fusion, enhancing reliability and reducing costs by 20% . Developed a linear model to correct timestamp misalignment, ensuring synchronisation across data sources. Optimised GMM performance via BIC, AIC, Elbow Method, Calinski-Harabasz Index, and the EM algorithm",
    "highlights": [
      "Developed a statistical learning state machine using Gaussian Mixture Models and IMM-EKF for real-time truck operation classification and sensor fusion, enhancing reliability and reducing costs by 20% .",
      "Developed a linear model to correct timestamp misalignment, ensuring synchronisation across data sources. Optimised GMM performance via BIC, AIC, Elbow Method, Calinski-Harabasz Index, and the EM algorithm"
    ],
    "skills": [
      "AI"
    ]
  },
  {
    "role": "Lead Software Engineer",
    "company": "UQ Racing",
    "period": "Nov. 2024 -- June 2025",
    "summary": "Led ROS-to-ROS2 migration in Python and C++, integrating TensorRT-quantised YOLOv11 for faster, more accurate cone detection in real-time autonomous navigation. Researched and experimented with advanced sensor fusion techniques (EKF, UKF) and FAST-LIO SLAM to produce high-fidelity simulation maps of test tracks.",
    "highlights": [
      "Led ROS-to-ROS2 migration in Python and C++, integrating TensorRT-quantised YOLOv11 for faster, more accurate cone detection in real-time autonomous navigation.",
      "Researched and experimented with advanced sensor fusion techniques (EKF, UKF) and FAST-LIO SLAM to produce high-fidelity simulation maps of test tracks."
    ],
    "skills": [
      "Python",
      "C++"
    ]
  },
  {
    "role": "Software Engineer",
    "company": "UQ Racing",
    "period": "Feb. 2024 -- Nov. 2024",
    "summary": "Developed path planning algorithms using a perception stack integrating YOLOv8, Lidar, and INS data with Delaunay Triangulation for track driving.",
    "highlights": [
      "Developed path planning algorithms using a perception stack integrating YOLOv8, Lidar, and INS data with Delaunay Triangulation for track driving."
    ],
    "skills": []
  },
  {
    "role": "Casual Academic Tutor",
    "company": "University of Queensland",
    "period": "June. 2025 -- Present",
    "summary": "COMP3710 (Pattern Recognition and Analysis): Instructed 20+ students weekly on machine and deep learning models and techniques",
    "highlights": [
      "COMP3710 (Pattern Recognition and Analysis): Instructed 20+ students weekly on machine and deep learning models and techniques"
    ],
    "skills": []
  },
  {
    "role": "Student Services Ambassador",
    "company": "University of Queensland",
    "period": "Jan. 2025 -- Present",
    "summary": "Assisted students with selection of courses and navigating UQ's proprietary software for enrollments, while representing the university as one of 30 ambassadors",
    "highlights": [
      "Assisted students with selection of courses and navigating UQ's proprietary software for enrollments, while representing the university as one of 30 ambassadors"
    ],
    "skills": []
  },
  {
    "role": "Future Students Ambassador",
    "company": "University of Queensland",
    "period": "Mar. 2025 -- Present",
    "summary": "Represented the university and EAIT faculty in school expos, talks and careers fairs to guide prospective students in degree selection",
    "highlights": [
      "Represented the university and EAIT faculty in school expos, talks and careers fairs to guide prospective students in degree selection"
    ],
    "skills": [
      "AI"
    ]
  }
];

// Your projects data - edit this to update your projects
export const projectsData: ProjectItem[] = [
  {
    "title": "IMC Prosperity 3",
    "description": "Applied advanced statistical techniques in a 5-person team during IMC Trading’s global competition, including cointegration and Ornstein-Uhlenbeck modeling for mean-reversion, Black-Scholes-based option pricing, IV curve fitting, and delta-hedging to build robust pairs, basket, and options arbitrage strategies. Developed a custom Python visualiser to automate stationarity checks and monitor real-time PnL, contributing to a 1st place QLD finish, 9th AU, 60th algorithmic globally out of 15,000 teams).",
    "tags": [
      "Python",
      "Git",
      "Jupyter",
      "Sk-Learn"
    ],
    "featured": false
  },
  {
    "title": "ValoStats",
    "description": "Led a team of 6 engineers to develop ValoStats, a full-stack web application using Python and Streamlit that integrates RIOT’s API for real-time match data; Kaggle dataset was pulled and featured engineered while implemented Gradient Boosting and Logistic Regression ensemble methods to accurately predict match outcomes with 90% accuracy, receiving the People's Choice Award at the UQCS Hackathon",
    "tags": [
      "Python",
      "Streamlit",
      "Jupyter"
    ],
    "featured": false
  },
  {
    "title": "AlgoJam",
    "description": "Coordinated a team of 3 to analyze and strategize financial instruments for the UQ Fintech Algothon by developing ARIMA time-series models and pair trading strategies, applying exponential moving averages to optimize asset performance, and securing third place in the competition sponsored by IMC Trading",
    "tags": [
      "Python",
      "Git"
    ],
    "featured": false
  },
  {
    "title": "SkinDetect",
    "description": "Designed and implemented a Siamese network with ResNet50 and triplet loss in PyTorch to classify benign and malignant skin lesions for the ISIC 2020 Challenge, achieving 95",
    "tags": [
      "Python",
      "Git",
      "Pytorch"
    ],
    "featured": false
  }
];

// Your competitions data - edit this to add competitions
export const competitionsData: CompetitionItem[] = [
  {
    title: "IMC Prosperity Trading Competition",
    event: "IMC Prosperity 3",
    placement: "Top 0.4%",
    date: "2025",
    description: "Developed algorithmic trading strategies for market making and arbitrage, 1st place QLD, 9th AU, 60th algorithmic globally out of 15,000 teams",
    skills: ["Algorithmic Trading", "Python", "Market Analysis"]
  },
  {
    title: "UQCS Hackathon",
    event: "UQCS Hackathon",
    placement: "People's Choice Award",
    date: "2024",
    description: "Developed a machine learning model to predict match outcomes with 90% accuracy, receiving the People's Choice Award at the UQCS Hackathon",
    skills: ["Feature Engineering", "Machine Learning", "Python, Streamlit, Pytorch, Kaggle"]
  },
  {
    title: "UQ Fintech AlgoJam",
    event: "UQ Fintech AlgoJam",
    placement: "3rd Place",
    date: "2024",
    description: "Used ARIMA time-series models and pair trading strategies to secure third place in the competition sponsored by IMC Trading",
    skills: ["ARIMA", "Pair Trading", "Python, Git"]
  },
  {
    title: "Dean's Commendation for Academic Excellence",
    event: "University of Queensland",
    placement: "",
    date: "Semester 1 2025",
    description: "Maintained a GPA of 6.67/7.0 over Semester 1 2025",
    skills: ["GPA", "Academic Excellence"]
  }
  // Add more competitions here...
];

// Your education data
export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering / Masters of Engineering",
    institution: "University of Queensland",
    period: "Feb 2026 - Jun 2029",
    gpa: "",
    specialisation: ["Software Engineering"],
    majors: ["Computer Engineering", "Machine Learning"],
    relevant_coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Pattern Recognition and Analysis",
      "Computer Architecture",
      "Embedded Systems",
      "High Performance Computing",
      "Software Engineering",
      "Statistical Learning",
      "Mathematical Probability"
    ]
  },
  {
    degree: "Bachelor of Economics / Computer Science (discontinued)",
    institution: "University of Queensland",
    period: "Feb 2025 - Dec 2025",
    gpa: "6.75/7.0",
    majors: ["Quantitative Analysis", "Machine Learning"],
    relevant_coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Pattern Recognition and Analysis",
      "Econometric Analysis",
      "Macroeconomics",
      "Microeconomics"
    ]
  }
];

// Your leadership data - edit this to add leadership roles
export const leadershipData: LeadershipItem[] = [
  {
    role: "Treasurer",
    organization: "UQ Computing Society",
    period: "2025 -- Present",
    highlights: [
      "Derived a mathematical formula to model optimal ticket prices to break even on events that was integrated into a python frontend, preventing UQCS from entering a deficit",
      "Managed society finances and budget allocation for events and activities",
      "Maintained transparent financial records and reporting to executive committee"
      
    ],
    skills: ["Financial Management", "Budget Planning", "Leadership", "Event Coordination"]
  },
  {
    role: "General Executive",
    organization: "UQ Fintech Society",
    period: "2025 -- Present",
    highlights: [
      "Contributed to strategic planning and execution of fintech educational events",
      "Assisted in organizing industry networking sessions and guest speaker events",
      "Supported recruitment and member engagement initiatives"
    ],
    skills: ["Strategic Planning", "Event Management", "Industry Relations", "Team Collaboration"]
  },
  {
    role: "General Committee Member",
    organization: "UQ Computing Society",
    period: "2024",
    highlights: [
      "Participated in planning and executing computing-focused workshops and events",
      "Assisted in member engagement and community building activities",
      "Contributed to society initiatives and technical presentations"
    ],
    skills: ["Community Building", "Event Planning", "Technical Presentations"]
  }
  // Add more leadership roles here...
];

// Section configuration - controls which sections appear and their order
export const sectionConfig = {
  hero: { enabled: true, order: 1 },
  education: { enabled: true, order: 2, title: "Education" },
  leadership: { enabled: true, order: 3, title: "Leadership" },
  experience: { enabled: true, order: 4, title: "Experience" },
  projects: { enabled: true, order: 5, title: "Projects" },
  competitions: { enabled: true, order: 6, title: "Competitions & Achievements" },
  contact: { enabled: true, order: 7, title: "Contact" }
};