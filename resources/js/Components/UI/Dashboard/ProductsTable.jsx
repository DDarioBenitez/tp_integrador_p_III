import { FaEdit, FaTrash, FaBoxOpen } from "react-icons/fa";

const ProductsTable = ({
    products,
    onAddClick,
    onDeleteClick,
    onEditClick,
    onViewClick,
}) => {
    const handleRowClick = (e, product) => {
        if (e.target.closest("button")) {
            return; // No abrir modal si el clic fue en un botón
        }
        onViewClick(product);
    };

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
                <h2 className="font-bold text-lg">Gestión de Productos</h2>
                <button
                    onClick={() => onAddClick()}
                    className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 text-sm"
                >
                    <FaEdit /> Añadir Producto
                </button>
            </div>

            <div className="overflow-x-auto max-h-[300px] overflow-y-auto">
                {products.length > 0 ? (
                    <table className="min-w-full h-full mb-6 text-sm text-left">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Categoría</th>
                                <th className="px-4 py-2">Precio</th>
                                <th className="px-4 py-2">Stock</th>
                                <th className="px-4 py-2 md:w-[12rem]">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p) => (
                                <tr
                                    onClick={(e) => handleRowClick(e, p)}
                                    key={p.id}
                                    className="border-b cursor-pointer hover:bg-gray-100"
                                >
                                    <td className="px-4 py-2">{p.nombre}</td>
                                    <td className="px-4 py-2 capitalize">
                                        {p.categoria || "N/A"}
                                    </td>
                                    <td className="px-4 py-2">
                                        €{Number(p.precio || 0).toFixed(2)}
                                    </td>
                                    <td className="px-4 py-2">{p.cantidad}</td>
                                    <td className="px-4 py-2 flex flex-wrap gap-2 md:w-[12rem]">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onEditClick(p);
                                            }}
                                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
                                        >
                                            <FaEdit /> Editar
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onDeleteClick(p.id);
                                            }}
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
                        <FaBoxOpen className="w-10 h-10 mb-2" />
                        <p className="text-sm">No hay productos disponibles</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsTable;
