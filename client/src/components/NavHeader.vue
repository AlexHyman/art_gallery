<template>
  <header class="nav-header">
    <div class="nav-header-content wrap">
      <p class="nav-header-content-left">
        <router-link to="/">
          <a class="nav-header-content-left__a">首页</a>
        </router-link>
        <router-link to="/ArtistsList">
          <a class="nav-header-content-left__a">艺术家</a>
        </router-link>
        <router-link to="/ArtworksList">
          <a class="nav-header-content-left__a">艺术品</a>
        </router-link>
        <router-link to="/RankingLists">
          <a class="nav-header-content-left__a">排行榜</a>
        </router-link>
        <router-link to="/Upload">
          <a class="nav-header-content-left__a">上传</a>
        </router-link>
      </p>
      <p class="nav-header-content-right">
        <router-link to="/UserHome">
          <a class="nav-header-content-right__a">个人主页</a>
        </router-link>
        <a
          href="#"
          class="nav-header-content-right-login"
          v-on:click="text()"
        >登录</a>
        <a
          href="#"
          class="nav-header-content-right-signin"
        >注册</a>
      </p>
    </div>
  </header>
</template>

<style lang="scss">
.nav-header {
  font-size: 16px;
  background-color: #60bff2;
  & .nav-header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .nav-header-content-left {
      display: flex;
      margin: 20px 0 60px 20px;
      & .nav-header-content-left__a {
        margin-left: 20px;
        color: #fff;
        &:hover {
          color: #eee;
          cursor: pointer;
        }
      }
    }
    & .nav-header-content-right {
      display: flex;
      margin: 20px 20px 60px 0;
      & .nav-header-content-right__a,
      & .nav-header-content-right-login,
      & .nav-header-content-right-signin {
        margin-right: 20px;
        color: #fff;
        &:hover {
          color: #eee;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    text: function() {
      var XHR = new XMLHttpRequest();
      XHR.open(
        "GET",
        "https://easy-mock.com/mock/5c2cad808d1b36437710d6f0/example/mock ",
        true
      );
      XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      XHR.send();
      XHR.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let data = JSON.parse(this.responseText);
          console.log(data);
        }
      };
    }
  }
};
</script>
