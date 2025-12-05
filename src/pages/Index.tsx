import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  const courses = [
    {
      id: 1,
      title: "Full-Stack разработка на React и Node.js",
      category: "IT",
      level: "Продвинутый",
      price: "89 900 ₽",
      oldPrice: "120 000 ₽",
      duration: "12 месяцев",
      students: 1240,
      rating: 4.9,
      image: "https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/21ef8831-e820-4f89-99fe-cabfdda712a8.jpg",
      badge: "Хит"
    },
    {
      id: 2,
      title: "UX/UI дизайн: от основ до портфолио",
      category: "Дизайн",
      level: "Средний",
      price: "69 900 ₽",
      oldPrice: null,
      duration: "9 месяцев",
      students: 856,
      rating: 4.8,
      image: "https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/fbeecb60-80db-48a5-a714-fb278a3e611a.jpg",
      badge: "Новинка"
    },
    {
      id: 3,
      title: "Digital-маркетинг и продвижение",
      category: "Маркетинг",
      level: "Начальный",
      price: "49 900 ₽",
      oldPrice: "65 000 ₽",
      duration: "6 месяцев",
      students: 2103,
      rating: 4.7,
      image: "https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/22e50b7d-08b7-4c79-a3aa-5df6f724d205.jpg",
      badge: "Скидка"
    },
    {
      id: 4,
      title: "Python для анализа данных и ML",
      category: "IT",
      level: "Средний",
      price: "79 900 ₽",
      oldPrice: null,
      duration: "10 месяцев",
      students: 967,
      rating: 4.9,
      image: "https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/21ef8831-e820-4f89-99fe-cabfdda712a8.jpg",
      badge: null
    },
    {
      id: 5,
      title: "Управление продуктом: Product Manager",
      category: "Бизнес",
      level: "Продвинутый",
      price: "99 900 ₽",
      oldPrice: "130 000 ₽",
      duration: "12 месяцев",
      students: 543,
      rating: 4.8,
      image: "https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/fbeecb60-80db-48a5-a714-fb278a3e611a.jpg",
      badge: "Хит"
    },
    {
      id: 6,
      title: "Графический дизайн и брендинг",
      category: "Дизайн",
      level: "Начальный",
      price: "54 900 ₽",
      oldPrice: null,
      duration: "8 месяцев",
      students: 1456,
      rating: 4.7,
      image: "https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/22e50b7d-08b7-4c79-a3aa-5df6f724d205.jpg",
      badge: null
    }
  ];

  const categories = [
    { name: "IT и программирование", icon: "Code2", count: 127 },
    { name: "Дизайн", icon: "Palette", count: 89 },
    { name: "Бизнес", icon: "Briefcase", count: 65 },
    { name: "Маркетинг", icon: "TrendingUp", count: 54 }
  ];

  const benefits = [
    {
      icon: "Award",
      title: "Сертификаты",
      description: "Официальный диплом о профессиональной переподготовке"
    },
    {
      icon: "Users",
      title: "Менторство",
      description: "Персональный куратор и помощь экспертов на всех этапах"
    },
    {
      icon: "Briefcase",
      title: "Портфолио",
      description: "Реальные проекты для вашего портфолио и резюме"
    },
    {
      icon: "Rocket",
      title: "Трудоустройство",
      description: "Помощь в поиске работы и подготовка к собеседованиям"
    }
  ];

  const teachers = [
    {
      id: 1,
      name: "Алексей Михайлов",
      position: "Senior Full-Stack Developer",
      company: "Яндекс",
      experience: "12 лет в разработке",
      students: 3200,
      courses: 5,
      avatar: "АМ",
      specialization: "IT",
      rating: 4.9
    },
    {
      id: 2,
      name: "Екатерина Смирнова",
      position: "Lead UX/UI Designer",
      company: "VK",
      experience: "9 лет в дизайне",
      students: 2100,
      courses: 4,
      avatar: "ЕС",
      specialization: "Дизайн",
      rating: 4.8
    },
    {
      id: 3,
      name: "Игорь Петров",
      position: "Product Manager",
      company: "Сбер",
      experience: "15 лет в продукте",
      students: 1800,
      courses: 3,
      avatar: "ИП",
      specialization: "Бизнес",
      rating: 4.9
    },
    {
      id: 4,
      name: "Мария Новикова",
      position: "Head of Marketing",
      company: "Ozon",
      experience: "11 лет в маркетинге",
      students: 2500,
      courses: 6,
      avatar: "МН",
      specialization: "Маркетинг",
      rating: 4.7
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Анна Соколова",
      course: "UX/UI дизайн",
      text: "Прошла курс за 8 месяцев, нашла работу дизайнером в IT-компании. Преподаватели — действующие специалисты, дают актуальные знания.",
      rating: 5,
      avatar: "АС"
    },
    {
      id: 2,
      name: "Дмитрий Волков",
      course: "Full-Stack разработка",
      text: "Отличная структура программы, много практики. Сейчас работаю разработчиком, курс полностью окупился.",
      rating: 5,
      avatar: "ДВ"
    },
    {
      id: 3,
      name: "Мария Петрова",
      course: "Digital-маркетинг",
      text: "Курс дал понимание всех каналов продвижения. Уже через 3 месяца обучения начала работать над реальными проектами.",
      rating: 5,
      avatar: "МП"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/20">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <Icon name="GraduationCap" size={28} className="text-primary" />
              <span className="text-xl font-bold">EduPlatform</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
                Курсы
              </a>
              <a href="#categories" className="text-sm font-medium hover:text-primary transition-colors">
                Категории
              </a>
              <a href="#teachers" className="text-sm font-medium hover:text-primary transition-colors">
                Преподаватели
              </a>
              <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">
                Отзывы
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Войти
            </Button>
            <Button size="sm" className="hidden sm:flex">
              Регистрация
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-white w-fit">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Более 50 000 студентов уже учатся
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Освойте новую профессию{" "}
                <span className="text-primary">онлайн</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Практические курсы от экспертов индустрии. Учитесь в удобном темпе, получайте диплом и трудоустраивайтесь с нашей помощью.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base">
                  <Icon name="Play" size={18} className="mr-2" />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  <Icon name="BookOpen" size={18} className="mr-2" />
                  Подробнее о курсах
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">335+</div>
                  <div className="text-sm text-muted-foreground">Курсов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.8</div>
                  <div className="text-sm text-muted-foreground">Средний рейтинг</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">92%</div>
                  <div className="text-sm text-muted-foreground">Трудоустройство</div>
                </div>
              </div>
            </div>
            <div className="relative lg:block hidden animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/68b92a6a-51c2-4daa-acf0-8bcc8dde5adb/files/22e50b7d-08b7-4c79-a3aa-5df6f724d205.jpg"
                alt="Hero"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Популярные курсы</h2>
              <p className="text-muted-foreground text-lg">Выберите направление и начните карьеру мечты</p>
            </div>
            <Button variant="ghost" className="hidden md:flex">
              Все курсы
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card
                key={course.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  {course.badge && (
                    <Badge
                      className={`absolute top-3 right-3 ${
                        course.badge === "Хит"
                          ? "bg-primary"
                          : course.badge === "Новинка"
                          ? "bg-secondary"
                          : "bg-accent text-foreground"
                      }`}
                    >
                      {course.badge}
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {course.category}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Users" size={14} />
                      {course.students.toLocaleString()}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 mb-3">
                    <Icon name="Star" size={16} className="fill-accent text-accent" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-muted-foreground text-sm ml-1">
                      ({course.students} отзывов)
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="flex flex-col">
                    {course.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {course.oldPrice}
                      </span>
                    )}
                    <span className="text-2xl font-bold">{course.price}</span>
                  </div>
                  <Button>
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Категории курсов</h2>
            <p className="text-muted-foreground text-lg">Найдите свое направление</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center mx-auto mb-4">
                    <Icon name={category.icon} size={32} />
                  </div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <CardDescription className="text-base">
                    {category.count} курсов
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg">Преимущества обучения на платформе</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} size={28} />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Наши преподаватели</h2>
            <p className="text-muted-foreground text-lg">Эксперты из ведущих компаний</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="group text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl">
                      {teacher.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-base font-medium">
                    {teacher.position}
                  </CardDescription>
                  <Badge className="mx-auto mt-2 bg-primary/10 text-primary hover:bg-primary/20">
                    {teacher.company}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Briefcase" size={16} />
                    <span>{teacher.experience}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Users" size={16} />
                    <span>{teacher.students.toLocaleString()} студентов</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Icon name="BookOpen" size={16} />
                    <span>{teacher.courses} курсов</span>
                  </div>
                  <div className="flex items-center justify-center gap-1 pt-2">
                    <Icon name="Star" size={16} className="fill-accent text-accent" />
                    <span className="font-semibold">{teacher.rating}</span>
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Смотреть курсы
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Отзывы студентов</h2>
            <p className="text-muted-foreground text-lg">Истории успеха наших выпускников</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.course}</div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} className="text-primary" />
                <span className="text-xl font-bold">EduPlatform</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Онлайн-платформа для профессионального обучения и развития карьеры
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Обучение</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Все курсы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Категории</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@eduplatform.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex gap-2 pt-2">
                  <a href="#" className="hover:text-primary transition-colors">
                    <Icon name="Send" size={20} />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <Icon name="Youtube" size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm text-muted-foreground">
            © 2024 EduPlatform. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;