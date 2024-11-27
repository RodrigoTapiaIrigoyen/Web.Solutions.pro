import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:websolutiondpro@gmail.com?subject=Contacto desde Web Solution Pro&body=Nombre: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMensaje: ${formData.message}`;
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Inicia tu transformación digital hoy
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="flex-shrink-0 h-6 w-6 text-blue-500" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-white">Email</p>
                  <p className="mt-1 text-gray-300">websolutiondpro@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageSquare className="flex-shrink-0 h-6 w-6 text-blue-500" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-white">Whats App</p>
                  <a href="https://wa.me/529992921377" target="_blank" rel="noopener noreferrer" className="mt-1 text-blue-400 hover:text-blue-300 transition-colors duration-300">+52 999 292 1377</a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="flex-shrink-0 h-6 w-6 text-blue-500" />
                <div className="ml-3">
                  <p className="text-lg font-medium text-white">Cobertura</p>
                  <p className="mt-1 text-gray-300">Servicios en línea a nivel global</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-900 rounded-lg">
                <h4 className="text-lg font-medium text-white mb-4">Horario de Atención</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Soporte de emergencia: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}