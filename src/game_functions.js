export default () =>{
    this.squareState = GAME_STATUS.PREVIEW;
    for (let i = 0; i < this.roundNumber; i++) {
      const index = this.random(0, this.number);
      if (this.squares[index].value !== FIELD.FIELD) {
        this.squares[index].value = FIELD.FIELD;
      }
    }

    setTimeout(() => {
      this.squareState = GAME_STATUS.STARTED;
    }, GAME_LEVELS.EASY_LEVEL);
  }, {
    this.squareState = GAME_STATUS.PREVIEW;
    for (let i = 0; i < this.roundNumber; i++) {
      const index = this.random(0, this.number);
      if (this.squares[index].value !== FIELD.FIELD) {
        this.squares[index].value = FIELD.FIELD;
      }
    }

    setTimeout(() => {
      this.squareState = GAME_STATUS.STARTED;
    }, GAME_LEVELS.EASY_LEVEL);
  },