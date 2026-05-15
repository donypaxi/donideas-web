import { useEffect, useState } from "react";
import Papa from "papaparse";

export const Empadronados = () => {
  const [empadronados, setEmpadronados] = useState([]);
  const [promocion, setPromocion] = useState("");
  const [cargando, setCargando] = useState(true);

  const googleSheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vScxb5lNWa_L6GsDoMoo5XWdKqGecE0q4bm4YX-E2ijJHmqyO8L_1TLI1HkHBLlGm4sRSTDFXzfajED/pub?gid=0&single=true&output=csv";

  useEffect(() => {
    Papa.parse(googleSheetURL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (resultado) => {
        const data = resultado.data.filter(
          (item) =>
            item.DNI ||
            item.APELLIDOS ||
            item.NOMBRES ||
            item["PROMOCIÓN"]
        );
        setEmpadronados(data);

        const promocionesUnicas = [
          ...new Set(data.map((item) => item["PROMOCIÓN"]).filter(Boolean)),
        ].sort();

        setPromocion(promocionesUnicas[32] || "");
        setCargando(false);
      },
      error: () => {
        setCargando(false);
      },
    });
  }, []);

  const promociones = [
    ...new Set(empadronados.map((item) => item["PROMOCIÓN"]).filter(Boolean)),
  ].sort();

  const registrosPromocion = empadronados.filter(
    (item) => item["PROMOCIÓN"] === promocion
  );

  const vistaHome = registrosPromocion;

  return (
    <section id="empadronados" className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-cyan-700 font-semibold">
            Registro Institucional
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-4">
            Relación de Empadronados
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5 leading-relaxed">
            Vista previa de la promoción seleccionada. Para consultar todos los
            registros, ingresa al padrón completo.
          </p>
        </div>

        <div className="bg-gray-100 rounded-3xl p-6 mb-10 shadow-sm">
          <div className="max-w-md mx-auto">
            <label className="text-sm font-semibold text-gray-700">
              Seleccionar promoción
            </label>

            <select
              value={promocion}
              onChange={(e) => setPromocion(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
            >
              {promociones.map((promo, index) => (
                <option key={index} value={promo}>
                  Promoción {promo}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl shadow-lg border border-gray-100">
          <table className="w-full">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left">N°</th>
                {/* <th className="px-6 py-4 text-left">DNI</th> */}
                <th className="px-6 py-4 text-left">Apellidos y nombres</th>
                <th className="px-6 py-4 text-left">Promoción</th>
                <th className="px-6 py-4 text-left">Estado</th>
              </tr>
            </thead>

            <tbody>
              {vistaHome.map((item, index) => {

                const estado = (item.ESTADO || "").trim().toLowerCase();

                return (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition-all"
                  >
                    <td className="px-6 py-4 font-medium">
                      {index + 1}
                    </td>

                    {/* <td className="px-6 py-4">
                      {item.DNI}
                    </td> */}

                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {item.APELLIDOS} {item.NOMBRES}
                    </td>

                    <td className="px-6 py-4">
                      {item["PROMOCIÓN"]}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-4 py-1 rounded-full text-xs font-bold ${
                          estado === "empadronado"
                            ? "bg-green-100 text-green-700"
                            : estado === "pendiente"
                            ? "bg-yellow-100 text-yellow-700"
                            : estado === "inactivo"
                            ? "bg-red-100 text-red-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {item.ESTADO ? item.ESTADO.trim() : "Sin estado"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {cargando && (
            <div className="text-center py-10 text-gray-500">
              Cargando registros...
            </div>
          )}

          {!cargando && vistaHome.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No se encontraron registros para esta promoción.
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <a
            href="/padron"
            className="inline-block bg-blue-900 hover:bg-cyan-700 text-white px-8 py-4 rounded-2xl font-bold shadow-md transition"
          >
            Ver padrón completo
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-blue-900 text-white rounded-3xl p-8 shadow-lg">
            <p className="text-blue-200 text-sm uppercase tracking-[3px]">
              Total registrados
            </p>
            <h3 className="text-5xl font-black mt-4">{empadronados.length}</h3>
          </div>

          <div className="bg-cyan-600 text-white rounded-3xl p-8 shadow-lg">
            <p className="text-cyan-100 text-sm uppercase tracking-[3px]">
              Promociones
            </p>
            <h3 className="text-5xl font-black mt-4">{promociones.length}</h3>
          </div>

          <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-lg">
            <p className="text-gray-300 text-sm uppercase tracking-[3px]">
              Alumnos de la promo {promocion || "General"}
            </p>

            <h3 className="text-5xl font-black mt-4">
              {registrosPromocion.length}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};