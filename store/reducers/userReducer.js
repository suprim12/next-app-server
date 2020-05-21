import * as types from '../types'
const intialState = {
    profile_posts: [],
    profile_user: {},
    error: null,
    loading: false
}
export const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.SET_PROFILE_LOADING:
            return {
                ...state,
                loading: true
            };
        case types.SET_PROFILE_ERROR:
            return {
                ...state,
                profile_posts: [],
                profile_user: {},
                error: null,
                loading: false
            };
        case types.CLEAR_PROFILE_USER:
            return {
                ...state,
                profile_posts: [],
                profile_user: {},
                error: null,
                loading: false
            };
        case types.SET_PROFILE_USER:
            return {
                ...state,
                profile_posts: action.payload.data.userposts,
                profile_user: action.payload.data.user,
                loading: false
            };
        default:
            return state
    }
}