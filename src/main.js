const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const reducer = require('./RootReducer');
const App = require('./containers/App');

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('app')
);
