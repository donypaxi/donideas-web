import { useState } from "react";
import { comunicados } from "../helpers/comunicadosData";

export const Comunicados = () => {
  const [modalImagen, setModalImagen] = useState(null);

  const ultimosComunicados = [...comunicados]
    .reverse()
    .slice(0, 3);

  return (
    <section id="comunicados" className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cyan-700 font-semibold tracking-[4px] uppercase">
            Información Institucional
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-4">
            Últimos Comunicados
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ultimosComunicados.map((item) => (
            <div
              key={item.id}
              onClick={() => setModalImagen(item)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="bg-gray-900 p-3">
                <img
                  src={item.imagen}
                  alt={item.titulo}
                  className="w-full h-60 object-contain rounded-2xl"
                />
              </div>

              <div className="p-6">
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-bold">
                  {item.categoria}
                </span>

                <p className="text-sm text-gray-500 mt-4">
                  {item.fecha}
                </p>

                <h3 className="text-xl font-bold text-blue-900 mt-2">
                  {item.titulo}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/comunicados"
            className="bg-blue-900 hover:bg-cyan-700 text-white px-7 py-4 rounded-2xl font-bold shadow-md"
          >
            Ver todos los comunicados
          </a>
        </div>
      </div>

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
              <p className="text-sm text-gray-500">
                {modalImagen.fecha}
              </p>

              <h3 className="text-2xl font-black text-blue-900">
                {modalImagen.titulo}
              </h3>

              <p className="text-gray-700 mt-4 leading-relaxed">
                {modalImagen.descripcion}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};