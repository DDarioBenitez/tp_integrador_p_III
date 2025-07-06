<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $fillable = [
        'estado',
        'total',
        'direccion_entrega',
        'telefono_contacto',
        'metodo_pago',
        'nombre_destinatario',
        'dni_destinatario',
    ];

    protected $casts = [
        'total' => 'decimal:2',
    ];

    public function pedidoProductos()
    {
        return $this->hasMany(PedidoProducto::class);
    }

    public function productos()
    {
        return $this->belongsToMany(Producto::class, 'pedido_productos')
            ->withPivot(['cantidad', 'precio'])
            ->withTimestamps();
    }
}