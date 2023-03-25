<script>
  import dataPosts from '../assets/data/data-posts.json'
  import dataUsers from '../assets/data/data-users.json'

  import EmojiLike from './icons/EmojiLike.vue'
  import EmojiLove from './icons/EmojiLove.vue'
  import EmojiHaha from './icons/EmojiHaha.vue'
  import EmojiAngry from './icons/EmojiAngry.vue'
  import EmojiSad from './icons/EmojiSad.vue'
  import EmojiWow from './icons/EmojiWow.vue'
  import EmojiYa from './icons/EmojiYa.vue'

  export default {
    components: {
      EmojiLike,
      EmojiLove,
      EmojiHaha,
      EmojiAngry,
      EmojiSad,
      EmojiWow,
      EmojiYa
    },

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

        <div class="reactions">

          <div class="reactions__item" v-for="reaction in post.Reactions.filter(r => r.ReactionValue > 0)" :key="reaction.ReactionName">
            <span class="reactionValue" v-if="reaction.ReactionValue > 0">{{ reaction.ReactionValue }}</span>
            <EmojiLike class="emoji" v-if="reaction.ReactionName === 'Like'" />
            <EmojiLove class="emoji" v-if="reaction.ReactionName === 'Love'" />
            <EmojiHaha class="emoji" v-if="reaction.ReactionName === 'Haha'" />
            <EmojiAngry class="emoji" v-if="reaction.ReactionName === 'Angry'" />
            <EmojiSad class="emoji" v-if="reaction.ReactionName === 'Sad'" />
            <EmojiWow class="emoji" v-if="reaction.ReactionName === 'Wow'" />
            <EmojiYa class="emoji" v-if="reaction.ReactionName === 'Ya'" />
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
    padding: 18px;
    margin-top: 35px;
    margin-bottom: 20px;
    border-radius: 14px;
    background-color: var(--color-background2);
    display: flex;
    flex-wrap: wrap;
  }

  /* header */
  .item__header {
    width: 100%;
    height: max-content;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* header - left section */
  .PostAuthor {
    display: flex;
    align-items: center;
  }

  .PostAuthor-avatar {
    display: flex;
    width: 45px;
    height: 45px;
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

  /* header - right section */
  .reactions {
    display: flex;
    align-items: center;
  }

  .reactions__item {
    display: flex;
    align-items: center;
    margin-left: 22px;
  }

  .emoji {
    width: 33px;
    height: max-content;
  }

  .emoji:hover {
    cursor: pointer;
    transform: scale(1.025);
    transition: 0.8s;
    transform: rotate(360deg);
  }

  .reactionValue {
    height: 21px;
    margin-right: -5px;
    padding: 0 9px 0 7px;
    display: flex;
    align-items: center;
    border-radius: 7px 0 0 7px;
    background-color: var(--color-contrast);
    color: var(--color-background1);
    font-size: 20px;
  }

  /* main section */
  .PostText {
    color: var(--color-contrast);
  }
</style>