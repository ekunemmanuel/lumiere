<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const team = ref([
    { name: 'Sarah Jenkins', role: 'Founder & CEO', image: '/images/team-sarah.png' },
    { name: 'David Ross', role: 'Head of Architecture', image: '/images/team-david.png' },
    { name: 'Elena Rostova', role: 'Lead Designer', image: '/images/team-elena.png' }
])

onMounted(() => {
    gsap.from('.about-hero-text', {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
    })

    gsap.from('.story-content', {
        scrollTrigger: {
            trigger: '.story-content',
            start: 'top 80%'
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    })

    gsap.from('.team-card', {
        scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 80%'
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out'
    })
})
</script>

<template>
    <div class="bg-rich-black min-h-screen pt-32 pb-20">
        <!-- Hero Story -->
        <div class="max-w-4xl mx-auto px-6 mb-32 text-center">
            <span
                class="text-champagne-gold uppercase tracking-[0.2em] text-sm font-bold mb-4 block about-hero-text">Since
                1985</span>
            <h1 class="text-5xl md:text-7xl font-display text-pearl-white mb-8 about-hero-text">Curating the Exceptional
            </h1>
            <div class="story-content space-y-8 text-lg md:text-xl text-white/70 font-body leading-relaxed">
                <p>
                    LUMIÈRE was born from a simple yet ambitious vision: to redefine the way the world experiences
                    luxury real estate. What began as a boutique agency in the heart of Paris has evolved into a global
                    curator of the world's most extraordinary properties.
                </p>
                <p>
                    We believe that a home is more than just a structure; it is a living, breathing work of art. It is
                    the backdrop to your life's most cherished moments. That is why we don't just list properties; we
                    tell their stories.
                </p>
                <p>
                    Our philosophy is rooted in "L'Art de Vivre"—the art of living. We seek out homes that inspire, that
                    transcend the ordinary, and that offer a sanctuary of beauty and uncompromising quality. From the
                    sun-drenched coasts of the Riviera to the soaring skylines of New York, LUMIÈRE is your gateway to
                    the exceptional.
                </p>
            </div>
        </div>

        <!-- Team Section -->
        <div class="max-w-7xl mx-auto px-6">
            <div class="border-t border-white/10 pt-20">
                <div class="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span class="text-champagne-gold uppercase tracking-widest text-xs font-bold mb-2 block">The
                            Architects of Dreams</span>
                        <h2 class="text-4xl font-display text-pearl-white">Meet Our Team</h2>
                    </div>
                    <div class="mt-6 md:mt-0 max-w-md text-white/50 font-body text-sm">
                        A collective of visionaries, designers, and real estate experts dedicated to finding your
                        perfect masterpiece.
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 team-grid">
                    <!-- Team Member Cards -->
                    <div v-for="(member, index) in team" :key="index" class="team-card group cursor-pointer">
                        <div class="relative overflow-hidden rounded-2xl aspect-3/4 mb-6">
                            <img :src="member.image"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            <div class="absolute inset-0 bg-rich-black/20 group-hover:bg-transparent transition-colors">
                            </div>
                        </div>
                        <h3 class="text-xl font-display text-pearl-white mb-1">{{ member.name }}</h3>
                        <p class="text-champagne-gold text-sm uppercase tracking-widest">{{ member.role }}</p>
                    </div>

                    <!-- +X Members Card -->
                    <div
                        class="team-card flex flex-col justify-center items-center bg-white/5 border border-white/10 rounded-2xl aspect-3/4 hover:bg-white/10 transition-colors cursor-pointer group">
                        <div
                            class="w-20 h-20 rounded-full border-2 border-champagne-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <span class="text-2xl font-display text-pearl-white">+15</span>
                        </div>
                        <span
                            class="text-white/60 font-body text-sm uppercase tracking-widest group-hover:text-white transition-colors">Global
                            Agents</span>
                        <span class="text-xs text-white/30 mt-2">Paris • NY • Dubai</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
