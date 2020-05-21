import * as types from '../types'

const intialState = {
    mode: false,
    activedropdown: null,
    activemenu: 'main'
}
export const themeReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.SET_ACTIVE_DROPDOWN:
            return {
                ...state,
                activedropdown: action.payload
            }
        case types.TOGGLE_THEME:
            return {
                ...state,
                mode: !state.mode
            }
        default:
            return state;
    }
}