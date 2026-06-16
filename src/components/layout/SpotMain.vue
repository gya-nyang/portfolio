<script setup>
import { ref } from 'vue'
</script>

<template>
  <section id="spot">
    <main>
      <h2 class="wrap">
        An<br class="in-mobile">jonghyun
      </h2>
    </main>
  </section>
</template>

<style lang="scss" scoped>
#spot {
  .wrap {
    padding-block: $space-lg;
    @include font-typo;

    .in-mobile {
      display: none;
    }
    @include mobile {
      .in-mobile {
        display: inline;
      }
    }
  }
}
</style>