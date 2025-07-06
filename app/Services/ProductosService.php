<?php
namespace App\Services;

use App\Models\Producto;

class ProductosService
{
    public function getAllProductos()
    {
        return Producto::all();
    }

    public function getProducto($id)
    {
        return Producto::findOrFail($id);
    }

    public function createProducto(array $data)
    {
        return Producto::create($data);
    }

    public function updateProducto($id, array $data)
    {
        $producto = Producto::findOrFail($id);
        $producto->update($data);
        return $producto;
    }

    public function deleteProducto($id)
    {
        $producto = Producto::findOrFail($id);
        $producto->delete();
        return $producto;
    }

    public function getProductosByCategoria($categoria)
    {
        return Producto::where('categoria', $categoria)->get();
    }

    public function getProductosByMarca($marca)
    {
        return Producto::where('marca', $marca)->get();
    }
}
