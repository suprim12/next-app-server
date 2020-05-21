import { useSelector } from 'react-redux'
import Router from 'next/router';
import { useEffect, Fragment } from 'react';

const LogProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated && isAuthenticated) {
            Router.push('/')
        }
    }, [isAuthenticated]);

    return (
        <Fragment>{children}</Fragment>
    )
}

export default LogProtectedRoute;