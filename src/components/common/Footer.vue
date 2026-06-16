<script setup>
import { ref } from 'vue'
// import bg from '@/assets/images/bg.jpg'

</script>

<template>
  <section id="footer">
    <footer>
      <div class="wrap">
        <p class="copyright">ⓒ2026</p>
        <ul class="contact-area">
          <li><a href="mailto:mypiay123@gmail.com" class="contact-el">mypiay123@gmail.com</a></li>
          <li><a href="tel:010-6425-5349" class="contact-el">010-6425-5349</a></li>
        </ul>
      </div>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
#footer {
  background-image: 
    linear-gradient(rgba(51, 51, 51, 0.3), rgba(51, 51, 51, 0.3)),
    url('@/assets/images/bg.jpg');
  background-position: center;
  footer {
    height: 50vh;
    display: flex;
    align-items: end;
    .wrap {
      position: relative;
      display: flex;
      flex-direction: row;
      width: 100%;
      padding-block: $space-xs;
      align-items: end;
      box-sizing: border-box;
      .contact-area {
        display: flex;
        margin-left: auto;
        gap: $space-lg;
        @include tablet {
          gap: 40px;
        }
        @include mobile {
          margin-left: 0;
          margin-right: auto;
          flex-direction: column;
          gap: $space-xs;
        }
      }
      .copyright,
      .contact-el {
        @include font-ui;
        color: $color-white;
        text-decoration: 0;
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -48px;
        width: calc(100vw + 96px);
        height: 1px;
        background: $color-white;
      }
      @include mobile {
        align-items: flex-start;
        flex-direction: row-reverse;
        padding-block: $space-xs * 2;
      }
    }
  }
}
</style>