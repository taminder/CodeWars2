var esprima = require('esprima');

function REPL (vm) {
  this._vm = vm;
}

REPL.prototype = {

  parseCodeString: function (codeString) {

    var command = this._convertToCommand(codeString);

    this._vm.applyCommand(command);
  },

  _convertToCommand: function (codeString) {

    // it only accepts `ship.move(x, y)` for now
    var exp = esprima.parse(codeString);

    console.log(exp);

    // This is for changing level.
    if (exp.body[0].expression.callee.name == 'startLevel') {

      return {
        type: 'changeLevel',
        entities: [],
        values: {
          level: exp.body[0].expression.arguments[0].value
        }
      }
    }

    var entityName = exp.body[0].expression.callee.object.name;
    var entity = this._vm.getEntityByName(entityName);

    return {

      type: exp.body[0].expression.callee.property.name,
      entities: [entity],
      values: exp.body[0].expression.arguments.map(function (arg) {
        return parseInt(arg.raw);
      })
    }
  }
};

module.exports = REPL;