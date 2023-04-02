<template>
  <div class="NewPost">
    <img class="NewPost-avatar" :src="mePersonalData.Avatar" :alt="'Avatar ' + mePersonalData.FirstName + ' ' + mePersonalData.LastName" />

    <textarea placeholder="Dodaj swój nowy post" spellcheck="false" class="NewPost-textarea" v-model="newPost" ref="postTextarea"></textarea>

    <SaveMedia />
    <IconSend class="NewPost-btn" @click="addPost" />
  </div>
</template>

<script>
  import dataMe from '../../assets/data/data-me.json'
  import dataUsers from '../../assets/data/data-users.json'
  import dataPosts from '../../assets/data/data-posts.json'

  import SaveMedia from './SaveMedia.vue'

  import IconSend from '../icons/IconSend.vue'

  export default {
    components: {
      SaveMedia,
      IconSend
    },

    data() {
      return {
        postsArray: dataPosts.Posts,
        mePersonalData: dataUsers.Users.find(user => user.ID === dataMe.Me.ID),
        newPost: ''
      }
    },

    methods: {
      addPost() {
        if (this.newPost.length > 0) {

          const newPostObj = {
            ID: Math.max(...this.postsArray.map(post => post.ID))+1,
            UserID: this.mePersonalData.ID,
            Text: this.newPost,
            PublicationTime: new Date().toISOString(),
            Reactions: [
              {
                "ReactionName": "Like",
                "ReactionValue": 0
              },
              {
                "ReactionName": "Love",
                "ReactionValue": 0
              },
              {
                "ReactionName": "Haha",
                "ReactionValue": 0
              },
              {
                "ReactionName": "Angry",
                "ReactionValue": 0
              },
              {
                "ReactionName": "Sad",
                "ReactionValue": 0
              },
              {
                "ReactionName": "Wow",
                "ReactionValue": 0
              },
              {
                "ReactionName": "Ya",
                "ReactionValue": 0
              }
            ],
            Comments: []
          }

          if (sessionStorage.hasOwnProperty('selectedMedia')) {
            newPostObj.Media = sessionStorage.getItem('selectedMedia');
            sessionStorage.removeItem('selectedMedia');
          } else {
            newPostObj.Media = ''
          }

          this.postsArray.push(newPostObj)
          this.newPost = ''
        }
      }
    }
  }
</script>

<style type="scss">
  .NewPost {
    position: relative;
    width: 100%;
    height: max-content;
    margin-top: 35px;
    padding: 14px 17px;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-background2);
    border-radius: 14px;
  }

  .NewPost-avatar {
    display: flex;
    width: 45px;
    height: 45px;
    margin: 0;
    border-radius: 50%;
  }
  
  .NewPost-textarea {
    height: 45px;
    width: 91%;
    padding: 12px 100px 0 24px;
    border: none;
    outline: none;
    resize: none;
    border-radius: 30px;
    background-color: var(--color-background1);
    font-size: 16px;
    color: var(--color-darkGray);
    overflow-y: auto;
  }

  .NewPost-textarea::-webkit-scrollbar {
    display: none;
  }

  .NewPost-btn {
    position: absolute;
    width: 30px;
    height: max-content;
    bottom: 21.5px;
    right: 39px;
    fill: var(--color-contrast);
  }

  .NewPost-btn:hover {
    cursor: pointer;
    transform: scale(1.02);
    fill: var(--color-lightBlue);
  }
</style>