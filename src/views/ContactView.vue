<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
    const tl = gsap.timeline()

    tl.from('.contact-left', {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
        .from('.contact-right', {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.contact-group', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.5')
})
</script>

<template>
    <div class="min-h-screen bg-rich-black flex flex-col pt-32 lg:pt-0 lg:flex-row relative overflow-hidden">

        <!-- Left Section: Info -->
        <div class="contact-left w-full lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center relative z-10">
            <h1 class="text-5xl lg:text-7xl font-display text-pearl-white mb-12">Start the <br /> Conversation</h1>

            <div class="space-y-12">
                <div>
                    <span
                        class="block text-champagne-gold text-xs uppercase tracking-widest mb-2 font-bold">Headquarters</span>
                    <p class="text-white/80 font-body text-lg leading-relaxed">
                        123 Luxury Lane, The Hills<br />
                        Beverly Hills, CA 90210
                    </p>
                </div>

                <div>
                    <span
                        class="block text-champagne-gold text-xs uppercase tracking-widest mb-2 font-bold">Contact</span>
                    <a href="mailto:concierge@lumiere.com"
                        class="block text-2xl text-white font-medium hover:text-champagne-gold transition-colors mb-2">concierge@lumiere.com</a>
                    <p class="text-white/60 font-body">+1 (310) 555-0199</p>
                </div>

                <div>
                    <span
                        class="block text-champagne-gold text-xs uppercase tracking-widest mb-2 font-bold">Hours</span>
                    <p class="text-white/60 font-body">Mon - Fri: 9am - 6pm PST</p>
                    <p class="text-white/60 font-body">Sat: By Appointment Only</p>
                </div>
            </div>
        </div>

        <!-- Right Section: Form -->
        <div
            class="contact-right w-full lg:w-1/2 bg-white/5 border-l border-white/5 backdrop-blur-sm p-8 lg:p-24 flex flex-col justify-center relative z-10">
            <form class="space-y-8 max-w-lg mx-auto w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="contact-group relative group">
                        <input type="text" id="fname" placeholder=" "
                            class="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-champagne-gold transition-colors" />
                        <label for="fname"
                            class="absolute left-0 top-3 text-white/40 text-sm peer-focus:-top-6 peer-focus:text-xs peer-focus:text-champagne-gold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-champagne-gold transition-all cursor-text">First
                            Name</label>
                    </div>
                    <div class="contact-group relative group">
                        <input type="text" id="lname" placeholder=" "
                            class="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-champagne-gold transition-colors" />
                        <label for="lname"
                            class="absolute left-0 top-3 text-white/40 text-sm peer-focus:-top-6 peer-focus:text-xs peer-focus:text-champagne-gold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-champagne-gold transition-all cursor-text">Last
                            Name</label>
                    </div>
                </div>

                <div class="contact-group relative group">
                    <input type="email" id="email" placeholder=" "
                        class="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-champagne-gold transition-colors" />
                    <label for="email"
                        class="absolute left-0 top-3 text-white/40 text-sm peer-focus:-top-6 peer-focus:text-xs peer-focus:text-champagne-gold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-champagne-gold transition-all cursor-text">Email
                        Address</label>
                </div>

                <div class="contact-group relative group">
                    <input type="tel" id="phone" placeholder=" "
                        class="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-champagne-gold transition-colors" />
                    <label for="phone"
                        class="absolute left-0 top-3 text-white/40 text-sm peer-focus:-top-6 peer-focus:text-xs peer-focus:text-champagne-gold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-champagne-gold transition-all cursor-text">Phone
                        Number</label>
                </div>

                <div class="contact-group relative group pt-4">
                    <textarea id="message" rows="4" placeholder=" "
                        class="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-champagne-gold transition-colors resize-none"></textarea>
                    <label for="message"
                        class="absolute left-0 top-6 text-white/40 text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-champagne-gold peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-champagne-gold transition-all cursor-text">Tell
                        us about your inquiry</label>
                </div>

                <button
                    class="contact-group w-full bg-champagne-gold text-rich-black font-body font-bold uppercase tracking-widest py-4 rounded-full hover:bg-white transition-all transform hover:scale-[1.02] mt-4">
                    Send Message
                </button>
            </form>
        </div>

        <!-- Ambient Background -->
        <div class="absolute inset-0 pointer-events-none">
            <img src="/images/hero-mansion.png" class="w-full h-full object-cover opacity-10 mix-blend-overlay" />
            <div class="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-rich-black to-transparent"></div>
        </div>
    </div>
</template>
