export const siteConfig = {
  name: "Elliot Chan",
  title: "Computational Biologist | Honours Biomedical Sciences Graduate",
  description: "Portfolio website of Elliot Chan",
  accentColor: "#5e81ac",
  social: {
    email: "e224chan@uwaterloo.ca",
    linkedin: "https://www.linkedin.com/in/elliot-chan-6206b01ba/",
    github: "https://github.com/Elliot-Chan-120",
  },
  aboutMe:
    "I've independently built end-to-end platforms that bridge biochemical research workflows and computation, from clinical variant analysis to drug optimization. My work combines bioinformatics, machine learning, and software engineering to solve complex problems in healthcare and drug discovery.",
  skills: ["Python", "Bioinformatics", "Cheminformatics", "Machine Learning", "Data Processing", "Variant Analysis", "Algorithm Design"],
  projects: [
    {
      name: "GEM: Benign by Design",
      description:
        "90% ROC-AUC, 89.6% PR-AUC, 82% Accuracy: A gene variant pathogenicity screening platform powered by a thorough 500 + feature engineering engine, paired with my personal feature space optimization tool DataSift. Includes ReGen, an iterative guided mutation algorithm capable of identifying gene therapy targets.",
      link: "https://github.com/Elliot-Chan-120/GEM/blob/main/README.md",
      skills: ["Gene Variant Analysis", "Genomic profiling", "Bioinformatics", "Multiprocessing Optimization", "Machine Learning", "Model Optimization"],
    },
    {
      name: "NOCTURNAL: Exploring the Dark Chemical Space",
      description:
        "A drug discovery framework designed for drug-structure screening and lead optimization against user-defined biological targets. Paired with interactive chemical space analysis and various chemical-similarity calculations, aimed at accelerating drug candidate identification and optimization",
      link: "https://github.com/Elliot-Chan-120/NOCTURNAL/blob/main/README.md",
      skills: ["Molecular Fingerprinting", "Drug-Discovery", "Cheminformatics", "Chemical Space Network Visualization", "Machine Learning"],
    },
    {
      name: "DataSift: Less Noise, More Performance",
      description:
        "A feature space optimization tool for Binary Classifier efficiency optimization. Combining a thorough variance threshold optimizer and a backward-iteration importance-based feature pruner, this module is geared towards high-dimensional data where noise must be sifted out.",
      link: "https://github.com/Elliot-Chan-120/DataSift",
      skills: ["Machine Learning", "Model Optimization", "Feature Analysis / Optimization",],
    },
  ],
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
