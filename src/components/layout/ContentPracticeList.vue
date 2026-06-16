<script setup>
import { ref } from 'vue'
import PracticeListTable from '@/components/layout/PracticeListTable.vue'
import List from '@/assets/data/practiceList.json'

const lists = ref(List)

</script>

<template>
  <section id="works-list-area">
    <main>
      <div class="wrap">
        <PracticeListTable :item="lists"></PracticeListTable>
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped>
  #works-list-area {
    margin-bottom: calc($space-lg + 3.125vw)   
  }
</style>