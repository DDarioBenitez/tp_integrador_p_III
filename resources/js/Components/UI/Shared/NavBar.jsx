import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-white shadow">
            <div className="max-w-screen mx-8 px-4 h-16 flex justify-between items-center">
                <h1 className="text-base sm:text-xl font-bold text-gray-800">
                    Gestión de Productos y Pedidos
                </h1>
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center space-x-2"
                    >
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                            JP
                        </div>
                        <span className="hidden sm:inline">Juan Pérez</span>
                        <i className="fas fa-chevron-down text-sm"></i>
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow z-50">
                            <div className="px-4 py-2 border-b">
                                <p className="text-sm font-medium text-gray-900">
                                    Juan Pérez
                                </p>
                                <p className="text-sm text-gray-500">
                                    juan@ejemplo.com
                                </p>
                            </div>
                            <button
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => Inertia.post("/logout")}
                            >
                                <i className="fas fa-sign-out-alt mr-2"></i>{" "}
                                Cerrar sesión
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
