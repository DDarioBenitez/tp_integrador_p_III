import { useState } from "react";

const ProductFilters = ({ onChange }) => {
    const [filters, setFilters] = useState({
        search: "",
        category: "",
        priceMin: "",
        priceMax: "",
    });

    const categorias = [
        "computadoras",
        "accesorios",
        "monitores",
        "tablets",
        "audio",
        "impresoras",
    ];

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
                placeholder="Buscar por nombre..."
                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.search}
                onChange={handleChange}
            />

            <select
                name="category"
                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.category}
                onChange={handleChange}
            >
                <option value="">Todas las categorías</option>
                {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                        {categoria.slice(0, 1).toUpperCase() +
                            categoria.slice(1).toLowerCase()}
                    </option>
                ))}
            </select>

            <input
                name="priceMin"
                type="number"
                min="0"
                placeholder="Precio mínimo"
                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.priceMin}
                onChange={handleChange}
            />

            <input
                name="priceMax"
                type="number"
                min="0"
                placeholder="Precio máximo"
                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.priceMax}
                onChange={handleChange}
            />
        </div>
    );
};

export default ProductFilters;
