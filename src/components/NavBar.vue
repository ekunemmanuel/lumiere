<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden' // Prevent scrolling when menu is open
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="fixed top-8 left-0 right-0 z-50 flex justify-center px-4">
    <nav
      class="flex items-center justify-between px-8 py-4 bg-rich-black/60 backdrop-blur-xl border border-white/5 rounded-full shadow-2xl transition-all duration-300 w-full max-w-5xl">
      <!-- Logo -->
      <RouterLink to="/"
        class="text-2xl font-display font-bold text-pearl-white tracking-widest hover:text-champagne-gold transition-colors duration-300">
        LUMIÈRE
      </RouterLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-10">
        <RouterLink to="/"
          class="text-sm font-body font-medium text-pearl-white/80 hover:text-white transition-colors duration-300">Home
        </RouterLink>
        <RouterLink to="/properties"
          class="text-sm font-body font-medium text-pearl-white/80 hover:text-white transition-colors duration-300">
          Properties</RouterLink>
        <RouterLink to="/journal"
          class="text-sm font-body font-medium text-pearl-white/80 hover:text-white transition-colors duration-300">
          Journal</RouterLink>
      </div>

      <!-- Action Button -->
      <div class="flex items-center space-x-4">
        <RouterLink to="/contact"
          class="hidden md:flex items-center bg-champagne-gold text-rich-black font-body font-bold text-sm px-6 py-3 rounded-full hover:bg-white transition-colors duration-300">
          Let's Talk
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden text-pearl-white hover:text-champagne-gold z-50 relative">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>
  </div>

  <!-- Mobile Menu Overlay -->
  <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0 translate-y-[-20px]"
    enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-[-20px]">
    <div v-if="isMobileMenuOpen"
      class="fixed inset-0 z-40 bg-rich-black/95 backdrop-blur-2xl flex flex-col items-center justify-center">
      <div class="flex flex-col space-y-8 text-center">
        <RouterLink @click="closeMobileMenu" to="/"
          class="text-3xl font-display text-pearl-white hover:text-champagne-gold transition-colors">Home</RouterLink>
        <RouterLink @click="closeMobileMenu" to="/properties"
          class="text-3xl font-display text-pearl-white hover:text-champagne-gold transition-colors">Properties
        </RouterLink>
        <RouterLink @click="closeMobileMenu" to="/journal"
          class="text-3xl font-display text-pearl-white hover:text-champagne-gold transition-colors">Journal
        </RouterLink>
        <RouterLink @click="closeMobileMenu" to="/contact"
          class="text-3xl font-display text-champagne-gold hover:text-white transition-colors">Let's Talk</RouterLink>
      </div>
    </div>
  </Transition>
</template>
