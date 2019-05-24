<template>
  <div class="big-header">
    <strong class="won"> Vous avez gagné ! </strong>
    <img style="width: 40%" src="../assets/img/allmight.gif">
    <h1 style="margin-top: 30px"> Vous avez sauvé le village, bravo ! Vous finissez la partie avec <span class="gold"> {{ gameService.gold }} pièces d'or </span> et <span class="health"> {{ gameService.stats.health }} / {{ gameService.maxHealth }} points de vie </span>. Essayez de faire mieux !</h1>
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
      gameService: gameService
    };
  }
};
</script>
