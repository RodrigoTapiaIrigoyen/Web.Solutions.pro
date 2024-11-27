import { Globe, Cloud, Database, Code, Server, Shield, Cpu, Network, LineChart } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web Avanzado',
    description: 'Sitios web y aplicaciones PWA con React, Next.js y las últimas tecnologías frontend.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Arquitectura cloud-native y soluciones serverless en AWS y Google Cloud.',
    tech: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes']
  },
  {
    icon: Database,
    title: 'Bases de Datos',
    description: 'Diseño e implementación de bases de datos escalables SQL y NoSQL.',
    tech: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase']
  },
  {
    icon: Code,
    title: 'Desarrollo de Software',
    description: 'Aplicaciones empresariales robustas y microservicios escalables.',
    tech: ['Node.js', 'Python', 'Java', 'Microservicios']
  },
  {
    icon: Server,
    title: 'DevOps & CI/CD',
    description: 'Automatización de procesos y despliegue continuo.',
    tech: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Terraform']
  },
  {
    icon: Shield,
    title: 'Ciberseguridad',
    description: 'Protección de datos y sistemas con estándares internacionales.',
    tech: ['SSL/TLS', 'OAuth 2.0', 'WAF', 'Pentesting']
  },
  {
    icon: Cpu,
    title: 'Inteligencia Artificial',
    description: 'Implementación de soluciones de IA y Machine Learning.',
    tech: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn']
  },
  {
    icon: Network,
    title: 'APIs & Integración',
    description: 'Desarrollo de APIs RESTful y GraphQL para integración de sistemas.',
    tech: ['REST', 'GraphQL', 'WebSockets', 'gRPC']
  },
  {
    icon: LineChart,
    title: 'Analytics & BI',
    description: 'Implementación de soluciones de análisis de datos y Business Intelligence.',
    tech: ['Google Analytics', 'Power BI', 'Tableau', 'Elasticsearch']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Soluciones tecnológicas de vanguardia para la era digital
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group bg-gray-800 p-6 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out blur"></div>
                <div className="relative p-6 rounded-xl bg-gray-800">
                  <Icon className="h-8 w-8 text-blue-500" />
                  <h3 className="mt-4 text-lg font-medium text-white">{service.title}</h3>
                  <p className="mt-2 text-gray-400">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium text-blue-400 bg-blue-900/30 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}