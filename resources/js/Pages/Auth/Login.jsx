import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { FaBox } from "react-icons/fa";

export default function Login({ errors }) {
    const [values, setValues] = useState({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/login", values);
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-primaryBg">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200 space-y-6">
                <div className="flex justify-center">
                    <div className="p-4 bg-primary rounded-xl mb-6">
                        <FaBox className="h-6 w-6 text-white mb-0" />
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Bienvenido</h1>
                    <p className="text-slate-400 mb-2">
                        Ingresa tu email para continuar
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                >
                    <label className="space-y-1">
                        <span className="text-sm font-medium text-gray-700">
                            Email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Ingresa tu email"
                            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors?.email && (
                            <span className="text-red-500 text-sm">
                                {errors.email}
                            </span>
                        )}
                    </label>

                    <label className="space-y-1">
                        <span className="text-sm font-medium text-gray-700">
                            Contraseña
                        </span>
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Ingresa tu contraseña"
                            className="w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors?.password && (
                            <span className="text-red-500 text-sm">
                                {errors.password}
                            </span>
                        )}
                    </label>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={values.remember}
                                onChange={handleChange}
                                className="form-checkbox text-blue-600"
                            />
                            <span className="text-sm text-gray-700">
                                Recuérdame
                            </span>
                        </label>
                        <a
                            href="/forgot-password"
                            className="text-blue-600 hover:underline text-sm"
                        >
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                    >
                        Ingresar
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        ¿No tienes una cuenta?{" "}
                        <a
                            href="/register"
                            className="text-blue-600 hover:underline"
                        >
                            Regístrate
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
