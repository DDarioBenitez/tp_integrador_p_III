<?php

namespace App\Enums;

enum PedidoMetodoPago: string
{
    case TARJETA = 'TARJETA';
    case EFECTIVO = 'EFECTIVO';
}