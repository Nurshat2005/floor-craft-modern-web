
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Портфолио', path: '/portfolio' },
    { name: 'О нас', path: '/about' },
    { name: 'Контакты', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <span className="text-floor-blue font-bold text-2xl">ФлорКрафт</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-floor-blue ${
                  isActive ? 'text-floor-blue' : 'text-floor-gray-dark'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Contact buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="tel:+79991234567" 
            className="flex items-center text-floor-blue hover:text-floor-blue-dark transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="font-medium">+7 (999) 123-45-67</span>
          </a>
          <Button className="btn-primary flex items-center space-x-2">
            <MessageCircle className="h-4 w-4" />
            <span>Обратный звонок</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-floor-blue p-2"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white pt-16 transition-all duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-6 space-y-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${
                    isActive ? 'text-floor-blue' : 'text-floor-gray-dark'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="pt-4 border-t border-floor-gray-light space-y-4">
            <a 
              href="tel:+79991234567" 
              className="flex items-center text-floor-blue text-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-medium">+7 (999) 123-45-67</span>
            </a>
            <a 
              href="https://wa.me/79991234567" 
              className="flex items-center text-green-600 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-1.794-.698-2.5-.976-.478-.189-.809-.318-.935-.398-.181-.116-.301-.369-.174-.575.173-.288.406-.431.641-.504.289-.087.487.003.899.408.101.101.421.432.494.51.073.077.143.176.27.117.118-.049.986-.417 1.167-.515.18-.099.199-.155.145-.273-.054-.118-.609-.497-.851-.68-.615-.468-.914-.351-1.639-.351-.52 0-1.055.115-1.371.271-.105.055-.686.422-1.265 1.098-.182.212-.488.581-.499.991-.009.307.118.689.229.85.214.314.607.517.912.5h.046c.075.516.191.979.359 1.438 1.239 2.028 2.738 3.072 4.38 3.072 1.401 0 2.698-.513 3.59-1.207.099-.076.332-.234.467-.398.082-.108.196-.292.229-.434.029-.098.017-.158-.042-.232z"/>
              </svg>
              <span className="font-medium">WhatsApp</span>
            </a>
            <a 
              href="https://t.me/username" 
              className="flex items-center text-blue-500 text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.384 22.779c.322.228.737.285 1.107.145.37-.141.642-.457.724-.84.869-4.084 2.977-14.421 3.768-18.136.06-.28-.04-.571-.26-.758-.22-.187-.525-.241-.797-.14-3.193 1.161-13.329 4.834-16.5 6.011-.25.091-.43.307-.429.576.008.27.194.484.444.57.86.296 2.027.711 2.94 1.06.214.082.424.167.629.255.2.088.388.216.53.381.142.166.25.361.308.576.032.119.044.252.034.388-.015.175-.06.336-.147.487-.193.336-.676.665-1.142.89-5.352 2.79-6.966 7.694-6.966 7.694s.939-1.037 5.69-5.452c.197-.142.657-.609.678-1.262.042-1.359-1.453-1.725-1.453-1.725-.157-.018-.305-.073-.44-.156-.184-.11-.367-.223-.549-.339-.136-.086-.27-.173-.403-.262-.259-.174-.44-.434-.45-.72-.009-.287.159-.558.408-.745.839-.635 14.523-9.576 14.523-9.576s-.883-.881-1.478-.972c-.595-.09-1.37.14-1.37.14z"/>
              </svg>
              <span className="font-medium">Telegram</span>
            </a>
            <Button 
              className="w-full btn-primary mt-4" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Обратный звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
