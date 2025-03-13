
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[5%] right-[10%] w-64 h-64 rounded-full bg-blue-100/50 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-[10%] left-[5%] w-48 h-48 rounded-full bg-blue-100/30 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[30%] left-[20%] w-24 h-24 rounded-full bg-blue-100/40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[30%] right-[15%] w-32 h-32 rounded-full bg-blue-100/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm mb-2">
              Ensayos No Destructivos (NDT)
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Servicios de<br /> 
              <span className="text-primary">Mantenimiento Predictivo</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Tecnología avanzada y experiencia profesional para garantizar la integridad y seguridad de sus activos industriales.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#services" className="btn-primary">
                Nuestros Servicios
              </a>
              <a href="#contact" className="btn-outline">
                Contáctanos
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 glass-card p-6 md:p-8 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-100/30 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      P
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">PREDMAN</h3>
                    <p className="text-sm text-slate-600">Predictivo y Mantenimiento</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center p-3 rounded-lg bg-white/80 shadow-sm">
                    <div className="mr-3 p-2 rounded-full bg-blue-50">
                      <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Ultrasonido Industrial</h4>
                      <p className="text-sm text-slate-600">Detección precisa de fallas internas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-white/80 shadow-sm">
                    <div className="mr-3 p-2 rounded-full bg-blue-50">
                      <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Radiografía Industrial</h4>
                      <p className="text-sm text-slate-600">Inspección avanzada de materiales</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-white/80 shadow-sm">
                    <div className="mr-3 p-2 rounded-full bg-blue-50">
                      <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Termografía</h4>
                      <p className="text-sm text-slate-600">Análisis térmico preventivo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-slate-500 hover:text-primary">
          <span className="text-sm font-medium mb-1">Descubre más</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
