<template>
  <div>
    <input type="file" ref="fileInput" class="mediaInput" accept="image/*" @change="handleMediaSelect" />
    <IconPicture class="addMedia-btn" @click="$refs.fileInput.click()" />
  </div>
</template>

<script>
  import IconPicture from '../icons/IconPicture.vue'
  
  export default {
    components: {
      IconPicture
    },

    methods: {
      handleMediaSelect(event) {
        const file = event.target.files[0]
        const url = URL.createObjectURL(file)

        // Saves the file to temporary memory
        sessionStorage.setItem('selectedMedia', url)
      }
    }
  }
</script>

<style>
  .mediaInput {
    display: none;
  }

  .addMedia-btn {
    position: absolute;
    width: 31px;
    height: max-content;
    bottom: 23.5px;
    right: 84px;
    fill: var(--color-contrast);
  }

  .addMedia-btn:hover {
    cursor: pointer;
    fill: var(--color-lightBlue);
  }
</style>