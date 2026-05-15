const fechasImportantes = [
  {
    fecha: "12 Julio",
    titulo: "XIV Olimpiadas Ex-Alumnos Bolognesianos 2026",
    descripcion:
      "Celebración oficial por el aniversario de la Institución Educativa Coronel Bolognesi.",
    color: "from-blue-900 to-cyan-700",
  },
  {
    fecha: "15 Julio",
    titulo: "Reunión General de Delegados",
    descripcion:
      "Sesión de coordinación y planificación de actividades institucionales.",
    color: "from-cyan-700 to-cyan-500",
  },
  {
    fecha: "30 Agosto",
    titulo: "Encuentro de Promociones",
    descripcion:
      "Actividad de confraternidad entre promociones bolognesianas.",
    color: "from-gray-900 to-gray-700",
  },
  {
    fecha: "20 Octubre",
    titulo: "Campaña de Empadronamiento",
    descripcion:
      "Actualización y registro oficial de asociados y promociones.",
    color: "from-blue-800 to-indigo-700",
  },
];

export const FechasImportantes = () => {
  return (
    <section
      id="fechas"
      className="py-20 bg-gray-50 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* TITULO */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-cyan-700 font-semibold">
            Agenda Institucional
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mt-4">
            Fechas Importantes
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5 leading-relaxed">
            Conoce las actividades, celebraciones y eventos más
            importantes de la Asociación de Ex Alumnos
            Bolognesianos.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* LINEA CENTRAL */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-blue-900 to-cyan-600 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-14">
            {fechasImportantes.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* CIRCULO */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-7 h-7 bg-white border-4 border-cyan-600 rounded-full shadow-lg z-10"></div>

                {/* CARD */}
                <div
                  className={`w-full md:w-[45%] bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
                >
                  {/* HEADER */}
                  <div
                    className={`bg-gradient-to-r ${item.color} p-6 text-white`}
                  >
                    <p className="uppercase text-xs tracking-[3px] text-white/70">
                      Fecha Institucional
                    </p>

                    <h3 className="text-4xl font-black mt-2">
                      {item.fecha}
                    </h3>
                  </div>

                  {/* BODY */}
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-gray-800">
                      {item.titulo}
                    </h4>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                      {item.descripcion}
                    </p>

                    <button className="mt-6 bg-blue-900 hover:bg-cyan-700 transition-all duration-300 text-white px-5 py-3 rounded-2xl font-semibold shadow-md">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BANNER FINAL */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 to-cyan-700 rounded-3xl p-10 text-center text-white shadow-2xl">
          <p className="uppercase tracking-[4px] text-cyan-200 text-sm">
            Participación Institucional
          </p>

          <h3 className="text-4xl font-black mt-4">
            Mantente conectado con tu promoción
          </h3>

          <p className="max-w-3xl mx-auto mt-5 text-blue-100 leading-relaxed">
            Forma parte de las actividades institucionales,
            encuentros y celebraciones que fortalecen la identidad
            y unión de la comunidad bolognesiana.
          </p>

          <button className="mt-8 bg-white text-blue-900 hover:bg-blue-100 transition-all duration-300 px-8 py-4 rounded-2xl font-bold shadow-lg">
            Ver calendario completo
          </button>
        </div>
      </div>
    </section>
  );
};