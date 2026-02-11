// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards, solution cards, and pricing cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .solution-card, .pricing-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Contact Form Handling (will be initialized after language setup)

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Language Translations
const translations = {
    en: {
        'nav.services': 'Services',
        'nav.solutions': 'Solutions',
        'nav.support': 'Support Programs',
        'nav.contact': 'Contact',
        'hero.title': 'Expert Salesforce Technical Architecture & Development',
        'hero.subtitle': 'Fast development, deep company knowledge, and immediate problem-solving. Get the technical expertise you need to power your Salesforce platform.',
        'hero.getStarted': 'Get Started',
        'hero.learnMore': 'Learn More',
        'features.title': 'Why Choose Our Services?',
        'features.subtitle': 'Expert Salesforce technical services designed to accelerate your business',
        'features.arch.title': 'Technical Architecture',
        'features.arch.desc': 'Expert technical architecture services to design scalable, robust Salesforce solutions. We build foundations that grow with your business.',
        'features.dev.title': 'Fast Development',
        'features.dev.desc': 'Rapid development cycles that deliver results quickly. We understand that time-to-market matters, and we deliver quality solutions fast.',
        'features.knowledge.title': 'Deep Company Knowledge',
        'features.knowledge.desc': 'We take time to understand your business, processes, and goals. Our solutions are built with your company\'s unique context in mind.',
        'features.fixing.title': 'Immediate Problem Fixing',
        'features.fixing.desc': 'When issues arise, we respond fast. Get immediate support and rapid fixes to keep your Salesforce org running smoothly.',
        'features.plugin.title': 'Salesforce Plugin Development',
        'features.plugin.desc': 'Custom Salesforce plugins and extensions tailored to your needs. Coming soon - specialized plugins to extend your platform capabilities.',
        'features.support.title': 'Flexible Support Programs',
        'features.support.desc': 'Support programs tailored to your organization size and SLA requirements. From small teams to enterprise, we have the right plan for you.',
        'solutions.title': 'Our Services',
        'solutions.subtitle': 'Comprehensive Salesforce technical services for every business need',
        'solutions.arch.title': 'Technical Architecture',
        'solutions.arch.desc': 'Design and implement robust Salesforce architectures that scale with your business. We create solid foundations for long-term success.',
        'solutions.arch.item1': 'System Design',
        'solutions.arch.item2': 'Scalability Planning',
        'solutions.arch.item3': 'Best Practices',
        'solutions.dev.title': 'Fast Development',
        'solutions.dev.desc': 'Rapid development services that deliver quality solutions quickly. From customizations to full implementations, we move fast without compromising quality.',
        'solutions.dev.item1': 'Custom Development',
        'solutions.dev.item2': 'Quick Turnarounds',
        'solutions.dev.item3': 'Agile Methodology',
        'solutions.problem.title': 'Immediate Problem Solving',
        'solutions.problem.desc': 'When critical issues arise, we\'re here to fix them fast. Get immediate support and rapid resolution to keep your operations running smoothly.',
        'solutions.problem.item1': 'Emergency Support',
        'solutions.problem.item2': 'Rapid Troubleshooting',
        'solutions.problem.item3': 'Quick Fixes',
        'solutions.plugin.title': 'Salesforce Plugin Development',
        'solutions.plugin.desc': 'Custom Salesforce plugins and extensions to extend your platform capabilities. Specialized solutions tailored to your unique requirements.',
        'solutions.plugin.item1': 'Custom Plugins',
        'solutions.plugin.item2': 'Platform Extensions',
        'solutions.plugin.item3': 'Coming Soon',
        'pricing.title': 'Support Programs',
        'pricing.subtitle': 'Choose the support program that fits your organization size and SLA requirements',
        'pricing.custom': 'Custom Pricing',
        'pricing.popular': 'Most Popular',
        'pricing.getStarted': 'Get Started',
        'pricing.contactSales': 'Contact Sales',
        'pricing.period': '/month',
        'pricing.small.title': 'Small Org',
        'pricing.small.currency': '₪',
        'pricing.small.amount': '1,000',
        'pricing.small.item1': 'Small organization support',
        'pricing.small.item2': 'Standard SLA',
        'pricing.small.item3': 'Email & phone support',
        'pricing.small.item4': 'Technical architecture consulting',
        'pricing.small.item5': 'Fast development services',
        'pricing.medium.title': 'Medium Org',
        'pricing.medium.currency': '₪',
        'pricing.medium.amount': '3,000',
        'pricing.medium.item1': 'Medium organization support',
        'pricing.medium.item2': 'Enhanced SLA',
        'pricing.medium.item3': 'Priority support',
        'pricing.medium.item4': 'Dedicated technical resources',
        'pricing.medium.item5': 'Immediate problem fixing',
        'pricing.medium.item6': 'Company knowledge integration',
        'pricing.enterprise.title': 'Enterprise',
        'pricing.enterprise.item1': 'Large enterprise support',
        'pricing.enterprise.item2': 'Premium SLA',
        'pricing.enterprise.item3': '24/7 dedicated support',
        'pricing.enterprise.item4': 'Full technical architecture',
        'pricing.enterprise.item5': 'Rapid development cycles',
        'pricing.enterprise.item6': 'Deep company integration',
        'pricing.enterprise.item7': 'Immediate response guarantee',
        'contact.title': 'Get in Touch',
        'contact.subtitle': 'Ready to accelerate your Salesforce development? Let\'s discuss how our technical architecture and fast development services can help your organization.',
        'form.name': 'Name',
        'form.email': 'Email',
        'form.message': 'Message',
        'form.send': 'Send Message',
        'form.sending': 'Sending...',
        'form.success': 'Message sent successfully! ✓',
        'form.error': 'Error: Failed to send message',
        'form.networkError': 'Network error: Unable to send message. Please try again later.',
        'footer.description': 'Expert Salesforce technical architecture, fast development, and immediate problem-solving for businesses worldwide.',
        'footer.services': 'Services',
        'footer.company': 'Company',
        'footer.legal': 'Legal',
        'footer.documentation': 'Documentation',
        'footer.about': 'About Us',
        'footer.blog': 'Blog',
        'footer.careers': 'Careers',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.security': 'Security',
        'footer.compliance': 'Compliance',
        'footer.copyright': '© 2024 w3b.works. All rights reserved.'
    },
    he: {
        'nav.services': 'שירותים',
        'nav.solutions': 'פתרונות',
        'nav.support': 'תוכניות תמיכה',
        'nav.contact': 'צור קשר',
        'hero.title': 'ארכיטקטורה טכנית ופיתוח Salesforce מקצועי',
        'hero.subtitle': 'פיתוח מהיר, היכרות מעמיקה עם החברה ופתרון בעיות מיידי. קבלו את המומחיות הטכנית שאתם צריכים להפעלת פלטפורמת Salesforce שלכם.',
        'hero.getStarted': 'התחל עכשיו',
        'hero.learnMore': 'למד עוד',
        'features.title': 'למה לבחור בשירותים שלנו?',
        'features.subtitle': 'שירותים טכניים מקצועיים של Salesforce המיועדים להאיץ את העסק שלכם',
        'features.arch.title': 'ארכיטקטורה טכנית',
        'features.arch.desc': 'שירותי ארכיטקטורה טכנית מקצועיים לתכנון פתרונות Salesforce חזקים וניתנים להרחבה. אנו בונים יסודות שגדלים עם העסק שלכם.',
        'features.dev.title': 'פיתוח מהיר',
        'features.dev.desc': 'מחזורי פיתוח מהירים שמספקים תוצאות במהירות. אנו מבינים שזמן-לשוק חשוב, ואנו מספקים פתרונות איכותיים במהירות.',
        'features.knowledge.title': 'היכרות מעמיקה עם החברה',
        'features.knowledge.desc': 'אנו לוקחים זמן להבין את העסק, התהליכים והמטרות שלכם. הפתרונות שלנו נבנים תוך התחשבות בהקשר הייחודי של החברה שלכם.',
        'features.fixing.title': 'תיקון בעיות מיידי',
        'features.fixing.desc': 'כשבעיות מתעוררות, אנו מגיבים במהירות. קבלו תמיכה מיידית ותיקונים מהירים כדי לשמור על ארגון Salesforce שלכם פועל בצורה חלקה.',
        'features.plugin.title': 'פיתוח תוספים ל-Salesforce',
        'features.plugin.desc': 'תוספים והרחבות מותאמים אישית ל-Salesforce המותאמים לצרכים שלכם. בקרוב - תוספים מיוחדים להרחבת יכולות הפלטפורמה שלכם.',
        'features.support.title': 'תוכניות תמיכה גמישות',
        'features.support.desc': 'תוכניות תמיכה המותאמות לגודל הארגון שלכם ולדרישות ה-SLA. מצוותים קטנים ועד ארגונים גדולים, יש לנו את התוכנית הנכונה עבורכם.',
        'solutions.title': 'השירותים שלנו',
        'solutions.subtitle': 'שירותים טכניים מקיפים של Salesforce לכל צורך עסקי',
        'solutions.arch.title': 'ארכיטקטורה טכנית',
        'solutions.arch.desc': 'תכנון ויישום ארכיטקטורות Salesforce חזקות שגדלות עם העסק שלכם. אנו יוצרים יסודות איתנים להצלחה ארוכת טווח.',
        'solutions.arch.item1': 'תכנון מערכת',
        'solutions.arch.item2': 'תכנון יכולת הרחבה',
        'solutions.arch.item3': 'שיטות עבודה מומלצות',
        'solutions.dev.title': 'פיתוח מהיר',
        'solutions.dev.desc': 'שירותי פיתוח מהירים שמספקים פתרונות איכותיים במהירות. מהתאמות אישיות ועד יישומים מלאים, אנו נעים מהר מבלי להתפשר על איכות.',
        'solutions.dev.item1': 'פיתוח מותאם אישית',
        'solutions.dev.item2': 'זמני תגובה מהירים',
        'solutions.dev.item3': 'מתודולוגיה אג\'ילית',
        'solutions.problem.title': 'פתרון בעיות מיידי',
        'solutions.problem.desc': 'כשבעיות קריטיות מתעוררות, אנו כאן כדי לתקן אותן במהירות. קבלו תמיכה מיידית ופתרון מהיר כדי לשמור על הפעילות שלכם פועלת בצורה חלקה.',
        'solutions.problem.item1': 'תמיכה דחופה',
        'solutions.problem.item2': 'איתור בעיות מהיר',
        'solutions.problem.item3': 'תיקונים מהירים',
        'solutions.plugin.title': 'פיתוח תוספים ל-Salesforce',
        'solutions.plugin.desc': 'תוספים והרחבות מותאמים אישית ל-Salesforce להרחבת יכולות הפלטפורמה שלכם. פתרונות מיוחדים המותאמים לדרישות הייחודיות שלכם.',
        'solutions.plugin.item1': 'תוספים מותאמים אישית',
        'solutions.plugin.item2': 'הרחבות פלטפורמה',
        'solutions.plugin.item3': 'בקרוב',
        'pricing.title': 'תוכניות תמיכה',
        'pricing.subtitle': 'בחרו את תוכנית התמיכה המתאימה לגודל הארגון שלכם ולדרישות ה-SLA',
        'pricing.custom': 'מחיר מותאם',
        'pricing.popular': 'הכי פופולרי',
        'pricing.getStarted': 'התחל עכשיו',
        'pricing.contactSales': 'צור קשר עם מכירות',
        'pricing.period': '/חודש',
        'pricing.small.title': 'ארגון קטן',
        'pricing.small.currency': '₪',
        'pricing.small.amount': '1,000',
        'pricing.small.item1': 'תמיכה לארגון קטן',
        'pricing.small.item2': 'SLA סטנדרטי',
        'pricing.small.item3': 'תמיכה באימייל ובטלפון',
        'pricing.small.item4': 'ייעוץ ארכיטקטורה טכנית',
        'pricing.small.item5': 'שירותי פיתוח מהיר',
        'pricing.medium.title': 'ארגון בינוני',
        'pricing.medium.currency': '₪',
        'pricing.medium.amount': '3,000',
        'pricing.medium.item1': 'תמיכה לארגון בינוני',
        'pricing.medium.item2': 'SLA משופר',
        'pricing.medium.item3': 'תמיכה בעדיפות',
        'pricing.medium.item4': 'משאבים טכניים ייעודיים',
        'pricing.medium.item5': 'תיקון בעיות מיידי',
        'pricing.medium.item6': 'שילוב היכרות עם החברה',
        'pricing.enterprise.title': 'ארגון גדול',
        'pricing.enterprise.item1': 'תמיכה לארגון גדול',
        'pricing.enterprise.item2': 'SLA פרימיום',
        'pricing.enterprise.item3': 'תמיכה ייעודית 24/7',
        'pricing.enterprise.item4': 'ארכיטקטורה טכנית מלאה',
        'pricing.enterprise.item5': 'מחזורי פיתוח מהירים',
        'pricing.enterprise.item6': 'שילוב עמוק עם החברה',
        'pricing.enterprise.item7': 'הבטחת תגובה מיידית',
        'contact.title': 'צור קשר',
        'contact.subtitle': 'מוכנים להאיץ את פיתוח ה-Salesforce שלכם? בואו נדון כיצד שירותי הארכיטקטורה הטכנית והפיתוח המהיר שלנו יכולים לעזור לארגון שלכם.',
        'form.name': 'שם',
        'form.email': 'אימייל',
        'form.message': 'הודעה',
        'form.send': 'שלח הודעה',
        'form.sending': 'שולח...',
        'form.success': 'ההודעה נשלחה בהצלחה! ✓',
        'form.error': 'שגיאה: נכשל בשליחת ההודעה',
        'form.networkError': 'שגיאת רשת: לא ניתן לשלוח הודעה. אנא נסה שוב מאוחר יותר.',
        'footer.description': 'ארכיטקטורה טכנית מקצועית של Salesforce, פיתוח מהיר ופתרון בעיות מיידי לעסקים ברחבי העולם.',
        'footer.services': 'שירותים',
        'footer.company': 'חברה',
        'footer.legal': 'משפטי',
        'footer.documentation': 'תיעוד',
        'footer.about': 'אודותינו',
        'footer.blog': 'בלוג',
        'footer.careers': 'קריירה',
        'footer.privacy': 'מדיניות פרטיות',
        'footer.terms': 'תנאי שירות',
        'footer.security': 'אבטחה',
        'footer.compliance': 'תאימות',
        'footer.copyright': '© 2024 w3b.works. כל הזכויות שמורות.'
    }
};

