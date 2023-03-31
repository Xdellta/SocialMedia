<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import AsideLeft from './components/AsideLeft.vue'
  import Navigation from './components/Navigation.vue'
  import PersonalOverlay from './components/PersonalOverlay.vue'
</script>

<template>
  <aside>
    <AsideLeft />
  </aside>

  <main>
    <RouterView />
  </main>

  <PersonalOverlay />
  
  <nav>
    <Navigation />
  </nav>
</template>

<style type="scss" scoped>
  aside {
    height: 100%;
    min-width: 350px;
    max-width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-background2);
    padding: 35px 30px 0 30px;
  }

  main {
    width: 750px;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  main::-webkit-scrollbar {
    display: none;
  }

  nav {
    width: 77px;
    height: 100%;
    display: flex;
  }
</style>
