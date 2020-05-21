import { Fragment } from 'react'

const AuthExtraLogin = () => {
    return (
        <Fragment>
            <div className="thirdparty-by">
                <a href={`${process.env.NEXT_PUBLIC_APP_API_URL}auth/google`} className="google-btn" type="button">
                    <i className="ri-google-line"></i> Google </a>
                <button className="facebook-btn" type="button">
                    <i className="ri-facebook-line"></i>Facebook</button>
            </div>
            <div className="breaker">
                <span>OR</span>
            </div>
        </Fragment>
    )
}

export default AuthExtraLogin
