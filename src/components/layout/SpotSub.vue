<script setup>
import { ref } from 'vue'

const currentHash = ref(window.location.pathname.replace('/',''))

</script>

<template>
  <section id="spot">
    <main>
      <h2 class="wrap">
        {{ currentHash }}
      </h2>
    </main>
  </section>
</template>

<style lang="scss" scoped>
#spot {
  position: relative;
  .wrap {
    padding-block: $space-lg;
    @include font-typo;
  }
  border-bottom: 1px solid $color-white;
  &::before {
    content: '';
    position: absolute;
    // top: 60px;
    top: 3.125vw;
    left: -48px;
    width: calc(100vw + 96px);
    height: 1px;
    background: rgba($color-white, 0.3);
  }
}
</style>