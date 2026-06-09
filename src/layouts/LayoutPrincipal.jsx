import { Navbar } from "../components/NavBar";

export const LayoutPrincipal = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      {children}

      <footer className="bg-blue-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* IZQUIERDA */}
            <div>
              <h3 className="font-black text-2xl">
                Asociación de Ex Alumnos Bolognesianos
              </h3>

              <p className="text-blue-200 mt-3 leading-relaxed">
                Portal institucional destinado a fortalecer la integración,
                comunicación y participación de las promociones
                bolognesianas.
              </p>

              <p className="text-sm text-blue-300 mt-6">
                Tacna - Perú © 2026
              </p>
            </div>

            {/* DERECHA */}
            <div className="md:text-right">
              <p className="uppercase tracking-[3px] text-cyan-300 text-sm">
                Desarrollo Web
              </p>

              <h4 className="text-2xl font-black mt-3">
                donyDev
              </h4>

              <p className="text-blue-200 mt-2">
                Desarrollado por Dony Paxi
              </p>

              <p className="text-blue-300 mt-1">
                📱 957 696 996
              </p>

              <p className="text-sm text-gray-400 mt-5">
                Desarrollo de páginas web institucionales,
                sistemas y plataformas modernas.
              </p>
            </div>
          </div>

          {/* LINEA */}
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
            Comunidad Bolognesiana • "Tengo deberes sagrados que cumplir y los cumpliré hasta quemar el último cartucho"
          </div>
        </div>
      </footer>
    </div>
  );
};