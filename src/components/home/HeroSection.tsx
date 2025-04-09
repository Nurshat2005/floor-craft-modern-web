
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const advantages = [
    'Быстрое высыхание за 3-5 дней',
    'Без трещин и пустот',
    'Экономия до 30% на материалах',
    '10 лет гарантии на работы'
  ];

  return (
    <section className="relative bg-gradient-to-r from-floor-blue to-floor-blue-dark text-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="lg:pr-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              Ровные полы с полусухой стяжкой <span className="text-floor-yellow">навсегда</span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Современная технология полусухой стяжки пола для вашей квартиры, дома или офиса. Качественно, быстро и с гарантией.
            </p>
            
            <div className="space-y-3 mb-8">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="flex items-center animate-fade-in"
                  style={{animationDelay: `${0.3 + index * 0.1}s`}}
                >
                  <CheckCircle className="h-5 w-5 text-floor-yellow mr-3 flex-shrink-0" />
                  <span>{advantage}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{animationDelay: '0.7s'}}>
              <Button className="btn-primary group">
                <span>Рассчитать стоимость</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Наши работы
              </Button>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center gap-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center">
                <div className="text-4xl font-bold text-floor-yellow">10+</div>
                <div className="ml-2 text-sm">лет<br />опыта</div>
              </div>
              <div className="flex items-center">
                <div className="text-4xl font-bold text-floor-yellow">1000+</div>
                <div className="ml-2 text-sm">м²<br />выполнено</div>
              </div>
              <div className="flex items-center">
                <div className="text-4xl font-bold text-floor-yellow">500+</div>
                <div className="ml-2 text-sm">довольных<br />клиентов</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-floor-blue-light rounded-full opacity-20 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1674021726461-cabebbd95c6b?auto=format&fit=crop&w=600&q=80" 
              alt="Полусухая стяжка пола" 
              className="rounded-lg shadow-xl z-10 relative animate-fade-in"
              style={{animationDelay: '0.5s'}}
            />
            <div className="absolute -bottom-4 -left-4 bg-floor-yellow rounded-lg p-4 shadow-lg z-20 animate-fade-in" style={{animationDelay: '0.9s'}}>
              <div className="font-bold text-black">Бесплатный выезд на замер!</div>
              <div className="text-sm text-black/70">При заказе от 40 м²</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
