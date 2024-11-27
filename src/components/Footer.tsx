import React from 'react';
import { HardHat,} from 'lucide-react';

export function Footer() {
  return (
    <footer className="text-white bg-gray-900">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <HardHat size={32} className="text-yellow-600" />
              <span className="text-2xl font-bold">ACL-Construct</span>
            </div>
            <p className="text-gray-400">
            Construim excelență, oferim încredere.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Acasă</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Servicii</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white">Proiecte</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">Despre noi</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Constructii Comerciale</li>
              <li className="text-gray-400">Constructii Rezidentiale</li>
              <li className="text-gray-400">Finisaj Interior</li>
              <li className="text-gray-400">Renovări</li>
              <li className="text-gray-400">Planificarea Proiectului</li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div> */}
        </div>
        
        <div className="pt-8 mt-12 text-center text-gray-400 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Meridian Transconstruct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}