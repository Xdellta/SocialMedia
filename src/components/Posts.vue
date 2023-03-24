<script>
  import dataPosts from '../assets/data/data-posts.json'
  import dataUsers from '../assets/data/data-users.json'

  export default {
    data() {
      return {
        postsArray: dataPosts
      }
    }
  }
</script>

<template>
  <div class="posts">
    <h1 class="posts__title">POPULARNE POSTY</h1>

    <div class="posts__item" v-for="post in postsArray" :key="post.ID">
      <div class="item__header"></div>

      {{ post.Text }}
    </div>
  </div>
</template>

<style type="scss">
  .posts {
    width: 100%;
    height: max-content;
    padding: 0 30px;
    margin-top: 45px;
    display: flex;
    flex-direction: column;
  }

  .posts__title {
    color: var(--color-contrast);
    font-size: 22px;
    margin-bottom: -10px;
  }

  .posts__item {
    width: 100%;
    min-height: 140px;
    height: max-content;
    padding: 0 25px;
    margin-top: 35px;
    border-radius: 14px;
    background-color: var(--color-background2);
    display: flex;
  }

  .item__header {
    width: 100%;
    height: 55px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--color-background1);
  }
</style>