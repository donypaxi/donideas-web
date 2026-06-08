import { useState } from "react";
import { comunicados } from "../helpers/comunicadosData";
import { Link } from "react-router-dom";

export const ComunicadosPage = () => {
  const [modalImagen, setModalImagen] = useState(null);

  const comunicadosOrdenados = [...comunicados].reverse();

  return (
    <>
      {/* HERO */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-cyan-300 font-semibold">
            Asociación Bolognesiana
          </p>

          <h1 className="text-5xl font-black mt-4">
            Comunicados Oficiales
          </h1>

          <p className="text-blue-100 mt-5 max-w-3xl mx-auto">
            Relación de comunicados, convocatorias, actividades y anuncios
            institucionales.
          </p>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-2xl font-bold shadow-md hover:bg-blue-100 transition-all duration-300"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {comunicadosOrdenados.map((item) => (
            <div
              key={item.id}
              onClick={() => setModalImagen(item)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="bg-gray-900 p-3">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="w-full h-64 object-contain rounded-2xl"
                />
              </div>

              <div className="p-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                  {item.categoria}
                </span>

                <p className="text-sm text-gray-500 mt-4">
                  {item.fecha}
                </p>

                <h3 className="text-xl font-bold text-blue-900 mt-2">
                  {item.titulo}
                </h3>

                <p className="text-gray-600 mt-3 whitespace-pre-line">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {modalImagen && (
        <div
          onClick={() => setModalImagen(null)}
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl p-4 max-w-5xl w-full shadow-2xl"
          >
            <button
              onClick={() => setModalImagen(null)}
              className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full font-black shadow-lg"
            >
              ×
            </button>

            <img
              src={modalImagen.imagen}
              alt={modalImagen.titulo}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />

            <div className="p-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                {modalImagen.categoria}
              </span>

              <p className="text-sm text-gray-500 mt-4">
                {modalImagen.fecha}
              </p>

              <h3 className="text-3xl font-black text-blue-900 mt-2">
                {modalImagen.titulo}
              </h3>

              <p className="text-gray-700 mt-4 leading-relaxed">
                {modalImagen.descripcion}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};