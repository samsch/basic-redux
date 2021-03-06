const { UPDATE_APP_NAME } = require('../actions/UpdateAction');

const nameReducer = function(state = 'Redux App!', action) {
    if(action.type === UPDATE_APP_NAME) {
        return action.payload;
    }
    return state;
};

module.exports = nameReducer;
