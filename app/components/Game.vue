<template>
  <div class="big-header">
    <Menu v-bind:gameService="gameService" > </Menu>
    <h1> {{ step.title }} </h1>
    <div class="stat-change"> </div>
    <br />
    <div class="choices">
    <div v-on:click="doEffects(action)" class="button" v-for="action in step.actions" :key="action.path"> 
      <div > {{ action.description }}  </div>
    </div>
    </div>
  </div>
</template>

<script>

import game from '../data.json'; 
import Menu from './Menu.vue';
import gameService from '../services/gameService.js'

gameService.save()

export default {
  data() {
    return {
      statChange: document.querySelector(".stat-change"),
      gameService: gameService,
      step: this.getStep()
    };
  },
  methods: {
    getStep() {
      return game.steps.find(step => step.id === parseInt(this.$route.params.id))
    },
    doEffects(action) {
      console.log(this.$router.push)

      if (action.path) {
        if (action.path === "win") {
        this.$router.push({path: '/win'})
        } else if (action.path === "lose") {
          this.$router.push({path: '/lose'})
        }

        this.$router.push({params: {id: action.path}})
        this.statChange = document.querySelector(".stat-change");
        this.statChange.innerHTML = null;
      }

      if (action.newState) {
        if (action.newState.luck) {
          gameService.stats.luck += action.newState.luck;
          this.statChange.innerHTML += `<div class="luck">${action.newState.luck} Chance </div>`
          if (action.newState.luck > 0) {
            document.querySelector('.stat-change .luck').insertAdjacentHTML('afterbegin', "+")
          }
        }
        if (action.newState.power) {
          gameService.stats.power += action.newState.power;
          this.statChange.innerHTML += `<div class="power">${action.newState.power} Puissance </div>`
          if (action.newState.power > 0) {
            document.querySelector('.stat-change .power').insertAdjacentHTML('afterbegin', "+")
          }
        }
        if (action.newState.agility) {
          gameService.stats.agility += action.newState.agility;
          this.statChange.innerHTML += `<div class="speed">${action.newState.agility} Agilité </div>`
          if (action.newState.agility > 0) {
            document.querySelector('.stat-change .speed').insertAdjacentHTML('afterbegin', "+")
          }
        }
        if (action.newState.health) {
          gameService.stats.health += action.newState.health + gameService.stats.power;
          this.statChange.innerHTML += `<div class="health">${action.newState.health + gameService.stats.power} Points de vie </div>`
           if (action.newState.health > 0) {
            document.querySelector('.stat-change .health').insertAdjacentHTML('afterbegin', "+")
          }
        }

        if (action.newState.agilityTry) {
          if (action.newState.agilityTry > gameService.stats.agility) {
            this.$router.push({path: '/lose'})
            gameService.lossCause = "Pensez à faire des choix cohérents avec vos statistiques, vous manquiez d'agilité pour effectuer cette action sans vous exposer à une mort certaine."
          }
        }

        if (action.newState.merchant) {
          gameService.merchant = true;
        }

        if (action.newState.gold) {
          gameService.gold = parseInt(gameService.gold) + action.newState.gold;
          this.statChange.innerHTML += `<div class="gold">${action.newState.gold} Pièces d'or </div>`
          if (action.newState.gold > 0) {
            document.querySelector('.stat-change .gold').insertAdjacentHTML('afterbegin', "+")
          }
        }
        gameService.save();
      }

        if (action.goMerchant) {
          if (gameService.merchant) {
            gameService.stats.agility += 5;
            gameService.save();
            this.$router.push({params: {id: "15"}})
            this.statChange.innerHTML = `<div class="speed"> +5 Agilité </div>`
          }
        }

        if (action.bet) {
          let didPlayerWin = Math.random() >= 0.5;
          if (didPlayerWin) {
            gameService.gold = parseInt(gameService.gold) + 50;
            gameService.save();
            this.statChange.innerHTML = `La pièce est tombée sur pile ! <div class="gold"> +50 Pièces d'or </div>`
          } else {
            gameService.gold = parseInt(gameService.gold) - 50;
            gameService.save();
            this.statChange.innerHTML = `Face, vous perdez ! <div class="gold"> -50 Pièces d'or </div>`
          }
          this.$router.push({params: {id: "13"}})
        }

        if (action.lossCause) {
          gameService.lossCause = action.lossCause;
          this.$router.push({path: '/lose'})
        }

    }
  },
  watch: {
    '$route' (to, from) {
      this.step = this.getStep()
    }
  },
  components: {
    Menu
  }
};

</script>
