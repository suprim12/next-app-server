import * as types from '../types'
import axios from 'axios';



// CLEAR PROFILE
export const clearProfile = () => dispatch => {
    dispatch({
        type: types.CLEAR_PROFILE_USER
    });
}

// GET USER BY USERNAME
export const getUserByUsername = (username, history) => async dispatch => {
    try {
        dispatch(setProfileLoading());
        const res = await axios.get(`${process.env.REACT_APP_API_URL}users/${username}`);
        dispatch({
            type: types.SET_PROFILE_USER,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: types.SET_PROFILE_ERROR
        });
        history.push('/not-found');
    }
}

// SET PROFILE LOADING
const setProfileLoading = () => {
    return ({
        type: types.SET_PROFILE_LOADING
    });
}
