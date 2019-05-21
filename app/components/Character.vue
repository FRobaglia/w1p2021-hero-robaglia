<template>
  <article
    class="character"
    to="/game/1">
    
    
    <div class="black">
      <h2>{{ character.class }}</h2>
      <div class="stats">
        <h3>Chance : {{ character.stats.luck }} </h3>
        <h3>Puissance : {{ character.stats.power }} </h3>
        <h3>Agilité : {{ character.stats.agility }} </h3>
        <h3>Points de vie : {{ character.stats.health }} </h3>
      </div>
      <p> {{ character.description }}</p>
    </div>
  </article>
</template>


<style scoped>
p {
  padding: 5px;
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
  cursor: pointer;
  font-weight: bold;
  filter: brightness(55%);
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
  padding: 25px;
  color: white;
}

.character:hover {
  filter: brightness(100%);
  transform: scale(1.15);
}
</style>

<script>


import imgs from '../assets/imgs'
export default {
  props: ["character"],
};
</script>
