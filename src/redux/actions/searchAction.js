export const SET_SEARCH = 'SET_SEARCH'
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const setSearch = (inputValue) => {
    return {
        type: SET_SEARCH,
        payload: inputValue
    }
}

export const clearSearch = () => {
    return {
        type: CLEAR_SEARCH
    }
}


