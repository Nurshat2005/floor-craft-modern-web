
import React from 'react';
import { CheckCircle, Clock, Award, Droplet, ThermometerSun, Zap } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <Clock className="h-12 w-12 text-floor-blue" />,
      title: 'Быстрое высыхание',
      description: 'Полусухая стяжка готова к эксплуатации уже через 3-5 дней, а не через 28 дней как обычная.'
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-floor-blue" />,
      title: 'Без трещин и пустот',
      description: 'Фиброволокно в составе предотвращает появление трещин даже при усадке здания.'
    },
    {
      icon: <Award className="h-12 w-12 text-floor-blue" />,
      title: 'Гарантия 10 лет',
      description: 'Мы уверены в качестве нашей работы и даем длительную гарантию на все выполненные проекты.'
    },
    {
      icon: <Droplet className="h-12 w-12 text-floor-blue" />,
      title: 'Минимум влаги',
      description: 'В полусухой стяжке содержится в 4-5 раз меньше воды, что минимизирует риск подтоплений.'
    },
    {
      icon: <ThermometerSun className="h-12 w-12 text-floor-blue" />,
      title: 'Идеально для тёплых полов',
      description: 'Высокая теплопроводность делает стяжку идеальной для установки систем тёплого пола.'
    },
    {
      icon: <Zap className="h-12 w-12 text-floor-blue" />,
      title: 'Высокая прочность',
      description: 'Прочность на сжатие до 25 МПа обеспечивает долговечность и надежность покрытия.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Преимущества полусухой стяжки</h2>
          <p className="text-floor-gray-dark max-w-2xl mx-auto">
            Современная технология, которая решает основные проблемы традиционной цементно-песчаной стяжки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-floor-gray-light rounded-lg p-6 card-hover"
            >
              <div className="mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-floor-blue mb-3">
                {advantage.title}
              </h3>
              <p className="text-floor-gray-dark">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
