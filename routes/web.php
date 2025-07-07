<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\PedidosController;
use App\Http\Controllers\ProductosController;

/*
|--------------------------------------------------------------------------
| Rutas públicas (no requieren login)
|--------------------------------------------------------------------------
*/
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/register', [RegisterController::class, 'showRegisterForm'])->name('register');
Route::post('/register', [RegisterController::class, 'register']);

Route::get('/about_us', function () {
    return Inertia::render('AboutUs');
})->name('about_us');
/*
|--------------------------------------------------------------------------
| Rutas protegidas (requieren login)
|--------------------------------------------------------------------------
*/
Route::get('/about', function () {
    return Inertia::render('About');
});

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return Inertia::render('Dashboard', [
            'pedidos' => app(\App\Services\PedidosService::class)->getAllPedidos(),
            'productos' => app(\App\Services\ProductosService::class)->getAllProductos(),
            'usuarios' => \App\Models\User::select('id', 'name', 'email')->get(),
        ]);
    })->name('dashboard');

    // Pedidos
    Route::post('/pedidos', [PedidosController::class, 'createPedido']);
    Route::put('/pedidos/{id}', [PedidosController::class, 'updatePedido']);
    Route::delete('/pedidos/{id}', [PedidosController::class, 'deletePedido']);

    // Productos
    Route::post('/productos', [ProductosController::class, 'createProducto']);
    Route::put('/productos/{id}', [ProductosController::class, 'updateProducto']);
    Route::delete('/productos/{id}', [ProductosController::class, 'deleteProducto']);
});
