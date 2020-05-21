import React, { useEffect, Fragment } from 'react'
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie'
import { setAuthToken } from './handlers';
import { userAuthenticate } from '../actions/authAction';

const AuthoriztionCheckRoute = ({ children }) => {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}


AuthoriztionCheckRoute.getInitialProps = async ctx => {
  
}

export default AuthoriztionCheckRoute
