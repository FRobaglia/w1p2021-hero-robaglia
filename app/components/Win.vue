<template>
  <div class="big-header">
    <strong class="won"> Vous avez gagné ! </strong>
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/">Rejouer</router-link>
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
export default {
  data() {
    return {
      message: "Vous avez sauvé le village, bravo !",
    };
  }
};
</script>
