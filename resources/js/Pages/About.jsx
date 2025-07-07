import React from "react";
import NavBar from "../Components/UI/Shared/NavBar";

export default function About() {
    const integrantes = [
        {
            nombre: "Bruno González",
            rol: "Desarrollador Frontend",
            descripcion:
                "Encargado de las vistas del sistema, estilos, etc.",
        },
        {
            nombre: "Belén Rodríguez",
            rol: "Diseñadora UX/UI",
            descripcion:
                "Responsable de la interfaz de usuario, experiencia de navegación y estilo visual.",
        },
        {
            nombre: "Darío Benitez",
            rol: "Desarrollador Full Stack",
            descripcion:
                "Implementó los componentes en React y la integración con Inertia.js.",
        },
        {
            nombre: "Martina López",
            rol: "Tester / QA",
            descripcion:
                "Se encargó de probar el sistema, detectar errores y asegurar su estabilidad.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar />
            <main className="max-w-4xl mx-auto py-12 px-6">
                <h1 className="text-4xl font-bold text-center mb-10">
                    Sobre Nosotros
                </h1>
                <p className="text-center text-gray-600 mb-12">
                    Somos un equipo de estudiantes apasionados por el desarrollo
                    web. Este proyecto fue construido con Laravel, Inertia y
                    React para brindar una solución moderna de gestión de
                    pedidos y productos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {integrantes.map((persona, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                        >
                            <h2 className="text-xl font-semibold text-blue-700">
                                {persona.nombre}
                            </h2>
                            <p className="text-sm text-gray-500 mb-2">
                                {persona.rol}
                            </p>
                            <p className="text-gray-700">{persona.descripcion}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
