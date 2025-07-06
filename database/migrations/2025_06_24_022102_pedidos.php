<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('estado')->default('PENDIENTE'); // pendiente, enviado, entregado, cancelado
            $table->decimal('total', 10, 2);
            $table->text('direccion_entrega')->nullable();
            $table->string('telefono_contacto')->nullable();
            $table->string('metodo_pago')->default('TARJETA'); // tarjeta, efectivo
            $table->string('nombre_destinatario')->nullable();
            $table->string('dni_destinatario')->nullable();
            $table->timestamps();
            $table->softDeletes(); // Agrega soporte para soft deletes
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pedidos');
    }
};
