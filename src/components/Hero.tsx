import React from 'react';

export function Hero() {
  return (
    <section className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container relative flex items-center h-full px-4 mx-auto">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 text-5xl font-bold">Construim excelență, oferim încredere.</h1>
          <p className="mb-8 text-xl">Servicii profesionale de construcție și renovare cu peste 5 de ani de experiență în furnizarea de excelență.</p>
          <div className="space-x-4">
            <a href="#contact" className="px-8 py-3 font-semibold text-white transition-colors bg-yellow-600 rounded-md hover:bg-yellow-700">
              Haide să discutăm!
            </a>
            <a href="#services" className="px-8 py-3 font-semibold transition-colors border-2 border-white rounded-md hover:bg-white hover:text-black">
              Serviciile noastre
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}