
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
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
                className="text-slate-800 hover:text-primary font-medium nav-link px-1 py-2"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-slate-800 hover:text-primary"
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
