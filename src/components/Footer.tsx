
import { ArrowUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white relative">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <img 
              src="/lovable-uploads/4d2c613d-dccc-4a71-aa9e-737aa4ae7f0a.png" 
              alt="PREDMAN Logo" 
              className="h-12 bg-white p-1 rounded-sm"
            />
            <p className="text-slate-300">
              Soluciones avanzadas de ensayos no destructivos y mantenimiento predictivo para la industria.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Ultrasonido Industrial</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Radiografía Industrial</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Partículas Magnéticas</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Análisis de Vibraciones</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Mantenimiento Predictivo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contacto</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="text-slate-300">Av. Industrial 123, Sector 4</li>
              <li className="text-slate-300">+00 123 456 7890</li>
              <li className="text-slate-300">contacto@predman.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} PREDMAN. Todos los derechos reservados.</p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-primary hover:text-white transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
