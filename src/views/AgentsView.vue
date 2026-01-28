<script setup lang="ts">
const agents = [
    {
        id: 1,
        name: 'Alexander Sterling',
        role: 'Founder & CEO',
        image: '/images/living-room.png', // Placeholder
        class: 'md:col-span-1 md:row-span-2'
    },
    {
        id: 2,
        name: 'Isabella Vance',
        role: 'Senior Partner',
        image: '/images/pool.png', // Placeholder
        class: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 3,
        name: 'Julian Thorne',
        role: 'Head of Sales',
        image: '/images/hero-mansion.png', // Placeholder
        class: 'md:col-span-1 md:row-span-1'
    },
    {
        id: 4,
        name: 'Elena Rostova',
        role: 'International Relations',
        image: '/images/pool.png', // Placeholder
        class: 'md:col-span-2 md:row-span-1'
    }
]
</script>

<template>
    <div class="pt-40 pb-20 px-4 bg-rich-black min-h-screen">
        <div class="max-w-7xl mx-auto">
            <h1 class="text-4xl md:text-6xl font-display text-pearl-white mb-12 text-center">Our Curators</h1>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                <div v-for="agent in agents" :key="agent.id"
                    :class="['group relative rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500', agent.class]">
                    <img :src="agent.image" :alt="agent.name" class="w-full h-full object-cover" />
                    <div
                        class="absolute inset-0 bg-rich-black/30 group-hover:bg-transparent transition-colors duration-500">
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/90 to-transparent">
                        <h3 class="text-2xl font-display text-champagne-gold">{{ agent.name }}</h3>
                        <p class="text-sm font-body text-pearl-white/80 uppercase tracking-widest">{{ agent.role }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
