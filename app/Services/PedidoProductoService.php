<?php
namespace App\Services;

use App\Models\PedidoProducto;

class PedidoProductoService
{
    public function getAll()
    {
        return PedidoProducto::with(['pedido', 'producto'])->get();
    }

    public function getById($id)
    {
        return PedidoProducto::with(['pedido', 'producto'])->findOrFail($id);
    }

    public function create(array $data)
    {
        return PedidoProducto::create($data);
    }

    public function update($id, array $data)
    {
        $pedidoProducto = PedidoProducto::findOrFail($id);
        $pedidoProducto->update($data);
        return $pedidoProducto;
    }

    public function delete($id)
    {
        $pedidoProducto = PedidoProducto::findOrFail($id);
        $pedidoProducto->delete();
        return $pedidoProducto;
    }

    public function getByPedido($pedidoId)
    {
        return PedidoProducto::where('pedido_id', $pedidoId)->get();
    }

    public function getByProducto($productoId)
    {
        return PedidoProducto::where('producto_id', $productoId)->get();
    }
}
