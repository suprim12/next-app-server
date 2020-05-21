import * as types from '../types'

// SET DROPDOWN
export const setactivedropdown = (target) => dispatch => {
    dispatch({
        type: types.SET_ACTIVE_DROPDOWN,
        payload: target
    });
}

// TOGGLE THEME
export const toggletheme = () => {
    return {
        type: types.TOGGLE_THEME
    }
}
