<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  item: Object,
})

onMounted(() => {
  // isReady.value = true
})

const getImgUrl =(imgPath)=> {
  const rename = imgPath.trim()
  return new URL(`../../assets/images/portfolio/${rename}`, import.meta.url).href
}

console.log(props)
</script>

<template>
  <section>
    <div class="wrap">
      <div v-for="(items, index) in props.item" :key="index"
           class="content-with-line group">

        <div class="item-list">
          <div class="box-right" v-for="(items2, index2) in items" :key="index2">
            <div class="box-top">
              <p class="duration">{{ items2.duration }}</p>
              <p class="name">{{ items2.project }}</p>
            </div>
            <a
              v-if="items2.link != ''" 
              :href="items2.link" target="_blank" class="thumbnail-area" >
              <img :src="getImgUrl(items2.img_main)" :alt="items2.name">
              <div class="tech-stack">
                <p>디자인: {{ items2.design_txt }}</p>
                <p>퍼블리싱: {{ items2.publish_txt }}</p>
              </div>
            </a>
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
    padding-block: $space-lg $space-xs*4;
    &:not(:first-child){
      padding-block: $space-xs*4;
    }

    @include tablet {
      flex-direction: column;
      gap: $space-xs*4;
    }

    .box-left {
      flex: 1;
      @include font-h3
    }
    .item-list {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr;
      gap: $space-xs*2;

      .thumbnail-area {
        position:relative;
        display: flex;
        overflow: hidden;
        aspect-ratio: 1828 / 442;
        background: #000;
        @include mobile {
          aspect-ratio: 3;
        }
        &:not(.no-link) {
          cursor: pointer;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          scale: 1;
          opacity: 0.7;
          transition: .3s;
          transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1)
        }
        .tech-stack {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
          align-items: center;
          @include font-p-txt;
          color: #fff;
          opacity: 0;
          transition: .3s;
          transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1)
        }
        &:hover {
          img {
            scale: 1.1;
            opacity: 0.2;
          }
          .tech-stack {
            opacity: 1;
          }
        }
      }

      .box-top {
        margin-bottom: $space-xs*2;
        display: flex;
        flex-direction: row;
        gap: $space-xs;
        @include font-p-title;
        .duration {
          flex: 1;
        }
        .name {
          flex: 3;
        }
        @include mobile {
          flex-direction: column;
        }
      }  
    }
  }

</style>