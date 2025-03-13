
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-900 to-blue-900"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[5%] right-[10%] w-64 h-64 rounded-full bg-blue-800/30 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-[10%] left-[5%] w-48 h-48 rounded-full bg-blue-800/20 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[30%] left-[20%] w-24 h-24 rounded-full bg-blue-800/30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[30%] right-[15%] w-32 h-32 rounded-full bg-blue-800/10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-800/30 text-white font-medium text-sm mb-2">
              Ensayos No Destructivos (NDT)
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Servicios de<br /> 
              <span className="text-blue-300">Mantenimiento Predictivo</span>
            </h1>
            <p className="text-lg text-blue-100/80 max-w-xl leading-relaxed">
              Tecnología avanzada y experiencia profesional para garantizar la integridad y seguridad de sus activos industriales.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#services" className="btn-primary bg-blue-700 hover:bg-blue-600">
                Nuestros Servicios
              </a>
              <a href="#contact" className="btn-outline border-blue-400 text-blue-300 hover:bg-blue-800/30">
                Contáctanos
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 glass-card p-6 md:p-8 rounded-2xl overflow-hidden bg-slate-800/40 backdrop-blur-md border border-blue-900/50">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-800/30 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">
                      P
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">PREDMAN</h3>
                    <p className="text-sm text-blue-200/70">Predictivo y Mantenimiento</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center p-3 rounded-lg bg-slate-800/80 shadow-sm">
                    <div className="mr-3 p-2 rounded-full bg-blue-900/30">
                      <div className="w-8 h-8 rounded-full bg-blue-800/40"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Ultrasonido Industrial</h4>
                      <p className="text-sm text-blue-200/70">Detección precisa de fallas internas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-slate-800/80 shadow-sm">
                    <div className="mr-3 p-2 rounded-full bg-blue-900/30">
                      <div className="w-8 h-8 rounded-full bg-blue-800/40"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Radiografía Industrial</h4>
                      <p className="text-sm text-blue-200/70">Inspección avanzada de materiales</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-3 rounded-lg bg-slate-800/80 shadow-sm">
                    <div className="mr-3 p-2 rounded-full bg-blue-900/30">
                      <div className="w-8 h-8 rounded-full bg-blue-800/40"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Termografía</h4>
                      <p className="text-sm text-blue-200/70">Análisis térmico preventivo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="flex flex-col items-center text-blue-300 hover:text-blue-200">
          <span className="text-sm font-medium mb-1">Descubre más</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
