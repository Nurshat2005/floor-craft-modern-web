
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { CheckCircle, Users, Briefcase, Award, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '10+', label: 'лет опыта' },
    { value: '500+', label: 'довольных клиентов' },
    { value: '1500+', label: 'выполненных проектов' },
    { value: '20+', label: 'специалистов в команде' }
  ];

  const values = [
    {
      title: 'Качество',
      description: 'Мы не экономим на материалах и не нарушаем технологию. Каждый этап работы контролируется опытными специалистами.'
    },
    {
      title: 'Профессионализм',
      description: 'Наши мастера имеют многолетний опыт и регулярно повышают квалификацию, изучая новые технологии.'
    },
    {
      title: 'Ответственность',
      description: 'Мы всегда выполняем работу в срок и даем гарантию на все виды работ. Если возникнут проблемы — мы их устраним за свой счет.'
    },
    {
      title: 'Честность',
      description: 'Мы всегда предоставляем клиенту полную информацию о материалах, технологии и стоимости. Никаких скрытых платежей и наценок.'
    }
  ];

  const team = [
    {
      name: 'Алексей Петров',
      position: 'Основатель и генеральный директор',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80',
      description: 'Более 15 лет опыта в строительстве. Основал компанию с миссией предоставлять качественные услуги по полусухой стяжке пола.'
    },
    {
      name: 'Марина Иванова',
      position: 'Технический директор',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
      description: 'Инженер-строитель с опытом более 10 лет. Отвечает за соблюдение технологии и контроль качества на всех этапах работы.'
    },
    {
      name: 'Сергей Кузнецов',
      position: 'Руководитель проектов',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80',
      description: 'Опытный специалист, который координирует работу бригад и контролирует соблюдение сроков и качества выполнения проектов.'
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-20 bg-floor-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О компании</h1>
            <p className="text-xl text-gray-200">
              Мы — команда профессионалов, специализирующихся на устройстве полусухой стяжки пола в жилых и коммерческих помещениях.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-floor-blue mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-floor-gray-dark">
                <p>
                  Компания <strong className="text-floor-blue">ФлорКрафт</strong> была основана в 2013 году командой специалистов, имеющих многолетний опыт в сфере строительства и отделочных работ.
                </p>
                <p>
                  Мы начинали как небольшая бригада, специализирующаяся на традиционной стяжке пола. Однако, внимательно следя за тенденциями рынка и инновационными технологиями, мы одними из первых в регионе освоили технологию полусухой стяжки.
                </p>
                <p>
                  За прошедшие годы мы выросли в полноценную компанию с собственным парком оборудования, складом материалов и штатом квалифицированных специалистов. Сегодня мы с гордостью предлагаем нашим клиентам современные решения для устройства полов с гарантией качества.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-floor-blue mb-4">
                  Наша миссия
                </h3>
                <p className="text-floor-gray-dark">
                  Создавать идеально ровные, прочные и долговечные основания для полов, используя передовые технологии и материалы, чтобы обеспечить максимальный комфорт и уверенность нашим клиентам.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=800&q=80" 
                alt="Команда ФлорКрафт" 
                className="rounded-lg shadow-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=400&q=80" 
                  alt="Наше оборудование" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1565766046621-5548ffdf30af?auto=format&fit=crop&w=400&q=80" 
                  alt="Процесс работы" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-floor-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-floor-yellow mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-floor-blue mb-4">
              Наши ценности
            </h2>
            <p className="text-floor-gray-dark max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе и отношениях с клиентами.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-floor-gray-light rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-floor-blue mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-floor-blue mb-2">
                      {value.title}
                    </h3>
                    <p className="text-floor-gray-dark">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-floor-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-floor-blue mb-4">
              Наша команда
            </h2>
            <p className="text-floor-gray-dark max-w-2xl mx-auto">
              Познакомьтесь с ключевыми специалистами, которые делают нашу компанию успешной.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-floor-blue mb-1">
                    {member.name}
                  </h3>
                  <p className="text-floor-yellow font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-floor-gray-dark">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-floor-gray-dark mb-6">
              Помимо ключевых специалистов, в нашей команде работает более 20 квалифицированных мастеров, прошедших специальное обучение и имеющих многолетний опыт в устройстве полов.
            </p>
            <Link to="/contact" className="btn-secondary inline-flex items-center">
              <span>Свяжитесь с нами</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-floor-blue mb-4">
              Наши сертификаты
            </h2>
            <p className="text-floor-gray-dark max-w-2xl mx-auto">
              Мы гордимся качеством нашей работы и постоянно совершенствуем свои навыки. Наши сертификаты — подтверждение нашего профессионализма.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative cursor-pointer group">
                  <img 
                    src={`https://via.placeholder.com/400x300?text=Сертификат+${index + 1}`} 
                    alt={`Сертификат ${index + 1}`} 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-floor-blue opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="font-bold">Нажмите, чтобы увеличить</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-floor-blue">
                    {index === 0 && 'Сертификат соответствия ISO 9001'}
                    {index === 1 && 'Диплом мастера-технолога'}
                    {index === 2 && 'Сертификат партнера MAPEI'}
                  </h3>
                </div>
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
              Готовы доверить нам свой пол?
            </h2>
            <p className="text-xl mb-8">
              Свяжитесь с нами для бесплатной консультации и расчета стоимости работ. Мы поможем выбрать оптимальное решение и ответим на все ваши вопросы.
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
    </Layout>
  );
};

export default About;
