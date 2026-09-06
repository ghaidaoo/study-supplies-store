<!DOCTYPE html>
<html class="light" lang="ar" dir="rtl">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>{{ $product->title }} - StudySpace</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-bright": "#fcf9f2",
                    "background": "#fcf9f2",
                    "error-container": "#ffdad6",
                    "secondary-fixed-dim": "#cbc6bd",
                    "on-primary": "#ffffff",
                    "surface-variant": "#e5e2db",
                    "on-background": "#1c1c18",
                    "inverse-primary": "#afcfb1",
                    "on-secondary-fixed-variant": "#494640",
                    "on-surface-variant": "#424842",
                    "outline": "#737971",
                    "surface-container-highest": "#e5e2db",
                    "on-tertiary": "#ffffff",
                    "on-primary-container": "#435f47",
                    "surface-dim": "#dcdad3",
                    "primary-fixed-dim": "#afcfb1",
                    "outline-variant": "#c2c8c0",
                    "on-error-container": "#93000a",
                    "primary-fixed": "#caebcc",
                    "surface-container-high": "#ebe8e1",
                    "secondary-container": "#e7e2d9",
                    "surface-container": "#f1eee7",
                    "tertiary-fixed": "#e4e2e1",
                    "secondary": "#615e57",
                    "on-tertiary-container": "#595858",
                    "primary-container": "#b8d8ba",
                    "surface-tint": "#49654d",
                    "tertiary": "#5f5e5e",
                    "on-tertiary-fixed": "#1b1c1c",
                    "on-secondary": "#ffffff",
                    "on-primary-fixed-variant": "#314d36",
                    "inverse-surface": "#31312c",
                    "surface-container-low": "#f6f3ec",
                    "on-error": "#ffffff",
                    "inverse-on-surface": "#f3f0e9",
                    "on-secondary-fixed": "#1d1b16",
                    "surface-container-lowest": "#ffffff",
                    "on-surface": "#1c1c18",
                    "primary": "#49654d",
                    "tertiary-fixed-dim": "#c8c6c6",
                    "error": "#ba1a1a",
                    "on-secondary-container": "#67645d",
                    "surface": "#fcf9f2",
                    "secondary-fixed": "#e7e2d9",
                    "on-primary-fixed": "#05210e",
                    "on-tertiary-fixed-variant": "#474747",
                    "tertiary-container": "#d1cfcf"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "base": "8px",
                    "margin-mobile": "16px",
                    "margin-desktop": "40px",
                    "container-max": "1280px",
                    "section-gap": "80px",
                    "gutter": "24px"
            },
            "fontFamily": {
                    "sans": ["Inter", "sans-serif"]
            }
          }
        }
      }
    </script>
    <style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .filled-icon {
             font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-background font-sans min-h-screen flex flex-col antialiased">

<!-- TopNavBar -->
<header class="bg-surface dark:bg-inverse-surface flex justify-between items-center px-gutter w-full max-w-container-max mx-auto h-16 border-b border-outline-variant/10 sticky top-0 z-50">
    <div class="flex items-center gap-8">
        <a class="text-2xl font-bold text-primary dark:text-inverse-primary" href="{{ route('home') }}">📚 StudySpace</a>
        <nav class="hidden md:flex gap-6">
            <a class="px-3 py-2 text-primary font-bold border-b-2 border-primary" href="{{ route('home') }}">الرئيسية</a>
            <a class="text-on-surface-variant hover:bg-surface-container-high transition-colors px-3 py-2 rounded-md" href="{{ route('cart') }}">السلة</a>
        </nav>
    </div>
    <div class="flex items-center gap-4">
        <a href="{{ route('cart') }}" class="p-2 text-primary hover:bg-surface-container-high transition-colors rounded-full">
            <span class="material-symbols-outlined">shopping_cart</span>
        </a>
    </div>
</header>

<!-- Main Content -->
<main class="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
    <!-- Breadcrumb -->
    <nav aria-label="Breadcrumb" class="flex text-on-surface-variant text-sm mb-8">
        <ol class="inline-flex items-center space-x-1 space-x-reverse md:space-x-2">
            <li class="inline-flex items-center">
                <a class="hover:text-primary transition-colors" href="{{ route('home') }}">الرئيسية</a>
            </li>
            <li>
                <div class="flex items-center">
                    <span class="material-symbols-outlined text-[16px] mx-1 rotate-180">chevron_right</span>
                    <span class="text-on-surface-variant font-medium">{{ $product->category->name ?? 'عام' }}</span>
                </div>
            </li>
            <li>
                <div class="flex items-center">
                    <span class="material-symbols-outlined text-[16px] mx-1 rotate-180">chevron_right</span>
                    <span class="text-on-surface font-semibold">{{ $product->title }}</span>
                </div>
            </li>
        </ol>
    </nav>

    <div class="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <!-- Product Images (Left Side) -->
        <div class="flex-1 flex gap-4 lg:gap-8 h-[400px] lg:h-[550px]">
            <!-- Main Image -->
            <div class="flex-1 bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden relative group">
                <img alt="{{ $product->title }}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="{{ $product->image }}">
                <button class="absolute top-4 left-4 p-3 bg-surface/80 backdrop-blur-md rounded-full shadow-sm text-on-surface hover:text-primary hover:bg-surface transition-all">
                    <span class="material-symbols-outlined">favorite</span>
                </button>
            </div>
        </div>

        <!-- Product Details (Right Side) -->
        <div class="flex-1 flex flex-col max-w-xl">
            <div class="flex items-center gap-2 mb-4">
                <span class="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {{ $product->category->name ?? 'منتج مميز' }}
                </span>
                <span class="text-primary flex items-center gap-1 text-xs font-semibold">
                    <span class="material-symbols-outlined filled-icon text-[14px]">eco</span> صاديق للبيئة
                </span>
            </div>

            <h1 class="text-3xl lg:text-4xl font-bold text-on-surface mb-3">{{ $product->title }}</h1>
            
            <div class="text-2xl font-bold text-primary mb-6">${{ number_format($product->price, 2) }}</div>

            <!-- Quantity & Actions -->
            <div class="flex flex-col sm:flex-row gap-4 mb-8">
                <div class="flex items-center border border-outline-variant/30 rounded-lg bg-surface-container-lowest overflow-hidden h-14 w-full sm:w-32 shrink-0">
                    <button class="w-full h-full flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors"><span class="material-symbols-outlined">remove</span></button>
                    <span class="text-body-md text-on-surface font-semibold px-2 text-center w-full">1</span>
                    <button class="w-full h-full flex items-center justify-center text-on-surface hover:bg-surface-container-low transition-colors"><span class="material-symbols-outlined">add</span></button>
                </div>
                <button class="flex-1 h-14 bg-primary text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm">
                    <span class="material-symbols-outlined">shopping_bag</span>
                    إضافة إلى السلة
                </button>
            </div>

            <!-- Accordions -->
            <div class="border-t border-outline-variant/10">
                <details class="group py-4 border-b border-outline-variant/10" open>
                    <summary class="flex justify-between items-center font-semibold text-on-surface cursor-pointer list-none">
                        الوصف
                        <span class="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                    </summary>
                    <div class="text-on-surface-variant pt-4 pb-2 leading-relaxed">
                        {{ $product->description }}
                    </div>
                </details>
                <details class="group py-4 border-b border-outline-variant/10">
                    <summary class="flex justify-between items-center font-semibold text-on-surface cursor-pointer list-none">
                        تفاصيل إضافية
                        <span class="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                    </summary>
                    <div class="text-on-surface-variant pt-4 pb-2">
                        <ul class="space-y-2">
                            <li class="flex justify-between"><span>الكمية المتاحة:</span> <span class="font-semibold">{{ $product->stock }} قطعة</span></li>
                            <li class="flex justify-between"><span>الشحن:</span> <span>توصيل سريع خلال 2-4 أيام</span></li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    </div>
</main>

</body>
</html>