<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['complete'])

onMounted(() => {
    const tl = gsap.timeline({
        onComplete: () => {
            emit('complete')
        }
    })

    // Animate text in
    tl.from('.preloader-char', {
        y: 100,
        opacity: 0,
        rotateX: -90,
        stagger: 0.05,
        duration: 1,
        ease: 'power3.out'
    })
        .to('.preloader-char', {
            y: -50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: 'power3.in',
            delay: 0.5
        })
        .to('.preloader-overlay', {
            yPercent: -100,
            duration: 1.5,
            ease: 'power4.inOut'
        })
})
</script>

<template>
    <div class="preloader-overlay fixed inset-0 z-50 bg-rich-black flex items-center justify-center overflow-hidden"
        style="z-index: 100;">
        <div class="overflow-hidden flex items-center">
            <h1 class="text-6xl md:text-9xl font-display font-bold text-champagne-gold tracking-widest flex">
                <span class="preloader-char inline-block">L</span>
                <span class="preloader-char inline-block">U</span>
                <span class="preloader-char inline-block">M</span>
                <span class="preloader-char inline-block">I</span>
                <span class="preloader-char inline-block">È</span>
                <span class="preloader-char inline-block">R</span>
                <span class="preloader-char inline-block">E</span>
            </h1>
        </div>
    </div>
</template>
