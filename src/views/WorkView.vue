<script setup>
import { ref } from 'vue'
// import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import SpotSub from '@/components/layout/SpotSub.vue'
import ContentWorksList from '@/components/layout/ContentWorksList.vue'
</script>

<template>
  <div>
    <!-- <Header></Header> -->
    <main>
      <SpotSub></SpotSub>
      <ContentWorksList></ContentWorksList>
    </main>
    <Footer class="footer"></Footer>
  </div>
</template>

<style lang="scss" scoped>
  main {
    padding-inline: 0;
  }
</style>
