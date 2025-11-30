export const siteConfig = {
  name: "Elliot Chan",
  title: "Computational Biologist | Honours Biomedical Sciences Graduate",
  description: "Project Portfolio website of Elliot Chan",
  accentColor: "#5e81ac",
  social: {
    email: "e224chan@uwaterloo.ca",
    linkedin: "https://www.linkedin.com/in/elliot-chan-6206b01ba/",
    github: "https://github.com/Elliot-Chan-120",
  },
  aboutMe:
    "I've independently built end-to-end platforms that bridge biomedical research workflows and computation, from clinical variant analysis to drug optimization. My work combines bioinformatics, machine learning, and algorithmic innovation to solve complex problems in healthcare and drug discovery.",
  skills: ["Python", "Bioinformatics", "Cheminformatics", "Machine Learning", "Data Processing", "Variant Analysis", "Algorithm Design"],


  GEM: {
    name: "GEM: Benign by Design",
    color: "#a3be8c",
    //section 1
    description: "90% ROC-AUC, 89.6% PR-AUC, 82% Accuracy: A gene variant pathogenicity screening platform powered by my custom 500 + feature engineering pipeline, paired with my personal feature space optimization tool DataSift. Includes ReGen, an iterative guided mutation algorithm capable of identifying gene therapy targets.",
    skills: ["Gene Variant Analysis", "Genetic Screening", "Bioinformatics", "Multiprocessing Optimization", "Machine Learning", "Model Optimization"],
    //section 2
    repoTitle: "Repository Link | Thorough breakdown and source code here",
    repoLink: "https://github.com/Elliot-Chan-120/GEM/blob/main/README.md",

    //section 3
    videoTitle: "Demo Video Link | Watch GEM repair a pretend gene variant",
    videoLink: "https://youtu.be/83pVzD2D_qE",
  },

  NOCTURNAL: {
    name: "NOCTURNAL: Exploring the Dark Chemical Space",
    color: "#8fbcbb",
    //section 1
    description: "A drug discovery framework designed for drug-structure screening and lead optimization against user-defined biological targets. Paired with interactive chemical space analysis and various chemical-similarity calculations, aimed at accelerating drug candidate identification and optimization",
    skills: ["Molecular Fingerprinting", "Drug-Discovery", "Cheminformatics", "Chemical Space Network Visualization", "Machine Learning"],
    //section 2
    repoTitle: "Repository Link | Thorough breakdown and source code here",
    repoLink: "https://github.com/Elliot-Chan-120/NOCTURNAL/blob/main/README.md",

    //section 3
    videoTitle: "Demo CSN Link | Look at NOCTURNAL's Chemical Space Network for Optimized Computational Drug Candidates against AD",
    videoLink: "optimized_csn_model1_hybrid.html",
  },

  DataSift: {
    name: "DataSift: Less Noise, More Performance",
    color: "#b48ead",
    //section 1
    description: "A feature space optimization tool for Binary Classifier efficiency optimization. Combining a thorough variance threshold optimizer and a backward-iteration importance-based feature pruner, this module is geared towards high-dimensional data where less noise == more performance.",
    skills: ["Machine Learning", "Model Optimization", "Feature Analysis / Optimization",],
    //section 2
    repoTitle: "Repository Link | Model performances breakdown and source code here",
    repoLink: "https://github.com/Elliot-Chan-120/DataSift",
    },

  education: [
    {
      school: "University of Waterloo",
      degree: "Honours Biomedical Sciences",
      dateRange: "2020-2024",
      achievements: [
        "Graduated with Distinction: GPA 81.4%",
      ],
    },
  ],
};
