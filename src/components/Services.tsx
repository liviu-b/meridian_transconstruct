import React from 'react';
import { Building2, HomeIcon, Wrench, PaintBucket, Ruler } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Constructii Comerciale',
    description: 'Proiecte de clădiri comerciale la scară largă, de la sol până la finisaje.'
  },
  {
    icon: HomeIcon,
    title: 'Constructii rezidentiale',
    description: 'Constructii de case la comanda si proiecte majore de constructii rezidentiale.'
  },
  {
    icon: Wrench,
    title: 'Renovări',
    description: 'Servicii complete de renovare și remodelare pentru toate tipurile de proprietate.'
  },
  {
    icon: PaintBucket,
    title: 'Finisaj interior',
    description: 'Lucrări experte de finisare interioară, inclusiv vopsire și decorare.'
  },
  {
    icon: Ruler,
    title: 'Planificarea Proiectului',
    description: 'Planificare cuprinzătoare de proiect și consultanță arhitecturală.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Serviciile noastre</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
          Oferim o gamă cuprinzătoare de servicii de construcție și renovare pentru a satisface toate nevoile dvs. de clădire.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
              <service.icon className="w-12 h-12 mb-4 text-yellow-600" />
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}