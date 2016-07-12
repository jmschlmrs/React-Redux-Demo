let initialState = {
    value : ''
};
let userInput = function(state=initialState, action) {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return Object.assign({},state, {
                value: action.value
            })
        default: 
            return state;
    }
}

export default userInput;