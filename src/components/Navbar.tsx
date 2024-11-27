import { Menu, X, Code2, Cloud, Database } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">Web Solution Pro</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
              <a href="#services" className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Servicios</a>
              <a href="#testimonials" className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Testimonios</a>
              <a href="#faq" className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
              <a href="#about" className="text-gray-300 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Nosotros</a>
              <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contacto</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none">
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
            <a href="#services" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Servicios</a>
            <a href="#testimonials" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Testimonios</a>
            <a href="#faq" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
            <a href="#about" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Nosotros</a>
            <a href="#contact" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
}