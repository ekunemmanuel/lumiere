<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const propertyId = route.params.id

// Mock data - in a real app this would be fetched based on ID
const property = ref({
    id: 1,
    title: 'The Azure Villa',
    location: 'Saint-Jean-Cap-Ferrat, France',
    price: '€28,500,000',
    description: 'Perched on the cliffs of the French Riviera, The Azure Villa redefines coastal living. With panoramic views of the Mediterranean, this architectural masterpiece seamlessly blends indoor and outdoor spaces. Featuring a infinity pool that merges with the horizon, a private cinema, and a state-of-the-art wellness center.',
    specs: [
        { label: 'Bedrooms', value: '6' },
        { label: 'Bathrooms', value: '8' },
        { label: 'Interior', value: '8,500 sq ft' },
        { label: 'Exterior', value: '2.5 Acres' },
        { label: 'Parking', value: '4 Cars' },
        { label: 'Year Built', value: '2024' },
    ],
    features: [
        'Infinity Pool', 'Private Beach Access', 'Home Cinema', 'Wine Cellar', 'Smart Home System', 'Guest House'
    ],
    images: [
        '/images/pool.png',
        '/images/living-room.png',
        '/images/hero-mansion.png'
    ]
})

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    const tl = gsap.timeline()

    // Hero Animation
    tl.from('.prop-hero-img', { scale: 1.1, duration: 1.5, ease: 'power2.out' })
        .from('.prop-hero-content', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=1')

    // Scroll Animations
    gsap.utils.toArray('.prop-section').forEach((section: any) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        })
    })

    // Gallery Stagger
    ScrollTrigger.batch('.prop-gallery-img', {
        onEnter: (batch) => {
            gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, overwrite: true })
        },
        start: 'top 85%'
    })
})
</script>

<template>
    <div class="bg-rich-black min-h-screen pb-20">
        <!-- Gallery Header -->
        <div class="relative h-[60vh] md:h-[80vh] overflow-hidden">
            <img :src="property.images[0]" class="prop-hero-img w-full h-full object-cover" />
            <div class="absolute inset-0 bg-linear-to-t from-rich-black via-transparent to-transparent"></div>
            <div class="prop-hero-content absolute bottom-12 left-6 md:left-12 max-w-4xl">
                <div class="mix-blend-difference mb-4">
                    <!-- Back Button -->
                    <RouterLink to="/properties"
                        class="flex items-center text-white/80 hover:text-white transition-colors group">
                        <span class="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span class="text-sm font-body uppercase tracking-widest">Back to Properties</span>
                    </RouterLink>
                </div>
                <span class="text-champagne-gold uppercase tracking-widest text-sm mb-4 block">{{ property.location
                    }}</span>
                <h1 class="text-4xl md:text-7xl font-display text-pearl-white mb-4">{{ property.title }}</h1>
                <p class="text-2xl md:text-3xl font-body text-white/90">{{ property.price }}</p>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
            <!-- Details -->
            <div class="lg:col-span-2 space-y-12">
                <div>
                    <h2 class="text-3xl font-display text-pearl-white mb-6">Overview</h2>
                    <p class="text-white/70 font-body leading-relaxed text-lg">{{ property.description }}</p>
                </div>

                <div>
                    <h2 class="text-3xl font-display text-pearl-white mb-6">Specifications</h2>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div v-for="spec in property.specs" :key="spec.label"
                            class="border xl:border-none border-white/10 rounded-xl p-6 bg-white/5">
                            <span class="block text-champagne-gold text-sm uppercase tracking-widest mb-2">{{ spec.label
                                }}</span>
                            <span class="block text-xl text-pearl-white font-display">{{ spec.value }}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 class="text-3xl font-display text-pearl-white mb-6">Features</h2>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li v-for="feature in property.features" :key="feature"
                            class="flex items-center text-white/80 font-body">
                            <span class="w-2 h-2 bg-champagne-gold rounded-full mr-4"></span>
                            {{ feature }}
                        </li>
                    </ul>
                </div>

                <!-- Extended Gallery -->
                <div class="pt-12">
                    <h2 class="text-3xl font-display text-pearl-white mb-8">Gallery</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <img v-for="(img, index) in property.images.slice(1)" :key="index" :src="img"
                            class="w-full h-80 object-cover rounded-2xl hover:opacity-90 transition-opacity cursor-pointer" />
                        <!-- Duplicating images for demo purposes to show a full grid -->
                        <img src="/images/living-room.png"
                            class="w-full h-80 object-cover rounded-2xl hover:opacity-90 transition-opacity cursor-pointer" />
                        <img src="/images/pool.png"
                            class="w-full h-80 object-cover rounded-2xl hover:opacity-90 transition-opacity cursor-pointer" />
                    </div>
                </div>
            </div>

            <!-- Sidebar / Inquiry -->
            <div class="lg:col-span-1">
                <div class="bg-charcoal/10 border border-white/5 rounded-3xl p-8 sticky top-32 backdrop-blur-sm">
                    <h3 class="text-2xl font-display text-pearl-white mb-2">Interested?</h3>
                    <p class="text-white/60 text-sm mb-8">Schedule a private viewing of this estate.</p>

                    <form class="space-y-4">
                        <input type="text" placeholder="Your Name"
                            class="w-full bg-rich-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-champagne-gold" />
                        <input type="email" placeholder="Email Address"
                            class="w-full bg-rich-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-champagne-gold" />
                        <input type="tel" placeholder="Phone Number"
                            class="w-full bg-rich-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-champagne-gold" />
                        <button
                            class="w-full bg-champagne-gold text-rich-black font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-colors mt-4">
                            Request Viewing
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Next/Previous Navigation -->
        <div class="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 flex justify-between items-center">
            <RouterLink to="/properties/2" class="group text-left">
                <span
                    class="block text-white/40 text-xs uppercase tracking-widest mb-1 group-hover:text-champagne-gold transition-colors">Previous
                    Property</span>
                <span
                    class="text-xl font-display text-white group-hover:translate-x-[-10px] transition-transform block">&larr;
                    Vistara Estate</span>
            </RouterLink>
            <RouterLink to="/properties/2" class="group text-right">
                <span
                    class="block text-white/40 text-xs uppercase tracking-widest mb-1 group-hover:text-champagne-gold transition-colors">Next
                    Property</span>
                <span
                    class="text-xl font-display text-white group-hover:translate-x-[10px] transition-transform block">Alpine
                    Retreat &rarr;</span>
            </RouterLink>
        </div>
    </div>
</template>
