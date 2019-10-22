import { START_FETCH, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/index';

const initialState = {
    farmers: [],
    isFetching: false,
    isAdding: false,
    isDeleting: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCH:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                farmers: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }

        default:
            return state;
    }
}

export default reducer;