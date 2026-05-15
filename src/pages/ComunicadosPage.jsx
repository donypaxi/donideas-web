import { comunicados } from "../helpers/comunicadosData";
import { Link } from "react-router-dom";

export const ComunicadosPage = () => {
  return (
    <>
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

      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {comunicados.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
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

                <p className="text-gray-600 mt-3">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};