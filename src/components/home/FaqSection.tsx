
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqItems = [
    {
      question: 'Что такое полусухая стяжка пола?',
      answer: 'Полусухая стяжка — это современная технология выравнивания пола с использованием цементно-песчаной смеси с низким содержанием воды и добавлением фиброволокна. Она отличается быстрым высыханием, высокой прочностью и отсутствием усадочных трещин.'
    },
    {
      question: 'Сколько времени сохнет полусухая стяжка?',
      answer: 'Полусухая стяжка готова к легким нагрузкам (хождению) уже через 12-24 часа после укладки. Полное высыхание происходит за 3-5 дней, в то время как обычная стяжка сохнет до 28 дней. Укладку финишных покрытий можно начинать через 7-10 дней.'
    },
    {
      question: 'Какая минимальная и максимальная толщина стяжки?',
      answer: 'Минимальная толщина полусухой стяжки составляет 30 мм, максимальная — до 100 мм. При необходимости большей толщины укладка производится в несколько слоев с технологическими перерывами.'
    },
    {
      question: 'Подходит ли полусухая стяжка для тёплого пола?',
      answer: 'Да, полусухая стяжка идеально подходит для систем тёплого пола благодаря высокой теплопроводности и отсутствию воздушных пустот. Это обеспечивает равномерное распределение тепла и повышает энергоэффективность.'
    },
    {
      question: 'Какая цена за квадратный метр полусухой стяжки?',
      answer: 'Стоимость работ начинается от 700 рублей за квадратный метр. Финальная цена зависит от площади помещения, толщины стяжки, сложности работ и дополнительных опций (подготовка основания, утепление, ускоренное высыхание). Для точного расчета используйте калькулятор на нашем сайте или свяжитесь с менеджером.'
    },
    {
      question: 'Даёте ли вы гарантию на выполненные работы?',
      answer: 'Да, мы предоставляем гарантию 10 лет на все выполненные работы. Гарантия подтверждается документально и распространяется на геометрию поверхности, отсутствие трещин и отслоений.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Часто задаваемые вопросы</h2>
          <p className="text-floor-gray-dark max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о полусухой стяжке пола и наших услугах.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-floor-gray-light rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-floor-blue hover:text-floor-blue-dark">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-floor-gray-dark">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-floor-gray-dark mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="tel:+79991234567" 
              className="btn-secondary inline-flex items-center"
            >
              Позвонить нам
            </a>
            <a 
              href="mailto:info@floor-craft.ru" 
              className="text-floor-blue hover:text-floor-blue-dark font-medium"
            >
              Написать на email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
