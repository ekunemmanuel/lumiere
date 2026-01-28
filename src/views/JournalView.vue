<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const articles = [
    {
        id: 1,
        title: 'The Future of Sustainable Luxury',
        category: 'Architecture',
        date: 'Oct 12, 2025',
        image: '/images/hero-mansion.png',
        class: 'md:col-span-2 md:row-span-2'
    },
    {
        id: 2,
        title: 'Investing in French Riviera',
        category: 'Market Trends',
        date: 'Sep 28, 2025',
        image: '/images/pool.png',
        class: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 3,
        title: 'Interior Design Masterclass',
        category: 'Design',
        date: 'Sep 15, 2025',
        image: '/images/living-room.png',
        class: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 4,
        title: 'Smart Homes: The New Standard',
        category: 'Technology',
        date: 'Aug 30, 2025',
        image: '/images/hero-mansion.png',
        class: 'md:col-span-3 md:row-span-1'
    }
]

onMounted(async () => {
    await nextTick()

    // Animate Header
    gsap.from('.journal-header', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })

    // Animate Grid
    ScrollTrigger.batch('.journal-item', {
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
            <div class="journal-header text-center mb-16">
                <h1 class="text-4xl md:text-6xl font-display text-pearl-white mb-12 text-center">The Journal</h1>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                <RouterLink v-for="article in articles" :key="article.id" :to="`/journal/${article.id}`"
                    :class="['journal-item block group relative rounded-3xl overflow-hidden cursor-pointer h-full opacity-0 translate-y-8', article.class]">
                    <img :src="article.image" :alt="article.title"
                        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div
                        class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                        <span class="text-champagne-gold text-xs font-body uppercase tracking-widest mb-2">{{
                            article.category }} • {{ article.date }}</span>
                        <h3 class="text-2xl md:text-3xl font-display text-pearl-white">{{ article.title }}</h3>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
