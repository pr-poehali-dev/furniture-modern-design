import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Стиль Мебель
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/60 p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              Новая коллекция
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Стильная мебель 2025 года с современным дизайном 
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link to="/category/living-room" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Гостиная</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Диваны, кресла, столики</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/bedroom" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Спальня</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Кровати, шкафы, комоды</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/category/kitchen" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Кухня</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Столы, стулья, гарнитуры</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/new" className={navigationMenuTriggerStyle()}>
                    Новинки
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/sale" className={navigationMenuTriggerStyle()}>
                    Распродажа
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className={navigationMenuTriggerStyle()}>
                    О нас
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-white flex items-center justify-center">3</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg animate-fade-in">
          <ul className="space-y-4">
            <li><Link to="/category/living-room" className="block py-2 text-foreground font-medium">Гостиная</Link></li>
            <li><Link to="/category/bedroom" className="block py-2 text-foreground font-medium">Спальня</Link></li>
            <li><Link to="/category/kitchen" className="block py-2 text-foreground font-medium">Кухня</Link></li>
            <li><Link to="/new" className="block py-2 text-foreground font-medium">Новинки</Link></li>
            <li><Link to="/sale" className="block py-2 text-foreground font-medium">Распродажа</Link></li>
            <li><Link to="/about" className="block py-2 text-foreground font-medium">О нас</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
