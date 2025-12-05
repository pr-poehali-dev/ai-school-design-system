import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { coursesData } from "@/data/courses";

const Course = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const course = coursesData.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Курс не найден</h1>
          <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  const reviews = [
    {
      id: 1,
      name: "Анна Соколова",
      text: "Отличный курс! Преподаватели — действующие специалисты, дают актуальные знания.",
      rating: 5,
      avatar: "АС",
      date: "2 недели назад"
    },
    {
      id: 2,
      name: "Дмитрий Волков",
      text: "Прошел курс за 10 месяцев, нашел работу. Много практики и реальных кейсов.",
      rating: 5,
      avatar: "ДВ",
      date: "1 месяц назад"
    },
    {
      id: 3,
      name: "Мария Петрова",
      text: "Курс дал системное понимание. Уже через 3 месяца начала работать над проектами.",
      rating: 5,
      avatar: "МП",
      date: "3 месяца назад"
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
              <a href="/#courses" className="text-sm font-medium hover:text-primary transition-colors">
                Курсы
              </a>
              <a href="/#categories" className="text-sm font-medium hover:text-primary transition-colors">
                Категории
              </a>
              <a href="/#teachers" className="text-sm font-medium hover:text-primary transition-colors">
                Преподаватели
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

      <section className="py-8 md:py-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate("/")}
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад к курсам
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">{course.category}</Badge>
                  <Badge variant="secondary">{course.level}</Badge>
                  {course.badge && (
                    <Badge className={
                      course.badge === "Хит" 
                        ? "bg-primary" 
                        : course.badge === "Новинка" 
                        ? "bg-secondary" 
                        : "bg-accent text-foreground"
                    }>
                      {course.badge}
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={18} className="text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={18} className="text-primary" />
                    <span>{course.students.toLocaleString()} студентов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Star" size={18} className="text-accent fill-accent" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                </div>
              </div>

              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl w-full object-cover aspect-video shadow-xl"
              />

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Чему вы научитесь</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.whatYouLearn.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Программа курса</CardTitle>
                  <CardDescription>
                    {course.program.length} модулей • {course.program.reduce((acc, m) => acc + m.lessons, 0)} уроков
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {course.program.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex flex-col">
                            <span className="font-semibold">{module.title}</span>
                            <span className="text-sm text-muted-foreground">
                              {module.lessons} уроков • {module.duration}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 pl-4">
                            {module.topics.map((topic, tIndex) => (
                              <li key={tIndex} className="flex items-center gap-2 text-muted-foreground">
                                <Icon name="Circle" size={8} className="fill-current shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Преподаватель</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-20 h-20 ring-4 ring-primary/10">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl">
                        {course.teacher.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{course.teacher.name}</h3>
                      <p className="text-muted-foreground">{course.teacher.position}</p>
                      <Badge className="mt-2 bg-primary/10 text-primary hover:bg-primary/20">
                        {course.teacher.company}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Отзывы студентов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b last:border-0 pb-6 last:pb-0">
                        <div className="flex items-start gap-3 mb-3">
                          <Avatar>
                            <AvatarFallback className="bg-primary text-white">
                              {review.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold">{review.name}</span>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex gap-1 mb-2">
                              {[...Array(review.rating)].map((_, i) => (
                                <Icon key={i} name="Star" size={14} className="fill-accent text-accent" />
                              ))}
                            </div>
                            <p className="text-muted-foreground">{review.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-bold">{course.price}</span>
                    {course.oldPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {course.oldPrice}
                      </span>
                    )}
                  </div>
                  {course.oldPrice && (
                    <Badge className="w-fit bg-accent text-foreground">
                      Скидка {Math.round((1 - parseInt(course.price.replace(/\D/g, '')) / parseInt(course.oldPrice.replace(/\D/g, ''))) * 100)}%
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button size="lg" className="w-full text-base">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить курс
                  </Button>
                  <Button size="lg" variant="outline" className="w-full text-base">
                    <Icon name="Heart" size={18} className="mr-2" />
                    В избранное
                  </Button>

                  <div className="pt-4 border-t space-y-3">
                    <h3 className="font-semibold">Что входит в курс:</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Video" size={16} className="text-primary" />
                        <span>Видеоуроки</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="FileText" size={16} className="text-primary" />
                        <span>Практические задания</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MessageCircle" size={16} className="text-primary" />
                        <span>Обратная связь от куратора</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Award" size={16} className="text-primary" />
                        <span>Сертификат о завершении</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Briefcase" size={16} className="text-primary" />
                        <span>Проекты в портфолио</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Infinity" size={16} className="text-primary" />
                        <span>Доступ навсегда</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-2">Поделиться курсом:</h3>
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline">
                        <Icon name="Send" size={18} />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Icon name="Link" size={18} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                <li><a href="/#courses" className="hover:text-primary transition-colors">Все курсы</a></li>
                <li><a href="/#categories" className="hover:text-primary transition-colors">Категории</a></li>
                <li><a href="/#teachers" className="hover:text-primary transition-colors">Преподаватели</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
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

export default Course;
