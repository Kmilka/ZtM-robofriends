import { 
    CHANGE_SEARCHFIELD, 
    REQUEST_FAILED, 
    REQUEST_PENDING, 
    REQUEST_SUCCESS
} from './constants.js';

export const searchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

const requestSuccess = response => ({
    type: REQUEST_SUCCESS,
    payload: response
})

const requestFailed = err => ({
    type: REQUEST_FAILED,
    payload: err
})


export const requestAnything = (API) => dispatch => {
      dispatch({type: REQUEST_PENDING})
      return API()
        .then(response => dispatch(requestSuccess(response)))
        .catch(err => dispatch(requestFailed(err)))
    }