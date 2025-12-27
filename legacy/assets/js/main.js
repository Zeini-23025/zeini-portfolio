document.addEventListener('DOMContentLoaded', () => {

    // --- THEME SWITCHER ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
        }
    });

    // --- MOBILE NAVIGATION ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Close mobile nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });


    // --- SCROLL REVEAL ANIMATION ---
    const sections = document.querySelectorAll('.content-section');

    const revealSection = (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- I18N / LANGUAGE SWITCHING ---
    const translations = {
        fr: {
            'nav.home': 'Accueil',
            'nav.about': 'À propos',
            'nav.skills': 'Compétences',
            'nav.projects': 'Projets',
            'nav.experience': 'Stages',
            'nav.contact': 'Contact',
            'hero.name': 'Je suis <span class="typedText"></span>',
            'hero.intro': 'Bonjour, je suis <strong>Zeini</strong>, un Étudiant en 3ᵉ année en Développement des Systèmes d’Information, passionné par la conception d’applications web modernes, la gestion de projets et l’exploration des nouvelles technologies.',
            'hero.hire': 'Me recruter',
            'hero.download': 'Télécharger CV <i class="uil uil-file-alt"></i>',
            'about.title': 'À propos de moi',
            'about.subtitle': "Spécialisé en Développement des Systèmes d’Information (DSI) à l'Institut Supérieur du Numérique, mon parcours est guidé par une passion pour la conception et la réalisation de solutions logicielles robustes. J'aime transformer des idées complexes en applications web performantes et intuitives, et je suis toujours à la recherche de défis pour approfondir mes connaissances et contribuer à des projets innovants.",
            'skills.title': 'Compétences Techniques',
            'skills.frontend': 'Frontend',
            'skills.backend': 'Backend',
            'skills.databases': 'Bases de Données',
            'skills.devops': 'Outils & DevOps',
            'project1.title': 'Gestion des projets intégrateurs et stages',
            'project1.desc': 'Plateforme web permettant aux étudiants de soumettre leurs candidatures en ligne et aux administrateurs de gérer efficacement les affectations.',
            'project2.title': 'Gestion des revenus immobiliers',
            'project2.desc': 'Application de suivi des revenus générés par les biens immobiliers et de gestion administrative.',
            'project3.title': 'MS-RCPSP – Planification de Projets',
            'project3.desc': 'Système intelligent de planification de projets utilisant l’IA pour recommander les meilleurs algorithmes d’ordonnancement.',
            'exp1.title': 'Gestion des plaintes en ligne',
            'exp1.company_label': 'Entreprise :',
            'exp1.company': 'MTINIMA',
            'exp1.desc': 'Développement d’une application web permettant aux utilisateurs de soumettre et suivre leurs réclamations.',
            'exp2.title': "SmarttAssure – Gestion d'assurance",
            'exp2.company_label': 'Entreprise :',
            'exp2.company': 'SMART',
            'exp2.desc': "Développement d'une application web pour la gestion des processus d’assurance.",
            'exp3.title': 'API pour plateforme freelance',
            'exp3.company_label': 'Entreprise :',
            'exp3.company': 'Elhilal',
            'exp3.desc': 'Développement d’une API REST et contribution à des projets internes (agencevoursa.com).',
            'projects.title': 'Projets Académiques',
            'experience.title': 'Expériences de Stage',
            'contact.title': 'Contact',
            'contact.subtitle': "Je suis ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour discuter de mon profil ou d'un projet.",
            'footer.copyright': '&copy; 2025 Zeini Cheikh. Tous droits réservés.',
            'typed.0': 'Développeur Web',
            'typed.1': 'Créatif',
            'typed.2': 'Full Stack',
            'typed.3': 'Passionné'
        },
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.experience': 'Experience',
            'nav.contact': 'Contact',
            'hero.name': 'I am <span class="typedText"></span>',
            'hero.intro': 'Hello, I am <strong>Zeini</strong>, a 3rd year student in Information Systems Development, passionate about designing modern web applications, project management and exploring new technologies.',
            'hero.hire': 'Hire me',
            'hero.download': 'Download CV <i class="uil uil-file-alt"></i>',
            'about.title': 'About Me',
            'about.subtitle': 'Specialized in Information Systems Development at the Higher Institute of Digital Technologies, I enjoy turning complex ideas into performant and user-friendly web applications. I am always seeking challenges to grow and contribute to innovative projects.',
            'skills.title': 'Technical Skills',
            'skills.frontend': 'Frontend',
            'skills.backend': 'Backend',
            'skills.databases': 'Databases',
            'skills.devops': 'Tools & DevOps',
            'project1.title': 'Integrator projects & internships management',
            'project1.desc': 'Web platform allowing students to submit applications online and administrators to efficiently manage assignments.',
            'project2.title': 'Real estate revenue management',
            'project2.desc': 'Application to track revenues generated by properties and manage administrative tasks.',
            'project3.title': 'MS-RCPSP – Project Scheduling',
            'project3.desc': 'Intelligent project scheduling system using AI to recommend optimal scheduling algorithms.',
            'exp1.title': 'Online complaints management',
            'exp1.company_label': 'Company :',
            'exp1.company': 'MTINIMA',
            'exp1.desc': 'Developed a web application allowing users to submit and track their complaints.',
            'exp2.title': "SmarttAssure – Insurance management",
            'exp2.company_label': 'Company :',
            'exp2.company': 'SMART',
            'exp2.desc': 'Developed a web application to manage insurance processes.',
            'exp3.title': 'API for freelance platform',
            'exp3.company_label': 'Company :',
            'exp3.company': 'Elhilal',
            'exp3.desc': 'Developed a REST API and contributed to internal projects (agencevoursa.com).',
            'projects.title': 'Academic Projects',
            'experience.title': 'Internships',
            'contact.title': 'Contact',
            'contact.subtitle': 'I am open to new opportunities and collaborations. Feel free to contact me to discuss my profile or a project.',
            'footer.copyright': '&copy; 2025 Zeini Cheikh. All rights reserved.',
            'typed.0': 'Web Developer',
            'typed.1': 'Creative',
            'typed.2': 'Full Stack',
            'typed.3': 'Passionate'
        },
        ar: {
            'nav.home': 'الرئيسية',
            'nav.about': 'من أنا',
            'nav.skills': 'المهارات',
            'nav.projects': 'المشاريع',
            'nav.experience': 'التدريبات',
            'nav.contact': 'اتصل بي',
            'hero.name': 'أنا <span class="typedText"></span>',
            'hero.intro': 'مرحبًا، أنا <strong>زيني</strong>، طالب في السنة الثالثة في تطوير نظم المعلومات، أهوى تصميم تطبيقات ويب حديثة، إدارة المشاريع واستكشاف التقنيات الجديدة.',
            'hero.hire': 'توظيفي',
            'hero.download': 'تحميل السيرة الذاتية <i class="uil uil-file-alt"></i>',
            'about.title': 'من أنا',
            'about.subtitle': 'متخصص في تطوير نظم المعلومات في المعهد العالي للرقمنة. أسعى لتحويل الأفكار المعقدة إلى تطبيقات ويب فعالة وسهلة الاستخدام، ودائمًا أبحث عن تحديات لتطوير مهاراتي والمساهمة في مشاريع مبتكرة.',
            'skills.title': 'المهارات التقنية',
            'skills.frontend': 'الواجهة الأمامية',
            'skills.backend': 'الخلفية',
            'skills.databases': 'قواعد البيانات',
            'skills.devops': 'الأدوات و DevOps',
            'project1.title': 'إدارة مشاريع التخرج والتدريبات',
            'project1.desc': 'منصة ويب تتيح للطلاب تقديم طلباتهم عبر الإنترنت وللمسؤولين إدارة التعيينات بكفاءة.',
            'project2.title': 'إدارة عائدات العقارات',
            'project2.desc': 'تطبيق لتتبع العائدات الناتجة عن الممتلكات وإدارة المهام الإدارية.',
            'project3.title': 'MS-RCPSP – تخطيط المشاريع',
            'project3.desc': 'نظام ذكي لتخطيط المشاريع يستخدم الذكاء الاصطناعي للتوصية بأفضل خوارزميات الجدولة.',
            'exp1.title': 'إدارة الشكاوى عبر الإنترنت',
            'exp1.company_label': 'الشركة :',
            'exp1.company': 'MTINIMA',
            'exp1.desc': 'تطوير تطبيق ويب يتيح للمستخدمين تقديم ومتابعة شكاواهم.',
            'exp2.title': 'SmarttAssure – إدارة التأمين',
            'exp2.company_label': 'الشركة :',
            'exp2.company': 'SMART',
            'exp2.desc': 'تطوير تطبيق ويب لإدارة عمليات التأمين.',
            'exp3.title': 'واجهة برمجة تطبيقات لمنصة المستقلين',
            'exp3.company_label': 'الشركة :',
            'exp3.company': 'Elhilal',
            'exp3.desc': 'تطوير واجهة REST والمساهمة في مشاريع داخلية (agencevoursa.com).',
            'projects.title': 'مشاريع أكاديمية',
            'experience.title': 'خبرات التدريب',
            'contact.title': 'اتصل بي',
            'contact.subtitle': 'أنا متاح لفرص جديدة والتعاون. لا تتردد في التواصل لمناقشة ملفي الشخصي أو مشروع.',
            'footer.copyright': '&copy; 2025 زيني شيخ. جميع الحقوق محفوظة.',
            'typed.0': 'مطور ويب',
            'typed.1': 'مبدع',
            'typed.2': 'Full Stack',
            'typed.3': 'شغوف'
        }
    };

    // Helper to build typed strings array
    const getTypedStrings = (lang) => {
        return [translations[lang]['typed.0'], translations[lang]['typed.1'], translations[lang]['typed.2'], translations[lang]['typed.3']];
    };

    // Apply translations to elements with data-i18n
    function applyTranslations(lang) {
        const nodes = document.querySelectorAll('[data-i18n]');
        nodes.forEach(node => {
            const key = node.getAttribute('data-i18n');
            const value = translations[lang][key];
            if (value !== undefined) {
                node.innerHTML = value;
            }
        });
    }

    // --- LANGUAGE SWITCHER ---
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('lang') || document.documentElement.lang || 'fr';

    // Typed.js instance reference
    let typedInstance = null;

    function initTyped(strings) {
        // Destroy previous instance if exists
        try {
            if (typedInstance && typeof typedInstance.destroy === 'function') {
                typedInstance.destroy();
            }
        } catch (e) {
            // ignore
        }

        if (document.querySelector('.typedText')) {
            typedInstance = new Typed('.typedText', {
                strings: strings,
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
        }
    }

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        // RTL handling
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
        // Apply translations
        applyTranslations(lang);
        // Init typed with language strings
        initTyped(getTypedStrings(lang));
        // Update active class on buttons
        langButtons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === lang));
    }

    // Attach listeners
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Initialize language on load
    setLanguage(currentLang);

    // --- TYPED.JS is initialized by setLanguage -> initTyped ---

});

// Keyframes for nav links animation (can't be in a separate CSS file if we want to dynamically add it)
const style = document.createElement('style');
style.innerHTML = `
@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
}
`;
document.head.appendChild(style);
