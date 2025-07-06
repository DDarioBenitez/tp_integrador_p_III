import { FaBox } from "react-icons/fa";
import { Inertia } from "@inertiajs/inertia";
import { useEffect, useState } from "react";

export default function ModalProducto({
    onClose,
    producto = null,
    mode = "create",
}) {
    const [formData, setFormData] = useState({
        nombre: "",
        precio: "",
        cantidad: "",
        categoria: "",
        marca: "",
        color: "",
    });

    const categorias = [
        "computadoras",
        "accesorios",
        "monitores",
        "tablets",
        "audio",
        "impresoras",
    ];

    useEffect(() => {
        if (producto) {
            setFormData({
                nombre: producto.nombre || "",
                precio: producto.precio || "",
                cantidad: producto.cantidad || "",
                categoria: producto.categoria || "",
                marca: producto.marca || "",
                color: producto.color || "",
            });
        }
    }, [producto]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === "create") {
            Inertia.post("/productos", formData, {
                onSuccess: () => {
                    Inertia.reload();
                    onClose();
                },
            });
        } else if (mode === "edit") {
            Inertia.put(`/productos/${producto.id}`, formData, {
                onSuccess: () => {
                    Inertia.reload();
                    onClose();
                },
            });
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xl w-full max-w-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>

                <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-600 rounded-xl">
                        <FaBox className="text-white w-5 h-5" />
                    </div>
                </div>

                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                        {mode === "create"
                            ? "Agregar Producto"
                            : mode === "edit"
                            ? "Editar Producto"
                            : "Ver Producto"}
                    </h2>
                    <p className="text-sm text-gray-500">
                        {mode === "view"
                            ? "Detalles del producto"
                            : "Cargar los datos del producto"}
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-sm max-h-[70vh] overflow-y-auto"
                >
                    <div>
                        <label className="block font-medium mb-1">Nombre</label>
                        <input
                            name="nombre"
                            type="text"
                            value={formData.nombre}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            placeholder="Ej: Teclado mecánico"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">
                            Precio (€)
                        </label>
                        <input
                            name="precio"
                            type="number"
                            value={formData.precio}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            placeholder="0.00"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">
                            Cantidad
                        </label>
                        <input
                            name="cantidad"
                            type="number"
                            value={formData.cantidad}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            placeholder="0"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">
                            Categoría
                        </label>
                        <select
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Selecciona una categoría</option>
                            {categorias.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Marca</label>
                        <input
                            name="marca"
                            type="text"
                            value={formData.marca}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            placeholder="Ej: Logitech"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Color</label>
                        <input
                            name="color"
                            type="text"
                            value={formData.color}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            placeholder="Ej: Negro"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {mode !== "view" && (
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            {mode === "create"
                                ? "Guardar Producto"
                                : "Actualizar Producto"}
                        </button>
                    )}

                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full mt-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        Cerrar
                    </button>
                </form>
            </div>
        </div>
    );
}
