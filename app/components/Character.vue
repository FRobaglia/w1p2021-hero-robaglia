<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/game/1">Commencer le jeu</router-link>
  </div>
</template>

<script>

let game = require('../data.json')

export default {
  data() {
    return {
      message: 'Page de customisation du héros'
    };
  }
};

</script>
