var ee = require('event-emitter');

function VM (levels) {
    this._emitter = ee({});
    this._entities = {};
    this._levels = levels;

    this._gridXSize = 15;
    this._gridYSize = 10;
    this._grid = null;
    this._state = {};
}

VM.prototype = {

    setCurrentLevel: function (levelIndex) {

        this.setState({
            level: levelIndex,
            levelStatus: 'in-progress',
            savedTargetCount: 0
        });

        var grid = this._levels[levelIndex].grid;
        var playerPosition = this._levels[levelIndex].playerPosition;
        var targetPositions = this._levels[levelIndex].targetPositions;
        var targetTypes = this._levels[levelIndex].targetTypes;

        grid[playerPosition[1]][playerPosition[0]] = 1;

        this._entities['BOAT'] = new Entity('BOAT', playerPosition);

        for (var i = 0; i < targetPositions.length; i++) {
            grid[targetPositions[i][1]][targetPositions[i][0]] = targetTypes[i];
        }

        this._grid = grid;

        this._sendCommandToConstruct2({
            type: 'build-grid',
            values: {
                grid: this._grid
            }
        });
    },

    applyCommand: function (command) {

        // Do extra checks on command that deal with entities.
        if (command.entities.length > 0) {

            var entity = command.entities[0];

            if (!entityTypeInterface[entity.name].hasOwnProperty(command.type)) {

                var errMessage = '"' + entity.name + '" cannot do ' + command.type + ' :(';

                this._broadcastError('method-undefined', {entityName: entity.name, methodName: command.type});

                throw new Error(errMessage);
            }

            if (entityTypeInterface[entity.name][command.type] != command.values.length) {

                var errMessage = 'Wrong number of arguments';

                this._broadcastError('wrong-arguments-count', {
                    entityName: entity.name,
                    methodName: command.type,
                    correctCount: 1,
                    realCount: 0
                });

                throw new Error(errMessage);
            }
        }

        this._handleCommand(command);
    },

    _handleCommand: function (command) {

        console.log("COMMAND @ _handleCommand", command);

        if (command.type == 'changeLevel') {

            console.log("CHANGING LEVEL TO ", command.values.level);

            if (command.values.level -1 >= this._levels.length) {
                throw new Error("There is no level " + command.values.level);
            }

            this.setCurrentLevel(command.values.level - 1);
            return;
        }

        if (['moveUp', 'moveDown', 'moveLeft', 'moveRight'].indexOf(command.type) != -1) {
            this._handleMoveCommands(command);
        }
    },

    _handleMoveCommands: function (command) {

        var deltaX = 0;
        var deltaY = 0;

        if (command.type == 'moveUp') {
            deltaY = command.values[0] * -1;
        } else if (command.type == 'moveDown') {
            deltaY = command.values[0];
        } else if (command.type == 'moveLeft') {
            deltaX = command.values[0] * -1;
        } else if (command.type == 'moveRight') {
            deltaX = command.values[0];
        }

        var entity = command.entities[0];
        var destinationX = entity.position[0] + deltaX;
        var destinationY = entity.position[1] + deltaY;

        console.log(destinationX, destinationY);


        var isInBound = (destinationX >= 0 && destinationX < this._gridXSize && destinationY >= 0 && destinationY < this._gridYSize);

        console.log("ISBOUND", isInBound, destinationX, destinationY);

        if (!isInBound) {
            this._broadcastError('outbound', {x: destinationX, y: destinationY});
            return;
        }

        var doesCollisionHappen = this._checkCollision(entity.position, [destinationX, destinationY]);

        console.log("DOES COLLISION HAPPEN", doesCollisionHappen);

        if (doesCollisionHappen) {
            this._broadcastError('collision', {x: destinationX, y: destinationY});
            return;
        }

        entity.position[0] = destinationX;
        entity.position[1] = destinationY;

        this._sendCommandToConstruct2({
            type: 'move',
            values: {
                x: destinationX,
                y: destinationY
            }
        });

        var targetPositions = this._levels[this._state.level].targetPositions;
        var reachesTarget = false;

        for (var i = 0; i < targetPositions.length; i++) {

            if (targetPositions[i][0] == destinationX && targetPositions[i][1] == destinationY) {
                reachesTarget = true;
                break;
            }
        }

        if (reachesTarget) {
            var newState = {
                savedTargetCount: this._state.savedTargetCount + 1
            };

            if (newState.savedTargetCount == targetPositions.length) {
                newState.levelStatus = 'finished';
            }

            this.setState(newState);
        }
    },

    _sendCommandToConstruct2: function (construct2Command) {

        console.log("Sending message to construct2: ", construct2Command);

        var iframe = document.getElementById("construct2-iframe");
        var message = JSON.stringify(construct2Command);

        iframe.contentWindow.postMessage(message, '*');
    },

    _broadcastState: function (newState) {
        this._emitter.emit('stateChange', newState);
    },

    setState: function (newState) {

        console.log("SET STATE", newState);

        for (var attrname in newState) {
            this._state[attrname] = newState[attrname];
        }

        this._broadcastState(this._state);
    },

    getEntityByName: function (name) {

        if (!this._entities.hasOwnProperty(name)) {
            throw new Error('"' + name + '" does not exist!');
        }

        return this._entities[name];
    },

    listenToStateChange: function (callback) {
        this._emitter.on('stateChange', callback);
    },

    listenToErrors: function (callback) {
        this._emitter.on('error', callback);
    },

    _broadcastStateChange: function () {
        this._emitter.emit('stateChange');
    },

    _broadcastError: function (type, value) {
        this._emitter.emit('error', {
            type: type,
            value: value
        });
    },

    _checkCollision: function (origin, destination) {

        var planeIndex = origin[0] == destination[0] ? 1 : 0;
        var deltaMultiplier = destination[planeIndex] - origin[planeIndex] > 0 ? 1 : -1;
        var diff =  Math.abs(destination[planeIndex] - origin[planeIndex]);

        console.log('========= CHECK COLLISION ========');

        for (var i = 1; i < diff; i++) {

            if (planeIndex == 1) {

                console.log("CHANGED", origin[0], origin[1] + (i * deltaMultiplier));
                if (this._grid[origin[1] + (i * deltaMultiplier)][origin[0]] == 2) {
                    return true;
                }

            } else {

                if (this._grid[origin[1]][origin[0] + (i * deltaMultiplier)] == 2) {
                    return true;
                }
            }
        }

        console.log('========= END CHECK COLLISION ========');

        return false;
    }
};

function Entity (name, location) {
    this.name = name;
    this.location = location;
    this.position = location;
}

var entityTypeInterface = {

    BOAT: {
        //move: 2, // ship has a move function, taking two arguments.
        moveUp: 1,
        moveRight: 1,
        moveLeft: 1,
        moveDown: 1
    }
};



module.exports = VM;