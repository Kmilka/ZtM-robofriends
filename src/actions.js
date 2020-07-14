import { 
    CHANGE_SEARCHFIELD, 
    REQUEST_ROBOTS_FAILED, 
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_SUCCESS
} from './constants.js';

export const searchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: users
    }))
    .catch(error => dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: error
    }))
}


