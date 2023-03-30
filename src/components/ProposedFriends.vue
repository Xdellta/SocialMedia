<script>
  import dataMe from '../assets/data/data-me.json'
  import dataUsers from '../assets/data/data-users.json'

  export default {
    data() {
      return {
        nonFriends: []
      }
    },

    methods: {
      getNonFriends() {
        return dataUsers.Users.filter(user => !dataMe.Me.Friends.includes(user.ID));
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

    <div class="ProposedFriends__container">
      <router-link to="/" v-for="user in nonFriends" :key="user.ID">
        <img :src="user.Avatar" :alt="'avatar '+ user.FirstName +' '+ user.LastName" class="container__item">
      </router-link>
      </div>
  </div>
</template>

<style type="scss">
  .ProposedFriends {
    width: 100%;
    margin-top: 25px;
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
    width: max-content;
    height: 150px;
    display: flex;
    flex-direction: row;
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
</style>