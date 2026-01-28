<script setup lang="ts">
// Not Found View
</script>

<template>
    <div class="h-screen w-full bg-rich-black relative overflow-hidden flex items-center justify-center">
        <!-- Ambient Background -->
        <div class="absolute inset-0 pointer-events-none">
            <img src="/images/hero-mansion.png"
                class="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale" />
            <div class="absolute inset-0 bg-rich-black/60"></div>
        </div>

        <div class="relative z-10 text-center px-6">
            <span class="block text-champagne-gold text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-bold">Page
                Not Found</span>
            <h1 class="text-[12rem] md:text-[20rem] leading-none font-display text-white/5 select-none">404</h1>
            <h2 class="text-3xl md:text-5xl font-display text-pearl-white -mt-12 md:-mt-20 mb-8 relative z-20">Lost in
                Luxury?</h2>

            <p class="text-white/60 font-body text-lg max-w-lg mx-auto mb-12 relative z-20">
                The page you are looking for does not exist or has been moved.
                Let us guide you back to where you belong.
            </p>

            <RouterLink to="/"
                class="relative z-20 inline-block bg-champagne-gold text-rich-black font-body font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-colors duration-300">
                Return Home
            </RouterLink>
        </div>
    </div>
</template>
