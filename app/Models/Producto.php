<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Producto extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'nombre',
        'descripcion',
        'precio',
        'cantidad',
        'categoria',
        'marca',
        'color',
        'imagen',
    ];

    protected $casts = [
        'precio' => 'decimal:2',
        'cantidad' => 'integer',
    ];

    // Relación: un producto puede estar en muchos pedido_productos
    public function pedidoProductos()
    {
        return $this->hasMany(PedidoProducto::class);
    }

    // Relación: un producto pertenece a muchos pedidos (por tabla intermedia)
    public function pedidos()
    {
        return $this->belongsToMany(Pedido::class, 'pedido_productos')
            ->withPivot(['cantidad', 'precio'])
            ->withTimestamps();
    }
}