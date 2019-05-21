<template>
  <div class="big-header">
    <strong class="lost"> Vous avez perdu. </strong>
    <h1> {{ lossCause }} </h1> 
    <br />
    <router-link v-on:click.native="gameService.resetData()" class="button" to="/">Rejouer</router-link>
  </div>
</template>

<style>

.lost {
  color: red;
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
      lossCause: gameService.lossCause
    }
  },
};
</script>
