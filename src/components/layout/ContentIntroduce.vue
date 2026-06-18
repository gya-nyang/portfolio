<script setup>
import { ref } from 'vue'
</script>

<template>
  <section id="introduce">
    <main>
      <div class="wrap">
        <div class="box-left">
          안녕하세요
          <br/>
          안종현입니다.
        </div>
        <div class="box-right">
          디자인의 시각적 언어를 이해하고, 
          <br/>
          코드를 통해 화면에 정밀하게 구현하는
          <br>
          퍼블리셔입니다.
          <br/>
        </div>
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped>
#introduce {
  position: relative;
  .wrap {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-block: $space-lg;
    @include mobile {
      gap: $space-xs*2;
      flex-direction: column;
    }
    .box-left {
      flex: 1;
      @include font-h3;
    }
    .box-right {
      flex: 3;
      @include font-p-big;
    }
  }
}
</style>