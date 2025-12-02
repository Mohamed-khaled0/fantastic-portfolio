import { Monitor, Server, Database, Cloud, Terminal, Globe, Award, Shield } from 'lucide-react';

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      certificates: "Certificates",
      education: "Education",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Mohamed Elsharaby",
      title: "AWS Cloud Intern @ NTI",
      subtitle: "Ex: SWE Intern @ ITI | System Integration",
      cta: "Get in Touch",
      download: "Download CV"
    },
    about: {
      title: "About Me",
      text: "I am actively seeking an apprenticeship as an IT Specialist for System Integration (Fachinformatiker für Systemintegration). I hold a Bachelor's degree in Computer Science from Thebes Academy with a GPA of 3.17 (equivalent to German grade 1.8), and my final project received a 4.00 (equivalent to German grade 1.0). I also hold a General Secondary Education Certificate (Science stream). My documents are translated and certified by the German Embassy.",
      current: "Currently, I am an AWS Cloud Engineer Trainee at the National Telecommunication Institute (NTI), working with EC2, S3, IAM, VPC, Lambda, and Infrastructure as Code.",
      extra: "Previously, as a Technical Support Specialist, I managed hardware repairs, user accounts, and staff training. I have strong knowledge of networking (CCNA level) and Linux. I speak fluent German (B1+), very good English, and native Arabic."
    },
    experience: {
      title: "Work Experience",
      jobs: [
        {
          title: "AWS Cloud Engineer Trainee",
          company: "National Telecommunication Institute (NTI)",
          period: "Oct 2025 – Present",
          location: "Cairo, Egypt (On-site)",
          duties: [
            "Hands-on experience with EC2, EBS, S3, RDS, Route 53, VPC (peering), IAM, and Cognito.",
            "Deployed serverless applications using Lambda, Elastic Beanstalk, and SQS.",
            "Managed infrastructure with CloudFormation, Auto Scaling, ELB, and CloudWatch.",
            "Implemented security best practices using KMS and storage solutions like S3 File Gateway."
          ]
        },
        {
          title: "Full Stack Developer (Internship)",
          company: "Information Technology Institute (ITI)",
          period: "Aug 2024 – Sep 2024",
          location: "Port Said, Egypt (Remote)",
          duties: [
            "Designed and maintained relational database schemas in MySQL.",
            "Utilized Git and GitHub for version control and team collaboration.",
            "Developed server-side logic using PHP and built responsive front-ends with HTML5, CSS, and JavaScript."
          ]
        },
        {
          title: "Technical Support Specialist",
          company: "Shajarat Al-Durr",
          period: "Jun 2022 – Dec 2023",
          location: "New Cairo, Egypt",
          duties: [
            "Repaired printers, POS hardware, and installed software on terminals.",
            "Managed user accounts and permissions in Foodics.",
            "Monitored CCTV systems and trained staff on software troubleshooting."
          ]
        }
      ]
    },
    certificates: {
      title: "Certificates & Badges",
      items: [
        {
          name: "Huawei Cloud Developer Associate (HCCDA)",
          issuer: "Huawei Cloud Middle East",
          date: "Nov 2025",
          link: "https://drive.google.com/file/d/14ufEk3Gi6UYQY2obiTAXpKWC-jSnUq87/view?usp=sharing",
          icon: Cloud
        },
        {
          name: "AWS Academy Graduate - Cloud Architecting",
          issuer: "Amazon Web Services (AWS)",
          date: "2025",
          link: "https://www.credly.com/badges/7d656901-879e-4f07-b540-ee98e2105d51/public_url",
          icon: Server
        },
        {
          name: "AWS Academy Graduate - Cloud Foundations",
          issuer: "Amazon Web Services (AWS)",
          date: "2025",
          link: "https://www.credly.com/badges/920d780d-07a8-4178-86ce-2b1b1da2029d/print",
          icon: Database
        },
        {
          name: "SQL (Intermediate) Certificate",
          issuer: "HackerRank",
          date: "Apr 2022",
          link: "https://www.hackerrank.com/certificates/7a5e653b4263",
          icon: Database
        },
        {
          name: "Ubuntu Linux Essentials",
          issuer: "Information Technology Institute (ITI)",
          date: "Oct 2025",
          link: "#",
          icon: Terminal
        },
        {
          name: "Implementation of Network Fundamentals",
          issuer: "Information Technology Institute (ITI)",
          date: "Oct 2025",
          link: "#",
          icon: Globe
        }
      ]
    },
    education: {
      title: "Education",
      degrees: [
        {
          degree: "Bachelor of Science in Computer Science",
          institution: "Thebes Academy",
          period: "2021 – 2025",
          location: "Giza, Egypt",
          details: [
            "GPA 3.17/4.00 (Equivalent to German Grade 1.8)",
            "Final Project: 4.00/4.00 (Equivalent to German Grade 1.0)"
          ]
        },
        {
          degree: "General Secondary Education (Thanaweya Amma)",
          institution: "El-Hawamdiyya Secondary School",
          period: "2016 – 2020",
          location: "Giza, Egypt",
          details: ["Scientific Stream: Math, Physics, Chemistry, Languages"]
        }
      ]
    },
    skills: {
      title: "Skills & Languages",
      technical: "Tech Stack",
      languages: "Languages",
      techList: [
        "AWS (EC2, S3, VPC, Lambda, IAM)",
        "Linux (Ubuntu) & Scripting",
        "CCNA (Routing, Switching, VPN, Firewall)",
        "SQL & MySQL",
        "PHP & Web Development",
        "Git & GitHub"
      ],
      soft: ["Problem Solving", "Team Leadership", "Customer Support"],
      langList: {
        german: "German: B1+ (Fluent)",
        english: "English: Very Good",
        arabic: "Arabic: Native"
      }
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to relocate to Germany for training opportunities",
      note: "Documents: Fully translated & certified by the German Embassy"
    },
    interests: {
      title: "Interests",
      list: "Running, Swimming, Dominoes, Cloud Technology"
    }
  },
  de: {
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      certificates: "Zertifikate",
      education: "Bildung",
      skills: "Fähigkeiten",
      contact: "Kontakt"
    },
    hero: {
      greeting: "Hallo, ich bin",
      name: "Mohamed Elsharaby",
      title: "AWS Cloud Intern @ NTI",
      subtitle: "Ex: SWE Intern @ ITI | Systemintegration",
      cta: "Kontaktieren",
      download: "Lebenslauf"
    },
    about: {
      title: "Über mich",
      text: "Ich suche eine Ausbildung zum Fachinformatiker für Systemintegration. Ich habe einen Bachelor in Informatik von der Thebes Academy. Mein Notendurchschnitt ist 3,17 (entspricht etwa der deutschen Note 1,8). Mein Abschlussprojekt erhielt die Note 4,00 (entspricht der deutschen Note 1,0). Und ich habe die Allgemeine Hochschulreife naturwissenschaftlicher Richtung in Ägypten. Die Unterlagen sind ins Deutsche übersetzt und von der Botschaft beglaubigt.",
      current: "Derzeit absolviere ich ein Praktikum in der Netzwerkadministration am Nationalen Telekommunikationsinstitut (NTI). Ich arbeite mit AWS: virtuelle Server, Objektspeicher, IAM, VPC, serverlose Funktionen und Infrastructure as Code.",
      extra: "Als technischer Support-Spezialist reparierte ich Drucker und Kassensysteme, verwaltete Benutzerkonten und schulte Mitarbeitende. Ich kenne die Netzwerktechnik (CCNA, Firewalls, VLAN) und Linux. Ich spreche fließend Deutsch (B1+), sehr gut Englisch und Arabisch ist meine Muttersprache."
    },
    experience: {
      title: "Berufserfahrung",
      jobs: [
        {
          title: "AWS Cloud Engineer (Praktikum)",
          company: "National Telecommunication Institute (NTI)",
          period: "Okt 2025 – Heute",
          location: "Gizeh, Ägypten (Vor Ort)",
          duties: [
            "Praktische Erfahrung mit EC2, EBS, S3, RDS, Route 53, VPC (Peering), IAM und Cognito.",
            "Bereitstellung serverloser Anwendungen mit Lambda, Elastic Beanstalk und SQS.",
            "Infrastrukturverwaltung mit CloudFormation, Auto Scaling, ELB und CloudWatch.",
            "Implementierung von Sicherheitsstandards mit KMS und S3 File Gateway."
          ]
        },
        {
          title: "Full Stack Developer (Praktikum)",
          company: "Information Technology Institute (ITI)",
          period: "Aug 2024 – Sep 2024",
          location: "Port Said, Ägypten (Remote)",
          duties: [
            "Entwurf und Wartung relationaler Datenbankschemata in MySQL.",
            "Nutzung von Git und GitHub zur Versionskontrolle.",
            "Entwicklung von Serverlogik mit PHP und Front-End mit HTML5, CSS und JavaScript."
          ]
        },
        {
          title: "Technischer Support-Spezialist",
          company: "Shajarat Al-Durr",
          period: "Jun 2022 – Dez 2023",
          location: "Neu-Kairo, Ägypten",
          duties: [
            "Reparatur von Druckern und POS-Hardware; Softwareinstallation.",
            "Verwaltung von Benutzerkonten und Berechtigungen in Foodics.",
            "Überwachung von CCTV-Systemen und Schulung des Personals."
          ]
        }
      ]
    },
    certificates: {
      title: "Zertifikate & Abzeichen",
      items: [
        {
          name: "Huawei Cloud Developer Associate (HCCDA)",
          issuer: "Huawei Cloud Middle East",
          date: "Nov 2025",
          link: "https://drive.google.com/file/d/14ufEk3Gi6UYQY2obiTAXpKWC-jSnUq87/view?usp=sharing",
          icon: Cloud
        },
        {
          name: "AWS Academy Graduate - Cloud Architecting",
          issuer: "Amazon Web Services (AWS)",
          date: "2025",
          link: "https://www.credly.com/badges/7d656901-879e-4f07-b540-ee98e2105d51/public_url",
          icon: Server
        },
        {
          name: "AWS Academy Graduate - Cloud Foundations",
          issuer: "Amazon Web Services (AWS)",
          date: "2025",
          link: "https://www.credly.com/badges/920d780d-07a8-4178-86ce-2b1b1da2029d/print",
          icon: Database
        },
        {
          name: "SQL (Intermediate) Certificate",
          issuer: "HackerRank",
          date: "Apr 2022",
          link: "https://www.hackerrank.com/certificates/7a5e653b4263",
          icon: Database
        },
        {
          name: "Ubuntu Linux Essentials",
          issuer: "Information Technology Institute (ITI)",
          date: "Okt 2025",
          link: "#",
          icon: Terminal
        },
        {
          name: "Grundlagen Computernetzwerke",
          issuer: "Information Technology Institute (ITI)",
          date: "Okt 2025",
          link: "#",
          icon: Globe
        }
      ]
    },
    education: {
      title: "Bildung",
      degrees: [
        {
          degree: "Bachelor of Science in Informatik",
          institution: "Thebes Academy",
          period: "2021 – 2025",
          location: "Gizeh, Ägypten",
          details: [
            "GPA 3,17/4,00 (entspricht deutscher Note 1,8)",
            "Abschlussprojekt: 4,00/4,00 (entspricht 1,0)"
          ]
        },
        {
          degree: "Allgemeine Hochschulreife (Thanaweya Amma)",
          institution: "El-Hawamdiyya Sekundarschule",
          period: "2016 – 2020",
          location: "Gizeh, Ägypten",
          details: ["Naturwissenschaftlicher Zweig: Mathematik, Physik, Chemie, Sprachen"]
        }
      ]
    },
    skills: {
      title: "Fähigkeiten & Sprachen",
      technical: "Technologien",
      languages: "Sprachen",
      techList: [
        "AWS (EC2, S3, VPC, Lambda, IAM)",
        "Linux (Ubuntu) & Scripting",
        "CCNA (Routing, Switching, VPN, Firewall)",
        "SQL & MySQL",
        "PHP & Webentwicklung",
        "Git & GitHub"
      ],
      soft: ["Problemlösung", "Teamführung", "Kundensupport"],
      langList: {
        german: "Deutsch: B1+ (Fließend)",
        english: "Englisch: Sehr Gut",
        arabic: "Arabisch: Muttersprache"
      }
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Bereit für den Umzug nach Deutschland für Ausbildungsmöglichkeiten",
      note: "Dokumente: Vollständig übersetzt & von der deutschen Botschaft beglaubigt"
    },
    interests: {
      title: "Interessen",
      list: "Laufen, Schwimmen, Domino spielen, Cloud-Technologie"
    }
  }
};