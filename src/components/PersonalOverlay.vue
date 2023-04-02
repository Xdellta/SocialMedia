<script setup>
  import IconBell from './icons/IconBell.vue'

  import dataMe from '../assets/data/data-me.json'
  import dataUsers from '../assets/data/data-users.json'

  const user = dataUsers.Users.find((user) => user.ID === dataMe.Me.ID);
</script>

<template>
  <div id="PersonalNav" v-if="user">
    <router-link to="/">
      <IconBell class="icon"/>
    </router-link>

    <div class="nick-logout">
      <router-link :to="`/Profil/${user.ID}`" class="nick">
        {{ user.FirstName }} {{ user.LastName }}
      </router-link>

      <span class="logout">WYLOGUJ SIĘ</span>
    </div>

    <router-link :to="`/Profil/${user.ID}`" class="avatar" >
      <img :src="user.Avatar" :alt="user.FirstName + ' ' + user.LastName" />
    </router-link>
  </div>
</template>

<style type="scss">
  #PersonalNav {
    position: fixed;
    right: 11px;
    top: 11px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
  }

  .icon {
    width: 34px;
    height: 34px;
  }

  .nick-logout {
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    margin-left: 32px;
  }

  .nick {
    color: var(--color-contrast);
    text-decoration: none;
    font-size: 19px;
  }

  .logout {
    color: var(--color-darkGray);
    font-size: 14px;
  }

  .logout:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  .avatar {
    width: 50px;
    height: 50px;
    margin-left: 17px;
  }

  .avatar > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
</style>