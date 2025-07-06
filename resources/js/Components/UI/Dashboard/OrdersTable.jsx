import { FaEdit, FaTrash, FaClipboardList } from "react-icons/fa";

const OrdersTable = ({
    orders,
    onEditClick,
    onDeleteClick,
    onViewClick,
    onAddClick,
}) => {
    const handleRowClick = (e, order) => {
        // Si el click fue sobre un botón, no abrir el modal de ver
        if (e.target.closest("button")) {
            return;
        }
        onViewClick(order);
    };

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
                <h2 className="font-bold text-lg">Gestión de Pedidos</h2>
                <button
                    onClick={() => onAddClick()}
                    className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 text-sm"
                >
                    <FaEdit /> Añadir Pedido
                </button>
            </div>

            <div className="overflow-x-auto max-h-[320px] overflow-y-auto">
                {orders.length > 0 ? (
                    <table className="min-w-full h-full mb-8 text-sm text-left">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2"># Pedido</th>
                                <th className="px-4 py-2">Total</th>
                                <th className="px-4 py-2">Estado</th>
                                <th className="px-4 py-2">Pago</th>
                                <th className="px-4 py-2 md:w-[12rem]">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((o) => (
                                <tr
                                    key={o.id}
                                    className="border-b cursor-pointer hover:bg-gray-100"
                                    onClick={(e) => handleRowClick(e, o)}
                                >
                                    <td className="px-4 py-2">{o.id}</td>
                                    <td className="px-4 py-2">
                                        €{Number(o.total) || o.total.toFixed(2)}
                                    </td>
                                    <td className="px-4 py-2 capitalize">
                                        {o.estado}
                                    </td>
                                    <td className="px-4 py-2 capitalize">
                                        {o.metodo_pago}
                                    </td>
                                    <td className="px-4 py-2 flex flex-wrap gap-2 md:w-[12rem]">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onEditClick(o);
                                            }}
                                            className="flex items-center gap-1 text-green-600 hover:text-green-800"
                                        >
                                            <FaEdit /> Editar
                                        </button>
                                        <button
                                            onClick={() => onDeleteClick(o.id)}
                                            className="flex items-center gap-1 text-red-600 hover:text-red-800"
                                        >
                                            <FaTrash /> Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
                        <FaClipboardList className="w-10 h-10 mb-2" />
                        <p className="text-sm">No hay pedidos disponibles</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrdersTable;
