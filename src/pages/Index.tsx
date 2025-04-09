
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AdvantagesSection from '@/components/home/AdvantagesSection';
import HowWeWorkSection from '@/components/home/HowWeWorkSection';
import CalculatorSection from '@/components/home/CalculatorSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FaqSection from '@/components/home/FaqSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <HowWeWorkSection />
      <CalculatorSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FaqSection />
    </Layout>
  );
};

export default Index;
