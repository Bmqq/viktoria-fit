// translation.js
document.addEventListener('DOMContentLoaded', function () {
    // Translations dictionary
    const translations = {
        // Hero section
        "hero-title": {
            "en": "Transform Your Body & Mind",
            "ru": "Преобразите Своё Тело и Разум",
            "de": "Verwandeln Sie Ihren Körper & Geist"
        },
        "hero-text": {
            "en": "<strong>10+ years</strong> of fitness expertise tailored to <strong>your</strong> unique goals.<br><br>Personalized programs that deliver <strong>real results</strong> - whether you want to lose weight, build strength, or simply feel better in your body.",
            "ru": "<strong>10+ лет</strong> опыта в фитнесе, адаптированного под <strong>ваши</strong> уникальные цели.<br><br>Персонализированные программы, которые дают <strong>реальные результаты</strong> - хотите ли вы похудеть, набрать силу или просто лучше чувствовать себя в своем теле.",
            "de": "<strong>10+ Jahre</strong> Fitness-Expertise, die auf <strong>Ihre</strong> individuellen Ziele zugeschnitten ist.<br><br>Personalisierte Programme, die <strong>echte Ergebnisse</strong> liefern - egal, ob Sie abnehmen, Kraft aufbauen oder sich einfach besser in Ihrem Körper fühlen möchten."
        },
        "start-journey": {
            "en": "Start Your Journey",
            "ru": "Начните Свой Путь",
            "de": "Starten Sie Ihre Reise"
        },
        
        // About section
        "why-train": {
            "en": "Why Train With Me?",
            "ru": "Почему стоит тренироваться со мной?",
            "de": "Warum mit mir trainieren?"
        },
        "train-reasons": {
            "en": "<strong data-translate=\"certified\">Certified trainer</strong> with proven results<br><strong>10+ years</strong> transforming bodies<br><strong data-translate=\"personalized\">Personalized</strong> approach for every client<br><strong data-translate=\"enjoyable\">Enjoyable</strong> workouts that deliver",
            "ru": "<strong data-translate=\"certified\">Сертифицированный тренер</strong> с подтверждёнными результатами<br><strong>10+ лет</strong> трансформации тел<br><strong data-translate=\"personalized\">Индивидуальный</strong> подход к каждому клиенту<br><strong data-translate=\"enjoyable\">Приятные</strong> тренировки, которые дают результат",
            "de": "<strong data-translate=\"certified\">Zertifizierter Trainer</strong> mit nachgewiesenen Ergebnissen<br><strong>10+ Jahre</strong> Erfahrung in der Körpertransformation<br><strong data-translate=\"personalized\">Personalisierter</strong> Ansatz für jeden Kunden<br><strong data-translate=\"enjoyable\">Angenehme</strong> Workouts, die Ergebnisse liefern"
        },
        "get-started": {
            "en": "Let's Get Started",
            "ru": "Начнём",
            "de": "Lass uns beginnen"
        },
        
        // Question section
        "questions-title": {
            "en": "Do you have any questions?",
            "ru": "У вас есть вопросы?",
            "de": "Haben Sie Fragen?"
        },
        "questions-subtitle": {
            "en": "I will be happy to advise you!",
            "ru": "Я буду рада вас проконсультировать!",
            "de": "Ich berate Sie gerne!"
        },
        "ask-question": {
            "en": "Ask a question",
            "ru": "Задать вопрос",
            "de": "Frage stellen"
        },
        
        // Services section
        "my-services": {
            "en": "My services",
            "ru": "Мои услуги",
            "de": "Meine Dienstleistungen"
        },
        "services-desc": {
            "en": "Your health and fitness are my top priorities. I help clients achieve their goals by working with them individually or in groups, creating comfortable and effective training programs.",
            "ru": "Ваше здоровье и физическая форма - мой главный приоритет. Я помогаю клиентам достигать их целей, работая с ними индивидуально или в группах, создавая комфортные и эффективные тренировочные программы.",
            "de": "Ihre Gesundheit und Fitness haben für mich oberste Priorität. Ich helfe Kunden, ihre Ziele zu erreichen, indem ich mit ihnen einzeln oder in Gruppen arbeite und komfortable, effektive Trainingsprogramme erstelle."
        },
        "personal-training": {
            "en": "Personal Training",
            "ru": "Персональные тренировки",
            "de": "Persönliches Training"
        },
        "personal-desc": {
            "en": "One-on-one sessions tailored specifically to your needs and goals.",
            "ru": "Индивидуальные занятия, разработанные специально под ваши потребности и цели.",
            "de": "Einzelunterricht, der speziell auf Ihre Bedürfnisse und Ziele zugeschnitten ist."
        },
        "group-training": {
            "en": "Group Training",
            "ru": "Групповые тренировки",
            "de": "Gruppentraining"
        },
        "group-desc": {
            "en": "From strength to dance, cardio, cycle, aqua aerobics and Pilates – a wide variety of group formats to keep you motivated and moving.",
            "ru": "От силовых до танцевальных, кардио, велотренировок, аквааэробики и пилатеса – широкий выбор групповых форматов, чтобы поддерживать вашу мотивацию и активность.",
            "de": "Von Kraft über Tanz, Cardio, Radfahren, Wassergymnastik bis hin zu Pilates – eine breite Palette an Gruppenformaten, um Sie motiviert und in Bewegung zu halten."
        },
        "online-training": {
            "en": "Online Training",
            "ru": "Онлайн-тренировки",
            "de": "Online-Training"
        },
        "online-desc": {
            "en": "Flexible format to work out anywhere.",
            "ru": "Гибкий формат для тренировок в любом месте.",
            "de": "Flexibles Format, um überall zu trainieren."
        },
        "healthy-back": {
            "en": "Healthy Back",
            "ru": "Здоровая спина",
            "de": "Gesunder Rücken"
        },
        "back-desc": {
            "en": "Back-focused training to reduce pain, build strength & improve posture.",
            "ru": "Тренировки, направленные на спину, чтобы уменьшить боль, укрепить мышцы и улучшить осанку.",
            "de": "Rückentraining zur Schmerzlinderung, Kräftigung und Verbesserung der Haltung."
        },
        "fitness-programs": {
            "en": "Fitness Programs",
            "ru": "Фитнес-программы",
            "de": "Fitnessprogramme"
        },
        "fitness-desc": {
            "en": "Comprehensive sessions combining different types of activity for overall health strengthening.",
            "ru": "Комплексные занятия, сочетающие различные виды активности для общего укрепления здоровья.",
            "de": "Umfassende Sitzungen, die verschiedene Aktivitätsarten zur allgemeinen Gesundheitsstärkung kombinieren."
        },
        "trx-functional": {
            "en": "TRX & Functional Training",
            "ru": "TRX и функциональные тренировки",
            "de": "TRX & Funktionelles Training"
        },
        "trx-desc": {
            "en": "Suspension and full-body workouts to boost core, balance, and daily strength.",
            "ru": "Тренировки с подвесами и для всего тела для укрепления кора, баланса и повседневной силы.",
            "de": "Suspension- und Ganzkörper-Workouts zur Stärkung des Kerns, der Balance und der täglichen Kraft."
        },
        
        // Testimonials section
        "testimonials-title": {
            "en": "Client Success Stories",
            "ru": "Истории успеха клиентов",
            "de": "Erfolgsgeschichten von Kunden"
        },
        "testimonials-desc": {
            "en": "Hear what my clients say about their transformation journey",
            "ru": "Узнайте, что говорят мои клиенты о своем пути трансформации",
            "de": "Hören Sie, was meine Kunden über ihre Transformationsreise sagen"
        },
        
        // Client metadata - need to be translated as well
        "client-program": {
            "en": "12 weeks program",
            "ru": "12-недельная программа",
            "de": "12-Wochen-Programm"
        },
        "back-relief": {
            "en": "Back pain relief",
            "ru": "Избавление от боли в спине",
            "de": "Rückenschmerzlinderung"
        },
        "online-client": {
            "en": "Online training",
            "ru": "Онлайн-тренировки",
            "de": "Online-Training"
        },
        
        // Footer translations
        "footer-slogan": {
            "en": "Transform Your Body & Mind",
            "ru": "Преобразите Своё Тело и Разум",
            "de": "Verwandeln Sie Ihren Körper & Geist"
        },
        "footer-services-title": {
            "en": "Services",
            "ru": "Услуги",
            "de": "Dienstleistungen"
        },
        "footer-contact": {
            "en": "Contact Info",
            "ru": "Контактная информация",
            "de": "Kontaktinformationen"
        },
        "join-now": {
            "en": "Join Now",
            "ru": "Присоединиться",
            "de": "Jetzt beitreten"
        },
        "copyright": {
            "en": "&copy; 2025 Viktoria Sport. All Rights Reserved.",
            "ru": "&copy; 2025 Viktoria Sport. Все права защищены.",
            "de": "&copy; 2025 Viktoria Sport. Alle Rechte vorbehalten."
        },
        "privacy-policy": {
            "en": "Privacy Policy",
            "ru": "Политика конфиденциальности",
            "de": "Datenschutzrichtlinie"
        },
        "terms": {
            "en": "Terms of Service",
            "ru": "Условия использования",
            "de": "Nutzungsbedingungen"
        },
        
        // Navigation elements
        "nav-about": {
            "en": "About",
            "ru": "Обо мне",
            "de": "Über mich"
        },
        "nav-services": {
            "en": "Services",
            "ru": "Услуги",
            "de": "Dienstleistungen"
        },
        "nav-contacts": {
            "en": "Contacts",
            "ru": "Контакты",
            "de": "Kontakte"
        },
        
        // Basic elements from your original file
        "certified": {
            "en": "Certified trainer",
            "ru": "Сертифицированный тренер",
            "de": "Zertifizierter Trainer"
        },
        "personalized": {
            "en": "Personalized",
            "ru": "Индивидуальный",
            "de": "Personalisierter"
        },
        "enjoyable": {
            "en": "Enjoyable",
            "ru": "Приятные",
            "de": "Angenehme"
        }
    };


    function translatePage(lang) {
        const elements = document.querySelectorAll('[data-translate]');

        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[key] && translations[key][lang]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[key][lang];
                } else {
                    el.innerHTML = translations[key][lang];
                }
            }
        });


        document.querySelectorAll('.current-language').forEach(el => {
            el.textContent = lang.toUpperCase();
        });


        localStorage.setItem('preferredLanguage', lang);
    }


    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    translatePage(savedLang);


    function createMobileLanguageSwitcher() {
        if (window.innerWidth <= 992 && !document.querySelector('.mobile-language-switcher')) {
            const mobileSwitcher = document.createElement('div');
            mobileSwitcher.className = 'mobile-language-switcher';
            mobileSwitcher.innerHTML = `
                <button class="mobile-language-btn">
                    <span class="current-language">${savedLang.toUpperCase()}</span>
                    <svg class="language-icon" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5z"/>
                    </svg>
                </button>
                <div class="mobile-language-dropdown" style="display:none">
                    <button data-lang="en">English<img src="./src/foto/language_switcher_foto/usa_flag.png" alt="usa_flag_icon"></button>
                    <button data-lang="ru">Русский<img src="./src/foto/language_switcher_foto/russia_flag.png" alt="russia_flag_icon"></button>
                    <button data-lang="de">Deutsch<img src="./src/foto/language_switcher_foto/germany_flag.webp" alt="germany_flag_icon"></button>
                </div>
            `;

            const navbar = document.querySelector('.navbar');
            if (navbar) {

                const joinNowBtn = navbar.querySelector('.nav-btn');
                if (joinNowBtn) {
                    navbar.insertBefore(mobileSwitcher, joinNowBtn);
                } else {
                    navbar.appendChild(mobileSwitcher);
                }
            }


            const mobileBtn = document.querySelector('.mobile-language-btn');
            const mobileDropdown = document.querySelector('.mobile-language-dropdown');

            if (mobileBtn && mobileDropdown) {
                mobileBtn.addEventListener('click', function (e) {
                    e.stopPropagation();
                    mobileDropdown.style.display = mobileDropdown.style.display === 'block' ? 'none' : 'block';
                });

                mobileDropdown.querySelectorAll('button').forEach(btn => {
                    btn.addEventListener('click', function () {
                        const lang = this.getAttribute('data-lang');
                        translatePage(lang);
                        mobileDropdown.style.display = 'none';
                    });
                });
            }
        }
    }


    document.addEventListener('click', function (e) {

        if (e.target.closest('.language-btn')) {
            const dropdown = document.querySelector('.language-dropdown');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }

        else if (e.target.closest('.language-dropdown button')) {
            const lang = e.target.getAttribute('data-lang');
            translatePage(lang);
            document.querySelector('.language-dropdown').style.display = 'none';
        }

        else if (!e.target.closest('.language-switcher')) {
            const dropdown = document.querySelector('.language-dropdown');
            if (dropdown) dropdown.style.display = 'none';
        }
    });


    createMobileLanguageSwitcher();

    window.addEventListener('resize', function () {
        createMobileLanguageSwitcher();
    });
});