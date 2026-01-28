<script setup lang="ts">
import PropertyCard from './PropertyCard.vue'

const properties = [
  {
    id: 1,
    title: 'The Azure Villa',
    location: 'Saint-Jean-Cap-Ferrat, France',
    price: '€28,500,000',
    image: '/images/pool.png',
    beds: 6,
    baths: 8,
    sqft: '8,500'
  },
  {
    id: 2,
    title: 'Vistara Estate',
    location: 'Beverly Hills, CA',
    price: '$42,000,000',
    image: '/images/hero-mansion.png',
    beds: 8,
    baths: 12,
    sqft: '15,000'
  },
  {
    id: 3,
    title: 'Skyline Penthouse',
    location: 'Monaco',
    price: '€55,000,000',
    image: '/images/living-room.png',
    beds: 4,
    baths: 5,
    sqft: '6,200'
  }
]
</script>

<template>
  <section id="properties" class="py-32 px-4 bg-rich-black relative">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-20">
        <div>
          <h4 class="text-champagne-gold text-sm font-body uppercase tracking-widest mb-4">Curated Portfolio</h4>
          <h2 class="text-4xl md:text-5xl font-display text-pearl-white leading-tight">Masterpieces <br /> of Living
          </h2>
        </div>
        <RouterLink to="/properties"
          class="hidden md:block text-sm font-body text-pearl-white border-b border-champagne-gold pb-1 hover:text-champagne-gold transition-colors">
          View All Properties</RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink v-for="prop in properties" :key="prop.id" :to="`/properties/${prop.id}`"
          class="block hover:-translate-y-2 transition-transform duration-500">
          <PropertyCard v-bind="prop" />
        </RouterLink>
      </div>

      <div class="mt-12 text-center md:hidden">
        <RouterLink to="/properties" class="text-sm font-body text-pearl-white border-b border-champagne-gold pb-1">View
          All Properties</RouterLink>
      </div>
    </div>
  </section>
</template>
