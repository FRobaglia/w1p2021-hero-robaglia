<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>

    <div class="characters">
    <Character v-for="character in characters" v-bind:character="character" :key="character.name">
    </Character>
    </div>

    <br>
  </div>
</template>

<script>
import Character from "./Character.vue";
import game from '../datatwo.json'

export default {
  data() {
    return {
      message: "Je suis un ...",
      characters: game.characters
    };
  },
  components: {
    Character
  }
};
</script>
