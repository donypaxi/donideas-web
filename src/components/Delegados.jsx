import { useEffect, useState } from "react";
import Papa from "papaparse";

export const Delegados = () => {
  const [delegados, setDelegados] = useState([]);
  const [cargando, setCargando] = useState(true);

  const googleSheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSkMVekATWPFPgXr9Vh0cKxRPyTLpJ3GSpPn5jmOzSLyRnSyHf6DwfO9_LA7QcWXizroqQmPZpOV92n/pub?gid=0&single=true&output=csv";

  useEffect(() => {
    Papa.parse(googleSheetURL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (resultado) => {
        const data = resultado.data.filter(
          (item) =>
            item.NOMBRE ||
            item.APELLIDO ||
            item.CELULAR ||
            item["PROMOCIÓN"]
        );

        setDelegados(data);
        setCargando(false);
      },
      error: () => {
        setCargando(false);
      },
    });
  }, []);

  const vistaHome = delegados.slice(0, 4);

  return (
    <section
      id="delegados"
      className="py-20 bg-gradient-to-b from-gray-100 to-white px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-cyan-700 font-semibold">
            Representantes Oficiales
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-4">
            Delegados por Promoción
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5 leading-relaxed">
            Relación oficial de delegados encargados de coordinar actividades,
            reuniones y representación institucional de cada promoción
            bolognesiana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vistaHome.map((item, index) => {
            const delegado = `${item.NOMBRE || ""} ${item.APELLIDO || ""}`.trim();

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-900 to-cyan-700 p-6 text-white relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full"></div>

                  <p className="uppercase text-xs tracking-[3px] text-cyan-200">
                    Promoción
                  </p>

                  <h3 className="text-5xl font-black mt-2">
                    {item["PROMOCIÓN"]}
                  </h3>
                </div>

                <div className="p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-800 to-cyan-600 flex items-center justify-center text-white text-3xl font-black mx-auto shadow-lg -mt-16 border-4 border-white">
                    {delegado.charAt(0)}
                  </div>

                  <div className="text-center mt-5">
                    <h4 className="text-xl font-bold text-gray-800">
                      {delegado}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      Delegado de promoción
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="bg-gray-100 rounded-2xl px-4 py-3">
                      <p className="text-xs text-gray-500 uppercase">
                        Celular
                      </p>

                      <p className="font-semibold text-gray-800 mt-1">
                        {item.CELULAR || "No registrado"}
                      </p>
                    </div>

                    <div className="bg-gray-100 rounded-2xl px-4 py-3">
                      <p className="text-xs text-gray-500 uppercase">
                        Promoción
                      </p>

                      <p className="font-semibold text-gray-800 mt-1">
                        {item["PROMOCIÓN"]}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/51${item.CELULAR}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center w-full mt-6 bg-blue-900 hover:bg-cyan-700 transition-all duration-300 text-white py-3 rounded-2xl font-semibold shadow-md"
                  >
                    Contactar
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {cargando && (
          <div className="text-center py-10 text-gray-500">
            Cargando delegados...
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="/delegados"
            className="inline-block bg-blue-900 hover:bg-cyan-700 text-white px-8 py-4 rounded-2xl font-bold shadow-md transition"
          >
            Ver todos los delegados
          </a>
        </div>

        <div className="mt-20 bg-blue-900 rounded-3xl p-10 text-center text-white shadow-2xl">
          <p className="uppercase tracking-[4px] text-cyan-300 text-sm">
            Comunidad Bolognesiana
          </p>

          <h3 className="text-4xl font-black mt-4">
            Unidos por nuestras promociones
          </h3>

          <p className="max-w-3xl mx-auto mt-5 text-blue-100 leading-relaxed">
            Cada delegado representa el compromiso, identidad y vínculo
            permanente entre las promociones y la Asociación de Ex Alumnos
            Bolognesianos.
          </p>
        </div>
      </div>
    </section>
  );
};