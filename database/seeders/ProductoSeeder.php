<?php

namespace Database\Seeders;

use App\Models\Producto;
use Illuminate\Database\Seeder;

class ProductoSeeder extends Seeder
{
    public function run(): void
    {
        $productos = [
            [
                'nombre' => 'Laptop Pro 15"',
                'descripcion' => 'Portátil de alto rendimiento con pantalla Retina',
                'precio' => 1299.99,
                'cantidad' => 10,
                'categoria' => 'computadoras',
                'marca' => 'TechBrand',
                'color' => 'Gris',
            ],
            [
                'nombre' => 'Mouse Inalámbrico',
                'descripcion' => 'Mouse ergonómico con batería recargable',
                'precio' => 29.99,
                'cantidad' => 50,
                'categoria' => 'accesorios',
                'marca' => 'Clicky',
                'color' => 'Negro',
            ],
            [
                'nombre' => 'Teclado Mecánico RGB',
                'descripcion' => 'Teclado con retroiluminación y switches azules',
                'precio' => 89.99,
                'cantidad' => 20,
                'categoria' => 'accesorios',
                'marca' => 'KeyMaster',
                'color' => 'Negro',
            ],
            [
                'nombre' => 'Monitor 27"',
                'descripcion' => 'Monitor IPS 4K UHD',
                'precio' => 399.99,
                'cantidad' => 15,
                'categoria' => 'monitores',
                'marca' => 'ViewTop',
                'color' => 'Negro',
            ],
            [
                'nombre' => 'Tablet 10"',
                'descripcion' => 'Tablet con 128GB de almacenamiento',
                'precio' => 299.99,
                'cantidad' => 25,
                'categoria' => 'tablets',
                'marca' => 'TabMaster',
                'color' => 'Plateado',
            ],
            [
                'nombre' => 'Auriculares Bluetooth',
                'descripcion' => 'Auriculares con cancelación de ruido',
                'precio' => 149.99,
                'cantidad' => 30,
                'categoria' => 'audio',
                'marca' => 'SoundPro',
                'color' => 'Blanco',
            ],
            [
                'nombre' => 'Impresora Multifunción',
                'descripcion' => 'Impresora con escáner y wifi',
                'precio' => 199.99,
                'cantidad' => 12,
                'categoria' => 'impresoras',
                'marca' => 'PrintX',
                'color' => 'Blanco',
            ],
        ];

        foreach ($productos as &$p) {
            $p['created_at'] = now();
            $p['updated_at'] = now();
        }

        Producto::insert($productos);
    }
}
