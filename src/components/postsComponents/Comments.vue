<template>
  <div class="comments">

    <div class="comments__item" v-for="comment, index in commentsArray" :key="index" :class="{ marginLeft30: index %2 == 1 }">
      <Avatar :UserID="comment.UserID" />

      <div class="commentContent">
        <div class="commentContent__header">
          <router-link to="/" class="commentUser">
            <Nick :UserID="comment.UserID" />
          </router-link>

          <span class="timeAddedComment">
            <PublicationTime :PublicationTime="comment.PublicationTime" />
          </span>
        </div>

        <p class="commentText">{{ comment.Comment }}</p>
      </div>
    </div>

  </div>

  <div class="InputComment">
    <img :src="mePersonalData.Avatar" :alt="mePersonalData.FirstName + ' ' + mePersonalData.LastName" class="InputComment__avatar" />
    <input type="text" placeholder="Dodaj nowy komentarz" class="InputComment__input" v-model="newComment" ref="commentInput">

    <IconSend class="InputComment__btn" @click="addComment" />
  </div>
</template>

<script>
  import dataPosts from '../../assets/data/data-posts.json'
  import dataMe from '../../assets/data/data-me.json'
  import dataUsers from '../../assets/data/data-users.json'

  import PublicationTime from './PublicationTime.vue'

  import IconSend from '../icons/IconSend.vue'

  export default {
    props: ['ID'],

    components: {
      IconSend,
      PublicationTime
    },

    data() {
      return {
        commentsArray: dataPosts.Posts[this.$props.ID - 1].Comments,
        mePersonalData: dataUsers.Users.find(user => user.ID == dataMe.Me.ID),
        newComment: ''
      }
    },

    methods: {
      addComment() {
        const newCommentObj = {
          UserID: this.mePersonalData.ID,
          Comment: this.newComment,
          PublicationTime: new Date().toISOString()
        }
        this.commentsArray.push(newCommentObj)
        this.newComment = ''
        this.$refs.commentInput.focus()
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

  .commentContent__header {
    display: flex;
    align-content: center;
  }

  .commentUser {
    color: var(--color-lightBlue);
    font-size: 15px;
    text-decoration: none;
  }

  .timeAddedComment {
    color: var(--color-darkGray);
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-left: 14px;
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