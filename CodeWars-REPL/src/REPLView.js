var React = require('react');

var REPLView = React.createClass({

  getInitialState: function () {
    return {
      commandHistory: []
    };
  },

  componentDidMount: function () {
    React.findDOMNode(this.refs.code).focus();
  },

  render: function () {
    return (
      <div style={{fontFamily: 'Inconsolata', background: '#000000', color: '#FFF', padding: 10, height:'90%', overflow:'scroll'}}>
        <div>
          {this.state.commandHistory.map((command) => {

            return (
                <div style={{color: (command.type == 'error' ? 'red': '#AAA')}}> > {command.string}</div>
            );

          })}
        </div>
        <form onSubmit={this.handleSubmit}>
          <span style={{background: '#000', color: '#FFF', fontSize: 16}}> > </span>
          <input type="text" ref="code" style={{background: '#000', color: '#FFF', fontSize: 16, fontFamily: 'Inconsolata', border: 0, outlineWidth: 0, width:'50%'}} />
        </form>
      </div>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var code = React.findDOMNode(this.refs.code).value.trim();
    if (!code) {
      return;
    }

    var newCommandHistory = this.state.commandHistory;

    try {
      this.props.repl.parseCodeString(code);
      newCommandHistory.push({type: 'regular', string: code});


    } catch (e) {

      newCommandHistory.push({type: 'regular', string: code});
      newCommandHistory.push({type: 'error', string: e.message});
    }

    this.setState({'commandHistory': newCommandHistory});

    React.findDOMNode(this.refs.code).value = '';

    return;
  },
})

module.exports = REPLView;