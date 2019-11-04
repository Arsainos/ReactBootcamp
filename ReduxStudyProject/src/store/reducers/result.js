import * as actionsTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.STORE_RESULT:
            return updateObject(state,{id: new Date(), value: action.result});
        case actionsTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return updateObject(state, {results: updatedArray});
        default:
            break;
    }
    return state;
};

export default reducer;