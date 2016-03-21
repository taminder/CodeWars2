var React = require('react');

var TutorView = React.createClass({
    render: function() {
        return (
            <iframe id="construct2-iframe" src="http://10.189.173.73:8000/" width="100%" height="100%">
                this is gameview
            </iframe>
        );
    }
});

module.exports = TutorView;