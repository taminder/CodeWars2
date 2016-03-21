function Tutor() {
    /*
     Notifies the tutor that the player has performed an action.
     Will update the tutor and give advice to the player.
     */
    this.notify = function(gameState) {
    }
    
    function updateTextBox(newString) {
        ClippyMessage.text = newString;
    }
    
    function messageWelcome() {
        updateTextBox("Hello, new commander!\nHelp our troubled seafarers with the power of coding!\n");
    }
    
    function messageIncorrectSyntax() {
        updateTextBox("You wrote your code incorrectly.\nIt should look like this:\n");
    }
    
    function messageLeavingObjective() {
        updateTextBox("You moved away from the object.\nTry moving in the other direction.\n");
    }
}