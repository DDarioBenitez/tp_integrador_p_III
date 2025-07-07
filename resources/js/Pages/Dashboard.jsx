import { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { FaBox } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import NavBar from "../Components/UI/Shared/NavBar";
import StatsCard from "../Components/UI/Dashboard/StatsCard";
import ProductFilters from "../Components/UI/Dashboard/ProductsFilter";
import ProductsTable from "../Components/UI/Dashboard/ProductsTable";
import OrderFilters from "../Components/UI/Dashboard/OrdersFilter";
import OrdersTable from "../Components/UI/Dashboard/OrdersTable";
import ModalPedido from "../Components/ModalPedido";
import ModalProducto from "../Components/ModalProducto";

const Dashboard = ({ productos, pedidos, usuarios }) => {
    const [products, setProducts] = useState(productos);
    const [orders, setOrders] = useState(pedidos);
    const [users, setUsers] = useState(usuarios);

    const [visibleTable, setVisibleTable] = useState(null);
    const [productFilters, setProductFilters] = useState({});
    const [orderFilter, setOrderFilter] = useState({});

    const [showPedidoModal, setShowPedidoModal] = useState(false);
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);
    const [modalPedidoMode, setModalPedidoMode] = useState("create");

    const [showProductoModal, setShowProductoModal] = useState(false);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [modalProductoMode, setModalProductoMode] = useState("create");

    useEffect(() => {
        setProducts(productos);
        setOrders(pedidos);
        setUsers(usuarios);
    }, [productos, pedidos, usuarios]);

    const abrirCrearPedido = () => {
        setPedidoSeleccionado(null);
        setModalPedidoMode("create");
        setShowPedidoModal(true);
    };

    const abrirEditarPedido = (pedido) => {
        setPedidoSeleccionado(pedido);
        setModalPedidoMode("edit");
        setShowPedidoModal(true);
    };

    const abrirVerPedido = (pedido) => {
        setPedidoSeleccionado(pedido);
        setModalPedidoMode("view");
        setShowPedidoModal(true);
    };

    const abrirCrearProducto = () => {
        setProductoSeleccionado(null);
        setModalProductoMode("create");
        setShowProductoModal(true);
    };

    const abrirEditarProducto = (producto) => {
        setProductoSeleccionado(producto);
        setModalProductoMode("edit");
        setShowProductoModal(true);
    };

    const abrirVerProducto = (producto) => {
        setProductoSeleccionado(producto);
        setModalProductoMode("view");
        setShowProductoModal(true);
    };
    const handleDeleteProducto = (id) => {
        if (confirm("¿Estás seguro de eliminar este producto?")) {
            Inertia.delete(`/productos/${id}`, {
                onSuccess: () => {
                    Inertia.reload(); // Esto recarga los props de la página sin refrescar el navegador
                },
            });
        }
    };

    const handleDeletePedido = (id) => {
        if (confirm("¿Estás seguro de eliminar este pedido?")) {
            Inertia.delete(`/pedidos/${id}`, {
                onSuccess: () => {
                    Inertia.reload();
                    console.log("Pedido eliminado exitosamente");
                },
            });
        }
    };

    // FILTRO DE PEDIDOS
    const filteredOrders = orders.filter((o) => {
        const search = (orderFilter.search || "").toLowerCase();
        const status = (orderFilter.status || "").toLowerCase();
        const payment = (orderFilter.payment || "").toLowerCase();

        const matchesSearch =
            !search ||
            o.id.toString().includes(search) ||
            o.nombre_destinatario?.toLowerCase().includes(search);

        const matchesStatus = !status || o.estado?.toLowerCase() === status;

        const matchesPayment =
            !payment || o.metodo_pago?.toLowerCase() === payment;

        const matchesDate =
            !orderFilter.date ||
            (o.created_at &&
                new Date(o.created_at).toISOString().slice(0, 10) ===
                    orderFilter.date);

        return matchesSearch && matchesStatus && matchesPayment && matchesDate;
    });

    // FILTRO DE PRODUCTOS
    const filteredProducts = products.filter((p) => {
        const search = (productFilters.search || "").toLowerCase();
        const category = (productFilters.category || "").toLowerCase();
        const priceMin = parseFloat(productFilters.priceMin || "0");
        const priceMax = parseFloat(productFilters.priceMax || "Infinity");

        const matchesSearch =
            !search || p.nombre?.toLowerCase().includes(search);

        const matchesCategory =
            !category || p.categoria?.toLowerCase() === category;

        const matchesPriceMin = isNaN(priceMin) || p.precio >= priceMin;

        const matchesPriceMax = isNaN(priceMax) || p.precio <= priceMax;

        return (
            matchesSearch &&
            matchesCategory &&
            matchesPriceMin &&
            matchesPriceMax
        );
    });

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <NavBar />
            <main className="flex-1 flex flex-col overflow-hidden p-2 sm:p-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 flex-1 overflow-hidden">
                    {/* Stats arriba en mobile */}
                    <aside className="flex flex-col gap-4 lg:order-2">
                        <StatsCard
                            title="Productos"
                            count={products.length}
                            color="blue"
                            onClick={() =>
                                setVisibleTable((prev) =>
                                    prev === "products" ? null : "products"
                                )
                            }
                            icon={<FaBox />}
                        />
                        <StatsCard
                            title="Pedidos"
                            count={orders.length}
                            color="green"
                            onClick={() =>
                                setVisibleTable((prev) =>
                                    prev === "orders" ? null : "orders"
                                )
                            }
                            icon={<IoCart />}
                        />
                    </aside>

                    {/* Tablas */}
                    <div className="lg:col-span-3 flex flex-col gap-4 overflow-hidden">
                        {(visibleTable === null ||
                            visibleTable === "products") && (
                            <div className="flex flex-col flex-1 overflow-hidden bg-white rounded-lg shadow">
                                <ProductFilters onChange={setProductFilters} />
                                <div className="flex-1">
                                    <ProductsTable
                                        products={filteredProducts}
                                        onAddClick={abrirCrearProducto}
                                        onViewClick={abrirVerProducto}
                                        onEditClick={abrirEditarProducto}
                                        onDeleteClick={handleDeleteProducto}
                                    />
                                </div>
                            </div>
                        )}

                        {(visibleTable === null ||
                            visibleTable === "orders") && (
                            <div className="flex flex-col flex-1 overflow-hidden bg-white rounded-lg shadow">
                                <OrderFilters onChange={setOrderFilter} />
                                <div className="flex-1">
                                    <OrdersTable
                                        orders={filteredOrders}
                                        onAddClick={abrirCrearPedido}
                                        onViewClick={abrirVerPedido}
                                        onEditClick={abrirEditarPedido}
                                        onDeleteClick={handleDeletePedido}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {showPedidoModal && (
                <ModalPedido
                    pedido={pedidoSeleccionado}
                    mode={modalPedidoMode}
                    onClose={() => setShowPedidoModal(false)}
                    productos={products}
                    usuarios={users}
                />
            )}

            {showProductoModal && (
                <ModalProducto
                    producto={productoSeleccionado}
                    mode={modalProductoMode}
                    onClose={() => setShowProductoModal(false)}
                />
            )}
        </div>
    );
};

export default Dashboard;
