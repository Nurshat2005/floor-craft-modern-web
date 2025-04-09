
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Данные для портфолио проектов
const portfolioItems = [
  {
    id: 1,
    title: 'Квартира в новостройке',
    category: 'residential',
    area: 85,
    location: 'Москва',
    year: 2023,
    description: 'Полусухая стяжка пола в новой квартире с системой тёплого пола.',
    features: ['Тёплый пол', 'Звукоизоляция', 'Быстрое высыхание'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e4a92f9750d?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 2,
    title: 'Офисное помещение',
    category: 'commercial',
    area: 120,
    location: 'Санкт-Петербург',
    year: 2023,
    description: 'Выравнивание пола в офисном центре класса А.',
    features: ['Повышенная прочность', 'Быстрое высыхание'],
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 3,
    title: 'Частный дом',
    category: 'residential',
    area: 180,
    location: 'Подмосковье',
    year: 2022,
    description: 'Стяжка с утеплением в загородном доме.',
    features: ['Утепление', 'Тёплый пол', 'Большая площадь'],
    images: [
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600607687644-41f9a86a1c93?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 4,
    title: 'Торговый центр',
    category: 'commercial',
    area: 650,
    location: 'Москва',
    year: 2022,
    description: 'Стяжка в помещениях торгового центра под плитку.',
    features: ['Высокая прочность', 'Большая площадь', 'Коммерческая эксплуатация'],
    images: [
      'https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1533631241901-67980fd81d0b?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 5,
    title: 'Квартира-студия',
    category: 'residential',
    area: 42,
    location: 'Москва',
    year: 2023,
    description: 'Выравнивание пола с шумоизоляцией в квартире-студии.',
    features: ['Звукоизоляция', 'Малая площадь'],
    images: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600566753006-f6602fb4d713?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 6,
    title: 'Фитнес-центр',
    category: 'commercial',
    area: 320,
    location: 'Санкт-Петербург',
    year: 2022,
    description: 'Стяжка с высокой прочностью для фитнес-центра.',
    features: ['Повышенная прочность', 'Устойчивость к нагрузкам', 'Быстрое высыхание'],
    images: [
      'https://images.unsplash.com/photo-1581122584612-713f89daa8eb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 7,
    title: 'Ресторан',
    category: 'commercial',
    area: 230,
    location: 'Москва',
    year: 2023,
    description: 'Стяжка в новом ресторане с повышенными требованиями к качеству.',
    features: ['Высокая ровность', 'Устойчивость к влаге', 'Быстрые сроки'],
    images: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'
    ]
  },
  {
    id: 8,
    title: 'Коттедж',
    category: 'residential',
    area: 210,
    location: 'Ленинградская область',
    year: 2022,
    description: 'Комплексное устройство полов в двухэтажном коттедже.',
    features: ['Двухэтажный дом', 'Утепление', 'Тёплый пол'],
    images: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80'
    ]
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayItems, setDisplayItems] = useState(portfolioItems);

  // Обработка фильтрации и поиска
  React.useEffect(() => {
    let filtered = portfolioItems;
    
    // Применяем фильтр по категории
    if (activeFilter !== 'all') {
      filtered = filtered.filter(item => item.category === activeFilter);
    }
    
    // Применяем поиск
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query) ||
        item.features.some(feature => feature.toLowerCase().includes(query))
      );
    }
    
    setDisplayItems(filtered);
  }, [activeFilter, searchQuery]);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-20 bg-floor-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Портфолио проектов</h1>
            <p className="text-xl text-gray-200">
              Ознакомьтесь с нашими выполненными работами по устройству полусухой стяжки в различных помещениях.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-floor-gray-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-2">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === 'all' 
                    ? 'bg-floor-blue text-white' 
                    : 'bg-white text-floor-gray-dark hover:bg-floor-blue/10'
                }`}
              >
                Все проекты
              </button>
              <button 
                onClick={() => setActiveFilter('residential')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === 'residential' 
                    ? 'bg-floor-blue text-white' 
                    : 'bg-white text-floor-gray-dark hover:bg-floor-blue/10'
                }`}
              >
                Жилые помещения
              </button>
              <button 
                onClick={() => setActiveFilter('commercial')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeFilter === 'commercial' 
                    ? 'bg-floor-blue text-white' 
                    : 'bg-white text-floor-gray-dark hover:bg-floor-blue/10'
                }`}
              >
                Коммерческие объекты
              </button>
            </div>
            
            <div className="relative w-full md:w-auto min-w-[300px]">
              <input
                type="text"
                placeholder="Поиск проектов..."
                className="w-full py-2 pl-10 pr-4 rounded-md border border-floor-gray focus:outline-none focus:ring-2 focus:ring-floor-blue"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-floor-gray-dark h-4 w-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {displayItems.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-floor-blue mb-4">
                Проекты не найдены
              </h3>
              <p className="text-floor-gray-dark mb-6">
                К сожалению, по вашему запросу не найдено ни одного проекта. Попробуйте изменить параметры поиска.
              </p>
              <button 
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="btn-secondary"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative overflow-hidden h-56">
                    <img 
                      src={item.images[0]} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-floor-blue text-white text-xs font-medium px-2.5 py-1 rounded">
                        {item.category === 'residential' ? 'Жилое' : 'Коммерческое'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-floor-blue mb-2">
                      {item.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.features.map((feature, idx) => (
                        <span key={idx} className="bg-floor-gray-light text-floor-gray-dark text-xs px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-floor-gray-dark mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-sm text-floor-gray mb-4">
                      <span>{item.location}</span>
                      <span>{item.area} м²</span>
                      <span>{item.year} г.</span>
                    </div>
                    
                    <Link 
                      to={`/portfolio/${item.id}`}
                      className="text-floor-blue font-medium hover:text-floor-blue-dark inline-flex items-center"
                    >
                      <span>Подробнее</span>
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-floor-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Хотите такой же качественный пол?
            </h2>
            <p className="text-xl mb-8">
              Свяжитесь с нами для консультации и расчета стоимости работ. Мы готовы приступить к вашему проекту!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary bg-floor-yellow text-black hover:bg-floor-yellow-dark">
                Заказать стяжку
              </Link>
              <Link to="/services" className="bg-transparent border border-white text-white hover:bg-white hover:text-floor-blue font-medium py-3 px-6 rounded-md transition-colors">
                Узнать о наших услугах
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
