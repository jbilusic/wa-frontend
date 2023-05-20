  
<template>
  <Navbar />
  <!-- <PageViewer /> -->
  
  <router-view></router-view>
  <Footer />
</template>

  <script setup>
  import PageViewer from './components/PageViewer.vue';
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  import { RouterLink, RouterView } from 'vue-router'

  </script>
<!-- <script>
import { defineComponent } from 'vue'
import { ref, reactive, computed } from 'vue'
export default defineComponent({
  name: 'xxxComponent',
})
</script> -->

