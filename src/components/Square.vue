<template>
  <span :class="getBoardItemClasses" @click="select(square.id)"></span>
</template>

<script>
import { FIELD, GAME_STATUS, CELL } from "@/constants";
import { computed } from "vue";

export default {
  name: "Square",
  props: {
    square: {
      type: Object,
      require: true,
    },
    squareState: {
      type: Number,
      require: false,
      default: GAME_STATUS.NONE,
    },
  },

  setup(props) {
    const maybeSetActive = (classes) => {
      if (
        props.square.value === FIELD.FIELD &&
        props.squareState === GAME_STATUS.PREVIEW
      ) {
        return (classes += "highlight");
      }
      return classes;
    };

    const getBoardItemClasses = computed(() => {
      let classes = "square";
      switch (props.square.id) {
        case CELL.CELL_1:
          classes += CELL.CELL_1 + " ";
          break;
        case CELL.CELL_2:
          classes += CELL.CELL_2 + " ";
          break;
        case CELL.CELL_3:
          classes += CELL.CELL_3 + " ";
          break;
        case CELL.CELL_4:
          classes += CELL.CELL_4 + " ";
          break;
        default:
          break;
      }

      return maybeSetActive(classes);
    });
    return { getBoardItemClasses };
  },
  methods: {
    select(id) {
      if (this.squareState === GAME_STATUS.STARTED) {
        this.$emit("selectSquare", id);
      }
    },
  },
};
</script>


<style lang="scss">
@import "../assets/style.scss";

.square1 {
  @extend %item-shared;
  background: rgb(142, 142, 250);
}

.square1.highlight,
.square1:active {
  @extend %item-shared;
  background: blue;
}

.square2 {
  @extend %item-shared;
  background: rgb(247, 138, 138);
}

.square2.highlight,
.square2:active {
  @extend %item-shared;
  background: red;
}

.square3 {
  @extend %item-shared;
  background: rgb(139, 252, 139);
}

.square3.highlight,
.square3:active {
  @extend %item-shared;
  background: rgb(2, 214, 2);
}

.square4 {
  @extend %item-shared;
  background: rgb(243, 243, 128);
}

.square4.highlight,
.square4:active {
  @extend %item-shared;
  background: yellow;
}
</style>
