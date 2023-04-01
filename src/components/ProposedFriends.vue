<script>
  import dataMe from '../assets/data/data-me.json'
  import dataUsers from '../assets/data/data-users.json'

  import IconArrow from './icons/IconDownArrow.vue'

  export default {
    components: {
      IconArrow
    },

    data() {
      return {
        nonFriends: [],
        container: null
      }
    },

    mounted() {
      this.container = this.$refs.container;
    },

    methods: {
      getNonFriends() {
        return dataUsers.Users.filter(user => !dataMe.Me.Friends.includes(user.ID));
      },

      scrollLeft() {
        this.container.scrollBy({
          left: 510,
          behavior: 'smooth'
        });
      },

      scrollRight() {
        this.container.scrollBy({
          left: -510,
          behavior: 'smooth'
        });
      }
    },

    created() {
      this.nonFriends = this.getNonFriends();
    }
  }
</script>

<template>
  <div class="ProposedFriends">
    <h1 class="ProposedFriends__title">PROPONOWANI ZNAJOMI</h1>

    <div class="ProposedFriends__container" ref="container">
      <button id="scrollLeft-btn" @click="scrollLeft">
        <IconArrow class="IconArrow" />
      </button>

      <router-link to="/" v-for="user in nonFriends" :key="user.ID" class="linkBox">
        <div class="linkBox__wrapper">
          <img :src="user.Avatar" :alt="'avatar '+ user.FirstName +' '+ user.LastName" class="linkBox__front">
          <div class="linkBox__back">
            {{ user.FirstName + ' ' + user.LastName }}
          </div>
        </div>
      </router-link>

      <button id="scrollRight-btn" @click="scrollRight">
        <IconArrow class="IconArrow" />
      </button>
    </div>
  </div>
</template>

<style type="scss">
  .ProposedFriends {
    position: relative;
    width: 750px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .ProposedFriends__title {
    color: var(--color-contrast);
    font-size: 22px;
    margin-bottom: 20px;
  }

  .ProposedFriends__container {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: auto;
  }

  .ProposedFriends__container::-webkit-scrollbar {
    display: none;
  }

  .linkBox {
    height: 100%;
    width: 150px;
    margin-right: 20px;
  }

  .linkBox:hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  .linkBox__wrapper {
    position: relative;
    height: 100%;
    perspective: 1000px;
  }

  .linkBox__front {
    height: 100%;
    border-radius: 14px;
    transition: transform 1s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  .linkBox__back {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotateY(-180deg);
    transition: transform 1s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    border-radius: 14px;
    text-align: center;
    background-color: var(--color-background2);
    color: var(--color-contrast);
  }

  .linkBox:hover .linkBox__front {
    transform: rotateY(180deg);
  }

  .linkBox:hover .linkBox__back {
    transform: rotateY(0deg);
  }

  #scrollLeft-btn {
    position: absolute;
    width: 46px;
    height: 46px;
    margin-top: 50px;
    right: 2px;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0.747);
    border-radius: 50%;
    z-index: 2;
  }

  #scrollRight-btn {
    position: absolute;
    width: 46px;
    height: 46px;
    margin-top: 50px;
    left: 2px;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0.747);
    border-radius: 50%;
    z-index: 2;
  }

  #scrollLeft-btn > .IconArrow {
    width: 33px;
    height: max-content;
    transform: rotate(-90deg);
    margin: auto;
    fill: white;
  }

  #scrollRight-btn > .IconArrow {
    width: 33px;
    transform: rotate(90deg);
    height: max-content;
    margin: auto;
    fill: white;
  }

  #scrollLeft-btn:hover, #scrollRight-btn:hover {
    transform: scale(1.025);
    cursor: pointer;
  }
</style>