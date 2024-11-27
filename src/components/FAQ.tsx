import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "¿Qué tecnologías utilizan para el desarrollo web?",
    answer: "Utilizamos las últimas tecnologías como React, Next.js, TypeScript y Tailwind CSS para frontend, Node.js y Python para backend, y frameworks modernos de testing y optimización."
  },
  {
    question: "¿Cómo garantizan la seguridad en la nube?",
    answer: "Implementamos las mejores prácticas de seguridad en AWS y Google Cloud, incluyendo encriptación end-to-end, WAF, monitoreo continuo, y cumplimiento con estándares internacionales."
  },
  {
    question: "¿Qué metodología de desarrollo utilizan?",
    answer: "Seguimos metodologías ágiles con Scrum y Kanban, utilizando CI/CD para entregas continuas, control de versiones con Git, y prácticas de DevOps para optimizar el ciclo de desarrollo."
  },
  {
    question: "¿Ofrecen soporte post-implementación?",
    answer: "Sí, proporcionamos soporte 24/7, monitoreo continuo, mantenimiento preventivo, actualizaciones de seguridad, y optimización continua del rendimiento."
  },
  {
    question: "¿Cómo manejan la escalabilidad de los proyectos?",
    answer: "Diseñamos arquitecturas cloud-native escalables utilizando microservicios, contenedores Docker, orquestación con Kubernetes, y bases de datos distribuidas."
  },
  {
    question: "¿Qué servicios de IA y análisis de datos ofrecen?",
    answer: "Implementamos soluciones de Machine Learning, procesamiento de lenguaje natural, análisis predictivo, y visualización de datos utilizando tecnologías como TensorFlow y Power BI."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Respuestas detalladas a tus dudas técnicas
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mt-4">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between w-full px-4 py-4 text-left text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-300 bg-gray-800 rounded-b-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}