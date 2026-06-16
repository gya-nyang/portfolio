<script setup>
import { ref } from 'vue'
// import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import SpotMain from '@/components/layout/SpotMain.vue'
// import SpotSub from '@/components/layout/SpotSub.vue'
</script>

<template>
  <div id="index">
    <!-- <Header></Header> -->
    <SpotMain></SpotMain>
    <!-- <SpotSub></SpotSub> -->
    <Footer class="footer"></Footer>
  </div>
</template>

<style lang="scss" scoped>
#index {
  // height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  .footer {
    margin-top: auto;
  }
}
</style>
