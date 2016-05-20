const { combineReducers } = require('redux');
const nameReducer = require('./reducers/NameReducer');

module.exports = combineReducers({
    appName: nameReducer,
});
