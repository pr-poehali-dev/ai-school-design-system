import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { coursesData } from "@/data/courses";

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 150000]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("popular");

  const categories = ["IT", "Дизайн", "Бизнес", "Маркетинг"];
  const levels = ["Начальный", "Средний", "Продвинутый"];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleLevel = (level: string) => {
    setSelectedLevels(prev =>
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const filteredCourses = useMemo(() => {
    const filtered = coursesData.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || 
                             selectedCategories.includes(course.category);
      
      const matchesLevel = selectedLevels.length === 0 || 
                          selectedLevels.includes(course.level);
      
      const coursePrice = parseInt(course.price.replace(/\D/g, ''));
      const matchesPrice = coursePrice >= priceRange[0] && coursePrice <= priceRange[1];
      
      const matchesRating = course.rating >= minRating;

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice && matchesRating;
    });

    if (sortBy === "price-asc") {
      filtered.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "popular") {
      filtered.sort((a, b) => b.students - a.students);
    }

    return filtered;
  }, [searchQuery, selectedCategories, selectedLevels, priceRange, minRating, sortBy]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedLevels([]);
    setPriceRange([0, 150000]);
    setMinRating(0);
    setSortBy("popular");
  };

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

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">Каталог курсов</h1>
            <p className="text-lg text-muted-foreground">Найдите идеальный курс для вашего развития</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Фильтры</CardTitle>
                    <Button variant="ghost" size="sm" onClick={resetFilters}>
                      <Icon name="X" size={16} className="mr-1" />
                      Сбросить
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Поиск</Label>
                    <Input
                      placeholder="Название курса..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-3 block">Категория</Label>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`cat-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <label
                            htmlFor={`cat-${category}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-3 block">Уровень</Label>
                    <div className="space-y-2">
                      {levels.map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox
                            id={`level-${level}`}
                            checked={selectedLevels.includes(level)}
                            onCheckedChange={() => toggleLevel(level)}
                          />
                          <label
                            htmlFor={`level-${level}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Цена: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} ₽
                    </Label>
                    <Slider
                      min={0}
                      max={150000}
                      step={5000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Минимальный рейтинг: {minRating.toFixed(1)}
                    </Label>
                    <Slider
                      min={0}
                      max={5}
                      step={0.1}
                      value={[minRating]}
                      onValueChange={(value) => setMinRating(value[0])}
                      className="mt-2"
                    />
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={i < Math.floor(minRating) ? "fill-accent text-accent" : "text-muted-foreground"}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            <div className="lg:col-span-3 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-muted-foreground">
                  Найдено курсов: <span className="font-semibold text-foreground">{filteredCourses.length}</span>
                </p>
                <div className="flex items-center gap-2">
                  <Label className="text-sm whitespace-nowrap">Сортировать:</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">По популярности</SelectItem>
                      <SelectItem value="rating">По рейтингу</SelectItem>
                      <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                      <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {filteredCourses.length === 0 ? (
                <Card className="p-12 text-center">
                  <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Курсы не найдены</h3>
                  <p className="text-muted-foreground mb-4">
                    Попробуйте изменить параметры фильтрации
                  </p>
                  <Button onClick={resetFilters}>Сбросить фильтры</Button>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredCourses.map((course) => (
                    <Card
                      key={course.id}
                      className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                        <Link to={`/course/${course.slug}`}>
                          <Button>
                            Подробнее
                            <Icon name="ArrowRight" size={16} className="ml-2" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-12 mt-12">
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
                <li><a href="/catalog" className="hover:text-primary transition-colors">Все курсы</a></li>
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

export default Catalog;
