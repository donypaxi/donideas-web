import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";

export const EmpadronadosPage = () => {
  const [empadronados, setEmpadronados] = useState([]);
  const [busqueda, setBusqueda] = useState("");
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
        setCargando(false);
        },

      error: () => {
        setCargando(false);
      },
    });
  }, []);

  const promociones = [
    ...new Set(
      empadronados
        .map((item) => item["PROMOCIÓN"])
        .filter(Boolean)
    ),
  ].sort();

  const filtrados = empadronados.filter((item) => {
    const apellidos = `${item.APELLIDOS || ""}`.toLowerCase();
    const nombres = `${item.NOMBRES || ""}`.toLowerCase();
    const dni = `${item.DNI || ""}`;

    const textoBusqueda = busqueda.toLowerCase().trim();

    const nombreApellido = `${nombres} ${apellidos}`;
    const apellidoNombre = `${apellidos} ${nombres}`;

    const coincideBusqueda =
    nombreApellido.includes(textoBusqueda) ||
    apellidoNombre.includes(textoBusqueda) ||
    apellidos.includes(textoBusqueda) ||
    nombres.includes(textoBusqueda) ||
    dni.includes(textoBusqueda);

    const coincidePromocion = promocion
      ? item["PROMOCIÓN"] === promocion
      : true;

    return coincideBusqueda && coincidePromocion;
  });

  return (
    <section className="min-h-screen bg-gray-100 py-20 px-6">
        
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-white hover:bg-blue-900 hover:text-white text-blue-900 border border-blue-900 px-5 py-3 rounded-2xl font-bold shadow-md transition-all"
                >
                    ← Volver al inicio
                </Link>
            </div>
            {/* HEADER */}
            <div className="text-center mb-14">
            <p className="uppercase tracking-[4px] text-cyan-700 font-semibold">
                Asociación de Ex Alumnos
            </p>

            <h1 className="text-5xl md:text-6xl font-black text-blue-900 mt-4">
                Padrón General
            </h1>

            <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
                Consulta oficial del padrón de ex alumnos empadronados.
                Puedes buscar por nombres, apellidos, DNI o filtrar por promoción.
            </p>
            </div>

            {/* ESTADISTICAS */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-900 text-white rounded-3xl p-8 shadow-xl">
                <p className="uppercase tracking-[3px] text-blue-200 text-sm">
                Total empadronados
                </p>

                <h3 className="text-5xl font-black mt-4">
                {empadronados.length}
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
                    Buscar ex alumno
                </label>

                <input
                    type="text"
                    placeholder="Ingrese nombres o apellidos"
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

            {/* TABLA */}
            <div className="overflow-x-auto bg-white rounded-3xl shadow-xl border border-gray-100">
            <table className="w-full">
                <thead className="bg-blue-900 text-white">
                <tr>
                    <th className="px-6 py-4 text-left">N°</th>
                    {/* <th className="px-6 py-4 text-left">DNI</th> */}
                    <th className="px-6 py-4 text-left">
                    Apellidos y nombres
                    </th>
                    <th className="px-6 py-4 text-left">
                    Promoción
                    </th>
                    <th className="px-6 py-4 text-left">
                    Estado
                    </th>
                </tr>
                </thead>

                <tbody>
                    {filtrados.map((item, index) => {
                        const estado = (item.ESTADO || "").trim().toLowerCase();

                        return (
                            <tr key={index} className="border-b hover:bg-gray-50 transition-all">
                                <td className="px-6 py-4 font-medium">{index + 1}</td>

                                <td className="px-6 py-4 font-semibold text-gray-800">
                                {item.APELLIDOS} {item.NOMBRES}
                                </td>

                                <td className="px-6 py-4">{item["PROMOCIÓN"]}</td>
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
                Cargando padrón...
                </div>
            )}

            {!cargando && filtrados.length === 0 && (
                <div className="text-center py-10 text-gray-500">
                No se encontraron registros.
                </div>
            )}
            </div>
        </div>
        
    </section>
  );
};