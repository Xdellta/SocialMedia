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

      <router-link to="/" v-for="user in nonFriends" :key="user.ID">
        <img :src="user.Avatar" :alt="'avatar '+ user.FirstName +' '+ user.LastName" class="container__item">
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
    width: 100%;
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

  .container__item {
    height: 100%;
    width: 150px;
    border-radius: 14px;
    background-color: var(--color-background2);
    margin-right: 20px;
  }

  .container__item:hover {
    cursor: pointer;
    transform: scale(1.01);
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