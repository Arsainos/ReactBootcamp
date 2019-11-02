import * as actionsTypes from './actions';

const initialState = {
    counter: 0,
    results: []
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
        case actionsTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value:state.counter})
            }
        case actionsTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
        default:
            break;
    }
    return state;
};

export default reducer;