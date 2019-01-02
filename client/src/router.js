import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 路由懒加载
function loadView(view) {
  return () => import( /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: loadView('Home')
    },
    {
      path: "/ArtistsList/:id",
      name: "ArtistsList",
      redirect: '/ArtistsList/:id/ArtistHome',
      component: loadView('ArtistsList'),
      children: [{
        path: "/ArtistsList/ArtistHome",
        component: loadView('ArtistHome'),

      }]
    },
    {
      path: "/ArtworksList/:id",
      name: "ArtworksList",
      redirect: '/ArtworksList/:id/ArtworksHome',
      component: loadView('ArtworksList'),
      children: [{
        path: "/ArtworksList/ArtworksHome",
        component: loadView('ArtworksHome'),
      }]
    },
    {
      path: "/RankingLists/:id",
      name: "RankingLists",
      redirect: '/RankingLists/:id/RankingListHome',
      component: loadView('RankingLists'),
      children: [{
        path: "/RankingLists/RankingListHome",
        component: loadView('RankingListHome'),
      }]
    },
    {
      path: "/Upload",
      name: "Upload",
      component: loadView('Upload')
    },
    {
      path: "/UserHome",
      name: "UserHome",
      component: loadView('UserHome')
    },
  ]
});