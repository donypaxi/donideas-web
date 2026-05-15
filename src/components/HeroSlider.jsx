import { useEffect, useState } from "react";

import { fotos } from "../helpers/dataAsociacion";

export const HeroSlider = () => {
  const [imagenActual, setImagenActual] = useState(0);

  // Auto slider
  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) =>
        prev === fotos.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const siguienteImagen = () => {
    setImagenActual((prev) =>
      prev === fotos.length - 1 ? 0 : prev + 1
    );
  };

  const anteriorImagen = () => {
    setImagenActual((prev) =>
      prev === 0 ? fotos.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="inicio"
      className="relative w-full h-[90vh] overflow-hidden"
    >
      {/* Imagen */}
      <img
        src={fotos[imagenActual]}
        alt="Asociación Bolognesiana"
        className="w-full h-full object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <p className="uppercase tracking-[5px] text-cyan-300 text-sm">
            Asociación de Ex Alumnos
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-4 leading-tight">
            Bolognesianos
          </h1>

          <p className="max-w-2xl mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Portal oficial de integración, empadronamiento y difusión
            de actividades institucionales de las promociones
            bolognesianas.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#comunicados"
              className="bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              Ver comunicados
            </a>

            <a
              href="#empadronados"
              className="border border-white hover:bg-white hover:text-blue-900 transition-all duration-300 px-6 py-3 rounded-xl font-semibold"
            >
              Empadronados
            </a>
          </div>
        </div>
      </div>

      {/* Flechas */}
      <button
        onClick={anteriorImagen}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white w-12 h-12 rounded-full text-2xl transition-all"
      >
        ‹
      </button>

      <button
        onClick={siguienteImagen}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white w-12 h-12 rounded-full text-2xl transition-all"
      >
        ›
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3">
        {fotos.map((_, index) => (
          <button
            key={index}
            onClick={() => setImagenActual(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              imagenActual === index
                ? "bg-white scale-125"
                : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};