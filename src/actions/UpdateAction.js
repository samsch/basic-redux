const UPDATE_APP_NAME = 'actions/UpdateAction/UPDATE_APP_NAME';

let updateName = function(newName) {
    return {
        type: UPDATE_APP_NAME,
        payload: newName,
    }
};

module.exports = {
    UPDATE_APP_NAME,
    updateName,
}
