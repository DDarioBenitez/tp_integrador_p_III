<?php
namespace App\Services;

use App\Models\Pedido;

class PedidosService
{
    public function getAllPedidos()
    {
        return Pedido::with('productos')->get();
    }

    public function getPedido($id)
    {
        return Pedido::with('productos')->findOrFail($id);
    }

    public function createPedidoConItems(array $data)
    {
        $pedido = Pedido::create([
            'user_id' => $data['user_id'],
            'estado' => $data['estado'],
            'total' => $data['total'],
            'direccion_entrega' => $data['direccion_entrega'],
            'telefono_contacto' => $data['telefono_contacto'],
            'metodo_pago' => $data['metodo_pago'],
            'nombre_destinatario' => $data['nombre_destinatario'],
            'dni_destinatario' => $data['dni_destinatario'],
        ]);

        foreach ($data['items'] as $item) {
            $pedido->productos()->attach($item['producto_id'], [
                'cantidad' => $item['cantidad'],
                'precio' => $item['precio'],
            ]);
        }

        return $pedido;
    }

    public function updatePedidoConItems($id, array $data)
    {
        $pedido = Pedido::findOrFail($id);

        $pedido->update([
            'estado' => $data['estado'],
            'total' => $data['total'],
            'direccion_entrega' => $data['direccion_entrega'],
            'telefono_contacto' => $data['telefono_contacto'],
            'metodo_pago' => $data['metodo_pago'],
            'nombre_destinatario' => $data['nombre_destinatario'],
            'dni_destinatario' => $data['dni_destinatario'],
        ]);

        if (isset($data['items'])) {
            // Limpia ítems anteriores y crea los nuevos
            $pedido->productos()->detach();

            foreach ($data['items'] as $item) {
                $pedido->productos()->attach($item['producto_id'], [
                    'cantidad' => $item['cantidad'],
                    'precio' => $item['precio'],
                ]);
            }
        }

        return $pedido;
    }

    public function deletePedido($id)
    {
        $pedido = Pedido::findOrFail($id);
        $pedido->productos()->detach();
        $pedido->delete();

        return $pedido;
    }

    public function getPedidosByStatus(string $status)
    {
        return Pedido::with('productos')->where('estado', $status)->get();
    }

    public function getPedidosByUserId($userId)
    {
        return Pedido::with('productos')->where('user_id', $userId)->get();
    }

    public function verificarExistenciaPedido($id)
    {
        return Pedido::where('id', $id)->exists();
    }
}
