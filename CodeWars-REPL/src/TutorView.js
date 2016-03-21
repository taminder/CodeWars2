var React = require('react');

var TutorView = React.createClass({

  getInitialState: function () {

      return {
        message: "Welcome to CodeRescue 2!"
      };
  },

  componentDidMount: function () {

    var _this = this;

    this.props.tutor.listenToMessageChange(function (messages) {

      clearTimeout(_this._timeoutId);

      showMessage(0);

      function showMessage (index) {

        if (index >= messages.length)
          return;

        _this.setState({'message': messages[index]});

        _this._timeoutId = setTimeout(showMessage.bind(null, index + 1), messages[index].length * 75);
      }
    });
  },

  render: function() {
    return (
      <div style={{padding: 10, marginBottom: 10, fontFamily: 'Inconsolata', position: 'relative'}}>

        Clippy: {this.state.message}
        <img src="robot.png" style={{width:'30px', position: 'absolute', bottom: 0, right: 0}} />
      </div>
    );
  },
})

module.exports = TutorView;