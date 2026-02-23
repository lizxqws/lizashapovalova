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
        'biography.education.text': 'Мене звати Єлизавета Шаповалова, я українська піаністка, народилася 6 травня 2009 року.\n\nЯ навчаюся у Державному музичному ліцеї в Харкові у класі Н.О. Сутулової. Саме тут розпочався мій серйозний музичний шлях і сформувалися основні професійні навички.\n\nНині я проживаю та навчаюся в Німеччині, поєднуючи українську музичну традицію з міжнародним досвідом.',
        'biography.competitions.title': 'Участь у конкурсах',
        'biography.competitions.intro': 'Я беру участь у міжнародних та всеукраїнських конкурсах. Серед моїх досягнень:',
        'biography.competitions.achievement1': 'Grand Prix — V Міжнародний двотуровий конкурс інструментального мистецтва Maestoso Maestro (2025)',
        'biography.competitions.achievement2': 'I премія — 22. Westfälischer van Bremen Klavierwettbewerb (2025)',
        'biography.competitions.achievement3': 'I премія — III Всеукраїнський конкурс фортепіанної музики «Aurora» (2024)',
        'biography.competitions.achievement4': 'I премія — International Competition Music Academy FORTE (Бельгія, 2024)',
        'biography.competitions.achievement5': 'II премія — 65. Grotrian-Steinweg Klavierspiel-Wettbewerb (2024)',
        'biography.competitions.achievement6': 'Grand Prix — International Festival "Ukraine Tag" (Кельн, 2023)',
        'biography.concerts.title': 'Концертний досвід',
        'biography.concerts.text': 'Я беру участь у концертних програмах та мистецьких заходах. Виступи допомагають мені розвивати впевненість на сцені та краще розуміти музику.',
        'biography.approach.title': 'Про музику',
        'biography.approach.text': 'У роботі над творами для мене важливі увага до деталей, чистота звучання та розуміння характеру музики. Я постійно працюю над розвитком техніки та вдосконаленням виконавської майстерності.',
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
        'biography.education.text': 'My name is Yelyzaveta Shapovalova; I am a Ukrainian pianist, born on 6 May 2009.\n\nI study at the State Music Lyceum in Kharkiv in the class of N. O. Sutulova. It was there that my serious musical path began and my core professional skills were formed.\n\nI now live and study in Germany, combining the Ukrainian musical tradition with international experience.',
        'biography.competitions.title': 'Competition participation',
        'biography.competitions.intro': 'I take part in international and all-Ukrainian competitions. Among my achievements:',
        'biography.competitions.achievement1': 'Grand Prix — V International Two-Round Instrumental Art Competition Maestoso Maestro (2025)',
        'biography.competitions.achievement2': '1st Prize — 22. Westfälischer van Bremen Klavierwettbewerb (2025)',
        'biography.competitions.achievement3': '1st Prize — III All-Ukrainian Piano Music Competition "Aurora" (2024)',
        'biography.competitions.achievement4': '1st Prize — International Competition Music Academy FORTE (Belgium, 2024)',
        'biography.competitions.achievement5': '2nd Prize — 65. Grotrian-Steinweg Klavierspiel-Wettbewerb (2024)',
        'biography.competitions.achievement6': 'Grand Prix — International Festival "Ukraine Tag" (Cologne, 2023)',
        'biography.concerts.title': 'Concert experience',
        'biography.concerts.text': 'I take part in concert programmes and artistic events. Performing helps me develop confidence on stage and understand music more deeply.',
        'biography.approach.title': 'About music',
        'biography.approach.text': 'In my work on repertoire, attention to detail, purity of sound, and understanding the character of the music are important to me. I constantly work on developing my technique and refining my performing mastery.',
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
        'biography.education.text': 'Ich heiße Yelyzaveta Shapovalova und bin eine ukrainische Pianistin, geboren am 6. Mai 2009.\n\nIch lerne am Staatlichen Musiklyzeum in Charkiw in der Klasse von N. O. Sutulova. Dort begann mein ernsthafter musikalischer Weg und bildeten sich meine grundlegenden professionellen Fähigkeiten heraus.\n\nIch lebe und lerne derzeit in Deutschland und verbinde die ukrainische Musiktradition mit internationaler Erfahrung.',
        'biography.competitions.title': 'Wettbewerbsteilnahme',
        'biography.competitions.intro': 'Ich nehme an internationalen und gesamtukrainischen Wettbewerben teil. Zu meinen Erfolgen zählen:',
        'biography.competitions.achievement1': 'Grand Prix — V. Internationaler zweirundiger Wettbewerb für Instrumentalkunst Maestoso Maestro (2025)',
        'biography.competitions.achievement2': '1. Preis — 22. Westfälischer van Bremen Klavierwettbewerb (2025)',
        'biography.competitions.achievement3': '1. Preis — III. Gesamtukrainischer Wettbewerb für Klaviermusik „Aurora“ (2024)',
        'biography.competitions.achievement4': '1. Preis — International Competition Music Academy FORTE (Belgien, 2024)',
        'biography.competitions.achievement5': '2. Preis — 65. Grotrian-Steinweg Klavierspiel-Wettbewerb (2024)',
        'biography.competitions.achievement6': 'Grand Prix — International Festival "Ukraine Tag" (Köln, 2023)',
        'biography.concerts.title': 'Konzerterfahrung',
        'biography.concerts.text': 'Ich nehme an Konzertprogrammen und künstlerischen Veranstaltungen teil. Das Auftreten hilft mir, mehr Sicherheit auf der Bühne zu entwickeln und die Musik besser zu verstehen.',
        'biography.approach.title': 'Über Musik',
        'biography.approach.text': 'Bei der Arbeit an Werken sind mir die Sorgfalt im Detail, die Klangreinheit und das Verständnis des Charakters der Musik wichtig. Ich arbeite ständig an der Entwicklung meiner Technik und der Verfeinerung meiner interpretatorischen Meisterschaft.',
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
