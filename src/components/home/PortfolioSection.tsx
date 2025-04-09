
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Квартира в новостройке',
    category: 'residential',
    area: 85,
    description: 'Полусухая стяжка в новой квартире с системой тёплого пола.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    title: 'Офисное помещение',
    category: 'commercial',
    area: 120,
    description: 'Выравнивание пола в офисном центре класса А.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    title: 'Частный дом',
    category: 'residential',
    area: 180,
    description: 'Стяжка с утеплением в загородном доме.',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    title: 'Торговый центр',
    category: 'commercial',
    area: 650,
    description: 'Стяжка в помещениях торгового центра под плитку.',
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 5,
    title: 'Квартира-студия',
    category: 'residential',
    area: 42,
    description: 'Выравнивание пола с шумоизоляцией в квартире-студии.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 6,
    title: 'Фитнес-центр',
    category: 'commercial',
    area: 320,
    description: 'Стяжка с высокой прочностью для фитнес-центра.',
    image: 'https://images.unsplash.com/photo-1581122584612-713f89daa8eb?auto=format&fit=crop&w=500&q=80'
  }
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="py-20 bg-floor-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Наши работы</h2>
          <p className="text-floor-gray-dark max-w-2xl mx-auto">
            Примеры выполненных проектов по укладке полусухой стяжки в жилых и коммерческих помещениях.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full inline-flex p-1 shadow-md">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-floor-blue text-white' 
                  : 'text-floor-gray-dark hover:bg-floor-gray-light'
              }`}
            >
              Все проекты
            </button>
            <button 
              onClick={() => setFilter('residential')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'residential' 
                  ? 'bg-floor-blue text-white' 
                  : 'text-floor-gray-dark hover:bg-floor-gray-light'
              }`}
            >
              Жилые помещения
            </button>
            <button 
              onClick={() => setFilter('commercial')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'commercial' 
                  ? 'bg-floor-blue text-white' 
                  : 'text-floor-gray-dark hover:bg-floor-gray-light'
              }`}
            >
              Коммерческие объекты
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-floor-blue mb-2">
                  {item.title}
                </h3>
                <div className="flex justify-between mb-3">
                  <span className="bg-floor-gray-light text-floor-gray-dark text-xs font-medium px-2.5 py-0.5 rounded">
                    {item.category === 'residential' ? 'Жилое' : 'Коммерческое'}
                  </span>
                  <span className="text-floor-gray text-sm">
                    {item.area} м²
                  </span>
                </div>
                <p className="text-floor-gray-dark mb-4">
                  {item.description}
                </p>
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

        <div className="text-center mt-10">
          <Link to="/portfolio" className="btn-secondary inline-flex items-center">
            <span>Смотреть все проекты</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
