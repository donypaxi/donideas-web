import { useEffect, useState } from "react";

export const CuentaRegresiva = () => {
  const fechaCampeonato = new Date("2026-07-12T07:00:00").getTime();

  const calcularTiempo = () => {
    const diferencia = fechaCampeonato - new Date().getTime();

    if (diferencia <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    return {
      dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((diferencia / (1000 * 60)) % 60),
      segundos: Math.floor((diferencia / 1000) % 60),
    };
  };

  const [tiempo, setTiempo] = useState(calcularTiempo());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const items = [
    { label: "Días", value: tiempo.dias },
    { label: "Horas", value: tiempo.horas },
    { label: "Minutos", value: tiempo.minutos },
    { label: "Segundos", value: tiempo.segundos },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-800 py-24 px-6 text-white">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-[3px] text-cyan-100">
          🏆 Olimpiadas de ex alumnos bolognesianos 2026
        </span>

        <h2 className="text-4xl md:text-6xl font-black mt-6 leading-tight">
          ¡Faltan pocos días!
        </h2>

        <p className="mt-4 text-lg md:text-xl text-blue-100">
          Domingo 12 de julio · 7:30 a. m.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {items.map((item) => (
            <div
              key={item.label}
              className="group bg-white/15 backdrop-blur-xl border border-white/20 rounded-[2rem] p-6 shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-black text-white drop-shadow-lg">
                {String(item.value).padStart(2, "0")}
              </div>

              <div className="w-12 h-1 bg-cyan-300 rounded-full mx-auto my-4 group-hover:w-20 transition-all"></div>

              <p className="uppercase tracking-[4px] text-xs md:text-sm text-cyan-100 font-bold">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-blue-100 font-medium">
          Prepárate para vivir una jornada llena de deporte, unión y entusiasmo.
        </p>
      </div>
    </section>
  );
};