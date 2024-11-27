import { Target, Eye, Code, Cloud, Database, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Nuestra Visión y Misión
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-300">
            <Eye className="h-12 w-12 text-blue-500" />
            <h3 className="mt-4 text-2xl font-bold text-white">Visión</h3>
            <p className="mt-4 text-lg text-gray-300">
              Ser líderes globales en transformación digital, impulsando la innovación a través de soluciones tecnológicas de vanguardia que definan el futuro de la industria.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-300">
            <Target className="h-12 w-12 text-blue-500" />
            <h3 className="mt-4 text-2xl font-bold text-white">Misión</h3>
            <p className="mt-4 text-lg text-gray-300">
              Proporcionar soluciones tecnológicas innovadoras y personalizadas que impulsen la transformación digital de nuestros clientes, garantizando excelencia, seguridad y escalabilidad.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl overflow-hidden shadow-2xl">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:py-20">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <Code className="h-10 w-10 text-blue-300" />
                  <h4 className="mt-4 text-xl font-semibold text-white">Innovación Constante</h4>
                  <p className="mt-2 text-blue-100">Adoptamos las últimas tecnologías y mejores prácticas.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Cloud className="h-10 w-10 text-blue-300" />
                  <h4 className="mt-4 text-xl font-semibold text-white">Soluciones Escalables</h4>
                  <p className="mt-2 text-blue-100">Arquitecturas cloud-native diseñadas para crecer.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-10 w-10 text-blue-300" />
                  <h4 className="mt-4 text-xl font-semibold text-white">Seguridad Primero</h4>
                  <p className="mt-2 text-blue-100">Protección robusta para tus datos y sistemas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}