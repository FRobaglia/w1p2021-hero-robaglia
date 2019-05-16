<template>
  <div class="big-header">
    <Menu v-bind:gameService="gameService" > </Menu>
    <h1> {{ step.title }} </h1>
    <br />
    <div class="choices">
    <div v-on:click="doEffects(action)" class="button" v-for="action in step.actions" :key="action.path"> 
      <div > {{ action.description }}  </div>
    </div>
    </div>
  </div>
</template>

<script>

import game from '../data.json'; 
import Menu from './Menu.vue';
import gameService from '../services/gameService.js'

gameService.save()

export default {
  data() {
    return {
      gameService: gameService,
      step: this.getStep()
    };
  },
  methods: {
    getStep() {
      return game.steps.find(step => step.id === parseInt(this.$route.params.id))
    },
    doEffects(action) {

      if (action.newState) {
        gameService.updateStats(action.newState);

        if (action.newState.gold) {
        gameService.gold = parseInt(gameService.gold) + action.newState.gold;
        }
        gameService.save();
      }

      if (action.path === "win") {
        this.$router.push({path: '/win'})
      } else if (action.path === "lose") {
        this.$router.push({path: '/lose'})
      }

      if (action.path) {
        this.$router.push({params: {id: action.path}})
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.step = this.getStep()
    }
  },
  components: {
    Menu
  }
};

</script>
