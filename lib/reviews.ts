export type Review = {
  name: string;
  country: string;
  code: string;
  lang: string;
  stars: number;
  project: string;
  color: string;
  text: string;
  photo?: string;
};

export const REVIEWS: Review[] = [
            /* ── JAPAN (4) ── */
            {
                name: '田中 大輔',
                country: 'Japan',
                code: 'jp',
                lang: 'ja',
                stars: 5,
                project: 'Mobile App — AI Calorie Counter',
                color: '#c0306e',
                text: '素晴らしい仕事でした！アプリは期待以上のクオリティで、UIも非常に洗練されています。短期間でここまでのものを作り上げてくれたことに感動しました。また必ずお願いしたいと思います。'
            },
            {
                name: '山本 さくら',
                country: 'Japan',
                code: 'jp',
                lang: 'ja',
                stars: 5,
                project: 'Web — JP Culture Day',
                color: '#9b3090',
                text: 'コミュニケーションが非常に丁寧で、こちらの要望を完全に理解してくれました。デザインのセンスが素晴らしく、細部へのこだわりが伝わってきます。日本語での対応も完璧でした。'
            },
            {
                name: '鈴木 健一',
                country: 'Japan',
                code: 'jp',
                lang: 'ja',
                stars: 5,
                project: 'Game — Stellar Wanderer',
                color: '#1a5fad',
                text: 'ゲームのクオリティが非常に高く、チーム全員が大満足しています。スケジュール通りに納品いただき、修正対応も迅速でした。プロフェッショナルな仕事ぶりに感銘を受けました。'
            },
            {
                name: '中村 優希',
                country: 'Japan',
                code: 'jp',
                lang: 'ja',
                stars: 5,
                project: 'Web — Education Platform',
                color: '#2a7a3b',
                text: 'ウェブサイトの完成度が想像以上で、学習プラットフォームとして完璧な仕上がりです。技術力だけでなく、UXへの深い理解も感じられました。次回もぜひお願いしたいです。'
            },

            /* ── BRAZIL (5) ── */
            {
                name: 'Lucas Oliveira',
                country: 'Brasil',
                code: 'br',
                lang: 'pt-br',
                stars: 5,
                project: 'Mobile App — Food Delivery',
                color: '#1a7a30',
                text: 'Trabalho simplesmente excepcional! O aplicativo de delivery ficou exatamente como imaginávamos, com uma interface linda e funcionalidade impecável. Entregou antes do prazo e com qualidade impressionante. Recomendo muito!'
            },
            {
                name: 'Ana Carolina Silva',
                country: 'Brasil',
                code: 'br',
                lang: 'pt-br',
                stars: 5,
                project: 'Web — EcoGreen E-Commerce',
                color: '#c08a00',
                text: 'Profissional incrível! O e-commerce ficou lindo e funcional. A comunicação foi clara durante todo o projeto e os resultados superaram nossas expectativas. Definitivamente voltarei a contratar seus serviços!'
            },
            {
                name: 'Mateus Santos',
                country: 'Brasil',
                code: 'br',
                lang: 'pt-br',
                stars: 5,
                project: 'Game — ShadowBorn',
                color: '#7a1a1a',
                text: 'O jogo ficou incrível! A qualidade gráfica e a mecânica de gameplay estão no nível dos melhores do mercado. O desenvolvedor entendeu perfeitamente nossa visão criativa. Cinco estrelas sem dúvida!'
            },
            {
                name: 'Carla Fernandes',
                country: 'Brasil',
                code: 'br',
                lang: 'pt-br',
                stars: 5,
                project: 'Mobile App — Hotel Booking',
                color: '#1a5fad',
                text: 'Nosso aplicativo de reservas ficou perfeito! Design moderno, fácil de usar e com todas as funcionalidades que precisávamos. O suporte pós-entrega também foi excelente. Muito obrigada!'
            },
            {
                name: 'Pedro Alves',
                country: 'Brasil',
                code: 'br',
                lang: 'pt-br',
                stars: 5,
                project: 'AI Automation — SaaS',
                color: '#4a1a8a',
                text: 'Trabalho de altíssima qualidade! A solução de automação com IA que desenvolveu para nossa empresa aumentou nossa produtividade em mais de 60%. Um desenvolvedor realmente talentoso e dedicado.'
            },

            /* ── SPAIN (5) ── */
            {
                name: 'Carlos García',
                country: 'España',
                code: 'es',
                lang: 'es',
                stars: 5,
                project: 'Web — Education Platform',
                color: '#c0304a',
                text: '¡Trabajo excelente! La plataforma educativa superó todas nuestras expectativas. El diseño es moderno, intuitivo y la funcionalidad es perfecta. Muy profesional en todo momento. ¡Lo recomiendo ampliamente!'
            },
            {
                name: 'María López',
                country: 'España',
                code: 'es',
                lang: 'es',
                stars: 5,
                project: 'Mobile App — Japanese Friends Chat',
                color: '#c08a00',
                text: '¡Increíble desarrollador! La aplicación de chat quedó perfecta, con una interfaz bellísima y funcionalidades muy bien pensadas. La comunicación durante el proyecto fue excelente. ¡Volvería a contratar sin dudar!'
            },
            {
                name: 'Juan Martínez',
                country: 'España',
                code: 'es',
                lang: 'es',
                stars: 5,
                project: 'Game — Urban Crosser 3D',
                color: '#1a5fad',
                text: '¡El juego 3D quedó espectacular! La calidad gráfica y la jugabilidad son de primer nivel. Entregó el proyecto a tiempo y resolvió todos los problemas técnicos con gran eficiencia. ¡Cinco estrellas!'
            },
            {
                name: 'Elena Rodríguez',
                country: 'España',
                code: 'es',
                lang: 'es',
                stars: 5,
                project: 'Web — JP Culture Day',
                color: '#2a7a3b',
                text: 'Resultados simplemente espectaculares. La web cultural que creó captura perfectamente la esencia de lo que queríamos transmitir. Muy creativo, detallista y profesional. ¡Un placer trabajar con él!'
            },
            {
                name: 'Miguel Torres',
                country: 'España',
                code: 'es',
                lang: 'es',
                stars: 5,
                project: 'Mobile App — AI Calorie Counter',
                color: '#7a3a00',
                text: '¡Absolutamente impresionante! La aplicación de conteo de calorías con IA funciona de maravilla. El reconocimiento de alimentos es preciso y la interfaz es muy intuitiva. Muchas gracias por el trabajo tan bien hecho.'
            },

            /* ── MEXICO (6) ── */
            {
                name: 'José Hernández',
                country: 'México',
                code: 'mx',
                lang: 'es',
                stars: 5,
                project: 'Game — Slot Party HTML5',
                color: '#1a7a30',
                text: '¡Increíble trabajo! El juego de slot quedó perfectamente diseñado, con gráficos hermosos y una jugabilidad muy fluida. Ideal para nuestra plataforma de entretenimiento. ¡Totalmente recomendado!'
            },
            {
                name: 'Sofía Morales',
                country: 'México',
                code: 'mx',
                lang: 'es',
                stars: 5,
                project: 'Mobile App — Food Delivery',
                color: '#c0304a',
                text: 'El desarrollador es talentoso y muy responsable. Nuestra app de comida a domicilio quedó mejor de lo esperado. Los usuarios la adoran por lo fácil e intuitiva que es. ¡Definitivamente lo contrataremos de nuevo!'
            },
            {
                name: 'Diego Ramírez',
                country: 'México',
                code: 'mx',
                lang: 'es',
                stars: 5,
                project: 'Web — EcoGreen E-Commerce',
                color: '#4a1a8a',
                text: '¡Excelente comunicación y entrega puntual! El sitio de e-commerce quedó hermoso y vende muy bien. La integración de pagos funciona perfectamente. Muy profesional en todo aspecto. ¡Muchas gracias!'
            },
            {
                name: 'Valentina Cruz',
                country: 'México',
                code: 'mx',
                lang: 'es',
                stars: 5,
                project: 'Mobile App — Loyalty Tag',
                color: '#1a5fad',
                text: 'Nuestra app de lealtad y recompensas quedó perfecta. Los clientes la usan constantemente y ha mejorado mucho la retención en nuestro negocio. El desarrollador fue muy profesional y creativo. ¡Gracias!'
            },
            {
                name: 'Rodrigo Flores',
                country: 'México',
                code: 'mx',
                lang: 'es',
                stars: 5,
                project: 'Game — 3D Roulette',
                color: '#7a1a1a',
                text: '¡El mejor desarrollador con el que he trabajado! La ruleta 3D es impresionante, con física realista y gráficos de alto nivel. Nuestros usuarios están encantados. ¡Altamente recomendado sin reservas!'
            },
            {
                name: 'Isabella Reyes',
                country: 'México',
                code: 'mx',
                lang: 'es',
                stars: 5,
                project: 'AI Automation — SaaS',
                color: '#2a7a3b',
                text: 'Entregó un producto de altísima calidad. La herramienta de automatización con IA que desarrolló transformó nuestros procesos por completo. Ahorramos horas de trabajo manual cada día. ¡Excelente inversión!'
            },

            /* ── CANADA (3) ── */
            {
                name: 'Emma Thompson',
                country: 'Canada',
                code: 'ca',
                lang: 'en',
                stars: 5,
                project: 'Mobile App — CityMaps2Go',
                color: '#c0304a',
                text: 'Outstanding work! The offline maps app was delivered well ahead of schedule with impressive quality. Every feature we requested was implemented perfectly. Absolutely professional and highly skilled developer. Will hire again!'
            },
            {
                name: 'James Wilson',
                country: 'Canada',
                code: 'ca',
                lang: 'en',
                stars: 5,
                project: 'Web — Education Platform',
                color: '#1a5fad',
                text: 'Incredibly creative and detail-oriented. Our e-learning platform is both beautiful and functional. The attention to UX is world-class. Communication was clear and responsive throughout the entire project.'
            },
            {
                name: 'Sarah Mitchell',
                country: 'Canada',
                code: 'ca',
                lang: 'en',
                stars: 5,
                project: 'Game — Stellar Wanderer',
                color: '#2a7a3b',
                text: 'The space exploration game looks and plays like a AAA title. Stunning visuals, tight gameplay, and delivered exactly on time. One of the best developers I\'ve ever collaborated with. Highly recommended!'
            },

            /* ── USA (5) ── */
            {
                name: 'Michael Johnson',
                country: 'United States',
                code: 'us',
                lang: 'en',
                stars: 5,
                project: 'AI Automation — SaaS Platform',
                color: '#1a3cad',
                text: 'Absolutely fantastic! The AI-powered automation platform exceeded all expectations. It\'s saving our team dozens of hours every week. The code quality is exceptional and the UX is incredibly polished. 10/10!'
            },
            {
                name: 'Ashley Davis',
                country: 'United States',
                code: 'us',
                lang: 'en',
                stars: 5,
                project: 'Mobile App — Fintech News',
                color: '#c08a00',
                text: 'Top-notch quality and communication throughout. Our fintech news app has received rave reviews from users. Beautiful design, fast performance, and all features delivered on time and within budget. Five stars!'
            },
            {
                name: 'Robert Brown',
                country: 'United States',
                code: 'us',
                lang: 'en',
                stars: 5,
                project: 'Game — Casino Platform',
                color: '#7a1a1a',
                text: 'The casino platform is world-class. Smooth animations, reliable game logic, and a stunning lobby interface. Our player engagement doubled after launch. This developer is truly gifted — best in the field!'
            },
            {
                name: 'Jennifer White',
                country: 'United States',
                code: 'us',
                lang: 'en',
                stars: 5,
                project: 'Web — EcoGreen E-Commerce',
                color: '#2a7a3b',
                text: 'Delivered exactly what we needed, on time and beyond our expectations. The e-commerce store is beautiful, converts well, and our customers love the experience. Will definitely be coming back for future projects!'
            },
            {
                name: 'Chris Anderson',
                country: 'United States',
                code: 'us',
                lang: 'en',
                stars: 5,
                project: 'Mobile App — Voice GPS Navigation',
                color: '#4a1a8a',
                text: 'The GPS navigation app is incredibly robust — accurate, fast, and the voice guidance is crystal clear. Works flawlessly offline too. This is the best investment we\'ve made for our logistics business. Highly recommended!'
            },

            /* ── PORTUGAL (4) ── */
            {
                name: 'João Ferreira',
                country: 'Portugal',
                code: 'pt',
                lang: 'pt',
                stars: 5,
                project: 'Web — Education Platform',
                color: '#006a2e',
                text: 'Trabalho de excelência! A plataforma educativa foi entregue dentro do prazo com qualidade excepcional. O design é moderno e a usabilidade é perfeita. Muito recomendado a qualquer empresa que precise de um desenvolvimento profissional.'
            },
            {
                name: 'Ana Costa',
                country: 'Portugal',
                code: 'pt',
                lang: 'pt',
                stars: 5,
                project: 'Mobile App — Hotel Booking',
                color: '#c0304a',
                text: 'Comunicação clara e resultados fantásticos! A aplicação de reservas ficou simplesmente perfeita — intuitiva, bonita e com todas as funcionalidades que precisávamos. Sem dúvida o melhor desenvolvedor com quem trabalhei.'
            },
            {
                name: 'Pedro Rodrigues',
                country: 'Portugal',
                code: 'pt',
                lang: 'pt',
                stars: 5,
                project: 'Game — Light Bulb Puzzle',
                color: '#1a5fad',
                text: 'O jogo de puzzle ficou incrível! Mecânica muito bem pensada, design limpo e animações suaves. Os nossos utilizadores adoram e os níveis de engagement são muito altos. Profissional de altíssimo nível. Parabéns!'
            },
            {
                name: 'Sofia Gomes',
                country: 'Portugal',
                code: 'pt',
                lang: 'pt',
                stars: 5,
                project: 'AI Automation — Chatbot',
                color: '#7a5a00',
                text: 'A solução de automação com IA revolucionou o nosso atendimento ao cliente. O chatbot é inteligente, responde com precisão e reduziu o tempo de resposta em 80%. Um investimento que se pagou em semanas. Excelente trabalho!'
            },

            /* ── GERMANY (4) ── */
            {
                name: 'Thomas Müller',
                country: 'Deutschland',
                code: 'de',
                lang: 'de',
                stars: 5,
                project: 'Web — EcoGreen E-Commerce',
                color: '#1a1a1a',
                text: 'Hervorragende Arbeit! Der Online-Shop wurde pünktlich und in höchster Qualität geliefert. Das Design ist modern und benutzerfreundlich, und die Conversion-Rate hat sich deutlich verbessert. Klare Empfehlung!'
            },
            {
                name: 'Anna Schmidt',
                country: 'Deutschland',
                code: 'de',
                lang: 'de',
                stars: 5,
                project: 'Mobile App — Global Fintech Fest',
                color: '#c08a00',
                text: 'Sehr professionell und äußerst kreativ! Die Konferenz-App hat unsere Veranstaltung auf ein völlig neues Niveau gehoben. Die Teilnehmer waren begeistert von der Benutzeroberfläche und den interaktiven Funktionen. Absolut empfehlenswert!'
            },
            {
                name: 'Klaus Weber',
                country: 'Deutschland',
                code: 'de',
                lang: 'de',
                stars: 5,
                project: 'Game — Spark Riders',
                color: '#c0304a',
                text: 'Das Rennspiel übertrifft unsere Erwartungen bei weitem! Beeindruckende Grafik, flüssige Spielmechanik und ein ausgereiftes Design. Der Entwickler hat nicht nur technisch, sondern auch kreativ auf höchstem Niveau gearbeitet. Top!'
            },
            {
                name: 'Julia Fischer',
                country: 'Deutschland',
                code: 'de',
                lang: 'de',
                stars: 5,
                project: 'AI Automation — SaaS',
                color: '#1a5fad',
                text: 'Ausgezeichnete Kommunikation und fantastische Ergebnisse! Die KI-Automatisierungslösung hat unsere internen Prozesse revolutioniert. Sehr detailorientiert, pünktlich und überaus professionell. Der beste Entwickler, mit dem ich je zusammengearbeitet habe!'
            }
        ];
