import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Contactează-ne</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Sunteți gata să vă începeți proiectul? Luați legătura cu noi pentru o consultație gratuită.
          </p>
        </div>

        {/* Horizontal Contact Information */}
        <div className="flex flex-wrap items-center justify-center space-x-12">
          <div className="flex items-center space-x-4">
            <MapPin className="w-8 h-8 text-yellow-600" />
            <div>
              <h3 className="text-xl font-semibold">Locația noastră</h3>
              <p className="text-lg text-gray-600">Str. Horia, bl.3, Petrosani, Hunedoara</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="w-8 h-8 text-yellow-600" />
            <div>
              <h3 className="text-xl font-semibold">Telefon</h3>
              <p className="text-lg text-gray-600">+40 723 400 646</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="w-8 h-8 text-yellow-600" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-lg text-gray-600">marta70fil@yahoo.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Clock className="w-8 h-8 text-yellow-600" />
            <div>
              <h3 className="text-xl font-semibold">Ore de lucru</h3>
              <p className="text-lg text-gray-600">Luni - Vineri: 07:00 - 17:00</p>
              <p className="text-lg text-gray-600">Sâmbătă: Cu programare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}