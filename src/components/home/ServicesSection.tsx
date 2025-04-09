
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Thermometer, Volume2, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 'polususchaya-styazhka',
      title: 'Полусухая стяжка',
      description: 'Современный способ выравнивания пола с минимальным временем высыхания и отличным результатом.',
      icon: <Ruler className="h-10 w-10 text-floor-yellow" />,
      link: '/services/polususchaya-styazhka'
    },
    {
      id: 'uteplenie',
      title: 'Утепление пола',
      description: 'Эффективная теплоизоляция вашего пола для комфорта и экономии на отоплении.',
      icon: <Thermometer className="h-10 w-10 text-floor-yellow" />,
      link: '/services/uteplenie'
    },
    {
      id: 'zvukoizolyaciya',
      title: 'Звукоизоляция',
      description: 'Профессиональная звукоизоляция пола для максимального комфорта и тишины.',
      icon: <Volume2 className="h-10 w-10 text-floor-yellow" />,
      link: '/services/zvukoizolyaciya'
    },
    {
      id: 'remont',
      title: 'Ремонт и восстановление',
      description: 'Исправление дефектов и восстановление старых оснований с гарантией качества.',
      icon: <Shield className="h-10 w-10 text-floor-yellow" />,
      link: '/services/remont'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Наши услуги</h2>
          <p className="text-floor-gray-dark max-w-2xl mx-auto">
            Предлагаем полный спектр услуг по устройству полов в жилых и коммерческих помещениях с гарантией качества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 card-hover"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-floor-blue mb-3">
                {service.title}
              </h3>
              <p className="text-floor-gray-dark mb-4">
                {service.description}
              </p>
              <Link 
                to={service.link}
                className="inline-flex items-center text-floor-blue font-medium hover:text-floor-blue-dark transition-colors"
              >
                <span>Подробнее</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="btn-secondary inline-flex items-center"
          >
            <span>Все услуги</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
