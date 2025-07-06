<?php

namespace App\Enums;

enum PedidoStatus: string
{
    case PENDIENTE = 'PENDIENTE';
    case ENVIADO = 'ENVIADO';
    case ENTREGADO = 'ENTREGADO';
    case CANCELADO = 'CANCELADO';
}