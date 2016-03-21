var React = require('react');
var REPLView = require('./REPLView');
var TutorView = require('./TutorView');
var GameView = require('./GameView');

var RootView = React.createClass({
  render: function() {
    return (
      <div>
        <div style={{height:"500px"}}>
          <main id="main">
            <GameView />
          </main>
          <aside id="sidebar">
            <div id="clippy">
              <TutorView tutor={this.props.tutor}/>
            </div>
            <div id="coder">

              <REPLView repl={this.props.repl}/>
            </div>
          </aside>
        </div>
      </div>
    );
  },
})

module.exports = RootView;