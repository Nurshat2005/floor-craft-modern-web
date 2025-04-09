
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Ruler, Thermometer, Volume2, Shield, ArrowRight, Info } from 'lucide-react';

const services = [
  {
    id: 'polususchaya-styazhka',
    title: 'Полусухая стяжка пола',
    shortDescription: 'Современный способ выравнивания пола с минимальным временем высыхания и отличным результатом.',
    fullDescription: `
      <p>Полусухая стяжка — это современная технология устройства основания пола, которая обеспечивает быстрое высыхание, высокую прочность и отсутствие трещин.</p>
      
      <p>В отличие от традиционной цементно-песчаной стяжки, полусухая стяжка содержит минимальное количество воды и включает в себя фиброволокно, повышающее прочность и предотвращающее образование трещин.</p>
      
      <h4>Преимущества полусухой стяжки:</h4>
      <ul>
        <li>Быстрое высыхание — через 3-5 дней</li>
        <li>Отсутствие усадочных трещин</li>
        <li>Высокая прочность — до 25 МПа</li>
        <li>Идеально ровная поверхность</li>
        <li>Возможность устройства на любых основаниях</li>
      </ul>
      
      <p>Мы выполняем полусухую стяжку пола по технологии, соответствующей всем современным стандартам и требованиям, с использованием профессионального оборудования и материалов высокого качества.</p>
    `,
    icon: <Ruler className="h-12 w-12 text-floor-yellow" />,
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
    price: 'от 700 ₽/м²',
    timeframe: '1-3 дня'
  },
  {
    id: 'uteplenie',
    title: 'Утепление пола',
    shortDescription: 'Эффективная теплоизоляция вашего пола для комфорта и экономии на отоплении.',
    fullDescription: `
      <p>Утепление пола — важный этап при устройстве полов, особенно в новостройках, частных домах и помещениях с высокими требованиями к теплоизоляции.</p>
      
      <p>Мы предлагаем утепление пола с использованием современных материалов — экструдированного пенополистирола, пенополиуретана или минеральной ваты в зависимости от условий и требований.</p>
      
      <h4>Преимущества утепления пола:</h4>
      <ul>
        <li>Существенное снижение теплопотерь</li>
        <li>Экономия на отоплении до 30%</li>
        <li>Создание комфортного микроклимата</li>
        <li>Предотвращение образования конденсата</li>
        <li>Дополнительная звукоизоляция</li>
      </ul>
      
      <p>Наши специалисты подберут оптимальное решение для вашего помещения, учитывая его особенности, назначение и бюджет.</p>
    `,
    icon: <Thermometer className="h-12 w-12 text-floor-yellow" />,
    image: 'https://images.unsplash.com/photo-1601286794287-7306eca217e3?auto=format&fit=crop&w=800&q=80',
    price: 'от 350 ₽/м²',
    timeframe: '1-2 дня'
  },
  {
    id: 'zvukoizolyaciya',
    title: 'Звукоизоляция пола',
    shortDescription: 'Профессиональная звукоизоляция пола для максимального комфорта и тишины.',
    fullDescription: `
      <p>Звукоизоляция пола — важный компонент современного комфортного жилья. Особенно актуально это для многоквартирных домов, где важно минимизировать распространение ударного и воздушного шума.</p>
      
      <p>Мы предлагаем комплексное решение по звукоизоляции полов с использованием специализированных материалов, которые эффективно поглощают и рассеивают звуковые волны.</p>
      
      <h4>Преимущества нашей звукоизоляции:</h4>
      <ul>
        <li>Снижение ударного шума до 30 дБ</li>
        <li>Эффективное поглощение воздушного шума</li>
        <li>Совместимость со всеми типами напольных покрытий</li>
        <li>Долговечность и стабильность характеристик</li>
        <li>Экологическая безопасность материалов</li>
      </ul>
      
      <p>Наши специалисты подберут оптимальное звукоизоляционное решение с учетом особенностей вашего помещения, требуемого уровня изоляции и бюджета.</p>
    `,
    icon: <Volume2 className="h-12 w-12 text-floor-yellow" />,
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=800&q=80',
    price: 'от 450 ₽/м²',
    timeframe: '1-2 дня'
  },
  {
    id: 'remont',
    title: 'Ремонт и восстановление пола',
    shortDescription: 'Исправление дефектов и восстановление старых оснований с гарантией качества.',
    fullDescription: `
      <p>Ремонт и восстановление пола необходимы, когда существующее основание имеет дефекты — трещины, неровности, разрушения или другие проблемы, которые делают невозможным укладку нового напольного покрытия.</p>
      
      <p>Мы проводим полную диагностику состояния пола и предлагаем оптимальные решения по его ремонту и восстановлению, используя современные технологии и материалы.</p>
      
      <h4>Наши работы по ремонту пола включают:</h4>
      <ul>
        <li>Устранение трещин и выбоин</li>
        <li>Выравнивание неровностей</li>
        <li>Удаление старого покрытия</li>
        <li>Упрочнение существующего основания</li>
        <li>Устройство новой стяжки при необходимости</li>
      </ul>
      
      <p>После наших работ вы получите идеально ровное и прочное основание, готовое для укладки любого финишного покрытия.</p>
    `,
    icon: <Shield className="h-12 w-12 text-floor-yellow" />,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    price: 'от 600 ₽/м²',
    timeframe: '2-4 дня'
  }
];

