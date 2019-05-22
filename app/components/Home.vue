<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>

    <div class="choices">
    <router-link class="button" to="/characters">Accepter</router-link>
    <router-link class="button" to="/lose">Refuser</router-link>
    </div>
    <div class="game-background" :style="background"> </div>

  </div>
</template>


<script>
import gameService from '../services/gameService'

const background = require("../assets/img/home.jpg");

export default {
  data() {
    return {
      background: `background-image: url("${background}")`,
      gameService: gameService,
      message: "Lors d'une nuit de pleine lune, alors que vous sortiez acheter de puissants équipements, un homme étrange vous approche au détour d'une ruelle sombre... Il vous propose une quête : Depuis peu, des habitants sont retrouvés morts aux alentours du village, et personne n'en connaît les raisons... Trouver la menace, et éradiquez là !",
    };
  },
  mounted() {
    if (gameService.currentID != null) {
      console.log(gameService.currentID != null)
      this.$router.push({path: `/game/${gameService.currentID}`})
    }
  }
};
</script>
