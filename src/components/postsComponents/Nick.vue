<template>
  {{ usersArray[0].FirstName + ' ' + usersArray[0].LastName }}
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