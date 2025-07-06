import { FaFileAlt } from "react-icons/fa";
import InputField from "../components/ui/register/InputField";
import { useState } from "react";

export default function ModalCrearPedidos() {
    const [formData, setFormData] = useState({
        estado: "pendiente",
        total: "",
        direccion_entrega: "",
        telefono_contacto: "",
        metodo_pago: "tarjeta",
        nombre_destinatario: "",
        dni_destinatario: "",
    });

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xl w-full max-w-sm mx-auto">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-600 rounded-xl">
                        <FaFileAlt className="text-white w-5 h-5" />
                    </div>
                </div>

                {/* Título */}
                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                        Crear Pedido
                    </h2>
                    <p className="text-sm text-gray-500">
                        Completá los datos para registrar un nuevo pedido
                    </p>
                </div>

                {/* Formulario */}
                <form className="space-y-4 text-sm">
                    <InputField
                        label="Total"
                        id="total"
                        type="number"
                        placeholder="$0.00"
                        value={formData.total}
                        onChange={(e) =>
                            setFormData({ ...formData, total: e.target.value })
                        }
                    />

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Estado
                        </label>
                        <select
                            value={formData.estado}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    estado: e.target.value,
                                })
                            }
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="pendiente">Pendiente</option>
                            <option value="enviado">Enviado</option>
                            <option value="entregado">Entregado</option>
                            <option value="cancelado">Cancelado</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Método de Pago
                        </label>
                        <select
                            value={formData.metodo_pago}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    metodo_pago: e.target.value,
                                })
                            }
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="tarjeta">Tarjeta</option>
                            <option value="efectivo">Efectivo</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Dirección de Entrega
                        </label>
                        <textarea
                            rows="2"
                            placeholder="Ej: Av. Siempre Viva 123"
                            value={formData.direccion_entrega}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    direccion_entrega: e.target.value,
                                })
                            }
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <InputField
                        label="Teléfono de Contacto"
                        id="telefono"
                        placeholder="Ej: 3704-123456"
                        value={formData.telefono_contacto}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                telefono_contacto: e.target.value,
                            })
                        }
                    />

                    <InputField
                        label="Nombre del Destinatario"
                        id="destinatario"
                        placeholder="Ej: Juan Pérez"
                        value={formData.nombre_destinatario}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                nombre_destinatario: e.target.value,
                            })
                        }
                    />

                    <InputField
                        label="DNI del Destinatario"
                        id="dni"
                        placeholder="Ej: 12345678"
                        value={formData.dni_destinatario}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                dni_destinatario: e.target.value,
                            })
                        }
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Guardar pedido
                    </button>
                </form>
            </div>
        </div>
    );
}
