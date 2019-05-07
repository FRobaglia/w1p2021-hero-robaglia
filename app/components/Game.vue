<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/">Retourner à la homepage</router-link>
  </div>
</template>

<script>

let game = require('../data.json')

export default {
  data() {
    return {
      message: 'Game'
    };
  }
};

</script>
