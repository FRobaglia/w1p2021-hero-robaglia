 <template>
 <div class="menu-wrapper">  
   <div class="menu">
  <div class="user-state"> 
    <h2 class="golds"> {{ gameService.gold }} </h2>
    <h2 class="health"> {{ gameService.health }} / 100</h2>
  </div>
  
  <div class="user-stats"> 
    <h2> Chance  <span> {{ gameService.stats.luck }} </span></h2>
    <h2> Puissance  <span> {{ gameService.stats.power }} </span></h2>
    <h2> Vitesse  <span> {{ gameService.stats.speed }} </span></h2>
    <h2> Armure  <span> {{ gameService.stats.armor }} </span></h2>
  </div>

  </div>
 </div> 
</template>

<style scoped>

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
