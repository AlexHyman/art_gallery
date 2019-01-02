<template>
  <div class="nav-search">
    <h1 class="nav-search__title">艺术长廊</h1>
    <p class="nav-search__subtitle">畅游艺术世界 品味别样人生</p>
    <div class="nav-search-form-group">
      <input
        type="text"
        class="nav-search-form-group__input"
        placeholder="艺术家/艺术品"
        autocomplete="off"
      >
    </div>
  </div>
</template>

<style lang="scss">
.nav-search {
  text-align: center;
  background-color: #60bff2;
  & .nav-search__title {
    padding-top: 30px;
    font-size: 56px;
    color: #fff;
    text-shadow: -5px 5px 0 rgba(0, 0, 0, 0.1);
  }
  & .nav-search__subtitle {
    padding-top: 30px;
    color: #fff;
    font-size: 20px;
  }
  & .nav-search-form-group {
    padding-top: 30px;
    padding-bottom: 90px;
    & .nav-search-form-group__input {
      width: 600px;
      height: 50px;
      font-size: 16px;
      text-align: center;
      border-color: transparent;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {};
  }
};
</script>
