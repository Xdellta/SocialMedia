<script setup>
  import IconBell from './icons/IconBell.vue'

  import dataMe from '../assets/data/data-me.json'
  import dataUsers from '../assets/data/data-users.json'

  const user = dataUsers.Users.find((user) => user.ID === dataMe.Me.ID);
</script>

<template>
  <div class="NewPost">
    <img class="NewPost-avatar" :src="user.Avatar" :alt="user.FirstName + ' ' + user.LastName" />

    <textarea placeholder="Dodaj swój nowy post" spellcheck="false" class="NewPost-textarea"></textarea>
  </div>
</template>

<style type="scss">
  .NewPost {
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
    width: 646px;
    padding: 0 24px;
    line-height: 45px;
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

  .NewPost-textarea:focus {
    padding: 12px 24px;
    height: 300px;
    border-radius: 14px;
    line-height: 1.2;
  }
</style>