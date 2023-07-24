import { CLEAR_SEARCH, SET_SEARCH } from "../actions/searchAction"

export const initialState = {
    searchInput : '',
}

const searchReducer = (state=initialState, actions) => {
    switch(actions.type){
        case SET_SEARCH:
            return {...state, searchInput : actions.payload}
        case CLEAR_SEARCH: 
            return {...state, searchInput : ''}
        default:
            return state;
    }
}

export default searchReducer
