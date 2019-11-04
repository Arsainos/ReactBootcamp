import * as actionsTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.INCREMENT:
                return updateObject(state, {couter: state.counter + 1});
        case actionsTypes.DECREMENT:
                return updateObject(state, {couter: state.counter - 1});
        case actionsTypes.ADD:
                return updateObject(state, {couter: state.counter + action.val});
        case actionsTypes.SUBTRACT:
            return updateObject(state, {couter: state.counter - action.val});    
        default:
            break;
    }
    return state;
};

export default reducer;