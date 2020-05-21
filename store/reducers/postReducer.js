import * as types from '../types'

const intialState = {
    posts: [],
    editor_posts: [],
    popular_posts: [],
    recommended_posts: [],
    post: {},
    current_post: {},
    filter_posts: [],
    loading: false,
    error: null
}

export const postReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload.data,
                loading: false,
                error: null
            }
        case types.SET_LOADING_POSTS:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}