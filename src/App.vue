<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import ContactFooter from './components/ContactFooter.vue'
import PreLoader from './components/PreLoader.vue'

const isLoading = ref(true)

// Lock scroll initially
document.body.style.overflow = 'hidden'

const handlePreloaderComplete = () => {
  isLoading.value = false
  // Unlock scroll when animation finishes
  document.body.style.overflow = ''
}
</script>

<template>
  <PreLoader v-if="isLoading" @complete="handlePreloaderComplete" />
  <div>
    <NavBar />
    <RouterView />
    <ContactFooter />
  </div>
</template>
