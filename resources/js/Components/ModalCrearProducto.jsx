import { FaBox } from "react-icons/fa";
import InputField from "../components/ui/register/InputField";
export default function ModalProducto() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xl w-full max-w-sm mx-auto">
                {/* Logo */}
                <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-600 rounded-xl">
                        <FaBox className="text-white w-5 h-5" />
                    </div>
                </div>

                {/* Encabezado */}
                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                        Agregar Producto
                    </h2>
                    <p className="text-sm text-gray-500">
                        Cargar los datos del nuevo producto
                    </p>
                </div>

                {/* Formulario */}
                <form className="space-y-4 text-sm">
                    <InputField
                        label="Nombre"
                        id="nombre"
                        placeholder="Ej: Teclado mecánico"
                    />
                    <InputField
                        label="Precio"
                        id="precio"
                        type="number"
                        placeholder="$0.00"
                    />
                    <InputField
                        label="Cantidad"
                        id="cantidad"
                        type="number"
                        placeholder="0"
                    />
                    <InputField
                        label="Categoría"
                        id="categoria"
                        placeholder="Ej: Electrónica"
                    />
                    <InputField
                        label="Marca"
                        id="marca"
                        placeholder="Ej: Logitech"
                    />
                    <InputField
                        label="Color"
                        id="color"
                        placeholder="Ej: Negro"
                    />

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Guardar producto
                    </button>
                </form>
            </div>
        </div>
    );
}
