<template>
  <div class="comments">

    <div class="comments__item" v-for="comment in commentsArray" :key="comment.Comment">
      <Avatar :UserID="comment.UserID" />

      <div class="commentContent">
        <span class="commentUser">Imię Nazwisko</span>
        <p class="commentText">{{ comment.Comment }}</p>
      </div>
    </div>

  </div>
</template>

<script>
  import dataPosts from '../../assets/data/data-posts.json'

  import Avatar from './commentsComponents/Avatar.vue'

  export default {
    props: ['ID'],

    commponents: {
      Avatar
    },

    data() {
      return {
        commentsArray: dataPosts.Posts[this.$props.ID - 1].Comments
      }
    }
  }
</script>

<style type="scss">
  .comments {
    width: 100%;
    max-height: 450px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .comments::-webkit-scrollbar {
    display: none;
  }

  .comments__item {
    display: flex;
    margin-top: 30px;
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
  }

  .commentText {
    margin: 4px 0 0 6px;
    color: var(--color-contrast);
    font-size: 15px;
  }
</style>