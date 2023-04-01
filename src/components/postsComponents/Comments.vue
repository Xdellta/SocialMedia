<template>
  <div class="comments">

    <div class="comments__item" v-for="comment, index in commentsArray" :key="index" :class="{ marginLeft30: index %2 == 1 }">
      <Avatar :UserID="comment.UserID" />

      <div class="commentContent">
        <router-link to="/" class="commentUser">
          <Nick :UserID="comment.UserID" />
        </router-link>

        <p class="commentText">{{ comment.Comment }}</p>
      </div>
    </div>

  </div>

  <div class="InputComment">
    <img :src="mePersonalData.Avatar" :alt="mePersonalData.FirstName + ' ' + mePersonalData.LastName" class="InputComment__avatar" />
    <input type="text" placeholder="Dodaj nowy komentarz" class="InputComment__input">
    <IconSend class="InputComment__btn" />
  </div>
</template>

<script>
  import dataPosts from '../../assets/data/data-posts.json'
  import dataMe from '../../assets/data/data-me.json'
  import dataUsers from '../../assets/data/data-users.json'

  import IconSend from '../icons/IconSend.vue'

  export default {
    props: ['ID'],

    components: {
      IconSend
    },

    data() {
      return {
        commentsArray: dataPosts.Posts[this.$props.ID - 1].Comments,
        mePersonalData: dataUsers.Users.find(user => user.ID == dataMe.Me.ID)
      }
    }
  }
</script>

<style type="scss">
  .comments {
    width: 100%;
    max-height: 450px;
    margin-top: 20px;
    padding: 0 15px;
    display: flex;
    gap: 33px;
    flex-direction: column;
    overflow-y: auto;
  }

  .comments::-webkit-scrollbar {
    display: none;
  }

  .comments__item {
    display: flex;
  }

  .marginLeft30 {
    margin-left: 30px;
  }

  .commentContent {
    max-width: 590px;
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    padding: 10px 16px;
    background-color: var(--color-background1);
    border-radius: 14px;
  }

  .commentUser {
    color: var(--color-lightBlue);
    font-size: 15px;
    text-decoration: none;
  }

  .commentText {
    margin: 4px 0 0 6px;
    color: var(--color-contrast);
    font-size: 15px;
  }

  /* Input comment */
  .InputComment {
    position: relative;
    width: 100%;
    padding: 0 15px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .InputComment__avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  .InputComment__input {
    height: 45px;
    width: 91%;
    padding: 0 60px 0 24px;
    line-height: 45px;
    border: none;
    outline: none;
    border-radius: 30px;
    background-color: var(--color-background1);
    font-size: 16px;
    color: var(--color-darkGray);
  }

  .InputComment__btn {
    position: absolute;
    width: 30px;
    height: max-content;
    right: 30px;
    fill: var(--color-contrast);
  }

  .InputComment__btn:hover {
    cursor: pointer;
    transform: scale(1.02);
    fill: var(--color-lightBlue);
  }
</style>