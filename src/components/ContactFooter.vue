<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.footer-lumiere', {
    scrollTrigger: {
      trigger: '.footer-lumiere',
      start: 'top bottom', // Start when the top of the text hits the bottom of the viewport
      end: 'bottom bottom',
      scrub: 1 // Smooth scrubbing effect
    },
    y: 200, // Start 200px below
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out'
  })
})
</script>

<template>
  <footer id="contact" class="bg-black pt-32 pb-8 border-t border-white/5 relative overflow-hidden">
    <div class="max-w-[95%] mx-auto px-4 relative z-10">

      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between items-start mb-32 md:mb-48">

        <!-- Top Left: Slogan & Newsletter -->
        <div class="max-w-xl w-full">
          <h2 class="text-3xl md:text-5xl font-body font-medium text-pearl-white tracking-tight mb-20">
            Live Without Compromise.
          </h2>

          <div class="space-y-8">
            <div class="space-y-1">
              <p class="text-white/40 text-xs uppercase tracking-widest">New Business</p>
              <a href="mailto:concierge@lumiere.com"
                class="text-white text-lg font-body hover:text-champagne-gold transition-colors">concierge@lumiere.com</a>
            </div>

            <div class="pt-8">
              <p class="text-white/40 text-xs uppercase tracking-widest mb-4">Sign up for our newsletter</p>
              <div
                class="flex items-center border-b border-white/20 pb-2 group focus-within:border-white transition-colors">
                <input type="email" placeholder="Email Address"
                  class="bg-transparent border-none outline-none text-white w-full placeholder-white/20 font-body text-base">
                <button class="text-white/40 group-focus-within:text-white transition-colors">&rarr;</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Right: Navigation -->
        <div class="flex flex-col md:flex-row gap-16 md:gap-32 mt-16 md:mt-0 text-right md:text-left">
          <div class="flex flex-col space-y-2">
            <RouterLink to="/" class="text-white font-body text-sm hover:text-champagne-gold transition-colors">Home
            </RouterLink>
            <RouterLink to="/properties"
              class="text-white font-body text-sm hover:text-champagne-gold transition-colors">Properties</RouterLink>
            <RouterLink to="/journal" class="text-white font-body text-sm hover:text-champagne-gold transition-colors">
              Journal</RouterLink>
            <RouterLink to="/careers" class="text-white font-body text-sm hover:text-champagne-gold transition-colors">
              Careers</RouterLink>
            <RouterLink to="/contact" class="text-white font-body text-sm hover:text-champagne-gold transition-colors">
              Contact</RouterLink>
          </div>

          <div class="flex flex-col space-y-2">
            <a href="#" class="text-white font-body text-sm hover:text-champagne-gold transition-colors">Instagram ↗</a>
            <a href="#" class="text-white font-body text-sm hover:text-champagne-gold transition-colors">LinkedIn ↗</a>
          </div>
        </div>
      </div>

      <!-- Bottom Details (Floating above giant text) -->
      <div class="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 pb-4 relative z-20">
        <div class="text-white/30 text-[10px] uppercase tracking-widest space-y-1">
          <p>San Diego — USA</p>
          <p>Paris — France</p>
        </div>
        <div class="mt-4 md:mt-0 flex gap-6 text-white/30 text-[10px] uppercase tracking-widest">
          <RouterLink to="/terms" class="hover:text-white transition-colors">Terms of use</RouterLink>
          <RouterLink to="/privacy" class="hover:text-white transition-colors">Privacy Policy</RouterLink>
          <span>&copy; 2026</span>
        </div>
      </div>

    </div>

    <!-- GIANT BACKGROUND TYPOGRAPHY -->
    <div class="w-full flex justify-center leading-none select-none pointer-events-none">
      <h1
        class="footer-lumiere text-[24vw] font-display font-medium text-white tracking-tighter leading-[0.75] mb-[4vw] opacity-100 mix-blend-screen">
        lumière
      </h1>
    </div>
  </footer>
</template>
