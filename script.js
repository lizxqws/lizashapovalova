// Translations object
const translations = {
    uk: {
        'nav.home': 'Головна',
        'nav.biography': 'Біографія',
        'nav.media': 'Медіа',
        'nav.contacts': 'Контакти',
        'home.name': 'Єлизавета Шаповалова',
        'home.description': 'Піаністка, яка поєднує технічну майстерність з глибокою емоційною виразністю. Виконання відзначається тонким розумінням стилю та різноманітністю репертуару від бароко до сучасної музики.',
        'biography.title': 'Біографія',
        'biography.education.title': 'Освіта',
        'biography.education.text': 'Єлизавета Шаповалова — українська піаністка, народилася 6 травня 2009 року. Навчається у Харківському державному музичному ліцеї (ХДМЛ) у класі Н.О. Сутулової. Саме тут було закладено міцний фундамент її професійного становлення, сформовано технічну базу та художнє мислення. Нині проживає та продовжує навчання в Німеччині, поєднуючи міжнародний досвід із традиціями української фортепіанної школи.',
        'biography.competitions.title': 'Конкурсна діяльність',
        'biography.competitions.intro': 'Активно бере участь у міжнародних та німецьких конкурсах, демонструючи стабільні високі результати. Серед досягнень:',
        'biography.competitions.achievement1': 'I премія — 22. Westfälischer van Bremen Klavierwettbewerb (2025)',
        'biography.competitions.achievement2': 'I премія — International Competition Music Academy FORTE (Бельгія, 2024)',
        'biography.competitions.achievement3': 'II премія — 65. Grotrian-Steinweg Klavierspiel-Wettbewerb (2024)',
        'biography.competitions.achievement4': 'Grand Prix — International Festival "Ukraine Tag", Кельн (2023)',
        'biography.concerts.title': 'Концертна діяльність',
        'biography.concerts.text': 'Єлизавета виступає як сольно, так і в рамках концертних програм та фестивалів. Її концертні виступи вирізняються продуманістю програм і стилістичною цілісністю. Сценічний досвід сприяє формуванню художньої зрілості, впевненості та глибшого осмислення музичного матеріалу.',
        'biography.approach.title': 'Творчий підхід',
        'biography.approach.text': 'У роботі над творами особливу увагу приділяє якості звуку, стилістичній точності та осмисленій інтерпретації. Її виконання поєднує технічну майстерність із глибокою емоційною виразністю. Вона постійно працює над розширенням репертуару та розвитком власної художньої індивідуальності.',
        'media.title': 'Медіа',
        'media.videos.title': 'Відео',
        'media.gallery.title': 'Фотогалерея',
        'contacts.title': 'Контакти',
        'contacts.description': 'Для концертних пропозицій та співпраці звертайтеся за електронною поштою.',
        'contacts.gmail': 'Відкрити в Gmail',
        'contacts.copy': 'Копіювати email',
        'contacts.copied': 'Скопійовано!',
        'footer.name': 'Єлизавета Шаповалова',
        'footer.rights': 'Всі права захищені.'
    },
    en: {
        'nav.home': 'Home',
        'nav.biography': 'Biography',
        'nav.media': 'Media',
        'nav.contacts': 'Contacts',
        'home.name': 'Yelyzaveta Shapovalova',
        'home.description': 'A pianist who combines technical mastery with deep emotional expressiveness. Her performances are distinguished by a subtle understanding of style and a repertoire spanning baroque to contemporary music.',
        'biography.title': 'Biography',
        'biography.education.title': 'Education',
        'biography.education.text': 'Yelyzaveta Shapovalova is a Ukrainian pianist, born on 6 May 2009. She studies at the Kharkiv State Music Lyceum (KhSML) in the class of N. O. Sutulova. It was there that a solid foundation for her professional development was laid, and her technical base and artistic thinking were formed. She currently lives and continues her studies in Germany, combining international experience with the traditions of the Ukrainian piano school.',
        'biography.competitions.title': 'Competition Activity',
        'biography.competitions.intro': 'She actively participates in international and German competitions, demonstrating consistently high results. Among her achievements:',
        'biography.competitions.achievement1': '1st Prize — 22. Westfälischer van Bremen Klavierwettbewerb (2025)',
        'biography.competitions.achievement2': '1st Prize — International Competition Music Academy FORTE (Belgium, 2024)',
        'biography.competitions.achievement3': '2nd Prize — 65. Grotrian-Steinweg Klavierspiel-Wettbewerb (2024)',
        'biography.competitions.achievement4': 'Grand Prix — International Festival "Ukraine Tag", Cologne (2023)',
        'biography.concerts.title': 'Concert Activity',
        'biography.concerts.text': 'Yelyzaveta performs both solo and within concert programmes and festivals. Her concert appearances are distinguished by well-considered programmes and stylistic coherence. Stage experience contributes to the formation of artistic maturity, confidence, and a deeper understanding of the musical material.',
        'biography.approach.title': 'Creative Approach',
        'biography.approach.text': 'In her work on repertoire, she pays particular attention to sound quality, stylistic accuracy, and thoughtful interpretation. Her performance combines technical mastery with deep emotional expressiveness. She continually works on expanding her repertoire and developing her own artistic individuality.',
        'media.title': 'Media',
        'media.videos.title': 'Videos',
        'media.gallery.title': 'Photo Gallery',
        'contacts.title': 'Contacts',
        'contacts.description': 'For concert proposals and collaboration, please contact via email.',
        'contacts.gmail': 'Open in Gmail',
        'contacts.copy': 'Copy email',
        'contacts.copied': 'Copied!',
        'footer.name': 'Yelyzaveta Shapovalova',
        'footer.rights': 'All rights reserved.'
    },
    de: {
        'nav.home': 'Startseite',
        'nav.biography': 'Biografie',
        'nav.media': 'Medien',
        'nav.contacts': 'Kontakte',
        'home.name': 'Yelyzaveta Shapovalova',
        'home.description': 'Eine Pianistin, die technische Meisterschaft mit tiefem emotionalem Ausdruck verbindet. Ihre Aufführungen zeichnen sich durch ein subtiles Stilgefühl und ein Repertoire vom Barock bis zur zeitgenössischen Musik aus.',
        'biography.title': 'Biografie',
        'biography.education.title': 'Ausbildung',
        'biography.education.text': 'Yelyzaveta Shapovalova ist eine ukrainische Pianistin, geboren am 6. Mai 2009. Sie lernt am Charkiwer Staatlichen Musiklyzeum (ChSML) in der Klasse von N. O. Sutulova. Dort wurde das solide Fundament ihrer professionellen Entwicklung gelegt sowie ihre technische Basis und künstlerische Denkweise geformt. Sie lebt derzeit in Deutschland und setzt dort ihre Ausbildung fort und verbindet internationale Erfahrung mit den Traditionen der ukrainischen Klavierschule.',
        'biography.competitions.title': 'Wettbewerbstätigkeit',
        'biography.competitions.intro': 'Sie nimmt aktiv an internationalen und deutschen Wettbewerben teil und erzielt konstant hohe Ergebnisse. Zu ihren Erfolgen zählen:',
        'biography.competitions.achievement1': '1. Preis — 22. Westfälischer van Bremen Klavierwettbewerb (2025)',
        'biography.competitions.achievement2': '1. Preis — International Competition Music Academy FORTE (Belgien, 2024)',
        'biography.competitions.achievement3': '2. Preis — 65. Grotrian-Steinweg Klavierspiel-Wettbewerb (2024)',
        'biography.competitions.achievement4': 'Grand Prix — International Festival "Ukraine Tag", Köln (2023)',
        'biography.concerts.title': 'Konzerttätigkeit',
        'biography.concerts.text': 'Yelyzaveta tritt sowohl solistisch als auch im Rahmen von Konzertprogrammen und Festivals auf. Ihre Konzertauftritte zeichnen sich durch durchdachte Programme und stilistische Geschlossenheit aus. Die Bühnenerfahrung trägt zur Entwicklung künstlerischer Reife, Selbstsicherheit und eines tieferen Verständnisses des musikalischen Materials bei.',
        'biography.approach.title': 'Künstlerischer Ansatz',
        'biography.approach.text': 'Bei der Arbeit an Werken legt sie besonderen Wert auf Klangqualität, stilistische Genauigkeit und durchdachte Interpretation. Ihr Spiel verbindet technische Meisterschaft mit tiefem emotionalem Ausdruck. Sie arbeitet stetig an der Erweiterung ihres Repertoires und der Entwicklung ihrer eigenen künstlerischen Individualität.',
        'media.title': 'Medien',
        'media.videos.title': 'Videos',
        'media.gallery.title': 'Fotogalerie',
        'contacts.title': 'Kontakte',
        'contacts.description': 'Für Konzertvorschläge und Zusammenarbeit kontaktieren Sie uns bitte per E-Mail.',
        'contacts.gmail': 'In Gmail öffnen',
        'contacts.copy': 'E-Mail kopieren',
        'contacts.copied': 'Kopiert!',
        'footer.name': 'Yelyzaveta Shapovalova',
        'footer.rights': 'Alle Rechte vorbehalten.'
    }
};

