<script setup>
import { ref } from 'vue'
import WorksListTable from '@/components/layout/WorksListTable.vue'
import List from '@/assets/data/worksList.json'

const lists = ref(List)

</script>

<template>
  <section id="works-list-area">
    <main>
      <div class="wrap">
        <WorksListTable :item="lists"></WorksListTable>
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped>
  #works-list-area {
    margin-bottom: calc($space-lg + 3.125vw)   
  }
</style>