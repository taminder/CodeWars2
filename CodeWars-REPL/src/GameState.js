function GameState() {
    this.successState = SuccessState.IN_PROGRESS;
    this.playerPos = null;
    this.numTurns = 0;
    this.fieldWidth = 0;
    this.fieldHeight = 0;
    this.previousState = null;
    this.commandErrorCode = null
}