// Language Management
let currentLang = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language toggle button
    const langToggle = document.getElementById('langText');
    if (langToggle) {
        langToggle.textContent = lang === 'en' ? 'עברית' : 'English';
    }
    
    // Update body font family for Hebrew
    if (lang === 'he') {
        document.body.style.fontFamily = "'Heebo', 'Inter', sans-serif";
    } else {
        document.body.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif";
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    // Language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'he' : 'en';
            setLanguage(newLang);
        });
    }
    
    // Contact Form Handling with translations
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');
    
    if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (statusMessage) {
            statusMessage.textContent = translations[currentLang]['form.sending'];
            statusMessage.className = "status-message status-info";
        }

        const body = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        try {
            const resp = await fetch("https://me.w3b.works/mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });

            const data = await resp.json();

            if (data.ok) {
                if (statusMessage) {
                    statusMessage.textContent = translations[currentLang]['form.success'];
                    statusMessage.className = "status-message status-success";
                }
                contactForm.reset();
                
                setTimeout(() => {
                    if (statusMessage) {
                        statusMessage.textContent = "";
                        statusMessage.className = "status-message";
                    }
                }, 5000);
            } else {
                if (statusMessage) {
                    statusMessage.textContent = translations[currentLang]['form.error'] + (data.error ? ': ' + data.error : '');
                    statusMessage.className = "status-message status-error";
                }
            }
        } catch (err) {
            if (statusMessage) {
                statusMessage.textContent = translations[currentLang]['form.networkError'];
                statusMessage.className = "status-message status-error";
            }
            console.error(err);
        }
    });
    }
});

