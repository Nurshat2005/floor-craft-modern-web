
import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CallbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { toast } = useToast();

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // В реальном проекте здесь был бы API запрос
    console.log({ name, phone });
    
    toast({
      title: "Запрос отправлен",
      description: "Мы свяжемся с вами в ближайшее время!",
    });
    
    setName('');
    setPhone('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      <button 
        onClick={toggleForm}
        className="fixed bottom-6 right-6 z-30 bg-floor-yellow rounded-full p-3 shadow-lg hover:bg-floor-yellow-dark transition-all duration-300"
        aria-label="Заказать обратный звонок"
      >
        <Phone className="h-6 w-6 text-black" />
      </button>

      {/* Form popup */}
      <div 
        className={`fixed right-6 bottom-20 z-30 bg-white rounded-lg shadow-2xl p-5 w-80 transform transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={toggleForm}
          className="absolute top-3 right-3 text-floor-gray hover:text-floor-gray-dark"
          aria-label="Закрыть"
        >
          <X className="h-5 w-5" />
        </button>
        
        <h3 className="text-lg font-bold text-floor-blue mb-3">Заказать обратный звонок</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ваше имя</Label>
            <Input 
              id="name" 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="Иван Иванов" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Номер телефона</Label>
            <Input 
              id="phone" 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__" 
              required 
            />
          </div>
          
          <Button type="submit" className="w-full btn-primary">
            Отправить
          </Button>
          
          <p className="text-xs text-floor-gray text-center">
            Нажимая на кнопку, вы соглашаетесь с политикой обработки персональных данных
          </p>
        </form>
      </div>
      
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 z-20 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleForm}
      />
    </>
  );
};

export default CallbackButton;
