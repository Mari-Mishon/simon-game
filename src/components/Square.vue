<template>
  <span
    :class="getBoardItemClasses"
    @click="select(square.id)"
  ></span>
</template>

<script>
import { FIELD, GAME_STATUS } from "@/constants";
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
    const getBoardItemClasses = computed(() => {
      let classes = "item ";

      if (
        props.square.value === FIELD.FIELD &&
        props.squareState === GAME_STATUS.PREVIEW
      ) {
        classes += "active";
      }
      return classes;
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
.item {
  display: inline-block;
  position: relative;
  background: #ff66ff;
  width: 98px;
  height: 98px;
  margin: 1px;
  cursor: pointer;
}

.item.active {
  display: inline-block;
  position: relative;
  background: #ff66ff;
  width: 98px;
  height: 98px;
  margin: 1px;
  cursor: pointer;
  background: #f8988f;
}
</style>
