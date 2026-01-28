<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'

const heroText = ref(null)
const heroSubText = ref(null)
const heroButton = ref(null)
const floatingImages = ref(null)

const handleMouseMove = (e: MouseEvent) => {
  if (!floatingImages.value) return

  const mouseX = e.clientX / window.innerWidth
  const mouseY = e.clientY / window.innerHeight

  gsap.to(floatingImages.value, {
    x: mouseX * 30,
    y: mouseY * 30,
    duration: 1,
    ease: 'power1.out'
  })
}

onMounted(() => {
  const tl = gsap.timeline()

  // Initial Reveal
  tl.from(heroSubText.value, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.5
  })
    .from(heroText.value, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    }, '-=0.8')
    .from(heroButton.value, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.6')
    .from(floatingImages.value, {
      x: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out'
    }, '-=1')

  // Mouse Parallax Effect
  document.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <div class="relative h-screen w-full overflow-hidden flex items-center justify-center">
    <!-- Background Image -->
    <div
      class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-110"
      style="background-image: url('/images/hero-mansion.png');">
      <div class="absolute inset-0 bg-rich-black/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-20 md:pb-32">
      <div class="max-w-5xl">
        <h2 ref="heroSubText"
          class="text-champagne-gold font-body uppercase tracking-[0.3em] text-xs sm:text-sm md:text-base mb-6 font-semibold drop-shadow-md">
          Designing the Architecture of the Next Era
        </h2>
        <h1 ref="heroText"
          class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-medium text-pearl-white mb-10 leading-none drop-shadow-2xl mix-blend-screen">
          Pioneering innovative structures that merge sustainability, elegance, and bold creativity.
        </h1>

        <div ref="heroButton" class="flex items-center space-x-6">
          <RouterLink to="/contact"
            class="group bg-champagne-gold text-rich-black px-10 py-5 rounded-full font-body font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            Let's Talk <span class="ml-2 inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          </RouterLink>
        </div>
      </div>

      <!-- Floating Image Cards (Architekta style bottom right) -->
      <div ref="floatingImages" class="absolute bottom-12 right-12 hidden lg:flex gap-6 pointer-events-none">
        <div
          class="w-72 h-48 rounded-2xl overflow-hidden border border-white/20 shadow-2xl relative z-10 transform translate-y-8">
          <img src="/images/living-room.png" class="w-full h-full object-cover opacity-90" />
        </div>
        <div
          class="w-72 h-48 rounded-2xl overflow-hidden border border-white/20 shadow-2xl relative z-0 transform -translate-x-12 -translate-y-4">
          <img src="/images/pool.png" class="w-full h-full object-cover opacity-80" />
        </div>
      </div>
    </div>

  </div>
</template>
