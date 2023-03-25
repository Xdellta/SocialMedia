<template>
  <div class="PopularVideos">
    <h1 class="PopularVideos__title">KLIPY I TRANSMISJE</h1>

    <div class="PopularVideos__videos">
      <div class="videos__item"></div>
      <div class="videos__item"></div>
      <div class="videos__item"></div>
      <div class="videos__item"></div>
      <div class="videos__item"></div>
      <div class="videos__item"></div>
    </div>
  </div>
</template>

<style type="scss">
  .PopularVideos {
    width: 100%;
    height: 255px;
    padding: 0 30px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .PopularVideos__title {
    color: var(--color-contrast);
    font-size: 22px;
    margin-bottom: 20px;
  }

  .PopularVideos__videos {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
  }

  .videos__item {
    height: 100%;
    width: 150px;
    border-radius: 14px;
    background-color: var(--color-background2);
  }

  .videos__item:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
</style>