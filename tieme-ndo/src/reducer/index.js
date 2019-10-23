import { START_FETCH, FETCH_SUCCESS, FETCH_FAILURE, START_ADD, ADD_SUCCESS, ADD_FAILURE, STAFF_START_FETCH, STAFF_FETCH_SUCCESS, STAFF_FETCH_FAILURE, UPDATE_START, UPDATE_SUCCESS, UPDATE_FAILURE, DELETE_START, DELETE_SUCCESS, DELETE_FAILURE } from '../actions/index';

const initialState = {
    farmers: [],
    employees: [],
    isFetching: false,
    isAdding: false,
    isDeleting: false,
    isStaffFetching: false,
    isUpdating: false,
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
        case START_ADD:
            return {
                ...state,
                isAdding: true,
                error: ''
            }
        case ADD_SUCCESS:
            return {
                ...state,
                isAdding: false,
                error: '',
                farmers: [...state.farmers, action.payload]
            }
        case ADD_FAILURE:
            return {
                ...state,
                error: action.payload,
                isAdding: false
            }
        case STAFF_START_FETCH:
            return {
                ...state,
                isStaffFetching: true,
                error: ''
            }
        case STAFF_FETCH_SUCCESS:
            return {
                ...state,
                isStaffFetching: false,
                error: '',
                employees: action.payload
            }
        case STAFF_FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isStaffFetching: false
            }
        case UPDATE_START:
            return {
                ...state,
                isAdding: true,
                error: ''
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                isUpdating: false,
                error: '',
                farmers: [...state.farmers.filter(item => { return item.id !== action.payload.id}), action.payload]
            }
        case UPDATE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isUpdating: false
            }
        case DELETE_START:
            return {
                ...state,
                isDeleting: true,
                error: ''
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                isDeleting: false,
                error: '',
                farmers: state.farmers.filter(item => { return item.id !== action.payload})
            }
            case DELETE_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    isDeleting: false
                }

            default:
            return state;
    }
}

export default reducer;