// Current language (used e.g. for copy button reset)
let currentLanguage = 'uk';

// Language switching function
function switchLanguage(lang) {
    currentLanguage = lang;
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update page title
    const titles = {
        uk: 'Єлизавета Шаповалова - Піаністка',
        en: 'Yelyzaveta Shapovalova - Pianist',
        de: 'Yelyzaveta Shapovalova - Pianistin'
    };
    document.title = titles[lang];
    
    // Update meta description
    const descriptions = {
        uk: 'Єлизавета Шаповалова - професійна піаністка. Концерти, конкурси, музична освіта. Yelyzaveta Shapovalova - professional classical pianist.',
        en: 'Yelyzaveta Shapovalova - professional classical pianist. Concerts, competitions, musical education.',
        de: 'Yelyzaveta Shapovalova - professionelle klassische Pianistin. Konzerte, Wettbewerbe, musikalische Ausbildung.'
    };
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = descriptions[lang];
    }
    
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update mobile toggle label (УКР / ENG / DEU)
    const toggleCurrent = document.querySelector('.lang-toggle-current');
    if (toggleCurrent) {
        const labels = { uk: 'УКР', en: 'ENG', de: 'DEU' };
        toggleCurrent.textContent = labels[lang] || lang.toUpperCase();
    }
    
    // Save language preference to localStorage
    localStorage.setItem('preferred-language', lang);
}

