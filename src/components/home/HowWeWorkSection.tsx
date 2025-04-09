
import React from 'react';
import { 
  Phone, 
  Ruler, 
  ClipboardCheck, 
  Truck, 
  Hammer, 
  CheckSquare 
} from 'lucide-react';

const HowWeWorkSection = () => {
  const steps = [
    {
      icon: <Phone className="h-10 w-10 text-white" />,
      title: 'Заявка',
      description: 'Вы оставляете заявку на сайте или звоните нам по телефону. Мы фиксируем все детали.'
    },
    {
      icon: <Ruler className="h-10 w-10 text-white" />,
      title: 'Замер',
      description: 'Наш специалист бесплатно выезжает на объект для замеров и оценки объема работ.'
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-white" />,
      title: 'Смета',
      description: 'Составляем подробную смету с указанием стоимости работ и материалов.'
    },
    {
      icon: <Truck className="h-10 w-10 text-white" />,
      title: 'Доставка',
      description: 'Доставляем все необходимые материалы на объект в согласованное время.'
    },
    {
      icon: <Hammer className="h-10 w-10 text-white" />,
      title: 'Выполнение',
      description: 'Бригада профессионалов выполняет все работы четко по технологии.'
    },
    {
      icon: <CheckSquare className="h-10 w-10 text-white" />,
      title: 'Сдача объекта',
      description: 'Принимаете готовую работу, подписываем акт, даем гарантию на 10 лет.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Как мы работаем</h2>
          <p className="text-floor-gray-dark max-w-2xl mx-auto">
            Прозрачный и отлаженный процесс работы позволяет нам гарантировать высокое качество и соблюдение сроков.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex mb-4">
                <div className="flex-shrink-0 bg-floor-blue rounded-full p-3 flex items-center justify-center">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute h-0.5 bg-floor-gray-light w-3/4 top-6 left-14 -z-10"></div>
                )}
                <div className="absolute -left-2 -top-2 bg-floor-yellow rounded-full h-6 w-6 flex items-center justify-center text-black font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-floor-blue mb-2">{step.title}</h3>
              <p className="text-floor-gray-dark">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-floor-gray-light rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-floor-blue mb-4">
            Готовы начать работу?
          </h3>
          <p className="text-floor-gray-dark mb-6 max-w-2xl mx-auto">
            Оставьте заявку на бесплатный замер прямо сейчас или позвоните нам по телефону
            <br />
            <a href="tel:+79991234567" className="text-floor-blue font-bold">
              +7 (999) 123-45-67
            </a>
          </p>
          <div className="max-w-md mx-auto">
            <form className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="col-span-1 border border-floor-gray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-floor-blue"
                required
              />
              <input
                type="tel"
                placeholder="Ваш телефон"
                className="col-span-1 border border-floor-gray rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-floor-blue"
                required
              />
              <button
                type="submit"
                className="col-span-1 btn-primary"
              >
                Оставить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
