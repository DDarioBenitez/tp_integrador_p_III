<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::insert([
            [
                'name' => 'Juan Pérez',
                'email' => 'juan@example.com',
                'password' => Hash::make('password'),
                'role' => 'USER',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'María García',
                'email' => 'maria@example.com',
                'password' => Hash::make('password'),
                'role' => 'USER',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Carlos López',
                'email' => 'carlos@example.com',
                'password' => Hash::make('password'),
                'role' => 'USER',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Ana Torres',
                'email' => 'ana@example.com',
                'password' => Hash::make('password'),
                'role' => 'USER',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Luis Fernández',
                'email' => 'luis@example.com',
                'password' => Hash::make('password'),
                'role' => 'USER',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Laura Méndez',
                'email' => 'laura@example.com',
                'password' => Hash::make('password'),
                'role' => 'USER',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Pedro Sánchez',
                'email' => 'pedro@example.com',
                'password' => Hash::make('password'),
                'role' => 'USER',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sofía Ramírez',
                'email' => 'sofia@example.com',
                'password' => Hash::make('password'),
                'role' => 'USER',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Diego Castro',
                'email' => 'diego@example.com',
                'password' => Hash::make('password'),
                'role' => 'USER',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Carla Gómez',
                'email' => 'carla@example.com',
                'password' => Hash::make('password'),
                'role' => 'USER',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
