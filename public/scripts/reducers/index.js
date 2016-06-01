const initialState = {
    userInput: ''
};

const userInput = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_INPUT':
            return Object.assign({}, state, {
                userInput: action.text.toLowerCase()
            });
        default:
            return state;
    }
}

export default userInput;