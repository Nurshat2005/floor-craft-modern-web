
import React, { useState, useEffect } from 'react';
import { Calculator, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CalculatorSection = () => {
  const [length, setLength] = useState(5);
  const [width, setWidth] = useState(5);
  const [thickness, setThickness] = useState(50);
  const [preparation, setPreparation] = useState(true);
  const [insulation, setInsulation] = useState(false);
  const [fastDrying, setFastDrying] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalArea, setTotalArea] = useState(25);
  const { toast } = useToast();

  // Базовые расценки (примерные)
  const pricePerM2 = 700; // руб/м²
  const preparationPricePerM2 = 150; // руб/м²
  const insulationPricePerM2 = 300; // руб/м²
  const fastDryingExtraPercent = 20; // +20% к стоимости

  useEffect(() => {
    // Рассчитываем площадь
    const area = length * width;
    setTotalArea(area);

    // Базовая стоимость по площади
    let price = area * pricePerM2;

    // Надбавка за толщину слоя свыше стандартной
    if (thickness > 50) {
      price += area * ((thickness - 50) / 10) * 60; // Каждый +1см = +60 руб/м²
    }

    // Дополнительные опции
    if (preparation) {
      price += area * preparationPricePerM2;
    }
    
    if (insulation) {
      price += area * insulationPricePerM2;
    }
    
    if (fastDrying) {
      price += price * (fastDryingExtraPercent / 100);
    }

    // Округляем до целых
    setTotalPrice(Math.round(price));
  }, [length, width, thickness, preparation, insulation, fastDrying]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // В реальном проекте здесь был бы API запрос
    console.log({
      area: totalArea,
      length,
      width,
      thickness,
      options: { preparation, insulation, fastDrying },
      totalPrice
    });
    
    toast({
      title: "Расчёт отправлен",
      description: "Наш менеджер свяжется с вами для уточнения деталей!",
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">Рассчитайте стоимость работ</h2>
            <p className="text-floor-gray-dark mb-6">
              Используйте наш калькулятор для предварительного расчёта стоимости полусухой стяжки пола. Точную цену вы узнаете после бесплатного замера.
            </p>
            
            <div className="bg-floor-blue text-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-3">
                <Calculator className="h-5 w-5 mr-2" />
                <h3 className="text-xl font-bold">Параметры расчёта:</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <div className="rounded-full bg-floor-yellow h-2 w-2 mt-1.5 mr-2"></div>
                  <span>Стандартная полусухая стяжка – от {pricePerM2} руб/м²</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-floor-yellow h-2 w-2 mt-1.5 mr-2"></div>
                  <span>Подготовка основания – от {preparationPricePerM2} руб/м²</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-floor-yellow h-2 w-2 mt-1.5 mr-2"></div>
                  <span>Утепление пола – от {insulationPricePerM2} руб/м²</span>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-floor-yellow h-2 w-2 mt-1.5 mr-2"></div>
                  <span>Быстрое высыхание – +{fastDryingExtraPercent}% к стоимости</span>
                </li>
              </ul>
              <div className="mt-4 flex items-center">
                <Info className="h-4 w-4 text-floor-yellow mr-2" />
                <span className="text-xs text-floor-yellow">Точная стоимость определяется после осмотра объекта</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="font-bold text-floor-blue text-xl mb-4">Итоговый расчёт</div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-floor-gray-dark">Площадь:</span>
                  <span className="font-medium">{totalArea} м²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-floor-gray-dark">Толщина стяжки:</span>
                  <span className="font-medium">{thickness} мм</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-floor-gray-dark">Дополнительные опции:</span>
                  <div className="text-right">
                    {preparation && <div>Подготовка основания</div>}
                    {insulation && <div>Утепление пола</div>}
                    {fastDrying && <div>Быстрое высыхание</div>}
                    {!preparation && !insulation && !fastDrying && <div>Нет</div>}
                  </div>
                </div>
                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="text-floor-blue font-bold">Итоговая стоимость:</span>
                  <span className="text-2xl font-bold text-floor-blue">{totalPrice.toLocaleString()} ₽</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-floor-blue mb-6">
                Параметры помещения
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="length">Длина помещения (м)</Label>
                    <Input 
                      id="length" 
                      type="number" 
                      min={1} 
                      max={100} 
                      value={length}
                      onChange={(e) => setLength(Number(e.target.value))}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="width">Ширина помещения (м)</Label>
                    <Input 
                      id="width" 
                      type="number" 
                      min={1} 
                      max={100} 
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <Label htmlFor="thickness">Толщина стяжки: {thickness} мм</Label>
                  </div>
                  <Slider 
                    id="thickness"
                    min={30}
                    max={100}
                    step={5}
                    value={[thickness]}
                    onValueChange={(vals) => setThickness(vals[0])}
                  />
                  <div className="flex justify-between mt-1 text-xs text-floor-gray">
                    <span>30 мм</span>
                    <span>100 мм</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="preparation" className="text-base font-medium">
                        Подготовка основания
                      </Label>
                      <p className="text-sm text-floor-gray">
                        Очистка основания, грунтовка
                      </p>
                    </div>
                    <Switch 
                      id="preparation"
                      checked={preparation}
                      onCheckedChange={setPreparation}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="insulation" className="text-base font-medium">
                        Утепление пола
                      </Label>
                      <p className="text-sm text-floor-gray">
                        Укладка слоя теплоизоляции
                      </p>
                    </div>
                    <Switch 
                      id="insulation"
                      checked={insulation}
                      onCheckedChange={setInsulation}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="fastDrying" className="text-base font-medium">
                        Быстрое высыхание
                      </Label>
                      <p className="text-sm text-floor-gray">
                        Специальные добавки для ускорения
                      </p>
                    </div>
                    <Switch 
                      id="fastDrying"
                      checked={fastDrying}
                      onCheckedChange={setFastDrying}
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full btn-primary">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-center text-floor-gray mt-2">
                    Отправляя заявку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
