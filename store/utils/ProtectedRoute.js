import React, { useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import Router from 'next/router'

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading, user } = useSelector(state => state.auth);




    useEffect(() => {
        if (isAuthenticated) {
            return;
        } else {
            Router.push('/login');
        }
    }, [isAuthenticated, loading]);
    return (
        <Fragment>{children}</Fragment>
    )

}

ProtectedRoute.getStaticProps = async ctx =>{
    
}

export default ProtectedRoute;