export const coursesData = [
  {
    id: 1,
    slug: "fullstack-react-nodejs",
    title: "Full-Stack разработка на React и Node.js",
    category: "IT",
    level: "Продвинутый",
    price: "89 900 ₽",
    oldPrice: "120 000 ₽",
    duration: "12 месяцев",
    students: 1240,
    rating: 4.9,
    image: "https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/21ef8831-e820-4f89-99fe-cabfdda712a8.jpg",
    badge: "Хит",
    description: "Полный курс для тех, кто хочет стать профессиональным Full-Stack разработчиком. Вы научитесь создавать современные веб-приложения с нуля, освоите React, Node.js, базы данных и деплой приложений.",
    whatYouLearn: [
      "Создавать интерфейсы на React и TypeScript",
      "Разрабатывать серверную часть на Node.js и Express",
      "Работать с базами данных PostgreSQL и MongoDB",
      "Проектировать REST API и GraphQL",
      "Настраивать CI/CD и деплой приложений",
      "Писать тесты и оптимизировать производительность"
    ],
    program: [
      {
        title: "Основы веб-разработки",
        lessons: 12,
        duration: "4 недели",
        topics: ["HTML5 и CSS3", "JavaScript ES6+", "Git и GitHub", "Основы TypeScript"]
      },
      {
        title: "Frontend на React",
        lessons: 24,
        duration: "8 недель",
        topics: ["Компоненты и хуки", "Redux и состояние", "React Router", "Работа с API"]
      },
      {
        title: "Backend на Node.js",
        lessons: 20,
        duration: "7 недель",
        topics: ["Express.js", "REST API", "Аутентификация", "Работа с БД"]
      },
      {
        title: "Базы данных",
        lessons: 16,
        duration: "5 недель",
        topics: ["PostgreSQL", "MongoDB", "Миграции", "Оптимизация запросов"]
      },
      {
        title: "Деплой и DevOps",
        lessons: 10,
        duration: "3 недели",
        topics: ["Docker", "CI/CD", "Nginx", "AWS/Heroku"]
      },
      {
        title: "Дипломный проект",
        lessons: 8,
        duration: "4 недели",
        topics: ["Разработка реального проекта", "Защита диплома"]
      }
    ],
    teacher: {
      name: "Алексей Михайлов",
      position: "Senior Full-Stack Developer",
      company: "Яндекс",
      avatar: "АМ"
    }
  },
  {
    id: 2,
    slug: "ux-ui-design",
    title: "UX/UI дизайн: от основ до портфолио",
    category: "Дизайн",
    level: "Средний",
    price: "69 900 ₽",
    oldPrice: null,
    duration: "9 месяцев",
    students: 856,
    rating: 4.8,
    image: "https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/fbeecb60-80db-48a5-a714-fb278a3e611a.jpg",
    badge: "Новинка",
    description: "Научитесь создавать удобные и красивые интерфейсы. Освоите принципы UX-исследований, прототипирование в Figma и создадите портфолио из 5 проектов для трудоустройства.",
    whatYouLearn: [
      "Проводить UX-исследования и анализировать пользователей",
      "Создавать wireframes и прототипы в Figma",
      "Разрабатывать UI-дизайн и дизайн-системы",
      "Работать с типографикой и композицией",
      "Анимировать интерфейсы и создавать микроинтеракции",
      "Собирать портфолио и презентовать проекты"
    ],
    program: [
      {
        title: "Основы UX/UI дизайна",
        lessons: 10,
        duration: "3 недели",
        topics: ["Принципы UX", "Основы UI", "Типографика", "Цвет и композиция"]
      },
      {
        title: "UX-исследования",
        lessons: 14,
        duration: "5 недель",
        topics: ["CJM и User Flow", "Интервью", "A/B тесты", "Аналитика"]
      },
      {
        title: "Figma и прототипирование",
        lessons: 18,
        duration: "6 недель",
        topics: ["Figma Pro", "Wireframes", "Прототипы", "Компоненты"]
      },
      {
        title: "UI-дизайн",
        lessons: 16,
        duration: "5 недель",
        topics: ["Дизайн-системы", "Адаптив", "Анимации", "Иконки"]
      },
      {
        title: "Портфолио",
        lessons: 12,
        duration: "4 недели",
        topics: ["Кейсы", "Презентация", "Behance", "Собеседования"]
      }
    ],
    teacher: {
      name: "Екатерина Смирнова",
      position: "Lead UX/UI Designer",
      company: "VK",
      avatar: "ЕС"
    }
  },
  {
    id: 3,
    slug: "digital-marketing",
    title: "Digital-маркетинг и продвижение",
    category: "Маркетинг",
    level: "Начальный",
    price: "49 900 ₽",
    oldPrice: "65 000 ₽",
    duration: "6 месяцев",
    students: 2103,
    rating: 4.7,
    image: "https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/22e50b7d-08b7-4c79-a3aa-5df6f724d205.jpg",
    badge: "Скидка",
    description: "Полный курс по digital-маркетингу для начинающих. Освоите все каналы продвижения: контекстную и таргетированную рекламу, SEO, email-маркетинг и аналитику.",
    whatYouLearn: [
      "Настраивать рекламу в Яндекс.Директ и Google Ads",
      "Запускать таргет в VK и myTarget",
      "Оптимизировать сайты под SEO",
      "Работать с email-рассылками",
      "Анализировать метрики и считать ROI",
      "Разрабатывать маркетинговую стратегию"
    ],
    program: [
      {
        title: "Основы маркетинга",
        lessons: 8,
        duration: "2 недели",
        topics: ["Маркетинговая стратегия", "ЦА и сегментация", "Воронка продаж"]
      },
      {
        title: "Контекстная реклама",
        lessons: 16,
        duration: "5 недель",
        topics: ["Яндекс.Директ", "Google Ads", "Ключевые слова", "Аналитика"]
      },
      {
        title: "Таргетированная реклама",
        lessons: 14,
        duration: "4 недели",
        topics: ["VK Реклама", "myTarget", "Креативы", "Аудитории"]
      },
      {
        title: "SEO и контент",
        lessons: 12,
        duration: "4 недели",
        topics: ["Технический SEO", "Контент-план", "Линкбилдинг"]
      },
      {
        title: "Email и SMM",
        lessons: 10,
        duration: "3 недели",
        topics: ["Email-рассылки", "Социальные сети", "Telegram"]
      }
    ],
    teacher: {
      name: "Мария Новикова",
      position: "Head of Marketing",
      company: "Ozon",
      avatar: "МН"
    }
  },
  {
    id: 4,
    slug: "python-data-science",
    title: "Python для анализа данных и ML",
    category: "IT",
    level: "Средний",
    price: "79 900 ₽",
    oldPrice: null,
    duration: "10 месяцев",
    students: 967,
    rating: 4.9,
    image: "https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/21ef8831-e820-4f89-99fe-cabfdda712a8.jpg",
    badge: null,
    description: "Станьте Data Scientist. Научитесь анализировать данные, строить ML-модели и создавать предсказания на Python с библиотеками pandas, scikit-learn и TensorFlow.",
    whatYouLearn: [
      "Программировать на Python для анализа данных",
      "Работать с pandas, NumPy и Matplotlib",
      "Строить ML-модели с scikit-learn",
      "Создавать нейросети на TensorFlow",
      "Визуализировать данные и результаты",
      "Деплоить ML-модели в продакшн"
    ],
    program: [
      {
        title: "Python для Data Science",
        lessons: 16,
        duration: "5 недель",
        topics: ["Python основы", "NumPy", "pandas", "Jupyter"]
      },
      {
        title: "Анализ данных",
        lessons: 18,
        duration: "6 недель",
        topics: ["EDA", "Статистика", "Визуализация", "SQL"]
      },
      {
        title: "Machine Learning",
        lessons: 22,
        duration: "8 недель",
        topics: ["Регрессия", "Классификация", "Кластеризация", "scikit-learn"]
      },
      {
        title: "Deep Learning",
        lessons: 20,
        duration: "7 недель",
        topics: ["Нейросети", "TensorFlow", "Keras", "CNN и RNN"]
      },
      {
        title: "MLOps",
        lessons: 10,
        duration: "3 недели",
        topics: ["MLflow", "Docker", "API для ML", "Продакшн"]
      }
    ],
    teacher: {
      name: "Алексей Михайлов",
      position: "Senior Full-Stack Developer",
      company: "Яндекс",
      avatar: "АМ"
    }
  },
  {
    id: 5,
    slug: "product-manager",
    title: "Управление продуктом: Product Manager",
    category: "Бизнес",
    level: "Продвинутый",
    price: "99 900 ₽",
    oldPrice: "130 000 ₽",
    duration: "12 месяцев",
    students: 543,
    rating: 4.8,
    image: "https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/fbeecb60-80db-48a5-a714-fb278a3e611a.jpg",
    badge: "Хит",
    description: "Комплексная программа для Product Manager. Научитесь управлять продуктом от идеи до запуска, работать с командой, метриками и развивать продукт на основе данных.",
    whatYouLearn: [
      "Генерировать и валидировать идеи продукта",
      "Проводить customer development",
      "Работать с метриками и юнит-экономикой",
      "Управлять backlog и приоритетами",
      "Координировать команду разработки",
      "Запускать продукты и масштабировать их"
    ],
    program: [
      {
        title: "Роль Product Manager",
        lessons: 10,
        duration: "3 недели",
        topics: ["Product thinking", "Customer development", "Jobs To Be Done"]
      },
      {
        title: "Разработка продукта",
        lessons: 18,
        duration: "6 недель",
        topics: ["Product vision", "MVP", "User stories", "Roadmap"]
      },
      {
        title: "Метрики и аналитика",
        lessons: 16,
        duration: "5 недель",
        topics: ["AARRR", "Unit-экономика", "A/B тесты", "Когортный анализ"]
      },
      {
        title: "Управление командой",
        lessons: 14,
        duration: "5 недель",
        topics: ["Agile и Scrum", "Backlog", "Приоритизация", "Коммуникации"]
      },
      {
        title: "Growth и масштабирование",
        lessons: 12,
        duration: "4 недели",
        topics: ["Growth hacking", "Retention", "Монетизация", "Масштабирование"]
      }
    ],
    teacher: {
      name: "Игорь Петров",
      position: "Product Manager",
      company: "Сбер",
      avatar: "ИП"
    }
  },
  {
    id: 6,
    slug: "graphic-design-branding",
    title: "Графический дизайн и брендинг",
    category: "Дизайн",
    level: "Начальный",
    price: "54 900 ₽",
    oldPrice: null,
    duration: "8 месяцев",
    students: 1456,
    rating: 4.7,
    image: "https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/22e50b7d-08b7-4c79-a3aa-5df6f724d205.jpg",
    badge: null,
    description: "Научитесь создавать визуальную айдентику брендов. Освоите Adobe Photoshop, Illustrator, разработку логотипов, фирменного стиля и брендбуков.",
    whatYouLearn: [
      "Работать в Adobe Photoshop и Illustrator",
      "Создавать логотипы и фирменный стиль",
      "Разрабатывать брендбуки",
      "Проектировать упаковку и полиграфию",
      "Работать с типографикой и композицией",
      "Презентовать проекты клиентам"
    ],
    program: [
      {
        title: "Основы графического дизайна",
        lessons: 12,
        duration: "4 недели",
        topics: ["Композиция", "Цвет", "Типографика", "Теория дизайна"]
      },
      {
        title: "Adobe Photoshop",
        lessons: 16,
        duration: "5 недель",
        topics: ["Ретушь", "Коллажи", "Эффекты", "Работа со слоями"]
      },
      {
        title: "Adobe Illustrator",
        lessons: 18,
        duration: "6 недель",
        topics: ["Векторная графика", "Логотипы", "Иллюстрации", "Паттерны"]
      },
      {
        title: "Брендинг",
        lessons: 14,
        duration: "5 недель",
        topics: ["Разработка логотипа", "Фирменный стиль", "Брендбук", "Гайдлайны"]
      },
      {
        title: "Портфолио",
        lessons: 10,
        duration: "3 недели",
        topics: ["Кейсы", "Презентация", "Behance", "Поиск клиентов"]
      }
    ],
    teacher: {
      name: "Екатерина Смирнова",
      position: "Lead UX/UI Designer",
      company: "VK",
      avatar: "ЕС"
    }
  }
];
