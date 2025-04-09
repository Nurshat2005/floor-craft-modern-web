
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      console.log({ name, phone, email, message });
      
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время!",
      });
      
      // Сброс формы
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-20 bg-floor-blue-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-gray-200">
              Свяжитесь с нами для консультации и расчета стоимости работ.
              Мы всегда на связи и готовы ответить на все ваши вопросы.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-floor-blue mb-8">
                Свяжитесь с нами
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-floor-blue rounded-full p-3 mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-floor-blue">Телефон</h3>
                    <p className="text-floor-gray-dark">
                      <a href="tel:+79991234567" className="hover:text-floor-blue transition-colors">
                        +7 (999) 123-45-67
                      </a>
                    </p>
                    <p className="text-floor-gray-dark">
                      <a href="tel:+74951234567" className="hover:text-floor-blue transition-colors">
                        +7 (495) 123-45-67
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-floor-blue rounded-full p-3 mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-floor-blue">Email</h3>
                    <p className="text-floor-gray-dark">
                      <a href="mailto:info@floor-craft.ru" className="hover:text-floor-blue transition-colors">
                        info@floor-craft.ru
                      </a>
                    </p>
                    <p className="text-floor-gray-dark">
                      <a href="mailto:zakaz@floor-craft.ru" className="hover:text-floor-blue transition-colors">
                        zakaz@floor-craft.ru
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-floor-blue rounded-full p-3 mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-floor-blue">Адрес</h3>
                    <p className="text-floor-gray-dark">
                      г. Москва, ул. Строителей, д. 10, офис 512
                    </p>
                    <p className="text-sm text-floor-gray">
                      Метро "Университет", 5 минут пешком
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-floor-blue rounded-full p-3 mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-floor-blue">Время работы</h3>
                    <p className="text-floor-gray-dark">
                      Понедельник - Пятница: 9:00 - 18:00
                    </p>
                    <p className="text-floor-gray-dark">
                      Суббота: 10:00 - 15:00
                    </p>
                    <p className="text-floor-gray-dark">
                      Воскресенье: выходной
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 space-y-6">
                <h3 className="text-xl font-bold text-floor-blue">
                  Мы в социальных сетях
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-floor-blue text-white hover:bg-floor-blue-dark p-3 rounded-full transition-colors"
                    aria-label="ВКонтакте"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-floor-blue text-white hover:bg-floor-blue-dark p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-floor-blue text-white hover:bg-floor-blue-dark p-3 rounded-full transition-colors"
                    aria-label="YouTube"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-floor-blue text-white hover:bg-floor-blue-dark p-3 rounded-full transition-colors"
                    aria-label="Telegram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.384 22.779c.322.228.737.285 1.107.145.37-.141.642-.457.724-.84.869-4.084 2.977-14.421 3.768-18.136.06-.28-.04-.571-.26-.758-.22-.187-.525-.241-.797-.14-3.193 1.161-13.329 4.834-16.5 6.011-.25.091-.43.307-.429.576.008.27.194.484.444.57.86.296 2.027.711 2.94 1.06.214.082.424.167.629.255.2.088.388.216.53.381.142.166.25.361.308.576.032.119.044.252.034.388-.015.175-.06.336-.147.487-.193.336-.676.665-1.142.89-5.352 2.79-6.966 7.694-6.966 7.694s.939-1.037 5.69-5.452c.197-.142.657-.609.678-1.262.042-1.359-1.453-1.725-1.453-1.725-.157-.018-.305-.073-.44-.156-.184-.11-.367-.223-.549-.339-.136-.086-.27-.173-.403-.262-.259-.174-.44-.434-.45-.72-.009-.287.159-.558.408-.745.839-.635 14.523-9.576 14.523-9.576s-.883-.881-1.478-.972c-.595-.09-1.37.14-1.37.14z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-floor-blue text-white hover:bg-floor-blue-dark p-3 rounded-full transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-1.794-.698-2.5-.976-.478-.189-.809-.318-.935-.398-.181-.116-.301-.369-.174-.575.173-.288.406-.431.641-.504.289-.087.487.003.899.408.101.101.421.432.494.51.073.077.143.176.27.117.118-.049.986-.417 1.167-.515.18-.099.199-.155.145-.273-.054-.118-.609-.497-.851-.68-.615-.468-.914-.351-1.639-.351-.52 0-1.055.115-1.371.271-.105.055-.686.422-1.265 1.098-.182.212-.488.581-.499.991-.009.307.118.689.229.85.214.314.607.517.912.5h.046c.075.516.191.979.359 1.438 1.239 2.028 2.738 3.072 4.38 3.072 1.401 0 2.698-.513 3.59-1.207.099-.076.332-.234.467-.398.082-.108.196-.292.229-.434.029-.098.017-.158-.042-.232z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-floor-blue mb-6">
                Напишите нам
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-floor-gray h-4 w-4" />
                    <Input 
                      id="name" 
                      type="text" 
                      className="pl-10" 
                      placeholder="Иван Иванов"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Номер телефона</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-floor-gray h-4 w-4" />
                    <Input 
                      id="phone" 
                      type="tel" 
                      className="pl-10" 
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-floor-gray h-4 w-4" />
                    <Input 
                      id="email" 
                      type="email" 
                      className="pl-10" 
                      placeholder="example@mail.ru"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-floor-gray h-4 w-4" />
                    <Textarea 
                      id="message" 
                      className="pl-10 min-h-[120px]" 
                      placeholder="Опишите ваш проект или задайте вопрос..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full btn-primary"
                  disabled={submitting}
                >
                  {submitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Отправить сообщение
                    </span>
                  )}
                </Button>
                
                <p className="text-xs text-center text-floor-gray">
                  Нажимая на кнопку, вы соглашаетесь с нашей <a href="#" className="text-floor-blue hover:underline">политикой обработки персональных данных</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-floor-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-floor-blue mb-4">
              Наше расположение
            </h2>
            <p className="text-floor-gray-dark max-w-2xl mx-auto">
              Мы находимся в удобном месте в центре Москвы, недалеко от метро.
              Вы можете легко добраться до нас на общественном транспорте или личном автомобиле.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="aspect-w-16 aspect-h-9 h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.0788208526677!2d37.53417667677362!3d55.75375997326675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bddd94589d1%3A0x7d5d21b891a536a!2z0YPQuy4g0KHRgtGA0L7QuNGC0LXQu9C10LksINCc0L7RgdC60LLQsA!5e0!3m2!1sru!2sru!4v1681471418180!5m2!1sru!2sru" 
                className="w-full h-full rounded-md border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта с местоположением компании"
              ></iframe>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-floor-gray-dark">
              Работаем по всей Москве и Московской области. <br />
              Выезд на замер в пределах МКАД — бесплатно!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
