import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Cpu, Shield, LineChart } from 'lucide-react';

const technologies = [
  {
    icon: Code2,
    name: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: Database,
    name: 'Backend',
    techs: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
  },
  {
    icon: Cloud,
    name: 'Cloud',
    techs: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes']
  },
  {
    icon: Cpu,
    name: 'AI & ML',
    techs: ['TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn']
  },
  {
    icon: Shield,
    name: 'Security',
    techs: ['OAuth 2.0', 'JWT', 'WAF', 'SSL/TLS']
  },
  {
    icon: LineChart,
    name: 'Analytics',
    techs: ['Power BI', 'Elasticsearch', 'Grafana']
  }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Stack Tecnológico
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Herramientas y tecnologías de última generación
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out blur"></div>
                <div className="relative p-6 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Icon className="h-8 w-8 text-blue-500" />
                    <h3 className="text-lg font-medium text-white">{tech.name}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tech.techs.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm text-blue-400 bg-blue-900/30 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}