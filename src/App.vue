<template>
 <div class="app">
   <div class="details">
     <h1> Simon The Game</h1>
   </div>
   <Board></Board>
 </div>
</template>

<script>
import Board from "./components/Board.vue";


export default {
  name: "App",
  components: {
   Board
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
h1 {
  text-align: center;
  margin:30px;
}
}
</style>
