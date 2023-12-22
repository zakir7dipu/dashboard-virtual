<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Fav icon -->
        <link rel="icon" href="https://virtualistbd.com/uploads/settings/1695028643-icon.png" type="image/png">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/responsive.css') }}">

{{--        <!-- Fonts -->--}}
{{--        <link rel="preconnect" href="https://fonts.bunny.net">--}}
{{--        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />--}}

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
