<template>
  <div class="big-header">
    <strong class="won"> Vous avez gagné ! </strong>
    <h1>{{ message }}</h1>
    <br />
    <router-link v-on:click.native="gameService.resetData()" class="button" to="./home">Rejouer</router-link>
  </div>
</template>

<style>

.won {
  color: green;
  font-size: 60px;
  padding-bottom: 35px;
}

</style>

<script>
import gameService from '../services/gameService.js'

export default {
  data() {
    return {
      gameService: gameService,
      message: "Vous avez sauvé le village, bravo !",
    };
  }
};
</script>
