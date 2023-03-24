<template>
  <h1 class="title">JAKIŚ TYTUŁ</h1>

  <div class="item">
    <span class="item__title">NAZWA JAKIEGOŚ USTAWIENIA</span>
  </div>

  <div class="item">
    <span class="item__title">NAZWA JAKIEGOŚ USTAWIENIA</span>
  </div>
</template>

<style type="scss">
  .title {
    color: var(--color-contrast);
    font-size: 22px;
    margin-top: 27px;
  }

  .item {
    width: 100%;
    height: max-content;
    margin-top: 27px;
    padding: 19px 30px;
    border-radius: 14px;
    background-color: var(--color-background2);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .item__title {
    color: var(--color-lightGray);
    font-size: 16px;
  }
</style>