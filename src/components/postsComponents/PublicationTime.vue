<template>
  <span class="PostAuthor-timeAdded" v-if="postPublicationTime != null">
    {{ postPublicationTime[0].PublicationTime }}
  </span>
</template>
  
<script>
  import dataPosts from '../../assets/data/data-posts.json'
  
  export default {
    props: ['UserID'],
  
    data() {
      return {
        postsArray: dataPosts.Posts,
        postPublicationTime: null
      }
    },
  
    mounted() {
      this.postPublicationTime = this.postsArray.filter(post => post.UserID == this.$props.UserID)

      const PublicationTime = new Date(this.postPublicationTime[0].PublicationTime)
      const now = new Date()
      const timeDiff = Math.round((now - PublicationTime) / (1000 * 60)) // time difference in minutes

      if (timeDiff < 60) this.postPublicationTime[0].PublicationTime = timeDiff + ' min.'
      if (timeDiff >= 60) this.postPublicationTime[0].PublicationTime = Math.round(timeDiff / 60) + ' godz.'
      if (timeDiff / 60 >= 24) this.postPublicationTime[0].PublicationTime = Math.round(timeDiff / 60 / 24) + ' dni'
      if (Math.round(timeDiff / 60 / 24) == 1) this.postPublicationTime[0].PublicationTime = '1 dzień'
      if (timeDiff / 60 / 24 >= 365) this.postPublicationTime[0].PublicationTime = Math.round(timeDiff / 60 / 24 / 365) + ' lata'
      if (Math.round(timeDiff / 60 / 24 / 365) == 1) this.postPublicationTime[0].PublicationTime = '1 rok'
    }
  }
</script>