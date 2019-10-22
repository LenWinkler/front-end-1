import axiosWithAuth from '../components/Auth/AxiosWithAuth';


export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_CLIENT = 'ADD_CLIENT';
export const START_ADD = 'START_ADD';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const UPDATE_DATA = 'UPDATE_DATA';

export const DELETE_DATA = 'DELETE_DATA';

export const fetchData = () => dispatch => {
    dispatch({ type: START_FETCH });

    axiosWithAuth()
    .get('api/client/all')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }));
}

export const addData = newClient => dispatch => {
    dispatch({ type: START_ADD })

    axiosWithAuth()
    .post('/api/client', newClient)
}