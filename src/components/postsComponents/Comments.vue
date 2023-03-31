<template>
  <div class="comments">

    <div class="comments__item" v-for="comment, index in commentsArray" :key="index" :class="{ marginLeft30: index %2 == 1 }">
      <Avatar :UserID="comment.UserID" />

      <div class="commentContent">
        <span class="commentUser">
          <Nick :UserID="comment.UserID" />
        </span>

        <p class="commentText">{{ comment.Comment }}</p>
      </div>
    </div>

  </div>
</template>

<script>
  import dataPosts from '../../assets/data/data-posts.json'

  import Avatar from './Avatar.vue'
  import Nick from './Nick.vue'

  export default {
    props: ['ID'],

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
  }

  .commentText {
    margin: 4px 0 0 6px;
    color: var(--color-contrast);
    font-size: 15px;
  }
</style>