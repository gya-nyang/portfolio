<script setup>
import { ref } from 'vue'
import AboutListTable from '@/components/layout/AboutListTable.vue'
import List from '@/assets/data/aboutList.json'

const lists = ref(List)

</script>

<template>
  <section id="about-list-area">
    <main>
      <div class="wrap">
        <!-- <AboutListTable v-for="(items, index) in lists" :key="index" :item="items" :historyTitle="index"></AboutListTable> -->
        <AboutListTable :item="lists"></AboutListTable>
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped>
  #about-list-area {
    margin-bottom: calc($space-lg + 3.125vw)   
  }
</style>