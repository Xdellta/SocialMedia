<script>
  import dataPosts from '../assets/data/data-posts.json'
  import dataUsers from '../assets/data/data-users.json'

  import NewPost from './NewPost.vue'

  import IconAddEmoji from './icons/IconAddEmoji.vue'
  import EmojiLike from './icons/EmojiLike.vue'
  import EmojiLove from './icons/EmojiLove.vue'
  import EmojiHaha from './icons/EmojiHaha.vue'
  import EmojiAngry from './icons/EmojiAngry.vue'
  import EmojiSad from './icons/EmojiSad.vue'
  import EmojiWow from './icons/EmojiWow.vue'
  import EmojiYa from './icons/EmojiYa.vue'

  export default {
    components: {
      NewPost,
      IconAddEmoji,
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
        usersArray: dataUsers.Users,
        reactionsClicked: {}
      }
    },

    computed: {
      filteredAuthors() {
        return this.usersArray.filter(user => {
          return this.postsArray.map(post => post.UserID).includes(user.ID.toString())
        })
      }
    },

    methods: {
      toggleReaction(postId, reactionName) {
        if (!this.reactionsClicked[postId]) {
          this.reactionsClicked[postId] = {}
        }

        if (this.reactionsClicked[postId][reactionName]) {
          this.reactionsClicked[postId][reactionName] = false
          this.postsArray.find(post => post.ID === postId).Reactions.find(r => r.ReactionName === reactionName).ReactionValue--
        } else {
          this.reactionsClicked[postId][reactionName] = true
          this.postsArray.find(post => post.ID === postId).Reactions.find(r => r.ReactionName === reactionName).ReactionValue++
        }
      }
    }
  }
</script>

<template>
  <div class="posts">
    <h1 class="posts__title">POPULARNE POSTY</h1>

    <NewPost />

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
            <span :class="{ reactionValue: true, active: reactionsClicked[post.ID] && reactionsClicked[post.ID][reaction.ReactionName] }" v-if="reaction.ReactionValue > 0">{{ reaction.ReactionValue }}</span>
            
            <EmojiLike class="emoji" v-if="reaction.ReactionName === 'Like'" @click="toggleReaction(post.ID, 'Like')" />
            <EmojiLove class="emoji" v-if="reaction.ReactionName === 'Love'" @click="toggleReaction(post.ID, 'Love')" />
            <EmojiHaha class="emoji" v-if="reaction.ReactionName === 'Haha'" @click="toggleReaction(post.ID, 'Haha')" />
            <EmojiAngry class="emoji" v-if="reaction.ReactionName === 'Angry'" @click="toggleReaction(post.ID, 'Angry')" />
            <EmojiSad class="emoji" v-if="reaction.ReactionName === 'Sad'" @click="toggleReaction(post.ID, 'Sad')" />
            <EmojiWow class="emoji" v-if="reaction.ReactionName === 'Wow'" @click="toggleReaction(post.ID, 'Wow')" />
            <EmojiYa class="emoji" v-if="reaction.ReactionName === 'Ya'" @click="toggleReaction(post.ID, 'Ya')" />
          </div>

          <div class="addEmoji">
            <IconAddEmoji class="IconAddEmoji"/>

            <div class="addEmoji-table">
              <EmojiLike class="emoji" @click="toggleReaction(post.ID, 'Like')" />
              <EmojiLove class="emoji" @click="toggleReaction(post.ID, 'Love')" />
              <EmojiHaha class="emoji" @click="toggleReaction(post.ID, 'Haha')" />
              <EmojiAngry class="emoji" @click="toggleReaction(post.ID, 'Angry')" />
              <EmojiSad class="emoji" @click="toggleReaction(post.ID, 'Sad')" />
              <EmojiWow class="emoji" @click="toggleReaction(post.ID, 'Wow')" />
              <EmojiYa class="emoji" @click="toggleReaction(post.ID, 'Ya')" />
            </div>
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
    width: 29px;
    height: max-content;
  }

  .emoji:hover {
    cursor: pointer;
    transition: 0.8s;
    transform: scale(1.04) rotate(360deg);
  }

  .reactionValue {
    height: 20px;
    margin-right: -5px;
    padding: 0 9px 0 7px;
    display: flex;
    align-items: center;
    border-radius: 7px 0 0 7px;
    background-color: var(--color-contrast);
    color: var(--color-background1);
    font-size: 14px;
  }

  .reactionValue.active {
    background-color: var(--color-lightBlue);
  }

  .addEmoji {
    position: relative;
    display: flex;
  }

  .addEmoji:hover > .addEmoji-table {
    display: flex;
  }

  .IconAddEmoji {
    position: relative;
    width: 34px;
    height: max-content;
    fill: #FFDA6A;
    margin-left: 22px;
    z-index: 1;
  }

  .IconAddEmoji:hover {
    cursor: pointer;
  }

  .addEmoji-table {
    position: absolute;
    top: -3px;
    right: -3px;
    padding: 38px 6px 6px 6px;
    display: none;
    flex-direction: column;
    background-color: var(--color-background2);
    box-shadow: 0 0 16px 3px var(--color-background1);
    border-radius: 12px;
  }

  .addEmoji-table > .emoji {
    width: 27px;
    margin-top: 7px;
    margin-bottom: 7px;
  }

  /* main section */
  .PostText {
    color: var(--color-contrast);
  }
</style>