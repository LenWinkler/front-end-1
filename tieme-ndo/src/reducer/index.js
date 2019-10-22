import { FETCH_DATA } from '../actions/index';

const initialState = {
    farmers: ["No farmer data"]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                farmers: action.payload
            }

        default:
            return state;
    }
}

export default reducer;