// Initialize language on page load
function initLanguage() {
    // Check for saved language preference or default to Ukrainian
    const savedLang = localStorage.getItem('preferred-language') || 'uk';
    switchLanguage(savedLang);
}

// Set up language switcher buttons and mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    
    var languageSwitcher = document.getElementById('language-switcher');
    var langToggle = document.getElementById('lang-toggle');

    // Mobile: toggle language dropdown
    if (langToggle && languageSwitcher) {
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            var isOpen = languageSwitcher.classList.toggle('is-open');
            langToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        if (languageSwitcher && languageSwitcher.classList.contains('is-open')) {
            languageSwitcher.classList.remove('is-open');
            if (langToggle) langToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            var lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            // Close mobile dropdown after selecting a language
            if (languageSwitcher && languageSwitcher.classList.contains('is-open')) {
                languageSwitcher.classList.remove('is-open');
                if (langToggle) langToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Copy email button
    const copyBtn = document.getElementById('copy-email-btn');
    const contactEmail = document.getElementById('contact-email');
    if (copyBtn && contactEmail) {
        copyBtn.addEventListener('click', function() {
            const email = contactEmail.textContent.trim();
            const copiedLabel = (translations[currentLanguage] && translations[currentLanguage]['contacts.copied']) || 'Copied!';
            navigator.clipboard.writeText(email).then(function() {
                copyBtn.classList.add('copied');
                copyBtn.textContent = copiedLabel;
                setTimeout(function() {
                    copyBtn.classList.remove('copied');
                    copyBtn.textContent = (translations[currentLanguage] && translations[currentLanguage]['contacts.copy']) || 'Copy email';
                }, 2000);
            });
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === '#' || href === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Photo carousel (Media section)
    (function initCarousel() {
        var carousel = document.querySelector('.carousel');
        if (!carousel) return;
        var track = carousel.querySelector('.carousel-track');
        var slides = carousel.querySelectorAll('.carousel-slide');
        var prevBtn = carousel.querySelector('.carousel-btn-prev');
        var nextBtn = carousel.querySelector('.carousel-btn-next');
        var dots = carousel.querySelectorAll('.carousel-dot');
        var total = slides.length;
        var current = 0;

        function goTo(index) {
            current = (index + total) % total;
            var offset = -current * 100;
            track.style.transform = 'translateX(' + offset + '%)';
            dots.forEach(function(dot, i) {
                dot.classList.toggle('active', i === current);
                dot.setAttribute('aria-selected', i === current);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                goTo(current - 1);
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                goTo(current + 1);
            });
        }
        dots.forEach(function(dot, i) {
            dot.addEventListener('click', function() {
                goTo(i);
            });
        });
    })();
});
