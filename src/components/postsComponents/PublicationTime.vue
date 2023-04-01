<template>
  {{ time }}
</template>

<script>
  export default {
    props: ['PublicationTime'],
  
    data() {
      return {
        time: null
      }
    },

    mounted() {
      const now = new Date()
      const timeDiff = Math.round((now - new Date(this.PublicationTime)) / (1000 * 60)) // time difference in minutes

      if (timeDiff < 1) this.time = 'Teraz'
      if (timeDiff < 60 && timeDiff >= 1) this.time = timeDiff + ' min.'
      if (timeDiff >= 60) this.time = Math.round(timeDiff / 60) + ' godz.'
      if (timeDiff / 60 >= 24) this.time = Math.round(timeDiff / 60 / 24) + ' dni'
      if (Math.round(timeDiff / 60 / 24) == 1) this.time = '1 dzień'
      if (timeDiff / 60 / 24 >= 365) this.time = Math.round(timeDiff / 60 / 24 / 365) + ' lata'
      if (Math.round(timeDiff / 60 / 24 / 365) == 1) this.time = '1 rok'
    }
  }
</script>