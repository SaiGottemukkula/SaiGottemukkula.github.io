export const siteConfig = {
  name: "Sai Gottemukkula",
  title: "Junior Computer Engineering Student",
  description:
    "Portfolio of Sai Gottemukkula – Junior Computer Engineering student at UMass Amherst specializing in embedded systems, PCB design, and safety-critical software testing.",
  accentColor: "#1d4ed8",
  social: {
    email: "saigthefirst@gmail.com",
    linkedin: "https://www.linkedin.com/in/sai-gottemukkula",
    github: "https://github.com/saigthefirst",
  },
  aboutMe:
    "I am an undergraduate Computer Engineering student at the University of Massachusetts Amherst (Class of 2028) specializing in the intersection of embedded hardware engineering and rigorous software validation. My technical background bridges hands-on engineering initiative (multi-layer PCB design in KiCad, SMT soldering, microcontroller firmware architecture) with professional verification discipline gained through validating mission-critical Onboard Maintenance Systems (OMS) at Collins Aerospace. I thrive on 'work that has to work'—engineering complex, physical systems designed to operate flawlessly under real-world constraints.",
  skills: [
    "C/C++",
    "Python",
    "RP2040",
    "CircuitPython",
    "KiCad (PCB Design)",
    "HITL Avionics Testing",
    "Java",
    "MATLAB",
    "Git / Subversion (SVN)",
    "Docker & CI/CD",
    "LTspice",
    "Linux",
  ],
  projects: [
    {
      name: "Custom Embedded Mechanical Keyboard (Full-Lifecycle Co-Design)",
      description:
        "Engineered a custom 60% mechanical keyboard from first principles. Designed multi-layer schematics and routed PCBs in KiCad, hand-soldered SMT/through-hole components, developed RP2040 firmware in CircuitPython (KMK Framework), and resolved low-level Windows USB HID descriptor enumeration issues.",
      link: "https://github.com/saigthefirst",
      skills: ["KiCad", "RP2040", "CircuitPython", "USB-HID", "PCB Design"],
    },
    {
      name: "Computational Power Series & Error Analysis",
      description:
        "Built a mathematical simulation application in MATLAB to model high-order Taylor series polynomial expansions for non-linear functions, computing dynamic convergence intervals and plotting numerical deviation errors across iterative steps.",
      link: "https://github.com/saigthefirst",
      skills: ["MATLAB", "Numerical Analysis", "Data Visualization", "Algorithms"],
    },
    {
      name: "High School Schedule Web Application",
      description:
        "Co-developed and deployed a responsive full-stack schedule management web application serving 300+ active students to streamline rotating block periods, featuring an intuitive timetable interface and RESTful preference storage.",
      link: "https://github.com/saigthefirst",
      skills: ["JavaScript", "HTML/CSS", "REST APIs", "Full-Stack Development"],
    },
    {
      name: "VEX Robotics (Team 15797A) — World Championship Qualifier",
      description:
        "Served as Hardware Integrator and Key Builder, designing, assembling, and iterating physical subsystems (drivetrains, intake rollers, pneumatic lifts). Executed high-pressure pit diagnostics and won multiple New England regional 1st-place awards, qualifying for the 2023 VEX World Championship.",
      link: "https://github.com/saigthefirst",
      skills: ["Hardware Integration", "Robotics", "Rapid Diagnostics", "Pneumatics"],
    },
    {
      name: "Google Code Next: 3D Game Dev Hackathon (3rd Place)",
      description:
        "Collaborated in a 4-person team to build a 3D platformer game within a strict 48-hour sprint using the Crayta engine. Served as lead level designer, implementing character movement mechanics, collision logic, and multi-tiered level architectures.",
      link: "https://github.com/saigthefirst",
      skills: ["Game Logic", "Level Design", "Team Collaboration"],
    },
  ],
  experience: [
    {
      company: "Collins Aerospace",
      title: "Software Engineering Intern",
      dateRange: "Jun 2026 - Aug 2026",
      bullets: [
        "Conducted automated and manual software testing and validation for 7 complex Onboard Maintenance Systems (OMS) applications using the Vista application.",
        "Gained hands-on technical proficiency with specialized avionics test stands (Hardware-in-the-Loop) and resolved anomalies in test scripts, communication timeouts, and environment configuration flags.",
        "Engineered an automated Excel-based defect tracking and analytics dashboard to capture real-time metrics for completion, defects, and test turnaround times.",
        "Authored and maintained multiple comprehensive 60+ page compliance testing documents recording procedures, execution artifacts, and pass/fail metrics under strict quality standards.",
      ],
    },
    {
      company: "Code Ninjas (Waltham, MA)",
      title: "Code Sensei (Lead Instructor)",
      dateRange: "Sep 2022 - May 2024",
      bullets: [
        "Instructed middle school students in programming fundamentals, computational thinking, and hands-on software debugging.",
        "Guided students through interactive logic development, game creation, and foundational robotics projects.",
      ],
    },
  ],
  education: [
    {
      school: "University of Massachusetts Amherst",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "Aug 2024 - Expected May 2028",
      achievements: [
        "College of Engineering | Lexington, MA",
        "Key Coursework: Circuits & Electronics, VLSI Design, Operating Systems, Data Structures & Algorithms, Linear Algebra, AI & Data Science",
      ],
    },
    {
      school: "Lexington High School",
      degree: "High School Diploma",
      dateRange: "Sep 2020 - Jun 2024",
      achievements: [
        "VEX Robotics Team 15797A — 2023 World Championship Qualifier & Multi-Regional Champion",
        "Google Code Next Program Participant & 3rd Place Hackathon Winner",
      ],
    },
  ],
};
