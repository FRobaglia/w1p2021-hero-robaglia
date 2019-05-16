 <template>
 <div class="menu-wrapper">  
   <div class="menu">
  <div class="user-state"> 
    <h2 class="golds"> {{ gameService.gold }} </h2>
    <h2 class="health"> {{ gameService.stats.health }} / {{ gameService.maxHealth }}</h2>
  </div>
  
  <div class="user-stats"> 
    <h2 class="luck"> Chance | {{ gameService.stats.luck }} </h2>
    <h2 class="power"> Puissance |  {{ gameService.stats.power }} </h2>
    <h2 class="speed"> Agilité |  {{ gameService.stats.agility }} </h2>
  </div>

  </div>
 </div> 
</template>

<style lang="scss" scoped>

.user-stats {
  line-height: 150%;
  font-weight: bold;

  .luck::before, .power::before, .speed::before{
    transform: translateY(6px);
    content: "";
    display: inline-block;
    margin: 2px;
    height: 22px;
    width: 22px;
    background-position: cover;
    background-size: cover;
  }

  .luck {
    color: #27ae60;
  }
  .power {
    color: #e74c3c;
  }
  .speed {
    color: #D2B48C;
  }

  .luck::before {
    background-image: url("../assets/img/clover.svg")
  }
  .power::before {
    background-image: url("../assets/img/fire.svg")
  }
  .speed::before {
    background-image: url("../assets/img/boots.svg")
  }
}
.menu-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
}

.menu {
  width: 100%;
  height: 100%;
  position: relative;
}

</style>
<script>

export default {
  props: ["gameService"]
};
</script>
