<?php
namespace App\Http\Controllers;

use App\Services\PedidosService;
use App\Services\ProductosService;
use Inertia\Inertia;

class DashboardController extends Controller
{
    private PedidosService $pedidosService;
    private ProductosService $productosService;

    public function __construct(PedidosService $pedidosService, ProductosService $productosService)
    {
        $this->pedidosService = $pedidosService;
        $this->productosService = $productosService;
    }

    public function index()
    {
        $pedidos = $this->pedidosService->getAllPedidos();
        $productos = $this->productosService->getAllProductos();

        return Inertia::render('Dashboard', [
            'pedidos' => $pedidos,
            'productos' => $productos,
        ]);
    }
}
