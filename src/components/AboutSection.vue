<template>
  <section id="about" class="py-32 relative overflow-hidden">
    <!-- Background element -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-charcoal/5 -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">

      <div class="w-full md:w-1/2 relative">
        <div class="relative z-10 border border-white/10 p-2">
          <img src="/images/living-room.png" alt="Luxury Interior"
            class="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 ease-out" />
        </div>
        <!-- Decorative border -->
        <div class="absolute -bottom-8 -left-8 w-full h-full border border-champagne-gold/30 z-0 hidden md:block"></div>
      </div>

      <div class="w-full md:w-1/2">
        <h4 class="text-champagne-gold text-sm font-body uppercase tracking-widest mb-4">Our Philosophy</h4>
        <h2 class="text-4xl md:text-5xl font-display text-pearl-white leading-tight mb-8">Beyond Architecture <br />
          <span class="italic text-white/50">It's Art</span>
        </h2>

        <p class="text-pearl-white/70 font-body leading-relaxed mb-8">
          At LUMIÈRE, we don't just sell homes; we curate lifestyles. We believe that true luxury lies in the
          details—the play of light on marble, the silence of a sound-proofed sanctuary, the breathtaking expanse of an
          unblocked view.
        </p>

        <p class="text-pearl-white/70 font-body leading-relaxed mb-10">
          Our portfolio represents the pinnacle of global real estate. From historic chateaus to modernist cliffside
          villas, every property is hand-selected for its unique character and uncompromising quality.
        </p>

        <RouterLink to="/about"
          class="inline-block px-8 py-3 border border-champagne-gold text-champagne-gold font-body text-xs uppercase tracking-widest hover:bg-champagne-gold hover:text-rich-black transition-all duration-300">
          Read Our Story
        </RouterLink>
      </div>
    </div>
  </section>
</template>
