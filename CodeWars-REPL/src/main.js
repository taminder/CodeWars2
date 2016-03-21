var React = require('react');
var VM = require('./VM');
var REPL = require('./REPL');
var RootView = require('./RootView');
var Tutor = require('./Tutor');
var Levels = require('./Levels');

window.onload = function () {

    setTimeout(function () {

        document.getElementById("wrapper").style.display = 'none';
        document.getElementById("container").style.display = 'block';
        var vm = new VM(Levels);
        var repl = new REPL(vm);
        var tutor = new Tutor(vm, Levels);

        React.render(<RootView repl={repl} tutor={tutor} />, document.getElementById("container"));

    }, 3000);
};
