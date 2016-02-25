let React = require('react');
let { connect } = require('react-redux');
let PropTypes = React.PropTypes;
let { updateName } = require('../actions/UpdateAction');

let App = React.createClass({

    render: function() {
        return (
            <div>
                <h1>{this.props.appName}</h1>
                <p>Welcome to the app!</p>
                <div>
                    <label>Change the app name: <input type="text" value={this.props.appName} onChange={(ev)=>this.props.dispatch(updateName(ev.target.value))} /></label>
                </div>
            </div>
        );
    }

});

module.exports = connect(state=>state)(App);
