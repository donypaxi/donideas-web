import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/img/LOGO.png";

export const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const links = [
    { nombre: "Inicio", url: "#inicio", tipo: "scroll" },
    { nombre: "Empadronados", url: "#empadronados", tipo: "scroll" },
    { nombre: "Delegados", url: "#delegados", tipo: "scroll" },
    { nombre: "Fechas", url: "#fechas", tipo: "scroll" },
    { nombre: "Comunicados", url: "#comunicados", tipo: "scroll" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMenuAbierto(false)}
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-50 p-2 shadow-sm">
            <img
              src={LOGO}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h1 className="font-black text-blue-900 text-base md:text-lg leading-tight">
              Ex Alumnos Bolognesianos
            </h1>

            <p className="text-xs text-gray-500">
              Asociación institucional · Tacna
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-2 bg-gray-100 px-2 py-2 rounded-2xl">
          {links.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-white hover:text-blue-800 hover:shadow-sm transition-all"
            >
              {item.nombre}
            </a>
          ))}
        </nav>

        <Link
          to="/empadronamiento"
          className="hidden md:block bg-blue-900 hover:bg-cyan-700 text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-md transition-all"
        >
          Empadronarme
        </Link>

        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="lg:hidden bg-blue-900 text-white w-11 h-11 rounded-xl text-xl"
        >
          {menuAbierto ? "×" : "☰"}
        </button>
      </div>

      {menuAbierto && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-6 py-5 flex flex-col gap-3">
            {links.map((item, index) => (
              <a
                key={index}
                href={item.url}
                onClick={() => setMenuAbierto(false)}
                className="px-4 py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-blue-900 hover:text-white transition-all"
              >
                {item.nombre}
              </a>
            ))}

            <Link
              to="/empadronamiento"
              onClick={() => setMenuAbierto(false)}
              className="px-4 py-3 rounded-xl bg-cyan-600 text-white font-bold text-center hover:bg-blue-900 transition-all"
            >
              Empadronarme
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};