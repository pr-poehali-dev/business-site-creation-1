import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'about', label: 'О компании', icon: 'Building2' },
    { id: 'catalog', label: 'Каталог товаров', icon: 'Package' },
    { id: 'pricing', label: 'Прайс-листы', icon: 'FileText' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' },
  ];

  const products = [
    { id: 1, name: 'Офисная мебель', category: 'furniture', price: '25 000', description: 'Комплект офисной мебели премиум класса' },
    { id: 2, name: 'Компьютерная техника', category: 'tech', price: '45 000', description: 'Современные компьютеры и периферия' },
    { id: 3, name: 'Канцелярские товары', category: 'office', price: '3 500', description: 'Полный набор канцелярских принадлежностей' },
    { id: 4, name: 'Промышленное оборудование', category: 'equipment', price: '150 000', description: 'Профессиональное промышленное оборудование' },
    { id: 5, name: 'Система безопасности', category: 'security', price: '75 000', description: 'Комплексные решения для безопасности' },
    { id: 6, name: 'Расходные материалы', category: 'supplies', price: '8 500', description: 'Расходные материалы для офиса и производства' },
  ];

  const priceList = [
    { category: 'Офисная мебель', items: 12, minPrice: '15 000', maxPrice: '85 000', delivery: '3-5 дней' },
    { category: 'Компьютерная техника', items: 24, minPrice: '25 000', maxPrice: '120 000', delivery: '1-3 дня' },
    { category: 'Канцелярские товары', items: 45, minPrice: '500', maxPrice: '15 000', delivery: '1-2 дня' },
    { category: 'Промышленное оборудование', items: 8, minPrice: '80 000', maxPrice: '500 000', delivery: '7-14 дней' },
    { category: 'Система безопасности', items: 15, minPrice: '35 000', maxPrice: '200 000', delivery: '5-10 дней' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderHomeSection = () => (
    <div className="animate-fade-in">
      <section className="relative bg-gradient-to-r from-corporate-navy to-corporate-gray text-white py-20 px-6 mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Надежный партнер для вашего бизнеса</h1>
          <p className="text-xl mb-8 opacity-90">
            Более 15 лет предоставляем качественные решения для корпоративных клиентов
          </p>
          <Button 
            size="lg" 
            className="bg-white text-corporate-navy hover:bg-gray-100 font-semibold px-8 py-3"
            onClick={() => setActiveSection('catalog')}
          >
            Посмотреть каталог
          </Button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Icon name="Trophy" size={48} className="mx-auto text-corporate-blue mb-4" />
              <CardTitle>Качество</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Только проверенные поставщики и сертифицированная продукция
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Icon name="Clock" size={48} className="mx-auto text-corporate-blue mb-4" />
              <CardTitle>Оперативность</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Быстрая обработка заказов и доставка в кратчайшие сроки
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Icon name="Users" size={48} className="mx-auto text-corporate-blue mb-4" />
              <CardTitle>Сервис</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Персональный менеджер и круглосуточная техническая поддержка
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/01568a73-e892-4f71-ac41-ff5882c31cba.jpg" 
                alt="Современный офис" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle" size={24} className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Индивидуальный подход</h3>
                  <p className="text-muted-foreground">Разрабатываем решения под специфику вашего бизнеса</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Shield" size={24} className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Гарантия качества</h3>
                  <p className="text-muted-foreground">Официальная гарантия на всю продукцию до 3 лет</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Truck" size={24} className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Логистика</h3>
                  <p className="text-muted-foreground">Собственная служба доставки по всей России</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderAboutSection = () => (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">О компании</h1>
      
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-lg text-muted-foreground mb-6">
          Наша компания является ведущим поставщиком корпоративных решений с 2008 года. 
          За это время мы успешно реализовали более 2000 проектов для предприятий различных отраслей.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 my-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Target" size={24} />
                Наша миссия
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Предоставлять качественные товары и услуги, способствующие развитию и успеху наших клиентов.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Eye" size={24} />
                Наше видение
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Стать признанным лидером на рынке B2B поставок в России и странах СНГ.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 text-center">
        <div className="bg-corporate-navy text-white p-6 rounded-lg">
          <div className="text-3xl font-bold mb-2">15+</div>
          <div className="text-sm">лет на рынке</div>
        </div>
        <div className="bg-corporate-navy text-white p-6 rounded-lg">
          <div className="text-3xl font-bold mb-2">2000+</div>
          <div className="text-sm">выполненных проектов</div>
        </div>
        <div className="bg-corporate-navy text-white p-6 rounded-lg">
          <div className="text-3xl font-bold mb-2">500+</div>
          <div className="text-sm">довольных клиентов</div>
        </div>
        <div className="bg-corporate-navy text-white p-6 rounded-lg">
          <div className="text-3xl font-bold mb-2">24/7</div>
          <div className="text-sm">техподдержка</div>
        </div>
      </div>
    </div>
  );

  const renderCatalogSection = () => (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">Каталог товаров</h1>
      
      <div className="mb-8">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-72">
            <SelectValue placeholder="Выберите категорию" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все категории</SelectItem>
            <SelectItem value="furniture">Офисная мебель</SelectItem>
            <SelectItem value="tech">Компьютерная техника</SelectItem>
            <SelectItem value="office">Канцелярские товары</SelectItem>
            <SelectItem value="equipment">Промышленное оборудование</SelectItem>
            <SelectItem value="security">Система безопасности</SelectItem>
            <SelectItem value="supplies">Расходные материалы</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <Badge variant="secondary">{product.price} ₽</Badge>
              </div>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                <Icon name="ShoppingCart" size={16} className="mr-2" />
                Запросить цену
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Не нашли нужный товар?</h3>
            <p className="text-muted-foreground mb-4">
              Мы работаем с сотнями поставщиков и можем найти любой товар для вашего бизнеса
            </p>
            <Button>
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Оставить заявку
            </Button>
          </div>
          <div>
            <img 
              src="/img/0616f4f7-be4c-4b91-b17d-8568b4cf500c.jpg" 
              alt="Каталог товаров" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderPricingSection = () => (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">Прайс-листы и условия поставки</h1>
      
      <Tabs defaultValue="prices" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="prices">Прайс-листы</TabsTrigger>
          <TabsTrigger value="conditions">Условия поставки</TabsTrigger>
        </TabsList>
        
        <TabsContent value="prices" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Актуальные цены по категориям</CardTitle>
              <CardDescription>
                Цены указаны в рублях с НДС. Для получения детального прайс-листа обратитесь к менеджеру.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Категория</TableHead>
                    <TableHead>Количество позиций</TableHead>
                    <TableHead>Цена от</TableHead>
                    <TableHead>Цена до</TableHead>
                    <TableHead>Срок поставки</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {priceList.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.category}</TableCell>
                      <TableCell>{item.items}</TableCell>
                      <TableCell>{item.minPrice} ₽</TableCell>
                      <TableCell>{item.maxPrice} ₽</TableCell>
                      <TableCell>{item.delivery}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <Icon name="Download" size={14} className="mr-1" />
                          Скачать
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="conditions" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CreditCard" size={20} />
                  Условия оплаты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Безналичный расчет</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Отсрочка платежа до 30 дней</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Рассрочка до 12 месяцев</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>НДС включен в стоимость</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Truck" size={20} />
                  Условия доставки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Бесплатная доставка от 50 000 ₽</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Доставка по Москве и МО</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Транспортные компании по РФ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Подъем и занос в офис</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" size={20} />
                  Гарантии
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Гарантия от производителя</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Возврат в течение 14 дней</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Сервисное обслуживание</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Замена бракованного товара</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={20} />
                  Документооборот
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Договор поставки</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Счет на оплату</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Накладная и счет-фактура</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-600" />
                  <span>Электронный документооборот</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );

  const renderContactsSection = () => (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-8">Контакты</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={20} className="text-corporate-blue" />
                <div>
                  <div className="font-medium">Адрес офиса</div>
                  <div className="text-muted-foreground">г. Москва, ул. Деловая, 15, офис 301</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-corporate-blue" />
                <div>
                  <div className="font-medium">Телефон</div>
                  <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-corporate-blue" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">info@company.ru</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={20} className="text-corporate-blue" />
                <div>
                  <div className="font-medium">Режим работы</div>
                  <div className="text-muted-foreground">Пн-Пт: 9:00-18:00</div>
                  <div className="text-muted-foreground">Сб-Вс: выходной</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Отделы</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Отдел продаж</span>
                <span className="text-muted-foreground">доб. 101</span>
              </div>
              <div className="flex justify-between">
                <span>Техническая поддержка</span>
                <span className="text-muted-foreground">доб. 102</span>
              </div>
              <div className="flex justify-between">
                <span>Бухгалтерия</span>
                <span className="text-muted-foreground">доб. 103</span>
              </div>
              <div className="flex justify-between">
                <span>Отдел логистики</span>
                <span className="text-muted-foreground">доб. 104</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Обратная связь</CardTitle>
              <CardDescription>
                Оставьте заявку и наш менеджер свяжется с вами в течение часа
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Имя *</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium">Компания</label>
                  <Input placeholder="Название компании" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Телефон *</label>
                <Input placeholder="+7 (999) 123-45-67" />
              </div>
              
              <div>
                <label className="text-sm font-medium">Email *</label>
                <Input placeholder="email@company.ru" type="email" />
              </div>
              
              <div>
                <label className="text-sm font-medium">Сообщение</label>
                <Textarea 
                  placeholder="Опишите ваши потребности или задайте вопрос..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить заявку
              </Button>
              
              <p className="text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return renderHomeSection();
      case 'about': return renderAboutSection();
      case 'catalog': return renderCatalogSection();
      case 'pricing': return renderPricingSection();
      case 'contacts': return renderContactsSection();
      default: return renderHomeSection();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-corporate-navy rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-corporate-navy">Бизнес Партнер</h1>
                <p className="text-sm text-muted-foreground">Корпоративные решения</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </Button>
              ))}
            </nav>

            <div className="md:hidden">
              <Button variant="outline" size="sm">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {renderContent()}
      </main>

      <footer className="bg-corporate-navy text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><button onClick={() => setActiveSection('about')}>О нас</button></li>
                <li><a href="#" className="hover:underline">Новости</a></li>
                <li><a href="#" className="hover:underline">Карьера</a></li>
                <li><a href="#" className="hover:underline">Партнерам</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:underline">Офисная мебель</a></li>
                <li><a href="#" className="hover:underline">Компьютерная техника</a></li>
                <li><a href="#" className="hover:underline">Канцелярские товары</a></li>
                <li><a href="#" className="hover:underline">Промышленное оборудование</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:underline">Помощь</a></li>
                <li><a href="#" className="hover:underline">Гарантия</a></li>
                <li><a href="#" className="hover:underline">Доставка</a></li>
                <li><a href="#" className="hover:underline">Возврат</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm opacity-90">
                <p>+7 (495) 123-45-67</p>
                <p>info@company.ru</p>
                <p>г. Москва, ул. Деловая, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2024 Бизнес Партнер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;