<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AsideMenu from './components/AsideMenu.vue'
</script>

<template>
  <main>
    <aside>
      <AsideMenu />
    </aside>

    <RouterView />
  </main>
</template>

<style type="scss" scoped>
  main {
    width: 100%;
    height: 100%;
    display: flex;
  }

  aside {
    position: fixed;
    height: 100%;
    width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-white);
    padding: 35px 30px 0 30px;
  }
</style>
