import React from 'react';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
    title: "Modern Office Complex",
    category: "Commercial"
  },
  {
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80",
    title: "Luxury Residence",
    category: "Residential"
  },
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
    title: "Industrial Facility",
    category: "Industrial"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Proiecte finalizate. Clienți mulțumiți.
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
          Aruncă o privire la câteva dintre proiectele noastre recente de construcție și renovare.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-yellow-400">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}