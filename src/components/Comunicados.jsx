import promo2007 from "../assets/img/promo2007.jpg";
import comunicado1 from "../assets/img/comunicado1.jpg";
import { comunicados } from "../helpers/comunicadosData";

export const Comunicados = () => {
  const ultimosComunicados = comunicados.slice(0, 3);

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
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
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

                <p className="text-sm text-gray-500 mt-4">{item.fecha}</p>

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
    </section>
  );
};