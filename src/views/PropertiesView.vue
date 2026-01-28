<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import PropertyCard from '../components/PropertyCard.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const properties = ref([
    {
        id: 1,
        title: 'The Azure Villa',
        location: 'Saint-Jean-Cap-Ferrat, France',
        price: '€28,500,000',
        image: '/images/pool.png',
        beds: 6,
        baths: 8,
        sqft: '8,500',
        class: 'md:col-span-2 md:row-span-2'
    },
    {
        id: 2,
        title: 'Vistara Estate',
        location: 'Beverly Hills, CA',
        price: '$42,000,000',
        image: '/images/hero-mansion.png',
        beds: 8,
        baths: 12,
        sqft: '15,000',
        class: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 3,
        title: 'Skyline Penthouse',
        location: 'Monaco',
        price: '€55,000,000',
        image: '/images/living-room.png',
        beds: 4,
        baths: 5,
        sqft: '6,200',
        class: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 4,
        title: 'Desert Mirage',
        location: 'Dubai, UAE',
        price: '$18,000,000',
        image: '/images/pool.png',
        beds: 5,
        baths: 7,
        sqft: '7,000',
        class: 'md:col-span-1 md:row-span-2'
    },
    {
        id: 5,
        title: 'Alpine Retreat',
        location: 'Aspen, CO',
        price: '$35,000,000',
        image: '/images/hero-mansion.png',
        beds: 7,
        baths: 9,
        sqft: '11,000',
        class: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 6,
        title: 'Urban Sanctuary',
        location: 'New York, NY',
        price: '$22,500,000',
        image: '/images/living-room.png',
        beds: 3,
        baths: 4,
        sqft: '4,500',
        class: 'md:col-span-1 md:row-span-1'
    }
])

onMounted(async () => {
    await nextTick()

    // Animate Header
    gsap.from('.properties-header', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })

    // Animate Grid
    ScrollTrigger.batch('.property-item', {
        onEnter: (batch) => {
            gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
                overwrite: true
            })
        },
        start: 'top 85%'
    })
})
</script>

<template>
    <div class="pt-40 pb-20 px-4 bg-rich-black min-h-screen">
        <div class="max-w-7xl mx-auto">
            <div class="properties-header text-center mb-16">
                <h1 class="text-4xl md:text-6xl font-display text-pearl-white mb-6">Exclusive Portfolio</h1>
            </div>

            <!-- Bento Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                <RouterLink v-for="prop in properties" :key="prop.id" :to="`/properties/${prop.id}`"
                    :class="['property-item block rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-champagne-gold/20 h-full opacity-0 translate-y-8', prop.class]">
                    <PropertyCard v-bind="prop" class="w-full h-full rounded-none! border-none!" />
                </RouterLink>
            </div>
        </div>
    </div>

</template>
