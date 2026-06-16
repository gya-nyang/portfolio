<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Logo from '@/components/common/Logo.vue'

const nav = ref([
  { label: 'about', path: '/about' },
  { label: 'works', path: '/works' },
  { label: 'practice', path: '/practice' },
])

const route = useRoute()

console.log(route.path)

</script>

<template>
  <div id="app" :class="{ 'is-index': route.path === '/' }">
    <section id="header">
      <header>
        <div class="wrap">
          <h1 class="logo-area">
            <!-- <a href="/">
              <Logo class="logo"></Logo>
            </a> -->
            <router-link to="/">
              <Logo class="logo"></Logo>
            </router-link>
          </h1>
          <nav class="nav-area">
            <ul class="nav-list">
              <li v-for="navName in nav" :key="navName.label">
                <!-- <a :href="navName.path">{{ navName.label }}</a> -->
                <router-link :to="navName.path">{{ navName.label }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  &.is-index {
    height: 100vh;
  }
  .main-content {
    margin-top: auto;
    padding-inline: 0;
  }
}
#header {
  .wrap {
    padding-block: $space-xs * 2;
    display: flex;
    gap: 20px;
    align-items: center;
    @include tablet {
      padding-block: $space-xs;
    }
    .logo-area {
      flex: 1;
      .logo {
        width: clamp(50px, 4.48vw, 86px);
      }
    }
    .nav-area {
      flex: 3;
      .nav-list {
        display: flex;
        gap: 20px;
        li {
          flex: 1;
        }
        a {
          @include font-ui;
          color: $color-white;
          text-decoration: 0;
          transition: .2s;
          &:hover {
            color: $color-cyon;
          }
          &.router-link-active {
            color: $color-cyon;
          }
        }
      }
    }
  }
}

</style>