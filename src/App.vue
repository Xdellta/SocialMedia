<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import AsideLeft from './components/AsideLeft.vue'
  import Navigation from './components/Navigation.vue'
  import PersonalNav from './components/PersonalNav.vue'
</script>

<template>
  <aside>
    <AsideLeft />
  </aside>

  <main>
    <RouterView />
  </main>

  <PersonalNav />
  
  <nav>
    <Navigation />
  </nav>
</template>

<style type="scss" scoped>
  aside {
    height: 100%;
    width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-background2);
    padding: 35px 30px 0 30px;
  }

  main {
    height: 100%;
    width: max-content;
    display: flex;
    flex-direction: column;
    padding-top: 17px;
  }

  nav {
    width: 54px;
    height: 370px;
    margin: auto 11px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--color-background2);
    border-radius: 15px;
  }
</style>
