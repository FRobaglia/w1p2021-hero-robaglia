<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br>

    <div class="choices">
    <router-link class="button" to="/characters">Accepter</router-link>
    <router-link class="button" to="/lose">Refuser</router-link>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      message: "Lors d'une nuit de pleine lune, alors que vous sortiez pour acheter de puissants équipements, un homme étrange vous approche au détour d'une ruelle sombre... Il vous propose une quête : Depuis peu, des habitants sont retrouvés morts aux alentours du village, et personne n'en connaît les raisons... Trouver la menace, et éradiquez là !",
    };
  }
};
</script>
