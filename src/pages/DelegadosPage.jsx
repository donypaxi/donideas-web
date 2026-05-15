import { useEffect, useState } from "react";
import Papa from "papaparse";
import { Link } from "react-router-dom";

export const DelegadosPage = () => {
  const [delegados, setDelegados] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [promocion, setPromocion] = useState("");
  const [cargando, setCargando] = useState(true);

  const googleSheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSkMVekATWPFPgXr9Vh0cKxRPyTLpJ3GSpPn5jmOzSLyRnSyHf6DwfO9_LA7QcWXizroqQmPZpOV92n/pub?gid=0&single=true&output=csv";

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

  const promociones = [
    ...new Set(
      delegados
        .map((item) => item["PROMOCIÓN"])
        .filter(Boolean)
    ),
  ].sort();

  const filtrados = delegados.filter((item) => {
    const nombreCompleto =
      `${item.NOMBRE || ""} ${item.APELLIDO || ""}`.toLowerCase();

    const celular = `${item.CELULAR || ""}`;

    const textoBusqueda = busqueda.toLowerCase().trim();

    const promocionTexto = `${item["PROMOCIÓN"] || ""}`;

    const coincideBusqueda =
    nombreCompleto.includes(textoBusqueda) ||
    celular.includes(textoBusqueda) ||
    promocionTexto.includes(textoBusqueda);

    const coincidePromocion = promocion
      ? item["PROMOCIÓN"] === promocion
      : true;

    return coincideBusqueda && coincidePromocion;
  });

  return (
    <section className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* VOLVER */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-blue-900 hover:bg-cyan-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg transition-all hover:-translate-y-1"
          >
            ← Volver al inicio
          </Link>
        </div>

        {/* TITULO */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-cyan-700 font-semibold">
            Representantes Oficiales
          </p>

          <h1 className="text-5xl md:text-6xl font-black text-blue-900 mt-4">
            Delegados de Promoción
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
            Relación oficial de delegados encargados de coordinar
            actividades, reuniones y representación institucional
            de cada promoción bolognesiana.
          </p>
        </div>

        {/* ESTADISTICAS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-900 text-white rounded-3xl p-8 shadow-xl">
            <p className="uppercase tracking-[3px] text-blue-200 text-sm">
              Total delegados
            </p>

            <h3 className="text-5xl font-black mt-4">
              {delegados.length}
            </h3>
          </div>

          <div className="bg-cyan-600 text-white rounded-3xl p-8 shadow-xl">
            <p className="uppercase tracking-[3px] text-cyan-100 text-sm">
              Promociones
            </p>

            <h3 className="text-5xl font-black mt-4">
              {promociones.length}
            </h3>
          </div>

          <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-xl">
            <p className="uppercase tracking-[3px] text-gray-300 text-sm">
              Resultados encontrados
            </p>

            <h3 className="text-5xl font-black mt-4">
              {filtrados.length}
            </h3>
          </div>
        </div>

        {/* FILTROS */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-10">
          <div className="grid md:grid-cols-2 gap-5">

            {/* BUSCADOR */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Buscar delegado
              </label>

              <input
                type="text"
                placeholder="Ingrese nombre o año de promoción"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
              />
            </div>

            {/* PROMOCION */}
            <div>
              <label className="text-sm font-semibold text-gray-700">
                Filtrar por promoción
              </label>

              <select
                value={promocion}
                onChange={(e) => setPromocion(e.target.value)}
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
              >
                <option value="">
                  Todas las promociones
                </option>

                {promociones.map((promo, index) => (
                  <option key={index} value={promo}>
                    Promoción {promo}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtrados.map((item, index) => {
            const delegado =
              `${item.NOMBRE || ""} ${item.APELLIDO || ""}`.trim();

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* HEADER */}
                <div className="bg-gradient-to-r from-blue-900 to-cyan-700 p-6 text-white relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full"></div>

                  <p className="uppercase text-xs tracking-[3px] text-cyan-200">
                    Promoción
                  </p>

                  <h3 className="text-5xl font-black mt-2">
                    {item["PROMOCIÓN"]}
                  </h3>
                </div>

                {/* BODY */}
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

                  {/* INFO */}
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

                  {/* BOTON */}
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

        {/* VACIO */}
        {!cargando && filtrados.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No se encontraron delegados.
          </div>
        )}

        {/* CARGANDO */}
        {cargando && (
          <div className="text-center py-10 text-gray-500">
            Cargando delegados...
          </div>
        )}
      </div>
    </section>
  );
};