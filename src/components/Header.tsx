import React from 'react';
import { HardHat, Phone, Mail, Clock } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container px-4 mx-auto">
        {/* Top Bar */}
        <div className="py-2 text-sm border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-yellow-600" />
                <span>+40 723 400 646</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-yellow-600" />
                <span>marta70fil@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-yellow-600" />
                <span>L - V: 07:00 - 17:00 </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HardHat size={32} className="text-yellow-600" />
              <span className="text-2xl font-bold">MERIDIAN TRANSCONSTRUCT</span>
            </div>
            <div className="space-x-8">
              <a href="#home" className="hover:text-yellow-600">Acasă</a>
              <a href="#services" className="hover:text-yellow-600">Servicii</a>
              <a href="#projects" className="hover:text-yellow-600">Proiecte</a>
              <a href="#about" className="hover:text-yellow-600">Despre noi</a>
              <a href="#contact" className="hover:text-yellow-600">Contact</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}