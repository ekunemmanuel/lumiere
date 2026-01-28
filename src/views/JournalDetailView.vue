<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const articleId = route.params.id

// Mock Data
const article = ref({
    title: 'The Future of Sustainable Luxury',
    category: 'Architecture',
    date: 'October 12, 2025',
    author: 'Elena Rostova',
    image: '/images/hero-mansion.png',
    content: `
        <p class="mb-6">The definition of luxury is evolving. It is no longer solely about opulence, excess, or exclusivity. Today, true luxury creates a symbiotic relationship with its environment. At LUMIÈRE, we are witnessing a paradigm shift where our most discerning clients prioritize sustainability as much as aesthetic grandeur.</p>
        
        <p class="mb-6">Sustainable luxury architecture is not just about solar panels or recycled materials; it’s about biophilic design—integrating nature into the very fabric of the home. It’s about smart systems that optimize energy consumption without compromising comfort. It is the realization that preserving our planet is the ultimate legacy.</p>
        
        <h3 class="text-2xl font-display text-pearl-white mt-10 mb-4">Biophilic Design Essentials</h3>
        <p class="mb-6">We are seeing a surge in demand for homes that blur the lines between indoor and outdoor living. Floor-to-ceiling glass walls that retract completely, interior courtyards that act as the lungs of the house, and living roofs that provide insulation while inviting local flora.</p>
    `
})

import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
    const tl = gsap.timeline()

    tl.from('.journal-header-content', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' })
        .from('.journal-hero-img', { scale: 1.05, duration: 1.5, ease: 'power2.out' }, '-=0.8')
        .from('.journal-body', { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
})
</script>

<template>
    <div class="bg-rich-black min-h-screen pt-40 pb-20">

        <article class="max-w-4xl mx-auto px-6">
            <div class="journal-header-content text-center mb-16">
                <!-- Back Button -->
                <div class="mix-blend-difference mb-4">
                    <RouterLink to="/journal"
                        class="flex items-center text-white/80 hover:text-white transition-colors group">
                        <span class="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
                        <span class="text-sm font-body uppercase tracking-widest">Back to Journal</span>
                    </RouterLink>
                </div>

                <span class="text-champagne-gold uppercase tracking-widest text-sm font-bold mb-4 block">{{
                    article.category }}</span>
                <h1 class="text-4xl md:text-6xl font-display text-pearl-white mb-6 leading-tight">{{ article.title }}
                </h1>
                <div class="flex items-center justify-center space-x-4 text-white/50 text-sm font-body">
                    <span>{{ article.date }}</span>
                    <span>•</span>
                    <span>By {{ article.author }}</span>
                </div>
            </div>

            <div class="rounded-3xl overflow-hidden mb-16 shadow-2xl">
                <img :src="article.image" class="journal-hero-img w-full h-auto object-cover" />
            </div>

            <div class="journal-body prose prose-lg prose-invert mx-auto font-body text-white/80"
                v-html="article.content"></div>

            <div class="mt-20 pt-10 border-t border-white/10 text-center">
                <h3 class="text-2xl font-display text-pearl-white mb-8">Share this article</h3>
                <div class="flex justify-center space-x-6">
                    <button
                        class="text-champagne-gold hover:text-white uppercase tracking-widest text-sm">Twitter</button>
                    <button
                        class="text-champagne-gold hover:text-white uppercase tracking-widest text-sm">LinkedIn</button>
                    <button
                        class="text-champagne-gold hover:text-white uppercase tracking-widest text-sm">Email</button>
                </div>
            </div>
        </article>

        <!-- Next/Previous Navigation -->
        <div class="max-w-4xl mx-auto px-6 pt-16 flex justify-between items-center">
            <RouterLink to="/journal/2" class="group text-left">
                <span
                    class="block text-white/40 text-xs uppercase tracking-widest mb-1 group-hover:text-champagne-gold transition-colors">Previous
                    Article</span>
                <span
                    class="text-xl font-display text-white group-hover:translate-x-[-10px] transition-transform block">&larr;
                    Market Trends</span>
            </RouterLink>
            <RouterLink to="/journal/2" class="group text-right">
                <span
                    class="block text-white/40 text-xs uppercase tracking-widest mb-1 group-hover:text-champagne-gold transition-colors">Next
                    Article</span>
                <span
                    class="text-xl font-display text-white group-hover:translate-x-[10px] transition-transform block">Design
                    Masterclass &rarr;</span>
            </RouterLink>
        </div>
    </div>
</template>
