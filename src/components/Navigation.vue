<script setup>
  import { RouterLink, RouterView } from 'vue-router'

  import IconHome from './icons/IconHome.vue'
  import IconGroup from './icons/IconGroup.vue'
  import IconVideo from './icons/IconVideo.vue'
  import IconCog from './icons/IconCog.vue'
</script>

<template>
  <div id="navigation">
    <router-link to="/" class="link">
      <IconHome class="icon" />
    </router-link>

    <router-link to="/Społeczność" class="link">
      <IconGroup class="icon" />
    </router-link>

      <router-link to="/Filmy" class="link">
      <IconVideo class="icon" />
      </router-link>

    <router-link to="/Ustawienia" class="link">
      <IconCog class="icon" />
    </router-link>
  </div>
</template>

<style type="scss">
  #navigation {
    width: 55px;
    height: 370px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--color-background2);
    border-radius: 15px;
  }

  .link.router-link-active > .icon {
    fill: var(--color-lightBlue);
  }

  .icon {
    width: 32px;
    height: 32px;
    fill: var(--color-contrast);
  }

  .icon:hover {
    transform: scale(1.04);
    fill: var(--color-lightBlue);
  }
</style>