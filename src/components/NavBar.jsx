import logoDonIdeas from "../assets/img/logo.png";
import { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* LOGO */}
            <div className="flex items-center h-full">
                <img
                    src={logoDonIdeas}
                    alt="DonIdeas"
                    className="h-12 w-auto object-contain"
                />
            </div>

          {/* MENU DESKTOP */}
            <nav className="hidden md:flex items-center gap-8">
                <a href="#inicio" className="text-slate-700 hover:text-violet-600 transition">
                Inicio
                </a>

                <a href="#servicios" className="text-slate-700 hover:text-violet-600 transition">
                Servicios
                </a>

                <a href="#proyectos" className="text-slate-700 hover:text-violet-600 transition">
                Proyectos
                </a>

                <a href="#trayectoria" className="text-slate-700 hover:text-violet-600 transition">
                Trayectoria
                </a>

                <a href="#contacto" className="text-slate-700 hover:text-violet-600 transition">
                Contacto
                </a>

                <button className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all duration-300 shadow-lg shadow-violet-200">
                Hablemos
                </button>
            </nav>

          {/* MENU MOBILE */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#trayectoria">Trayectoria</a>
            <a href="#contacto">Contacto</a>

            <button className="w-full py-3 rounded-xl bg-violet-600 text-white font-semibold">
              Hablemos
            </button>
          </div>
        )}
      </div>
    </header>
  );
};