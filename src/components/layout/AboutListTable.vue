<script setup>
import { ref } from 'vue'
const props = defineProps({
  item: Object,
})

console.log(props)
</script>

<template>
  <section>
    <div class="wrap">
      <div v-for="(items, index) in props.item" :key="index"
           class="content-with-line group">
        <div class="box-left list-index">
          [{{ index }}]
        </div>
        <div class="item-list">
          <div class="box-right" v-for="(items2, index2) in items" :key="index2">
            <div class="box-left2">
              {{ items2.duration }}
            </div>
            <div class="box-right2">
              <div class="box-top">
                {{ items2.title }}
              </div>
              <div class="box-bot">
                <span>
                  {{ items2.tag?.join(' / ') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .group {
    display: flex;
    flex-direction: row;
    gap: 20px;
    @include font-p-title;
    padding-block: $space-xs * 2;

    @include mobile {
      flex-direction: column;
      gap: $space-xs * 2;
    }

    .list-index {
      @include font-h4;
    }

    .box-left, 
    .box-left2 {
      flex: 1;
    }
    .item-list {
      flex: 3;
      display: flex;
      flex-direction: column;
      gap: $space-xs * 4;
    }
    .box-right {
      display: flex;
      gap: 12px;
      position: relative;

      

      &:not(:first-child)::before {
        content: '';
        position: absolute;
        top: -$space-xs * 2;
        left: 0;
        width: 100vw;
        height: 1px;
        background: rgba($color-white, 0.3);
      }

      @include mobile {
        flex-direction: column;
      }

      .box-right2 {
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: $space-xs;
        .box-bot {
          @include font-p-txt;
          line-height: 1.4;
        }
      }
    }

  }
</style>