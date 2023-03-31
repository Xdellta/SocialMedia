<template>
  <img src="" alt="" class="commentAvatar">
</template>

<script>
  import dataUsers from '../../../assets/data/data-users.json'

  export default {
    props: ['UserID'],

    data() {
      return {
        usersArray: dataUsers.Users,
      }
    },

    mounted() {
      this.usersArray = this.usersArray.filter(user => user.ID == this.$props.UserID)

      console.log(this.usersArray)
    }
  }
</script>

<style type="scss">
  .commentAvatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
</style>