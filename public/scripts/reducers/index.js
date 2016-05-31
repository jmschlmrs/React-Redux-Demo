const userInput = (state = {}, action) => {
    switch (action.type) {
        case 'USER_INPUT':
            state.feeling = 'test feeling';
            return state;
        default:
            return state;
    }
}

export default userInput;