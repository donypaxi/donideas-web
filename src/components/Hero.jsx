import logoDonIdeas from "../assets/img/logo-donideas.png";
export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* FONDO DECORATIVO */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-20 grid md:grid-cols-2 gap-14 items-center">
        
        {/* TEXTO PRINCIPAL */}
        <div>
            <div className="flex justify-start mb-6">
                <img
                    src={logoDonIdeas}
                    alt="DonIdeas"
                    className="w-full max-w-sm drop-shadow-2xl"
                />
            </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Donde las ideas se vuelven{" "}
            <span className="text-violet-400">sistemas</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
            En DonIdeas transformamos necesidades reales en sistemas web,
            automatizaciones y soluciones inteligentes para instituciones,
            empresas y proyectos en crecimiento.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#proyectos"
              className="px-7 py-4 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-center transition shadow-xl shadow-violet-900/30"
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"
              className="px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold text-center transition"
            >
              Contáctame
            </a>
          </div>
        </div>

        {/* TARJETAS DERECHA */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            <div className="grid gap-4">
              
              <div className="p-5 rounded-2xl bg-white text-slate-900">
                <p className="text-sm text-slate-500">Solución</p>
                <h3 className="text-xl font-black">Sistemas Web</h3>
                <p className="text-slate-600 mt-2">
                  Plataformas modernas para gestionar información, usuarios y reportes.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-violet-600 text-white">
                <p className="text-sm text-violet-200">Automatización</p>
                <h3 className="text-xl font-black">Procesos inteligentes</h3>
                <p className="text-violet-100 mt-2">
                  Menos tareas repetitivas, más orden y mejores decisiones.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/10 border border-white/10">
                  <p className="text-3xl">📊</p>
                  <h4 className="font-bold mt-2">Dashboards</h4>
                  <p className="text-sm text-slate-300 mt-1">
                    Reportes claros.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/10 border border-white/10">
                  <p className="text-3xl">🤖</p>
                  <h4 className="font-bold mt-2">IA aplicada</h4>
                  <p className="text-sm text-slate-300 mt-1">
                    Soluciones útiles.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};