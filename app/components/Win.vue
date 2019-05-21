<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/">Rejouer</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Vous avez sauvé le village, bravo !",
    };
  }
};
</script>
