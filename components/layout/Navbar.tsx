"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, PhoneCall } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-full">
            <PhoneCall className="h-6 w-6 text-white" />
          </div>
          <div className="font-bold text-xl">SécuriGaz</div>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
          >
            Accueil
          </Link>
          <Link 
            href="/service" 
            className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
          >
            Services
          </Link>
          <Link 
            href="/service" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Prendre RDV
          </Link>
        </nav>

        {/* Menu burger mobile */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/service" 
              className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/service" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Prendre RDV
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}