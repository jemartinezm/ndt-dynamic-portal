
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Formulario enviado",
        description: "Nos pondremos en contacto contigo a la brevedad.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: "Teléfono",
      info: "+00 123 456 7890",
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email",
      info: "contacto@predman.com",
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "Dirección",
      info: "Av. Industrial 123, Sector 4",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm mb-3">
            Contáctanos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            ¿Necesitas nuestros servicios?
          </h2>
          <p className="text-slate-600 text-lg">
            Estamos listos para ayudarte con tus necesidades de ensayos no destructivos y mantenimiento predictivo. Ponte en contacto con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 animate-slide-in">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-medium text-slate-900 mb-2">Horario de Atención</h4>
                <p className="text-slate-600 mb-1">Lunes a Viernes: 8:00 - 18:00</p>
                <p className="text-slate-600">Emergencias: 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un Mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="+00 123 456 789"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
                      Servicio de Interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Ultrasonido">Ultrasonido Industrial</option>
                      <option value="Radiografía">Radiografía Industrial</option>
                      <option value="Partículas Magnéticas">Partículas Magnéticas</option>
                      <option value="Análisis de Vibraciones">Análisis de Vibraciones</option>
                      <option value="Mantenimiento Predictivo">Mantenimiento Predictivo</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Describe tus necesidades..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      Enviar Mensaje
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 right-[5%] w-24 h-24 rounded-full bg-blue-50 opacity-60"></div>
      <div className="absolute bottom-20 left-[5%] w-32 h-32 rounded-full bg-blue-50 opacity-60"></div>
    </section>
  );
};

export default Contact;
