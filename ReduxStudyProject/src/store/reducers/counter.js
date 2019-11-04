import * as actionsTypes from '../actions/actionsTypes';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionsTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionsTypes.ADD:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionsTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            break;
    }
    return state;
};

export default reducer;