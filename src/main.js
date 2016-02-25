let React = require('react');
let ReactDOM = require('react-dom');
let { createStore } = require('redux');
let { Provider } = require('react-redux');
let reducer = require('./RootReducer');
let App = require('./containers/App');

let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('app')
);
