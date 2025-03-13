
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  const serviceOptions = [
    { name: 'Ultrasonido Industrial', href: '#ultrasonido' },
    { name: 'Radiografía Industrial', href: '#radiografia' },
    { name: 'Termografía', href: '#termografia' },
    { name: 'Análisis de Vibraciones', href: '#vibraciones' },
  ];

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 backdrop-blur-sm py-4 px-6 md:px-12',
        scrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4d2c613d-dccc-4a71-aa9e-737aa4ae7f0a.png" 
              alt="PREDMAN Logo" 
              className="h-10 md:h-12"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-white font-medium nav-link px-1 py-2"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}

            {/* Services dropdown */}
            <div className="relative" ref={servicesRef}>
              <button 
                onClick={toggleServices}
                className="flex items-center text-white/90 hover:text-white font-medium px-1 py-2 focus:outline-none"
              >
                Servicios
                <ChevronDown 
                  size={16} 
                  className={cn(
                    "ml-1 transition-transform duration-200",
                    servicesOpen ? "rotate-180" : ""
                  )} 
                />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-2 z-50 border border-slate-200">
                  {serviceOptions.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-primary transition-colors"
                      onClick={() => {
                        setServicesOpen(false);
                        closeMenu();
                      }}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a 
              href="#contact" 
              className="btn-primary"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white/90 hover:text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'md:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6">
              <a href="#home" className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/4d2c613d-dccc-4a71-aa9e-737aa4ae7f0a.png" 
                  alt="PREDMAN Logo" 
                  className="h-10"
                />
              </a>
              <button
                className="text-slate-800 hover:text-primary"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-6 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium text-slate-800 hover:text-primary"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Services Dropdown */}
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={toggleServices}
                  className="flex items-center justify-between text-xl font-medium text-slate-800 hover:text-primary"
                >
                  Servicios
                  <ChevronDown 
                    size={20} 
                    className={cn(
                      "transition-transform duration-200",
                      servicesOpen ? "rotate-180" : ""
                    )} 
                  />
                </button>
                
                {servicesOpen && (
                  <div className="pl-4 flex flex-col space-y-3 pt-2">
                    {serviceOptions.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="text-lg text-slate-700 hover:text-primary"
                        onClick={closeMenu}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a 
                href="#contact" 
                className="btn-primary text-center mt-4"
                onClick={closeMenu}
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
