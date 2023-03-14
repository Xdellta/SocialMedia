<script setup>
  import { RouterLink, RouterView } from 'vue-router'

  import IconHome from './icons/IconHome.vue'
  import IconGroup from './icons/IconGroup.vue'
  import IconVideo from './icons/IconVideo.vue'
  import IconCog from './icons/IconCog.vue'
</script>

<template>
  <router-link to="/">
    <IconHome class="icon" />
  </router-link>

  <router-link to="/">
    <IconGroup class="icon" />
  </router-link>

    <router-link to="/">
    <IconVideo class="icon" />
    </router-link>

  <router-link to="/">
    <IconCog class="icon" />
  </router-link>
</template>

<style type="scss">
  .icon {
    width: 32px;
    height: 32px;
    fill: var(--color-contrast);
  }

  .icon:hover {
    transform: scale(1.04);
  }
</style>