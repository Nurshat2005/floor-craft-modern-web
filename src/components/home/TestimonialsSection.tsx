
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Александр Петров',
    role: 'Владелец квартиры',
    text: 'Заказывал полусухую стяжку в новой квартире. Ребята сработали очень быстро и качественно. Через 3 дня уже можно было ходить по полу. Результатом очень доволен!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Елена Смирнова',
    role: 'Дизайнер интерьера',
    text: 'Как дизайнер интерьера, я всегда рекомендую своим клиентам эту компанию. Высокое качество работы, соблюдение технологии и сроков. Сотрудничаем уже больше 3 лет!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Дмитрий Иванов',
    role: 'Владелец строительной компании',
    text: 'Привлекал эту компанию в качестве субподрядчика для работы на крупном объекте. Отличное качество, адекватные цены, никаких задержек. Будем работать и дальше.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: 4,
    name: 'Анастасия Козлова',
    role: 'Домовладелец',
    text: 'Делали стяжку во всем доме. Очень понравилось отношение к работе – аккуратно, чисто, все по технологии. Никаких нареканий, всем рекомендую!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/17.jpg'
  },
  {
    id: 5,
    name: 'Сергей Николаев',
    role: 'Владелец офиса',
    text: 'Заказывали стяжку в офисном помещении. Работу выполнили быстро, в нерабочее время, что было для нас очень важно. Качеством довольны!',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/62.jpg'
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3; // Количество видимых отзывов

  const nextSlide = () => {
    if (currentIndex < testimonials.length - visibleCount) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Цикличный переход к началу
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - visibleCount); // Цикличный переход к концу
    }
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-floor-yellow fill-floor-yellow' : 'text-floor-gray'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-floor-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Отзывы наших клиентов</h2>
          <p className="text-floor-gray-dark max-w-2xl mx-auto">
            Нам доверяют сотни клиентов, и мы гордимся каждым выполненным проектом. Вот что говорят о нас те, кто уже воспользовался нашими услугами.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4"
                >
                  <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-floor-blue">{testimonial.name}</h3>
                        <p className="text-floor-gray text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-floor-gray-dark flex-grow">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-floor-gray-light transition-colors z-10"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="h-6 w-6 text-floor-blue" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-floor-gray-light transition-colors z-10"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="h-6 w-6 text-floor-blue" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8">
            {Array(testimonials.length - visibleCount + 1).fill(0).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-floor-blue' : 'bg-floor-gray'
                }`}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://yandex.ru/maps/org/reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-floor-blue hover:text-floor-blue-dark font-medium"
          >
            Смотреть все отзывы на Яндекс.Картах
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
