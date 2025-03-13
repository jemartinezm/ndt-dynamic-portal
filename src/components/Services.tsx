
import { 
  Search, 
  Activity, 
  Zap, 
  Shield, 
  BarChart, 
  Settings 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Inspección Visual",
      description: "Evaluación experta de superficies y componentes para detectar defectos visibles utilizando tecnología avanzada."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Ultrasonido Industrial",
      description: "Detección precisa de defectos internos, medición de espesores y evaluación de integridad estructural sin dañar los materiales."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Radiografía Industrial",
      description: "Imágenes de alta resolución de estructuras internas para evaluar soldaduras, fundiciones y componentes críticos."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Partículas Magnéticas",
      description: "Identificación rápida de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos."
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Análisis de Vibraciones",
      description: "Monitoreo y diagnóstico de condiciones mecánicas para prevenir fallas en equipos rotativos."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Mantenimiento Predictivo",
      description: "Estrategias personalizadas para optimizar la vida útil de equipos y reducir costos operativos."
    }
  ];

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm mb-3">
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            Soluciones Avanzadas de Ensayos No Destructivos
          </h2>
          <p className="text-slate-600 text-lg">
            Ofrecemos una gama completa de servicios NDT diseñados para garantizar la integridad, seguridad y confiabilidad de sus activos industriales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="service-icon group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <a href="#contact" className="btn-primary inline-block">
            Solicitar Servicios
          </a>
        </div>
      </div>
      
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-50 opacity-70"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-50 opacity-70"></div>
    </section>
  );
};

export default Services;
