<template>
  <div class="big-header">
  <div class="user-state"> 
    <h2 class="golds"> 0 </h2>
    <h2 class="health"> 100/100 </h2>
  </div>
  
  <div class="user-stats"> 
    <h2> Chance : <span> 12 </span></h2>
    <h2> Puissance : <span> 5 </span></h2>
    <h2> Vitesse : <span> 3 </span></h2>
    <h2> Armure : <span> 6 </span></h2>
  </div>
    <h1> {{ step.title }} </h1>
    <br />
    <div class="choices">
    <div v-on:click="doEffects(action)" class="button" v-for="action in step.actions" :key="action.path"> 
      <div > {{ action.description }}  </div>
    </div>
    </div>
  </div>
</template>

<script>

import game from '../datatwo.json'; 

export default {
  data() {
    return {
      step: this.getStep()
    };
  },
  methods: {
    getStep() {
      return game.steps.find(step => step.id === parseInt(this.$route.params.id))
    },
    doEffects(action) {

      if (action.path === "win") {
        this.$router.push({path: '/win'})
      } else if (action.path === "lose") {
        this.$router.push({path: '/lose'})
      }

      if (action.path) {
        this.$router.push({params: {id: action.path}})
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.step = this.getStep()
    }
  }
};

</script>
