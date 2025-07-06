<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ProductosService;

class ProductosController extends Controller
{
    private ProductosService $productosService;

    public function __construct(ProductosService $productosService)
    {
        $this->productosService = $productosService;
    }

    public function createProducto(Request $request)
    {
        $validated = $request->validate([
            'nombre' => ['required', 'string', 'max:255'],
            'descripcion' => ['nullable', 'string'],
            'precio' => ['required', 'numeric', 'min:0'],
            'cantidad' => ['required', 'integer', 'min:0'],
            'categoria' => ['nullable', 'string', 'max:255'],
            'marca' => ['nullable', 'string', 'max:255'],
            'color' => ['nullable', 'string', 'max:255'],
            'imagen' => ['nullable', 'string', 'max:255'],
        ]);

        $producto = $this->productosService->createProducto($validated);

        return response()->json([
            'producto' => $producto,
            'success' => 'Producto creado'
        ]);
    }

    public function deleteProducto($id)
    {
        $this->productosService->deleteProducto($id);

        return response()->json([
            'id' => $id,
            'success' => 'Producto eliminado'
        ]);
    }

    public function updateProducto(Request $request, $id)
    {
        $validated = $request->validate([
            'nombre' => ['required', 'string', 'max:255'],
            'descripcion' => ['nullable', 'string'],
            'precio' => ['required', 'numeric', 'min:0'],
            'cantidad' => ['required', 'integer', 'min:0'],
            'categoria' => ['nullable', 'string', 'max:255'],
            'marca' => ['nullable', 'string', 'max:255'],
            'color' => ['nullable', 'string', 'max:255'],
            'imagen' => ['nullable', 'string', 'max:255'],
        ]);

        $producto = $this->productosService->updateProducto($id, $validated);

        return response()->json([
            'producto' => $producto,
            'success' => 'Producto actualizado'
        ]);
    }
}
