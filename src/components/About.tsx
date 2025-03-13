
import { Check, Shield, Users, Trophy } from 'lucide-react';

const About = () => {
  const advantages = [
    {
      icon: <Check className="w-5 h-5 text-white" />,
      text: "Técnicos certificados internacionalmente"
    },
    {
      icon: <Check className="w-5 h-5 text-white" />,
      text: "Equipos de última generación"
    },
    {
      icon: <Check className="w-5 h-5 text-white" />,
      text: "Informes detallados y recomendaciones"
    },
    {
      icon: <Check className="w-5 h-5 text-white" />,
      text: "Cumplimiento de normas internacionales"
    },
    {
      icon: <Check className="w-5 h-5 text-white" />,
      text: "Servicio disponible 24/7"
    },
    {
      icon: <Check className="w-5 h-5 text-white" />,
      text: "Soluciones personalizadas"
    }
  ];

  const stats = [
    { 
      icon: <Shield className="w-8 h-8 text-primary mb-2" />,
      value: "98%", 
      label: "Tasa de Detección" 
    },
    { 
      icon: <Users className="w-8 h-8 text-primary mb-2" />,
      value: "200+", 
      label: "Clientes Satisfechos" 
    },
    { 
      icon: <Trophy className="w-8 h-8 text-primary mb-2" />,
      value: "15+", 
      label: "Años de Experiencia" 
    }
  ];

  return (
    <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm mb-2">
              Nuestra Empresa
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Expertos en Mantenimiento Predictivo y Preventivo
            </h2>
            <p className="text-lg text-slate-600">
              En PREDMAN, nos especializamos en servicios de ensayos no destructivos (NDT) de alta calidad. Nuestro compromiso es ofrecer soluciones precisas y confiables que ayuden a mantener la integridad y seguridad de sus instalaciones industriales.
            </p>
            
            <p className="text-slate-600">
              Con profesionales altamente capacitados y equipos de vanguardia, identificamos problemas potenciales antes de que se conviertan en fallas costosas, optimizando así el rendimiento y la vida útil de sus activos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {advantages.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 animate-slide-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-scale-up">
            <div className="glass-card p-8 relative z-10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Por qué elegirnos</h3>
                <p className="text-slate-600">
                  Combinamos experiencia técnica, tecnología avanzada y un enfoque personalizado para brindar soluciones que agregan valor real a su operación.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center p-4 bg-white rounded-lg shadow-sm border border-slate-100 animate-fade-in"
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    {stat.icon}
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-64 h-64 rounded-full bg-blue-100/50 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-blue-100/30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
