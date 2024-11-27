export default function Testimonials() {
  const testimonials = [
    {
      content: "Web Solution Pro transformó nuestra infraestructura cloud, mejorando el rendimiento un 300% y reduciendo costos.",
      author: "María González",
      role: "CTO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "Su implementación de IA y análisis de datos nos permitió automatizar procesos críticos y tomar mejores decisiones.",
      author: "Carlos Ruiz",
      role: "Director de Innovación, InnovaTech",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      content: "La migración a microservicios y la implementación de CI/CD revolucionó nuestro ciclo de desarrollo.",
      author: "Ana Martínez",
      role: "VP de Ingeniería, DataFlow",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Casos de Éxito
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Transformación digital que genera resultados reales
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="flex-1 p-6">
                <blockquote className="mt-6 text-gray-300">
                  <p className="text-lg font-medium">"{testimonial.content}"</p>
                </blockquote>
              </div>
              <div className="p-6 bg-gray-900">
                <div className="flex items-center">
                  <img className="h-12 w-12 rounded-full" src={testimonial.image} alt="" />
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}