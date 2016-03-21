var ee = require('event-emitter');

function Tutor(vm, levels) {
    this._vm = vm;
    this._levels = levels;
    this._emitter = ee({});

    this._vm.listenToStateChange(this.onVmStateChange.bind(this));
    this._vm.listenToErrors(this.onVmError.bind(this));

    this._previousState = {};
    this._previousLevel = null;

    setTimeout(function () {
        this._showInitialMessages();
    }.bind(this), 0);
}

var INITIAL_MESSAGES = [

    "Welcome to CodeRescue 2!",
    "Was there ever a CodeRescue 1? No, we don't talk about that.",
    "Let me start with a poem:",
    "Red skies at night: sailors' delight. Red skies in the morning: sailors' take warning.",
    "This was a quote popular among mariners from a long time ago.",
    "Hopefully, this quote put you in the mood to drive our drone ship today.",
    "Ahem ... now for the official introduction.",
    "Welcome to your first day at Automated Rescue DroneShip!",
    "Today, you will control our Bimodal Oceanic Ambulance Transit, or shortly: BOAT.",
    "The BOAT is designed to move into a dangerous situation and rescue survivors.",
    "To start the game, type `startLevel(1);` in the code window."

];
Tutor.prototype = {
<<<<<<< HEAD
    /*
     Notifies the tutor that the player has performed an action.
     Will update the tutor and give advice to the player.
     */
notify: function (gameState) {
    
},
    
updateMessage: function (newString) {
    this._emitter.emit('messageChange', newString);
    //ClippyMessage.text = newString;
    //TutorView.render
    
    //this.showMessage(MESSAGES.INTRO_);
},
    
listenToMessageChange: function (callback) {
    this._emitter.on('messageChange', callback);
}
    
messageTask1: function() {
    var strings = [
                   "\"Red skies at night: sailors\' delight. Red skies in the morning: sailors take warning.\"",
                   "This was a quote popular among mariners from a long time ago.",
                   "Hopefully, this quote put you in the mood to fly our drone today.",
                   "Ahem ... now for the official introduction.",
                   "Welcome to Automated Rescue Drones!",
                   "Today, you will control our FLY model. The FLY is designed to move into a dangerous sitatuion and rescue survivors.",
                   "Please put the FLY through its paces by picking up that life buoy floating out there.",
                   "To move FLY, type: \"FLY.moveUp(1)\" and press \"Enter\"."
                   ];
    for (i = 0; i < strings.length; ++i) {
        //Needs to have a 5-second pause between each message.
        var totalWaitTime = i * tutorWaitTime;
        setInterval(this.updateMessage(strings[i]), totalWaitTime);
=======

    _showInitialMessages: function () {
        this.updateMessage(INITIAL_MESSAGES);
    },
    
    updateMessage: function (messages) {
        this._emitter.emit('messageChange', messages);
    },

    listenToMessageChange: function (callback) {
        this._emitter.on('messageChange', callback);
    },

    onVmStateChange: function (state) {
        console.log("VM STATE CHANGE!", state, this._previousState);

        // This for handling different level.
        if (state.level != this._previousLevel) {
            this.updateMessage(['You are now playing level ' + (state.level + 1) + '.'].concat(this._levels[state.level].introMessages));
        } else {

            var messages = [];

            if (state.levelStatus == 'finished') {
                messages.push('Congrats! You have finished the current level!');

                if (state.level == this._levels.length - 1) {
                    messages.push(
                        'You have completed the game!'
                    );
                } else {

                    messages.push(
                        'You can start the next level by typing startLevel(' + (state.level + 2) + ');'
                    );
                }
            }

            else if (!state.savedTargetCount != this._previousState.savedTargetCount) {

                messages.push(['You just saved a civilian! Great job!']);
            }

            this.updateMessage(messages);
        }

        this._previousState = Object.create(state);
        this._previousLevel = state.level;
    },

    onVmError: function (error) {

        var message;

        switch (error.type) {

            case "method-undefined":
                message = "The object " + error.value.entityName + " cannot do " + error.value.methodName + "!";
                break;
            case "wrong-arguments-count":
                message = "The method " + error.value.methodName + " takes " + error.value.correctCount + " arguments instead of " + error.value.realCount + ".";
                break;
            case "outbound":
                message = "You are going to go off-map if you go that way! ";
                break;
            case "collision":
                message = "You are going to collide with something if you go that way!";
                break;
        }

        // this._emitter.emit('messageChange', ['Woops :( ' + message]);

        this.updateMessage(['Woops :( ' + message])
>>>>>>> dev/gary/working-game
    }
}
    
messageTask2: function() {
    this.updateTextBox("Great, but we\'re not at the buoy yet. We need to move right one square. Type \"moveRight(1)\". And press \"Enter\".");
}
    
messageTask3: function() {
    this.updateTextBox("Great! Now bring him back to shore. You can instruct the FLY to move by first typing \"FLY.\" into the command window. This specifies that FLY will act on the command.");
}
    
messageTask4: function() {
    this.updateTextBox("Good job ...");
    this.updateTextBox("... What was that?");
    this.updateTextBox("... Oh no ...");
}
    
messageIncorrectSyntax: function() {
    updateTextBox("You wrote your code incorrectly.\nIt should look like this:\n");
}
    
messageLeavingObjective: function() {
    updateTextBox("You moved away from your target.\nTry moving in the other direction.\n");
}
    
messageOutOfBoundaries: function() {
    updateTextBox("You cannot leave the rescue zone.\nTry moving in another direction.\n");
}
    
messageHitTsunami: function() {
    updateTextBox("FLY cannot withstand the tsunami wave.\nTry moving around the wave.\n");
}
};

module.exports = Tutor;