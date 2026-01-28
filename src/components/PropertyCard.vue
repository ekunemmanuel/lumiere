<script setup lang="ts">
defineProps<{
  image: string
  title: string
  price: string
  location: string
  beds: number
  baths: number
  sqft: string
}>()
</script>

<template>
  <div class="group relative overflow-hidden bg-charcoal/10 border border-white/5 cursor-pointer">
    <!-- Image -->
    <div class="overflow-hidden h-full w-full relative">
      <img :src="image" :alt="title"
        class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
      <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

      <div
        class="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 class="text-2xl font-display text-pearl-white mb-1">{{ title }}</h3>
        <p class="text-sm font-body text-pearl-white/70 uppercase tracking-widest mb-4">{{ location }}</p>

        <div
          class="flex items-center space-x-6 text-xs font-body text-pearl-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <span>{{ beds }} Beds</span>
          <span class="w-1 h-1 bg-champagne-gold rounded-full"></span>
          <span>{{ baths }} Baths</span>
          <span class="w-1 h-1 bg-champagne-gold rounded-full"></span>
          <span>{{ sqft }} Sq.Ft</span>
        </div>
      </div>
    </div>

    <!-- Price Badge -->
    <div class="absolute top-6 right-6 bg-rich-black/80 backdrop-blur-sm px-4 py-2 border border-white/10">
      <span class="text-champagne-gold font-body font-medium tracking-wider">{{ price }}</span>
    </div>
  </div>
</template>
