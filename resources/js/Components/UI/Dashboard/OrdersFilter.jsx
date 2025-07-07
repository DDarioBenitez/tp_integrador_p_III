import { useState } from "react";

const OrderFilters = ({ onChange }) => {
    const [filters, setFilters] = useState({
        search: "",
        status: "",
        date: "",
        payment: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updated = { ...filters, [name]: value };
        setFilters(updated);
        onChange(updated);
    };

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-4 gap-2 border-b bg-white rounded shadow">
            <input
                name="search"
                placeholder="Buscar pedido, cliente o email..."
                className="input border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.search}
                onChange={handleChange}
            />
            <select
                name="status"
                className="input border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.status}
                onChange={handleChange}
            >
                <option value="">Todos los estados</option>
                <option value="pendiente">Pendiente</option>
                <option value="procesando">En proceso</option>
                <option value="completado">Completado</option>
                <option value="cancelado">Cancelado</option>
            </select>
            <input
                type="date"
                name="date"
                className="input border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.date}
                onChange={handleChange}
            />
            <select
                name="payment"
                className="input border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.payment}
                onChange={handleChange}
            >
                <option value="">Todos los métodos</option>
                <option value="tarjeta">Tarjeta</option>
                <option value="efectivo">Efectivo</option>
            </select>
        </div>
    );
};

export default OrderFilters;
