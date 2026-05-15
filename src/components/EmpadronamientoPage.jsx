import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";

export const EmpadronamientoPage = () => {
  const [form, setForm] = useState({
    dni: "",
    apellidos: "",
    nombres: "",
    promocion: "",
  });

  const [enviando, setEnviando] = useState(false);

  const [modal, setModal] = useState({
    mostrar: false,
    tipo: "",
    titulo: "",
    mensaje: "",
  });

  const URL_SCRIPT =
    "https://script.google.com/macros/s/AKfycbzqSG3uxZ39-DZqeLMZt_JdLKorwlCfVYWIihXTy5Q4TKrjnyBVd3bWnm6C-d3NauQJ/exec";

  const cerrarModal = () => {
    setModal({
      mostrar: false,
      tipo: "",
      titulo: "",
      mensaje: "",
    });
  };

  const mostrarModal = (tipo, titulo, mensaje) => {
    setModal({
      mostrar: true,
      tipo,
      titulo,
      mensaje,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dni") {
      const soloNumeros = value.replace(/\D/g, "");

      setForm({
        ...form,
        dni: soloNumeros,
      });

      return;
    }

    setForm({
      ...form,
      [name]: value.toUpperCase(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.dni.length !== 8) {
      mostrarModal(
        "error",
        "DNI inválido",
        "El DNI debe tener exactamente 8 dígitos."
      );
      return;
    }

    setEnviando(true);

    try {
      const respuesta = await fetch(URL_SCRIPT, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          dni: form.dni,
          apellidos: form.apellidos,
          nombres: form.nombres,
          promocion: form.promocion,
          estado: "PENDIENTE",
        }),
      });

      const data = await respuesta.json();

      console.log("Respuesta Apps Script:", data);

      if (data.result === "success" || data.ok === true) {
        mostrarModal(
          "success",
          "Registro exitoso",
          "El empadronamiento fue registrado correctamente."
        );

        setForm({
          dni: "",
          apellidos: "",
          nombres: "",
          promocion: "",
        });
      } else if (data.result === "duplicado" || data.mensaje === "DNI YA REGISTRADO") {
        mostrarModal(
          "warning",
          "DNI ya registrado",
          "Este DNI ya se encuentra registrado en el padrón."
        );
      } else {
        mostrarModal(
          "error",
          "No se pudo registrar",
          data.message || data.error || "Ocurrió un error inesperado."
        );
      }
    } catch (error) {
      console.log("Error:", error);

      mostrarModal(
        "error",
        "Error de conexión",
        "No se pudo conectar con el formulario. Intente nuevamente."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <LayoutPrincipal>
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[4px] text-cyan-200 font-semibold">
            Registro oficial
          </p>

          <h1 className="text-4xl md:text-5xl font-black mt-4">
            Empadronamiento Bolognesiano
          </h1>

          <p className="text-blue-100 mt-5">
            Complete sus datos para formar parte del registro oficial de ex alumnos.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 bg-white text-blue-900 px-6 py-3 rounded-2xl font-bold hover:bg-blue-50"
          >
            ← Volver al inicio
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-2xl font-black text-blue-900 mb-8">
            Formulario de inscripción
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div>
              <label className="font-bold text-gray-700">DNI</label>
              <input
                type="text"
                name="dni"
                maxLength={8}
                value={form.dni}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 rounded-xl border focus:outline-none focus:border-cyan-600"
                placeholder="Ingrese DNI"
              />
            </div>

            <div>
              <label className="font-bold text-gray-700">Apellidos</label>
              <input
                type="text"
                name="apellidos"
                value={form.apellidos}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 rounded-xl border focus:outline-none focus:border-cyan-600"
                placeholder="Ingrese apellidos"
              />
            </div>

            <div>
              <label className="font-bold text-gray-700">Nombres</label>
              <input
                type="text"
                name="nombres"
                value={form.nombres}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 rounded-xl border focus:outline-none focus:border-cyan-600"
                placeholder="Ingrese nombres"
              />
            </div>

            <div>
              <label className="font-bold text-gray-700">Promoción</label>
              <input
                type="number"
                name="promocion"
                value={form.promocion}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 rounded-xl border focus:outline-none focus:border-cyan-600"
                placeholder="Ejemplo: 2007"
              />
            </div>

            <button
              type="submit"
              disabled={enviando}
              className={`py-4 rounded-2xl font-black text-white transition-all ${
                enviando
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-900 hover:bg-cyan-700"
              }`}
            >
              {enviando ? "Registrando..." : "Registrar empadronamiento"}
            </button>
          </form>
        </div>
      </section>

      {modal.mostrar && (
        <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">
            <div
              className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-5 ${
                modal.tipo === "success"
                  ? "bg-green-100 text-green-700"
                  : modal.tipo === "warning"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {modal.tipo === "success"
                ? "✓"
                : modal.tipo === "warning"
                ? "!"
                : "×"}
            </div>

            <h3 className="text-2xl font-black text-blue-900">
              {modal.titulo}
            </h3>

            <p className="text-gray-600 mt-3 leading-relaxed">
              {modal.mensaje}
            </p>

            <button
              onClick={cerrarModal}
              className={`mt-7 w-full py-3 rounded-2xl text-white font-bold transition-all ${
                modal.tipo === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : modal.tipo === "warning"
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </LayoutPrincipal>
  );
};