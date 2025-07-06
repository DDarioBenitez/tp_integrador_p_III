<?php

namespace Database\Seeders;

use App\Models\Pedido;
use App\Models\PedidoProducto;
use App\Models\Producto;
use Illuminate\Database\Seeder;

class PedidoProductoSeeder extends Seeder
{
    public function run(): void
    {
        $pedidos = Pedido::all();
        $productos = Producto::all();

        foreach ($pedidos as $pedido) {
            $items = [];
            $total = 0;

            $numItems = rand(1, 3);
            $productosSeleccionados = $productos->random($numItems);

            foreach ($productosSeleccionados as $producto) {
                $cantidad = rand(1, 3);
                $precio = $producto->precio;
                $items[] = [
                    'pedido_id' => $pedido->id,
                    'producto_id' => $producto->id,
                    'cantidad' => $cantidad,
                    'precio' => $precio,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];

                $total += $cantidad * $precio;
            }

            PedidoProducto::insert($items);

            // Actualiza el total del pedido
            $pedido->update(['total' => $total]);
        }
    }
}
