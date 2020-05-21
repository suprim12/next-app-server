import * as types from '../types'
import axios from 'axios'
import { toast } from 'react-toastify';

const apiRoutes = {
    login: `${process.env.NEXT_PUBLIC_APP_API_URL}auth/login`,
    register: `${process.env.NEXT_PUBLIC_APP_API_URL}auth/register`,
    logout: `${process.env.NEXT_PUBLIC_APP_API_URL}auth/logout`,
    authenticated: `${process.env.NEXT_PUBLIC_APP_API_URL}auth/authuser`,
    google: `${process.env.NEXT_PUBLIC_APP_API_URL}auth/google`
}
export const setauthLoading = () => {
    return {
        type: types.SET_AUTH_LOADING,
    }
}
// USER LOGIN ACTION
export const userLogin = (user, history) => async dispatch => {
    try {
        dispatch(setauthLoading());
        const config = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post(apiRoutes.login, user, config);
        console.log(res.data.token, 'token on login');
        dispatch({
            type: types.LOGIN,
            payload: res.data
        });
        history.push('/');
        toast.success('Logged in 😀');
    }
    catch (err) {
        dispatch({
            type: types.SET_AUTH_ERROR,
            payload: err.response.data
        });
        toast.error(err.response.data.error);
        console.log(err);
    }
}

// USER REGISTER ACTION
export const userRegister = (user, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        dispatch(setauthLoading());
        const res = await axios.post(apiRoutes.register, user, config);
        dispatch({
            type: types.REGISTER,
            payload: res.data
        });
        history.push('/login');
        toast.success('Register Success 😁');
    }
    catch (err) {
        dispatch({
            type: types.SET_AUTH_ERROR,
            payload: err.response.data
        });
        console.log(err);
        toast.error(err.response.data.error);
    }
}

// USER AUTHENTICATE ACTION
export const userAuthenticate = () => async dispatch => {
    try {
        dispatch(setauthLoading());
        const res = await axios.get(apiRoutes.authenticated);
        dispatch({
            type: types.SET_CURRENT_USER,
            payload: res.data
        });
    } catch (err) {
        dispatch(userLogout());
        dispatch({
            type: types.SET_AUTH_ERROR,
            payload: err.response.data
        });
    }
}


// USER GOOGLE LOGIN ACITON
export const userGoogleLogin = () => async dispatch => {
    try {
        const res = await axios.get(apiRoutes.google);
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}

// USER LOGOUT ACTION
export const userLogout = () => async dispatch => {
    try {
        const config = {
            withCredentials: true,
        }
        dispatch(setauthLoading());
        await axios.get(apiRoutes.logout, config);
        dispatch({
            type: types.LOGOUT
        });
        toast.success('Logged out 😎');
    } catch (err) {
        dispatch({
            type: types.SET_AUTH_ERROR,
            payload: err.response.data
        })
    }
}

