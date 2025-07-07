# Etapa de build
FROM node:18 AS node-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY resources/ resources/
COPY webpack.mix.js ./
RUN npm run build

# Etapa de PHP
FROM php:8.2-fpm

# Instala dependencias de PHP
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    zip \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install pdo_mysql zip mbstring exif pcntl bcmath gd

# Instala Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY --from=node-build /app /app
COPY . /app

RUN composer install --no-interaction --prefer-dist --optimize-autoloader

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8080"]
