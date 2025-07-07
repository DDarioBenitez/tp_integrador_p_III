<?php

namespace Database\Seeders;

use App\Models\Pedido;
use App\Models\User;
use Illuminate\Database\Seeder;

class PedidoSeeder extends Seeder
{
    public function run(): void
    {
        $userIds = User::pluck('id')->toArray();

        $pedidos = [];

        for ($i = 0; $i < 10; $i++) {
            $pedidos[] = [
                'user_id' => $userIds[array_rand($userIds)],
                'estado' => ['PENDIENTE', 'COMPLETADO'][array_rand(['PENDIENTE', 'COMPLETADO'])],
                'total' => 0, // Lo calcularemos en PedidoProductoSeeder
                'direccion_entrega' => 'Calle Ejemplo ' . rand(1, 999),
                'telefono_contacto' => '1234567' . rand(10, 99),
                'metodo_pago' => ['tarjeta', 'efectivo'][rand(0, 1)],
                'nombre_destinatario' => 'Destinatario ' . $i,
                'dni_destinatario' => (string) rand(10000000, 99999999),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        Pedido::insert($pedidos);
    }
}
