import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, TrendingUp, Award, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

// Временные данные для демонстрации
const featuredProducts = [
  {
    id: '1',
    name: 'Диван модульный "Лофт"',
    price: 89990,
    discountPrice: 75990,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Диваны',
    isNew: true
  },
  {
    id: '2',
    name: 'Кресло "Скандинавия"',
    price: 32990,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Кресла',
    isNew: true
  },
  {
    id: '3',
    name: 'Журнальный столик "Геометрия"',
    price: 15990,
    discountPrice: 12990,
    image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Столы',
  }
];

const newProducts = [
  {
    id: '4',
    name: 'Кровать "Миннесота"',
    price: 72990,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Кровати',
    isNew: true
  },
  {
    id: '5',
    name: 'Шкаф "Сканди"',
    price: 45990,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Шкафы',
    isNew: true
  },
  {
    id: '6',
    name: 'Тумба "Минимал"',
    price: 18990,
    image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Тумбы',
    isNew: true
  }
];

const bestsellerProducts = [
  {
    id: '7',
    name: 'Стол обеденный "Элегант"',
    price: 27990,
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Столы',
  },
  {
    id: '8',
    name: 'Стул "Модерн"',
    price: 12990,
    discountPrice: 9990,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Стулья',
  },
  {
    id: '9',
    name: 'Комод "Классик"',
    price: 36990,
    image: 'https://images.unsplash.com/photo-1551797802-f2dd1ec0c7fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    category: 'Комоды',
  }
];

const categoryImages = [
  {
    title: "Гостиная",
    image: "https://images.unsplash.com/photo-1616137422495-6b6837bdf252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    link: "/category/living-room"
  },
  {
    title: "Спальня",
    image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    link: "/category/bedroom"
  },
  {
    title: "Кухня",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    link: "/category/kitchen"
  }
];

const Index = () => {
  // Эффект для анимации элементов при скролле
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
      // Изначально скрываем элементы
      element.classList.add('opacity-0');
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2200&q=80" 
            alt="Современная мебель" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Выберите стиль <span className="text-gradient">будущего</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Мебель, которая определяет современный интерьер. Уникальные решения для вашего комфорта и стиля.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full">
                Смотреть каталог
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-white border-white hover:bg-white/10">
                Специальные предложения
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating furniture elements */}
        <div className="absolute -right-40 bottom-20 w-96 h-96 opacity-70 animate-float">
          <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute right-20 top-40 w-64 h-64 opacity-60 animate-float-slow">
          <img src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="" className="w-full h-full object-contain" />
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Подберите мебель для вашего пространства</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Откройте для себя идеальные решения для каждой комнаты вашего дома</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryImages.map((category, index) => (
              <Link to={category.link} key={index} className="group relative rounded-2xl overflow-hidden h-80 animate-on-scroll">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <Button variant="outline" className="text-white border-white group-hover:bg-white group-hover:text-black transition-colors">
                      <span>Смотреть</span>
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 animate-on-scroll">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша мебель</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">Стильные и функциональные предметы интерьера для вашего дома</p>
            </div>
            <Link to="/catalog" className="mt-4 md:mt-0 text-primary font-medium flex items-center hover:underline">
              <span>Смотреть все</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <Tabs defaultValue="featured" className="animate-on-scroll">
            <TabsList className="mb-8">
              <TabsTrigger value="featured">Популярное</TabsTrigger>
              <TabsTrigger value="new">Новинки</TabsTrigger>
              <TabsTrigger value="bestsellers">Бестселлеры</TabsTrigger>
            </TabsList>
            
            <TabsContent value="featured" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="bestsellers" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bestsellerProducts.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Современный дизайн</h3>
              <p className="text-muted-foreground">Мебель с уникальным дизайном, отвечающая актуальным трендам 2025 года.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Высокое качество</h3>
              <p className="text-muted-foreground">Используем только высококачественные материалы и современные технологии производства.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Быстрая доставка</h3>
              <p className="text-muted-foreground">Доставляем заказы в течение 3-7 дней по всей России. Сборка и установка включены.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2158&q=80" 
            alt="Интерьер" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Создайте дом своей мечты</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Наши дизайнеры помогут вам подобрать идеальную мебель, которая подчеркнет индивидуальность вашего интерьера.
            </p>
            <Button size="lg" className="rounded-full">
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-furniture-dark text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Стиль Мебель</h3>
              <p className="text-gray-300 mb-4">Современная мебель для современной жизни</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2">
                <li><Link to="/category/living-room" className="text-gray-300 hover:text-white">Гостиная</Link></li>
                <li><Link to="/category/bedroom" className="text-gray-300 hover:text-white">Спальня</Link></li>
                <li><Link to="/category/kitchen" className="text-gray-300 hover:text-white">Кухня</Link></li>
                <li><Link to="/category/office" className="text-gray-300 hover:text-white">Офис</Link></li>
                <li><Link to="/category/kids" className="text-gray-300 hover:text-white">Детская</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white">О компании</Link></li>
                <li><Link to="/delivery" className="text-gray-300 hover:text-white">Доставка и оплата</Link></li>
                <li><Link to="/warranty" className="text-gray-300 hover:text-white">Гарантия</Link></li>
                <li><Link to="/return" className="text-gray-300 hover:text-white">Возврат и обмен</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+7 (800) 123-45-67</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@stilmebel.ru</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>г. Москва, ул. Мебельная, 123</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-300 text-center">© 2025 Стиль Мебель. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
