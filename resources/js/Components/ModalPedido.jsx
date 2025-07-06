import { FaFileAlt, FaTimes } from "react-icons/fa";
import { Inertia } from "@inertiajs/inertia";
import { useState, useEffect } from "react";

const ModalPedido = ({
    onClose,
    pedido = null,
    mode = "create",
    productos = [],
    usuarios = [],
}) => {
    const [formData, setFormData] = useState({
        user_id: "",
        estado: "pendiente",
        total: "",
        direccion_entrega: "",
        telefono_contacto: "",
        metodo_pago: "tarjeta",
        nombre_destinatario: "",
        dni_destinatario: "",
        items: [],
    });

    const estados = ["pendiente", "completado", "cancelado"];
    const metodosPago = ["tarjeta", "efectivo"];

    useEffect(() => {
        if (pedido) {
            setFormData({
                user_id: pedido.user_id || "",
                estado: pedido.estado || "pendiente",
                total: pedido.total || "",
                direccion_entrega: pedido.direccion_entrega || "",
                telefono_contacto: pedido.telefono_contacto || "",
                metodo_pago: pedido.metodo_pago || "tarjeta",
                nombre_destinatario: pedido.nombre_destinatario || "",
                dni_destinatario: pedido.dni_destinatario || "",
                items:
                    pedido.productos?.map((p) => ({
                        producto_id: p.id,
                        cantidad: p.pivot.cantidad,
                        precio: p.pivot.precio,
                    })) || [],
            });
        }
    }, [pedido]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleItemChange = (index, field, value) => {
        const newItems = [...formData.items];
        newItems[index][field] = value;
        setFormData((prev) => ({ ...prev, items: newItems }));
        recalculateTotal(newItems);
    };

    const addItem = () => {
        setFormData((prev) => ({
            ...prev,
            items: [...prev.items, { producto_id: "", cantidad: 1, precio: 0 }],
        }));
    };

    const removeItem = (index) => {
        const newItems = formData.items.filter((_, i) => i !== index);
        setFormData((prev) => ({ ...prev, items: newItems }));
        recalculateTotal(newItems);
    };

    const recalculateTotal = (items) => {
        const total = items.reduce(
            (acc, item) => acc + item.cantidad * item.precio,
            0
        );
        setFormData((prev) => ({ ...prev, total: total.toFixed(2) }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === "create") {
            Inertia.post("/pedidos", formData, {
                onSuccess: () => {
                    onClose();
                    Inertia.reload();
                },
            });
        } else if (mode === "edit") {
            Inertia.put(`/pedidos/${pedido.id}`, formData, {
                onSuccess: () => {
                    onClose();
                    Inertia.reload();
                },
            });
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xl w-full max-w-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 text-gray-500"
                >
                    <FaTimes className="w-4 h-4" />
                </button>

                <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-600 rounded-xl">
                        <FaFileAlt className="text-white w-5 h-5" />
                    </div>
                </div>

                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                        {mode === "create"
                            ? "Crear Pedido"
                            : mode === "edit"
                            ? "Editar Pedido"
                            : "Ver Pedido"}
                    </h2>
                    <p className="text-sm text-gray-500">
                        {mode === "view"
                            ? "Detalles del pedido"
                            : "Completa los datos del pedido"}
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 text-sm max-h-[70vh] overflow-y-auto"
                >
                    <div>
                        <label className="block font-medium mb-1">
                            Usuario
                        </label>
                        <select
                            name="user_id"
                            value={formData.user_id}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            className="w-full border rounded-lg px-3 py-2"
                        >
                            <option value="">Selecciona un usuario</option>
                            {usuarios.map((u) => (
                                <option key={u.id} value={u.id}>
                                    {u.name} ({u.email})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Estado</label>
                        <select
                            name="estado"
                            value={formData.estado}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            className="w-full border rounded-lg px-3 py-2"
                        >
                            {estados.map((estado) => (
                                <option key={estado} value={estado}>
                                    {estado}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">
                            Método de Pago
                        </label>
                        <select
                            name="metodo_pago"
                            value={formData.metodo_pago}
                            onChange={handleChange}
                            disabled={mode === "view"}
                            className="w-full border rounded-lg px-3 py-2"
                        >
                            {metodosPago.map((metodo) => (
                                <option key={metodo} value={metodo}>
                                    {metodo}
                                </option>
                            ))}
                        </select>
                    </div>

                    <input
                        name="total"
                        value={formData.total}
                        readOnly
                        className="w-full bg-gray-100 px-3 py-2 rounded-lg"
                    />

                    <input
                        name="direccion_entrega"
                        placeholder="Dirección"
                        value={formData.direccion_entrega}
                        onChange={handleChange}
                        disabled={mode === "view"}
                        className="w-full border rounded-lg px-3 py-2"
                    />

                    <input
                        name="telefono_contacto"
                        placeholder="Teléfono"
                        value={formData.telefono_contacto}
                        onChange={handleChange}
                        disabled={mode === "view"}
                        className="w-full border rounded-lg px-3 py-2"
                    />

                    <input
                        name="nombre_destinatario"
                        placeholder="Nombre Destinatario"
                        value={formData.nombre_destinatario}
                        onChange={handleChange}
                        disabled={mode === "view"}
                        className="w-full border rounded-lg px-3 py-2"
                    />

                    <input
                        name="dni_destinatario"
                        placeholder="DNI"
                        value={formData.dni_destinatario}
                        onChange={handleChange}
                        disabled={mode === "view"}
                        className="w-full border rounded-lg px-3 py-2"
                    />

                    <div className="space-y-2">
                        {formData.items.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-2 items-center"
                            >
                                <select
                                    value={item.producto_id}
                                    disabled={mode === "view"}
                                    onChange={(e) => {
                                        const producto = productos.find(
                                            (p) =>
                                                p.id ===
                                                parseInt(e.target.value)
                                        );
                                        handleItemChange(
                                            index,
                                            "producto_id",
                                            e.target.value
                                        );
                                        handleItemChange(
                                            index,
                                            "precio",
                                            producto ? producto.precio : 0
                                        );
                                    }}
                                    className="flex-1 border rounded px-2 py-1"
                                >
                                    <option value="">
                                        Selecciona producto
                                    </option>
                                    {productos.map((p) => (
                                        <option key={p.id} value={p.id}>
                                            {p.nombre}
                                        </option>
                                    ))}
                                </select>

                                <input
                                    type="number"
                                    value={item.cantidad}
                                    min="1"
                                    disabled={mode === "view"}
                                    onChange={(e) =>
                                        handleItemChange(
                                            index,
                                            "cantidad",
                                            parseInt(e.target.value)
                                        )
                                    }
                                    className="w-20 border rounded px-2 py-1"
                                />

                                <button
                                    type="button"
                                    onClick={() => removeItem(index)}
                                    disabled={mode === "view"}
                                    className={`text-red-500 ${
                                        mode === "view"
                                            ? "opacity-50 cursor-not-allowed"
                                            : ""
                                    }`}
                                >
                                    X
                                </button>
                            </div>
                        ))}
                        {mode !== "view" && (
                            <button
                                type="button"
                                onClick={addItem}
                                className="text-blue-600 hover:underline text-sm"
                            >
                                + Agregar producto
                            </button>
                        )}
                    </div>

                    {mode !== "view" && (
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg"
                        >
                            {mode === "create"
                                ? "Guardar Pedido"
                                : "Actualizar Pedido"}
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full border mt-2 py-2 rounded-lg"
                    >
                        Cerrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalPedido;
