<template>
  <img :src="usersArray[0].Avatar" alt="avatar" class="PostAuthor-avatar">
</template>

<script>
  import dataUsers from '../../assets/data/data-users.json'

  export default {
    props: ['UserID'],

    data() {
      return {
        usersArray: dataUsers.Users,
      }
    },

    mounted() {
      this.usersArray = this.usersArray.filter(user => user.ID == this.$props.UserID)
    }
  }
</script>

<style type="scss">
  .PostAuthor-avatar {
    display: flex;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
</style>