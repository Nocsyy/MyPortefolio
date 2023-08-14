
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    nav: {
                        li0: "Home",
                        li1: "About",
                        li2: "Project",
                        li3: "Contact"
                    },
                    presentation: {
                        me: "Hey, i'm ",
                        sentence: "Front-end web developer",
                        miniDescription: "Junior web developer, determined to solve the most stimulating challenges. Always looking to innovate, ready to collaborate to create exceptional digital solutions."

                    },
                    description: {
                        me: 'A little more about me',
                        knowMe: 'About me',
                        techno: "Technologies mastered",
                        part1: '🚀 Junior Web Developer with a passion for technological innovation and digital solutions !',
                        part2: '🌐💡 With a command of HTML, CSS, React, Node.js and Express technologies and a solid understanding of Svelte, I\'m constantly looking for new challenges to strengthen my skills and take on ambitious projects.',
                        part3: '🛠️ My academic experience and projects during my training have shaped my expertise in web development, enabling me to design creative and robust solutions to the most complex problems.',
                        part4: '🤝 I\'m an excellent team player who can work effectively with colleagues to achieve common goals and deliver outstanding results.',
                        part5: '📈 My desire to improve drives me to keep abreast of the latest technological trends, in order to provide products at the cutting edge of the industry.',
                        part6: '💡 Curious by nature, I\'m eager to learn new things and I\'m always open to learning new technologies to enhance my expertise.',

                    },
                    realisation: {
                        title: "My projects"
                    },
                    contact: {
                        title: "Contact me",
                        inputMail: "Mail",
                        inputName: "Name",
                        inputMessage: "Message",
                        errorSubmit: "Please fill in all the fields on the form.",
                        submit: "Send",
                        validated: "Request sent !"

                    },
                    footer: {
                        make: "Produced by"
                    }
                }
            },
            fr: {
                translation: {
                    nav: {
                        li0: "Acceuil",
                        li1: "A propos",
                        li2: "Réalisation",
                        li3: "Contacte"
                    },

                    presentation: {
                        me: "Bonjour, je suis",
                        sentence: "Developpeur web front-end",
                        miniDescription: "Développeur web junior, déterminé à résoudre les défis les plus stimulants. Toujours en quête d'innovation, prêt à collaborer pour créer des solutions numériques exceptionnelles."

                    },
                    description: {
                        me: "Un peu plus sur moi",
                        knowMe: 'Me connaitre',
                        techno: "Technologies maitrisées",
                        part1: '🚀 Développeur Web Junior passionné par l \'innovation technologique et les solutions numériques !',
                        part2: '🌐💡 Maîtrisant les technologies HTML, CSS, React, Node.js, Express et ayant une solide compréhension de Svelte, je suis constamment à la recherche de nouveaux défis pour renforcer mes compétences et relever des projets ambitieux.',
                        part3: '🛠️ Mon expérience académique et mes projets durant ma formation ont façonné mon expertise en développement web, me permettant de concevoir des solutions créatives et robustes pour résoudre les problèmes les plus complexes.',
                        part4: '🤝 Doté d\'un excellent esprit d\'équipe, je sais collaborer efficacement avec mes collègues pour atteindre des objectifs communs et délivrer des résultats exceptionnels.',
                        part5: '📈 Mon désir de perfectionnement me pousse à rester à l\'affût des dernières tendances technologiques, afin de fournir des produits à la pointe de l\'industrie.',
                        part6: '💡 Curieux de nature, je suis avide de nouvelles connaissances et je suis toujours ouvert à apprendre de nouvelles technologies pour enrichir mon savoir-faire.',

                    },
                    realisation: {
                        title: "Mes réalisations"
                    },
                    contact: {
                        title: "Me contacter",
                        inputMail: "Mail",
                        inputName: "Nom",
                        inputMessage: "Message",
                        errorSubmit: "Veuillez remplir tous les champs du formulaire.",
                        submit: "Envoyer",
                        validated: "Demande envoyé !"
                    },
                    footer: {
                        make: "Réalisé par"
                    }

                }
            },
            de: {
                translation: {
                    nav: {
                        li0: "Startseite",
                        li1: "Über",
                        li2: "Umsetzung",
                        li3: "Kontaktiere"
                    },

                    presentation: {
                        me: "Hallo, ich bin",
                        sentence: "Front-End-Webentwickler",
                        miniDescription: "Junior-Webentwickler, der entschlossen ist, auch die anspruchsvollsten Herausforderungen zu lösen. Immer auf der Suche nach Innovation, bereit zur Zusammenarbeit, um außergewöhnliche digitale Lösungen zu schaffen."

                    },
                    description: {
                        me: "Ein bisschen mehr über mich",
                        knowMe: 'Mich kennenlernen',
                        techno: "Beherrschte Technologien",
                        part1: '🚀 Junior Web Developer mit einer Leidenschaft für technologische Innovationen und digitale Lösungen!',
                        part2: '🌐💡 Da ich die Technologien HTML, CSS, React, Node.js und Express beherrsche und ein solides Verständnis von Svelte habe, bin ich ständig auf der Suche nach neuen Herausforderungen, um meine Fähigkeiten zu stärken und ehrgeizige Projekte zu bewältigen.',
                        part3: '🛠️ Meine akademische Erfahrung und die Projekte während meiner Ausbildung haben meine Fachkenntnisse in der Webentwicklung geprägt und mich in die Lage versetzt, kreative und robuste Lösungen für die komplexesten Probleme zu entwerfen.',
                        part4: '🤝 Mit einem ausgezeichneten Teamgeist kann ich effektiv mit meinen Kollegen zusammenarbeiten, um gemeinsame Ziele zu erreichen und außergewöhnliche Ergebnisse zu liefern.',
                        part5: '📈 Mein Wunsch, mich weiterzuentwickeln, treibt mich dazu an, mich über die neuesten technologischen Trends auf dem Laufenden zu halten, um branchenführende Produkte zu liefern.',
                        part6: '💡 Von Natur aus neugierig, bin ich begierig auf neues Wissen und immer offen dafür, neue Technologien zu erlernen, um mein Fachwissen zu erweitern.',

                    },
                    realisation: {
                        title: "Meine Errungenschaften"
                    },
                    contact: {
                        title: "Mich kontaktieren",
                        inputMail: "Mail",
                        inputName: "Name",
                        inputMessage: "Nachricht",
                        errorSubmit: "Bitte füllen Sie alle Felder des Formulars aus.",
                        submit: "Senden Sier",
                        validated: "Antrag gesendet!"
                    },
                    footer: {
                        make: "Realisiert von"
                    }

                }
            },
            tr: {
                translation: {
                    nav: {
                        li0: "Ev",
                        li1: "Hakkımızda",
                        li2: "Üretim",
                        li3: "İletişim"
                    },

                    presentation: {
                        me: "Merhaba, ben",
                        sentence: "Front-end web geliştiricisi",
                        miniDescription: "En teşvik edici zorlukları çözmeye kararlı genç web geliştiricisi. Her zaman yenilik arayan, olağanüstü dijital çözümler yaratmak için işbirliğine hazır."

                    },
                    description: {
                        me: "Benim hakkımda biraz daha",
                        knowMe: 'Benim hakkımda',
                        techno: "Ustalaşmış teknolojiler",
                        part1: '🚀 Teknolojik yeniliklere ve dijital çözümlere tutkuyla bağlı Junior Web Developer!',
                        part2: '🌐💡 HTML, CSS, React, Node.js, Express konusunda yetkin ve Svelte konusunda sağlam bir anlayışa sahip olarak, becerilerimi güçlendirmek ve iddialı projeler üstlenmek için sürekli yeni zorluklar arıyorum.',
                        part3: '🛠️ Akademik deneyimim ve eğitimim sırasında gerçekleştirdiğim projeler, web geliştirme alanındaki uzmanlığımı şekillendirdi ve en karmaşık sorunlara yaratıcı ve sağlam çözümler tasarlamamı sağladı.',
                        part4: '🤝 Mükemmel bir takım ruhuna sahibim ve ortak hedeflere ulaşmak ve olağanüstü sonuçlar elde etmek için meslektaşlarımla etkili bir şekilde çalışabilirim.',
                        part5: '📈 Kendimi geliştirme arzum, sektörün en ileri noktasında ürünler sunmak için beni en son teknolojik trendleri takip etmeye itiyor.',
                        part6: '💡 Doğam gereği meraklıyım, yeni şeyler öğrenmeye hevesliyim ve uzmanlığımı geliştirmek için her zaman yeni teknolojiler öğrenmeye açığım.',

                    },
                    realisation: {
                        title: "Benim başarılarım"
                    },
                    contact: {
                        title: "Bana ulaşın",
                        inputMail: "Posta",
                        inputName: "İsim",
                        inputMessage: "Mesaj",
                        errorSubmit: "Lütfen formdaki tüm alanları doldurunuz.",
                        submit: "Gönder",
                        validated: "İstek gönderildi!"
                    },
                    footer: {
                        make: "Yönetmen"
                    }

                }
            },
        }
    });

export default i18n;