import axiosWithAuth from '../components/Auth/AxiosWithAuth';

export const FETCH_DATA = 'FETCH_DATA';
export const ADD_CLIENT = 'ADD_CLIENT';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export const fetchData = () => dispatch => {

    axiosWithAuth()
    .get('api/client/all')
    .then(res => console.log(res))
    .catch(err => console.log('fetch error', err))
}
