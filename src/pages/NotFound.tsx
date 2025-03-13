
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="glass-card p-8 md:p-10 animate-scale-up max-w-md w-full text-center">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-primary">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-slate-900">Página no encontrada</h1>
        <p className="text-slate-600 mb-8">Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
        <Link to="/" className="btn-primary flex items-center justify-center gap-2 mx-auto w-full max-w-xs">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
