<script>
  import IconSearch from './icons/IconSearch.vue'
  import IconDownArrow from './icons/IconDownArrow.vue'

  import dataGroups from '../assets/data/data-groups.json'
  import dataMe from '../assets/data/data-me.json'
  import dataUsers from '../assets/data/data-users.json'

  export default {
    components: {
      IconSearch,
      IconDownArrow
    },

    data() {
      return {
        myGroups: [],
        myFriends: [],
        showMoreGroups: false,
        showMoreFriends: false,
        originalGroups: [],
        originalFriends: []
      }
    },

    mounted() {
      const myGroupIds = dataMe.Me.Groups.map(group => group.ID)
      this.myGroups = dataGroups.Groups.filter(group => myGroupIds.includes(parseInt(group.ID)))
      this.originalGroups = this.myGroups.slice()

      const myFriendIds = dataMe.Me.Friends.filter(friend => friend.Status === 'accepted').map(friend => friend.ID)
      this.myFriends = dataUsers.Users.filter(user => myFriendIds.includes(user.ID))
      this.originalFriends = this.myFriends.slice()

      this.myFriends.forEach(friend => {
        if (friend.Status === 'inactive') {
          const lastActive = new Date(friend.LastActive)
          const now = new Date()
          const minutesDiff = Math.round((now - lastActive) / (1000 * 60))

          if (minutesDiff < 60) friend.lastActive = minutesDiff + ' min.'
          if (minutesDiff >= 60) friend.lastActive = Math.round(minutesDiff / 60) + ' godz.'
          if (minutesDiff / 60 >= 24) friend.lastActive = Math.round(minutesDiff / 60 / 24) + ' dni'
          if (Math.round(minutesDiff / 60 / 24) == 1) friend.lastActive = '1 dzień'
          if (minutesDiff / 60 / 24 >= 365) friend.lastActive = Math.round(minutesDiff / 60 / 24 / 365) + ' lata'
          if (Math.round(minutesDiff / 60 / 24 / 365) == 1) friend.lastActive = '1 rok'
        }
      })
    },

    methods: {
      toggleShowMoreGroups() {
        this.showMoreGroups = !this.showMoreGroups
      },

      toggleShowMoreFriends() {
        this.showMoreFriends = !this.showMoreFriends
      },

      filterData(event) {
        const keyword = event.target.value.toLowerCase().trim()

        this.myGroups = this.originalGroups.filter(group => {
          return group.Name.toLowerCase().includes(keyword)
        })

        this.myFriends = this.originalFriends.filter(friend => {
          return friend.FirstName.toLowerCase().includes(keyword) || friend.LastName.toLowerCase().includes(keyword)
        })
      },
    },
  }
</script>

<template>
  <div class="SearchBox">
    <div class="box-IconSearch"><IconSearch class="IconSearch" /></div>
    <input type="text" placeholder="Wyszukaj" class="SearchInput" v-on:input="filterData">
  </div>

  <div class="scrollContainer">
    <div id="groups">
      <h1 class="title">TWOJE GRUPY:</h1>

      <div class="groups__item" v-for="group in myGroups.slice(0, showMoreGroups ? myGroups.length : 6)" :key="group.ID">
        <img :src="group.Image" :alt="group.Name" class="item-img" loading="lazy">
        {{ group.Name }}
      </div>

      <button class="collapse-expand" v-show="myGroups.length > 6" @click="toggleShowMoreGroups">
        {{ showMoreGroups ? 'POKAŻ MNIEJ' : 'POKAŻ WIĘCEJ' }}
        <IconDownArrow :class="showMoreGroups ? 'up-arrow' : 'down-arrow'" />
      </button>
    </div>

    <div id="friends">
      <h1 class="title">ZNAJOMI:</h1>

      <div class="friends__item" v-for="friend in myFriends.slice(0, showMoreFriends ? myFriends.length : 6)" :key="friend.ID">
        <div class="item__personalData">
          <img :src="friend.Avatar" :alt="friend.FirstName + ' ' + friend.FirstName" class="item-img" loading="lazy">
          {{ friend.FirstName }} {{ friend.LastName }}
        </div>

        <div class="item__status" :class="{ 'status-active': friend.Status === 'active', 'status-inactive': friend.Status === 'inactive' }">
          {{ friend.lastActive }}
        </div>
      </div>

      <button class="collapse-expand" v-show="myFriends.length > 6" @click="toggleShowMoreFriends">
        {{ showMoreFriends ? 'POKAŻ MNIEJ' : 'POKAŻ WIĘCEJ' }}
        <IconDownArrow :class="showMoreFriends ? 'up-arrow' : 'down-arrow'" />
      </button>
    </div>
  </div>
</template>

<style type="scss" scoped>
  /* search */
  .SearchBox {
    height: 47px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .ColorTheme-btn {
    fill: var(--color-darkBlue);
    width: 40px;
    height: 40px;
  }

  .ColorTheme-btn:hover {
    cursor: pointer;
    transform: scale(1.02);
    fill: var(--color-lightBlue);
  }

  .box-IconSearch {
    height: 100%;
    width: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px 0 0 12px;
    border: none;
    outline: none;
    background-color: var(--color-darkBlue);
  }

  .IconSearch {
    fill: #FFFFFF;
  }

  .SearchInput {
    width: 81.5%;
    height: 47px;
    padding: 2% 5.5%;
    border-radius: 0 12px 12px 0;
    border: none;
    outline: none;
    background-color: var(--color-background1);
    color: var(--color-contrast);
    font-size: 16px;
  }

  .SearchInput::placeholder {
    color: var(--color-darkGray);
  }

  #groups, #friends {
    width: 92%;
    height: max-content;
    display: flex;
    flex-direction: column;
  }

  /* groups & friends */
  .scrollContainer {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-left: 12px;
    margin-bottom: 15px;
  }

  .scrollContainer::-webkit-scrollbar {
    display: none;
  }

  #groups {
    margin: 8% 0 13% 0;
  }

  .title {
    font-size: 17px;
    color: var(--color-lightBlue);
    margin-bottom: 10px;
  }

  .groups__item {
    width: 100%;
    height: 33px;
    display: flex;
    align-items: center;
    margin: 6px 0;
    color: var(--color-contrast);
  }

  .friends__item {
    width: 100%;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 9px 0;
    color: var(--color-contrast);
  }

  .groups__item:hover, .friends__item:hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  .item__personalData {
    display: flex;
    align-items: center;
  }

  .item-img {
    height: 33px;
    width: 33px;
    border-radius: 50%;
    background-color: var(--color-background1);
    margin-right: 15px;
    object-fit: cover;
  }

  .status-active {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: var(--color-lightBlue);
  }

  .status-inactive {
    color: var(--color-darkGray);
    font-size: 15px;
  }

  .collapse-expand {
    width: max-content;
    color: var(--color-darkGray);
    background-color: #00000000;
    outline: none;
    border: none;
    font-size: 15px;
    margin: 15px auto 0 auto;
    display: flex;
    align-items: center;
  }

  .collapse-expand:hover {
    cursor: pointer;
    color: var(--color-lightBlue);
  }

  .down-arrow {
    fill: var(--color-darkGray);
    transition: 0.2s;
    transform: rotate(0);
  }

  .up-arrow {
    fill: var(--color-darkGray);
    transition: 0.2s;
    transform: rotate(180deg);
  }
</style>