const Services = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-20 bg-floor-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h1>
            <p className="text-xl text-gray-200 mb-8">
              Полный комплекс работ по устройству полов в жилых и коммерческих помещениях с гарантией качества.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div key={service.id} className="group">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ maxHeight: '400px' }}
                    />
                  </div>
                  
                  <div>
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-floor-blue mb-4">
                      {service.title}
                    </h2>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="bg-floor-gray-light px-4 py-2 rounded-md flex items-center">
                        <span className="text-floor-gray-dark font-medium mr-2">Цена:</span>
                        <span className="text-floor-blue font-bold">{service.price}</span>
                      </div>
                      <div className="bg-floor-gray-light px-4 py-2 rounded-md flex items-center">
                        <span className="text-floor-gray-dark font-medium mr-2">Срок:</span>
                        <span className="text-floor-blue font-bold">{service.timeframe}</span>
                      </div>
                    </div>
                    
                    <div 
                      className="text-floor-gray-dark mb-6"
                      dangerouslySetInnerHTML={{ __html: service.fullDescription }}
                    />
                    
                    <div className="flex flex-wrap gap-4">
                      <Link 
                        to={`/services/${service.id}`} 
                        className="btn-primary inline-flex items-center"
                      >
                        <span>Подробнее</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link 
                        to="/contact" 
                        className="btn-secondary inline-flex items-center"
                      >
                        Заказать услугу
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Divider except for last item */}
                {index < services.length - 1 && (
                  <div className="border-b border-floor-gray-light my-16"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-floor-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Не можете определиться с выбором услуги?
            </h2>
            <p className="text-xl mb-8">
              Свяжитесь с нами для бесплатной консультации. Наши специалисты помогут выбрать оптимальное решение для вашего пола.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-floor-blue hover:bg-floor-yellow hover:text-black font-medium py-3 px-6 rounded-md transition-colors">
                Связаться с нами
              </Link>
              <a href="tel:+79991234567" className="bg-transparent border border-white text-white hover:bg-white hover:text-floor-blue font-medium py-3 px-6 rounded-md transition-colors">
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-floor-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <Info className="h-6 w-6 text-floor-blue mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-floor-blue mb-2">
                  Важная информация
                </h3>
                <p className="text-floor-gray-dark">
                  Все указанные цены являются ориентировочными и зависят от конкретных условий помещения, объема работ и дополнительных требований. Для получения точной стоимости мы рекомендуем заказать бесплатный выезд специалиста на замер.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
