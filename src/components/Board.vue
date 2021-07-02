<template>
  <div class="wrapper">
    <div class="board">
      <Square
        :squareState="squareState"
        v-for="square in squares"
        :square="square"
        :key="square.id"
        @selectSquare="selectSquare($event)"
      />
    </div>

    <div class="levels">
      <input type="radio" value="level_1" v-model="difficultLevel" /> Легкий
    </div>
    <div class="levels">
      <input type="radio" value="level_2" v-model="difficultLevel" /> Средний
    </div>
    <div class="levels">
      <input type="radio" value="level_3" v-model="difficultLevel" /> Сложный
    </div>

    <p>
      Раунд: <strong> {{ roundNumber }} </strong>
    </p>
    <p class="game-over" v-if="isGameOver">
      Вы проиграли после {{ roundNumber }} раундов!
    </p>

    <button @click="startGame">Старт</button>
  </div>
</template>

<script>
import Square from "./Square.vue";
import { computed, nextTick, onBeforeMount, ref } from "vue";
import {
  FIELD,
  DEFAULT_ROUND_NUMBER,
  GAME_LEVELS,
  GAME_STATUS,
} from "@/constants";

export default {
  name: `Board`,
  components: { Square },

  setup() {
    let roundNumber = ref(DEFAULT_ROUND_NUMBER);
    let squares = ref([]);
    let squareState = ref(GAME_STATUS.NONE);
    let playerMoves = ref([]);
    let simonMoves = ref([]);
    let difficultLevel = ref("level_1");
    const number = 4;

    const init = () => {
      simonMoves.value = [];
      playerMoves.value = [];
      squares.value = [];
      for (let i = 0; i < number; i++) {
        squares.value.push({
          id: i + 1,
          value: FIELD.EMPTY,
        });
      }
    };

    onBeforeMount(init);

    const difficultTimeOut = computed(() => {
      if (difficultLevel.value == "level_3") {
        return GAME_LEVELS.HARD_LEVEL;
      } else if (difficultLevel.value == "level_2") {
        return GAME_LEVELS.MIDDLE_LEVEL;
      } else {
        return GAME_LEVELS.EASY_LEVEL;
      }
    });

    const selectSquare = (id) => {
      const index = squares.value.findIndex((square) => {
        return square.id === id;
      });

      playerMoves.value.push(squares.value[index].id);

      if (index > -1) {
        checkGame();
      }
    };

    const checkGame = () => {
      if (
        playerMoves.value.every((element, index) => {
          return element == simonMoves.value[index];
        })
      ) {
        if (playerMoves.value.length == simonMoves.value.length) {
          setWinGame();
        }
      } else {
        setGameOver();
      }
    };
    const startGame = () => {
      init();
      showSquares(squares, squareState, simonMoves);
      roundNumber.value = DEFAULT_ROUND_NUMBER;
    };

    const setGameOver = () => {
      squareState.value = GAME_STATUS.GAME_OVER;
    };

    const sleep = (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };

    const showSquares = async (squares, squareState, simonMoves) => {
      squareState.value = GAME_STATUS.PREVIEW;
      const index = random(0, number - 1);
      simonMoves.value.push(squares.value[index].id);

      for (let id of simonMoves.value) {
        const simonMove = squares.value.find((square) => {
          return square.id === id;
        });
        await sleep(difficultTimeOut.value / 2);

        simonMove.value = FIELD.FIELD;
        await sleep(difficultTimeOut.value / 2);

        simonMove.value = FIELD.EMPTY;
      }
      squareState.value = GAME_STATUS.STARTED;
    };

    const setWinGame = () => {
      setTimeout(async () => {
        roundNumber.value += 1;
        playerMoves.value = [];
        await nextTick();
        showSquares(squares, squareState, simonMoves);
      }, difficultTimeOut);
    };

    const isGameOver = computed(() => {
      return squareState.value === GAME_STATUS.GAME_OVER;
    });

    return {
      roundNumber,
      number,
      squares,
      init,
      squareState,
      selectSquare,
      random,
      showSquares,
      startGame,
      isGameOver,
      difficultLevel,
      difficultTimeOut,
    };
  },
};
</script>

<style lang="scss">
.board {
  background-color: #000;
  width: 200px;
  margin: 0 auto;
}

.wrapper {
  margin-bottom: 40px;
}

button {
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 17px;
  font-family: Raleway;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}
</style>