
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-floor-blue text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ФлорКрафт</h3>
            <p className="text-gray-300 mb-4">
              Профессиональная укладка полусухой стяжки пола. Работаем качественно, быстро и надежно.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-floor-yellow transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-floor-yellow transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-floor-yellow transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-floor-yellow transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-floor-yellow transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-floor-yellow transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-floor-yellow transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-floor-yellow transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Наши услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/polususchaya-styazhka" className="text-gray-300 hover:text-floor-yellow transition-colors">
                  Полусухая стяжка
                </Link>
              </li>
              <li>
                <Link to="/services/vyravnivanie" className="text-gray-300 hover:text-floor-yellow transition-colors">
                  Выравнивание пола
                </Link>
              </li>
              <li>
                <Link to="/services/uteplenie" className="text-gray-300 hover:text-floor-yellow transition-colors">
                  Утепление пола
                </Link>
              </li>
              <li>
                <Link to="/services/zvukoizolyaciya" className="text-gray-300 hover:text-floor-yellow transition-colors">
                  Звукоизоляция
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-floor-yellow" />
                <a href="tel:+79991234567" className="text-gray-300 hover:text-floor-yellow transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-floor-yellow" />
                <a href="mailto:info@floor-craft.ru" className="text-gray-300 hover:text-floor-yellow transition-colors">
                  info@floor-craft.ru
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-floor-yellow" />
                <span className="text-gray-300">
                  г. Москва, ул. Строителей, д. 10, офис 512
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-floor-yellow" />
                <span className="text-gray-300">
                  Пн-Пт: 9:00 - 18:00 <br />
                  Сб: 10:00 - 15:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-floor-blue-light mt-10 pt-6 text-center">
          <p className="text-gray-300">
            © {currentYear} ФлорКрафт. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
