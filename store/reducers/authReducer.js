import * as types from '../types'
import { isEmpty } from '../utils/handlers'
const intialState = {
    isAuthenticated: false,
    user: {},
    error: null,
    loading: false
}

export const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload.token),
                user: {},
                error: null,
                loading: false
            }
        case types.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                user: action.payload.user,
                error: null,
                loading: false
            }
        case types.REGISTER:
            return {
                ...state,
                user: action.payload,
                error: null,
                loading: false
            }
        case types.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                error: null,
                loading: false
            }
        case types.SET_AUTH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case types.SET_AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}