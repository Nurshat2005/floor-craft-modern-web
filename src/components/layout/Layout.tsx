
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CallbackButton from '../ui/CallbackButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <CallbackButton />
      <Footer />
    </div>
  );
};

export default Layout;
