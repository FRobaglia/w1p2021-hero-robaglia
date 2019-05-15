<template>
  <router-link
    class="character"
    to="/game/1">
    
    <div class="black">
      <h2>{{ character.class }}</h2>
      <div class="stats">
        <h3>Chance : {{ character.stats.luck }}</h3>
        <h3>Puissance : {{ character.stats.power }}</h3>
        <h3>Rapidité : {{ character.stats.speed }}</h3>
        <h3>Armure : {{ character.stats.defense }}</h3>
      </div>
      <p> {{ character.description }}</p>
    </div>
  </router-link>
</template>


<style scoped>
p {
  font-style: italic;
  margin-top: 45px;
}
h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 37px;
  font-weight: bold;
}

h3 {
  margin: 4px;
  font-size: 20px;
}

.character {
  background-color: white;
  filter: brightness(65%);
  background-position: cover;
  background-size: cover;
  background-repeat: no-repeat;
  transition: filter 0.2s, transform 0.2s;
  text-decoration: none;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 200px;
  margin: 20px;
  padding: 20px;
  color: black;
}

.character:hover {
  filter: brightness(100%);
  transform: scale(1.15);
}
</style>

<script>
export default {
  props: ["character"]
};
</script>
