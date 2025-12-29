
export const PROFILE = {
    name: "Zeini Cheikh",
    title: "Student in Information Systems Development",
    email: "zeiny.cheikh.dev@gmail.com",
    github: "https://github.com/Zeini-23025",
    reddit: "https://www.reddit.com/user/Zeini-25",
    cv: "/legacy/cv/ZeinyCV.pdf", // Pointing to legacy location for now
    bio: "Student in 3rd year Information Systems Development. Passionate about web application design, project management, and new technologies. Specialized in robust software solutions."
};

export const SKILLS = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"] },
    { category: "Backend", items: ["Python", "PHP", "Java", "Django", "Flask", "Spring"] },
    { category: "Databases", items: ["SQL", "MySQL", "MongoDB"] },
    { category: "DevOps & Tools", items: ["Docker", "Git", "GitHub", "Linux"] }
];

export const PROJECTS = [
    // Academic Projects
    {
        id: "techintervene",
        title: "TechIntervene - Technical Interventions Management",
        description: "Web application developed with Flask and SQLite for managing technical interventions between technicians and clients. Features authentication, CRUD operations for technicians/clients/interventions, and statistics visualization with Plotly.",
        tags: ["Python", "Flask", "SQLite", "Plotly", "Jinja2", "Docker"],
        type: "Academic",
        github: "https://github.com/Zeini-23025/TechIntervene"
    },
    {
        id: "bookflow",
        title: "BookFlow - Library Management System",
        description: "Complete library management web application with admin dashboard for managing books, categories, loans, users, and history. Users can browse books, borrow/return items, and view their loan history.",
        tags: ["Python", "Django", "SQLite", "Bootstrap", "HTML", "CSS"],
        type: "Academic",
        github: "https://github.com/Zeini-23025/bookflow"
    },
    {
        id: "ecommerce",
        title: "E-Commerce Platform",
        description: "Full-featured e-commerce application in native PHP with MySQL. Users can create accounts, browse products, filter by category, manage shopping cart, and place orders. Admin interface for managing users, products, categories, and orders.",
        tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        type: "Academic",
        github: "https://github.com/Zeini-23025/e-commerce"
    },
    {
        id: "schoolmanagement",
        title: "School Management System",
        description: "Modular and extensible web application for managing schools, including students, teachers, classes, and attendance tracking. Built with modern tech stack and RESTful API architecture.",
        tags: ["React", "Vite", "TypeScript", "Django", "DRF", "SQLite"],
        type: "Academic",
        github: "https://github.com/Zeini-23025/school_management"
    },
    {
        id: "indiehub",
        title: "IndieHub - Indie Game Platform",
        description: "Web application centralizing independent games and promoting developers from underrepresented communities. Features game submission, content validation system, game browser, developer dashboard, user library management, and bilingual support (English/Arabic with RTL/LTR).",
        tags: ["React", "TypeScript", "Django", "DRF", "Vite", "Axios"],
        type: "Academic",
        github: "https://github.com/Zeini-23025/IndieHub"
    },
    {
        id: "msrcpsp",
        title: "MS-RCPSP with Artificial Intelligence",
        description: "Intelligent project scheduling system for Multi-Skill Resource-Constrained Project Scheduling Problem. Uses AI to recommend the best scheduling algorithms for optimal project planning.",
        tags: ["AI", "Python", "Machine Learning", "Operational Research"],
        type: "Academic",
        github: "https://github.com/Zeini-23025/PI_S4_MS-RCPSP"
    },
    {
        id: "realestate",
        title: "Real Estate Revenue Management",
        description: "Platform developed with React frontend and Django backend for managing real estate property revenues. Simplifies property and rental management, tracks rental income, manages payments, and handles tenant information through an interactive interface.",
        tags: ["React", "Django", "Django REST", "HTML5", "CSS3", "JavaScript"],
        type: "Academic"
    },
    {
        id: "projectmanagement",
        title: "Internship & Project Management Platform",
        description: "Web platform allowing students to submit internships and integrated projects online, with comprehensive admin interface for managing assignments and tracking progress.",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        type: "Academic",
        github: "https://github.com/Zeini-23025/projet-integrateur"
    },

    // Professional Experience
    {
        id: "smarttassure",
        title: "SmarttAssure",
        company: "SMART",
        duration: "2 months - 2025",
        description: "Insurance process management web application with React frontend and Django backend. Features JWT authentication, RESTful API architecture, and interactive Swagger documentation for seamless insurance workflow management.",
        tags: ["React", "Django", "Django REST", "JWT", "Swagger", "Bootstrap"],
        type: "Experience"
    },
    {
        id: "freelanceplatform",
        title: "Freelance Platform API & Agency Projects",
        company: "Elhilal",
        duration: "2 months - 2025",
        description: "Developed complete REST API for freelance platform connecting freelancers and clients. Contributed to company projects including agencevoursa.com. Built secure environment for project management, task tracking, payments, and communication.",
        tags: ["Django REST", "React", "API Development", "PostgreSQL"],
        type: "Experience"
    },
    {
        id: "complaintsmanagement",
        title: "Online Complaints Management System",
        company: "MTINIMA",
        duration: "1 month - 2024",
        description: "Simple multilingual web application in PHP for managing user complaints. Supports three languages (French, English, Arabic) with full CRUD operations for complaints, detailed complaint listing, and MySQL database integration.",
        tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Multilingual"],
        type: "Experience"
    }
];
