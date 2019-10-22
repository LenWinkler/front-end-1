import axiosWithAuth from '../components/Auth/AxiosWithAuth';

export const FETCH_DATA = 'FETCH_DATA';
export const START_FETCH = 'START_FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_CLIENT = 'ADD_CLIENT';

export const UPDATE_DATA = 'UPDATE_DATA';

export const DELETE_DATA = 'DELETE_DATA';

export const fetchData = () => dispatch => {
    

    axiosWithAuth()
    .get('api/client/all')
    .then(res => dispatch({ type: FETCH_DATA, payload: res.data }))
    .catch(err => console.log('fetch error', err))
}
