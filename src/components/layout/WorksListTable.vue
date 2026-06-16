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
        <div class="box-left list-index">
          [{{ index }}]
        </div>
        <div class="item-list">
          <div class="box-right" v-for="(items2, index2) in items" :key="index2">
            <a
              v-if="items2.link != ''" 
              :href="items2.link" target="_blank" class="thumbnail-area" >
              <img :src="getImgUrl(items2.img)" :alt="items2.name">
              <p class="tech-stack">{{ items2.techStack }}</p>
            </a>
            <div 
              v-else
              class="thumbnail-area no-link">
              <img 
                v-if="items2.img != ''"
                :src="getImgUrl(items2.img)" :alt="items2.name">
              <p class="tech-stack">{{ items2.techStack }}</p>
            </div>
            <div class="box-bot">
              <p class="duration">{{ items2.duration }}</p>
              <p class="name">{{ items2.name }}</p>
              <p class="text">{{ items2.text }}</p>
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
    padding-block: $space-lg;

    @include tablet {
      flex-direction: column;
      gap: $space-xs*4;
    }

    .box-left {
      flex: 1;
      @include font-h3
    }
    .item-list {
      flex: 3;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: $space-xs*4 20px;

      @include mobile {
        grid-template-columns: 1fr 1fr;
      }

      .thumbnail-area {
        position:relative;
        display: flex;
        overflow: hidden;
        aspect-ratio: 1;
        background: #000;
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
          justify-content: center;
          align-self: center;
          @include font-p-txt;
          color: #fff;
          opacity: 0;
          transition: .3s;
          transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1)
        }
        &:hover {
          img {
            scale: 1.1;
            opacity: 0.3;
          }
          .tech-stack {
            opacity: 1;
          }
        }
      }

      .box-bot {
        margin-top: $space-xs * 2;
        display: flex;
        flex-direction: column;
        gap: $space-xs;
        @include font-p-title;
        .text {
          @include font-p-txt;
        }
      }  
    }
  }

</style>