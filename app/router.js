import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Page from './components/Page.vue';
import Character from './components/Character.vue';
import Game from './components/Game.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/character',
      name: 'character',
      component: Character,
    },
    {
      path: '/page',
      name: 'page',
      component: Page,
    },
    {
      path: '/game/:id',
      name: 'game',
      component: Game,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
