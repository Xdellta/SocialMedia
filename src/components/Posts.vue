<script>
  import dataPosts from '../assets/data/data-posts.json'
  import dataUsers from '../assets/data/data-users.json'

  export default {
    data() {
      return {
        postsArray: dataPosts.Posts,
        usersArray: dataUsers.Users
      }
    },

    computed: {
      filteredAuthors() {
        return this.usersArray.filter(user => {
          return this.postsArray.map(post => post.UserID).includes(user.ID.toString())
        })
      }
    }
  }
</script>

<template>
  <div class="posts">
    <h1 class="posts__title">POPULARNE POSTY</h1>

    <div class="posts__item" v-for="post in postsArray" :key="post.ID">
      <div class="item__header">
        <div class="PostAuthor" v-for="user in filteredAuthors" :key="user.ID">
          <router-link to="/">
            <img :src="user.Avatar" :alt="'avatar ' + user.FirstName + ' ' + user.LastName" class="PostAuthor-avatar">
          </router-link>

          <div class="PostAuthor-text">
            <router-link to="/" class="PostAuthor-nick">
              {{ user.FirstName }} {{ user.LastName }}
            </router-link>
            <span class="PostAuthor-timeAdded">2 min. temu</span>
          </div>
        </div>
      </div>

      <img :src="post.Media" :alt="'post ' + post.MediaType">

      <p class="PostText">{{ post.Text }}</p>
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
    padding: 0 25px 25px 25px;
    margin-top: 35px;
    border-radius: 14px;
    background-color: var(--color-background2);
    display: flex;
    flex-wrap: wrap;
  }

  .item__header {
    width: 100%;
    height: max-content;
    padding: 11px 0;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
  }

  .PostAuthor {
    display: flex;
    align-items: center;
  }

  .PostAuthor-avatar {
    display: flex;
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  .PostAuthor-text {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
  }

  .PostAuthor-nick {
    color: var(--color-contrast);
    text-decoration: none;
    font-size: 19px;
  }

  .PostAuthor-timeAdded {
    color: var(--color-lightBlue);
    font-size: 15px;
  }

  .PostText {
    color: var(--color-contrast);
  }
</style>