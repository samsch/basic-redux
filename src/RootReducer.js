let { combineReducers } = require('redux');
let nameReducer = require('./reducers/NameReducer');

module.exports = combineReducers({
    appName: nameReducer,
});
