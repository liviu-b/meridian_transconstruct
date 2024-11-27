import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Contactează-ne</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
          Sunteți gata să vă începeți proiectul? Luați legătura cu noi pentru o consultație gratuită.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 mt-1 text-yellow-600" />
              <div>
                <h3 className="mb-1 font-semibold">Locația noastră</h3>
                <p className="text-gray-600">Str. Horia, bl.3, Petrosani, Hunedoara</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 mt-1 text-yellow-600" />
              <div>
                <h3 className="mb-1 font-semibold">Telefon</h3>
                <p className="text-gray-600">+40 723 400 646</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 mt-1 text-yellow-600" />
              <div>
                <h3 className="mb-1 font-semibold">Email</h3>
                <p className="text-gray-600">marta70fil@yahoo.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 mt-1 text-yellow-600" />
              <div>
                <h3 className="mb-1 font-semibold">Ore de lucru</h3>
                <p className="text-gray-600">Luni - Vineri: 07:00 - 17:00</p>
                <p className="text-gray-600">Sâmbătă: Cu programare</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Nume</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">Mesajul tău</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 font-semibold text-white transition-colors bg-yellow-600 rounded-md hover:bg-yellow-700"
            >
              Trimite mesajul
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}