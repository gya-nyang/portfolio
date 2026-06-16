<script setup>
import { ref } from 'vue'
// import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import SpotSub from '@/components/layout/SpotSub.vue'
import ContentIntroduce from '@/components/layout/ContentIntroduce.vue'
import ContentAboutList from '@/components/layout/ContentAboutList.vue'
</script>

<template>
  <div>
    <!-- <Header></Header> -->
    <main>
      <SpotSub></SpotSub>
      <ContentIntroduce></ContentIntroduce>
      <ContentAboutList></ContentAboutList>
    </main>
    <Footer class="footer"></Footer>
  </div>
</template>

<style lang="scss" scoped>
  main {
    padding-inline: 0;
  }
</style>
