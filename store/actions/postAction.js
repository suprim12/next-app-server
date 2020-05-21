import * as types from '../types'
import axios from 'axios';
import { API_URL } from '../../config'

const apiRoutes = {
    getposts: `${process.env.NEXT_PUBLIC_APP_API_URL}posts`
}


// GET POSTS
export const getposts = () => async dispatch => {
    try {
        dispatch(setloading());
        const res = await axios.get(apiRoutes.getposts);
        dispatch({
            type: types.GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
}

// GET EDITOR POSTS

// GET POPULAR POSTS

// GET SINGLE POSTS

// ADD POSTS

// SET CURRENT POSTS

// UPDATE POSTS

// DELETE POSTS

// FILTERD POSTS

// LIKE POSTS

// UNLIKE POSTS

// SET LOADING
export const setloading = () => {
    return {
        type: types.SET_LOADING_POSTS
    }
}