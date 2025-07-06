import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { FaBox } from "react-icons/fa";
import InputField from "../../Components/UI/Shared/InputField";

export default function Register({ errors }) {
    const [values, setValues] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
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
        Inertia.post("/register", values);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full m-8 md:m-0 md:max-w-md">
                <div className="flex justify-center">
                    <div className="p-4 bg-primary rounded-xl mb-6">
                        <FaBox className="h-6 w-6 text-white mb-0" />
                    </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 text-center">
                    Crear Cuenta
                </h1>
                <p className="text-sm text-gray-500 mt-1 mb-6 text-center">
                    Únete a nosotros para gestionar tus negocios
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField
                            label="Nombre"
                            id="name"
                            name="name"
                            placeholder="Ingrese su nombre"
                            value={values.name}
                            onChange={handleChange}
                            error={errors?.name}
                        />
                        <InputField
                            label="Apellido"
                            id="lastname"
                            name="lastname"
                            placeholder="Ingrese su apellido"
                            value={values.lastname}
                            onChange={handleChange}
                            error={errors?.lastname}
                        />
                    </div>
                    <InputField
                        label="Email"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Ingrese su email"
                        value={values.email}
                        onChange={handleChange}
                        error={errors?.email}
                    />
                    <InputField
                        label="Contraseña"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Crear contraseña"
                        value={values.password}
                        onChange={handleChange}
                        error={errors?.password}
                    />
                    <InputField
                        label="Confirma contraseña"
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        placeholder="Repita la contraseña"
                        value={values.password_confirmation}
                        onChange={handleChange}
                        error={errors?.password_confirmation}
                    />

                    <div className="pt-2">
                        <label className="flex items-start gap-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={values.terms}
                                onChange={handleChange}
                                className="mt-1"
                            />
                            <span>
                                Acepto los{" "}
                                <a href="#" className="text-blue-600 underline">
                                    Términos
                                </a>
                            </span>
                        </label>
                        {errors?.terms && (
                            <span className="text-red-500 text-sm">
                                {errors.terms}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
                    >
                        Crear cuenta
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                    ¿Ya tienes una cuenta?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Inicia sesión
                    </a>
                </p>
            </div>
        </div>
    );
}
