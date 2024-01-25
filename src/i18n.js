
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
                        sentence: "Fullstack application designer and developer",
                        miniDescription: "Full-stack application designer and developer, determined to solve the most stimulating challenges. Always looking to innovate, ready to collaborate to create exceptional digital solutions."

                    },
                    description: {
                        me: 'A little more about me',
                        knowMe: 'About me',
                        techno: "Skills",
                        part1: '🚀 Fullstack application designer and developer with a passion for technological innovation and digital solutions!',
                        part2: '🌐💡With a command of HTML, CSS, React, Angular Node.js, Express, Python and Django, I\'m constantly looking for new challenges to strengthen my skills and take on ambitious projects.',
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
                        li3: "Contact"
                    },

                    presentation: {
                        me: "Bonjour, je suis",
                        sentence: "Concepteur & développeur d\'application fullstack",
                        miniDescription: "Concepteur et développeur d\'application fullstack, déterminé à résoudre les défis les plus stimulants. Toujours en quête d'innovation, prêt à collaborer pour créer des solutions numériques exceptionnelles."

                    },
                    description: {
                        me: "Un peu plus sur moi",
                        knowMe: 'Me connaitre',
                        techno: "Compétences",
                        part1: '🚀 Concepteur et développeur d\'application fullstack passionné par l \'innovation technologique et les solutions numériques !',
                        part2: '🌐💡 Maîtrisant les technologies HTML, CSS, React, Angular Node.js, Express, Python et Django, je suis constamment à la recherche de nouveaux défis pour renforcer mes compétences et relever des projets ambitieux.',
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
                        sentence: "Fullstack-Anwendungsdesigner & -entwickler",
                        miniDescription: "Full-Stack-Anwendungsdesigner und -entwickler, der entschlossen ist, auch die anspruchsvollsten Herausforderungen zu lösen. Immer auf der Suche nach Innovation, bereit zur Zusammenarbeit, um außergewöhnliche digitale Lösungen zu schaffen."

                    },
                    description: {
                        me: "Ein bisschen mehr über mich",
                        knowMe: 'Mich kennenlernen',
                        techno: "Kompetenzen",
                        part1: '🚀 Wir sind ein Unternehmen, das sich auf die Entwicklung und den Vertrieb von Produkten und Dienstleistungen spezialisiert hat und sich auf die Entwicklung und den Vertrieb von Produkten und Dienstleistungen spezialisiert hat.',
                        part2: 'Da ich die Technologien HTML, CSS, React, Angular Node.js, Express, Python und Django beherrsche, bin ich ständig auf der Suche nach neuen Herausforderungen, um meine Kompetenzen zu stärken und ehrgeizige Projekte zu bewältigen.',
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
                        sentence: "Fullstack uygulama tasarımcısı ve geliştiricisi",
                        miniDescription: "En teşvik edici zorlukları çözmeye kararlı tam yığın uygulama tasarımcısı ve geliştiricisi. Her zaman yenilik peşinde, olağanüstü dijital çözümler yaratmak için işbirliğine hazır."

                    },
                    description: {
                        me: "Benim hakkımda biraz daha",
                        knowMe: 'Benim hakkımda',
                        techno: "Beceriler",
                        part1: '🚀 Teknolojik yeniliklere ve dijital çözümlere tutkuyla bağlı fullstack uygulama tasarımcısı ve geliştiricisi!',
                        part2: '🌐💡 HTML, CSS, React, Angular Node.js, Express, Python ve Django ya hakim olarak, becerilerimi güçlendirmek ve iddialı projeler üstlenmek için sürekli yeni zorluklar arıyorum.',
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
            cn: {
                translation: {
                    nav: {
                        li0: "首页",
                        li1: "关于我们",
                        li2: "项目",
                        li3: "联系"
                    },
                    presentation: {
                        me: "嘿，我是",
                        sentence: "全栈应用程序设计师和开发人员",
                        miniDescription: "全栈应用程序设计师和开发人员，立志解决最具挑战性的问题。始终追求创新，随时准备合作创造卓越的数字解决方案。"

                    },
                    description: {
                        me: '再介绍一下我自己',
                        knowMe: '关于我',
                        techno: "技能",
                        part1: '🚀 全栈应用程序设计师和开发人员，热衷于技术创新和数字解决方案！',
                        part2: '🌐💡我精通 HTML、CSS、React、Angular Node.js、Express、Python 和 Django，我一直在寻找新的挑战，以加强我的技能并承担雄心勃勃的项目。',
                        part3: '🛠️ 我的学术经历和培训期间的项目造就了我在网络开发方面的专业技能，使我能够为最复杂的问题设计出富有创意且稳健的解决方案。',
                        part4: '🤝 我是一名优秀的团队成员，能与同事有效合作，实现共同目标，取得优异成绩。',
                        part5: '📈 我对进步的渴望促使我紧跟最新的技术趋势，以提供行业最前沿的产品。',
                        part6: '💡 天性好奇，我渴望学习新事物，我总是乐于学习新技术来提高我的专业知识。',

                    },
                    realisation: {
                        title: "我的项目"
                    },
                    contact: {
                        title: "联系我",
                        inputMail: "邮件",
                        inputName: "名称",
                        inputMessage: "留言",
                        errorSubmit: "请填写表格上的所有栏目。",
                        submit: "发送",
                        validated: "请求已发送 ！"

                    },
                    footer: {
                        make: "制作人"
                    }
                }
            }
        }
    });

export default i18n;