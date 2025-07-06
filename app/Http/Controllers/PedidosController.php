<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PedidosService;

class PedidosController extends Controller
{
    private PedidosService $pedidosService;

    public function __construct(PedidosService $pedidosService)
    {
        $this->pedidosService = $pedidosService;
    }

    public function createPedido(Request $request)
    {
        $validated = $request->validate([
            'user_id' => ['required', 'integer'],
            'estado' => ['required', 'string'],
            'total' => ['required', 'numeric', 'min:0'],
            'direccion_entrega' => ['required', 'string'],
            'telefono_contacto' => ['required', 'string'],
            'metodo_pago' => ['required', 'string'],
            'nombre_destinatario' => ['required', 'string'],
            'dni_destinatario' => ['required', 'string'],
            'items' => ['required', 'array'],
            'items.*.producto_id' => ['required', 'integer', 'exists:productos,id'],
            'items.*.cantidad' => ['required', 'integer', 'min:1'],
            'items.*.precio' => ['required', 'numeric', 'min:0'],
        ]);

        $pedido = $this->pedidosService->createPedidoConItems($validated);

        return response()->json([
            'pedido' => $pedido->load('productos'),
            'success' => 'Pedido creado'
        ]);
    }

    public function updatePedido(Request $request, $id)
    {
        $validated = $request->validate([
            'estado' => ['required', 'string'],
            'total' => ['required', 'numeric', 'min:0'],
            'direccion_entrega' => ['required', 'string'],
            'telefono_contacto' => ['required', 'string'],
            'metodo_pago' => ['required', 'string'],
            'nombre_destinatario' => ['required', 'string'],
            'dni_destinatario' => ['required', 'string'],
            'items' => ['sometimes', 'array'],
            'items.*.producto_id' => ['required_with:items', 'integer', 'exists:productos,id'],
            'items.*.cantidad' => ['required_with:items', 'integer', 'min:1'],
            'items.*.precio' => ['required_with:items', 'numeric', 'min:0'],
        ]);

        $pedido = $this->pedidosService->updatePedidoConItems($id, $validated);

        return response()->json([
            'pedido' => $pedido->load('productos'),
            'success' => 'Pedido actualizado'
        ]);
    }

    public function deletePedido($id)
    {
        $this->pedidosService->deletePedido($id);

        return response()->json([
            'id' => $id,
            'success' => 'Pedido eliminado'
        ]);
    }
}
