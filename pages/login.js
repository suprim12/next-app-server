import { toast } from 'react-toastify';
import Joi from '@hapi/joi';
import Link from 'next/link'
import Head from 'next/head'
import Cookie from 'js-cookie';
import Router from 'next/router'
import AuthLayout from "../components/hoc/AuthLayout"
import AuthExtraLogin from "../components/auth/AuthExtraLogin"
import AuthInputField from "../components/auth/AuthInputField"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { validatefield, validate, isEmpty, setAuthToken } from "../store/utils/handlers"
import { userAuthenticate, userLogin } from "../store/actions/authAction"
import MainLayout from '../components/hoc/MainLayout';
import LogProtectedRoute from '../store/utils/LogProtectedRoute';

const login = () => {
    const dispatch = useDispatch();
    const [User, setUser] = useState({
        email: '',
        password: ''
    });
    const { email, password } = User;
    let schema = {
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().label('Email Address'),
        password: Joi.string().min(8).required().label('Password')
    }
    const [autherror, setAuthError] = useState({});
    const [showpassword, SetShowPassword] = useState(false);

    const handleChange = e => {
        const errorsobj = { ...autherror };
        const errorsMsg = validatefield(Joi, schema, e.target);
        if (errorsMsg) errorsobj[e.target.name] = errorsMsg;
        else delete errorsobj[e.target.name];
        setUser({
            ...User,
            [e.target.name]: e.target.value
        });
        setAuthError(errorsobj);
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const errorobj = validate(Joi, schema, { email, password }, { abortEarly: false });;
        if (!isEmpty(errorobj)) {
            setAuthError(errorobj);
            toast.error(errorobj[Object.keys(errorobj)[0]]);
            return;
        }
        await dispatch(userLogin(User, Router));
        await setAuthToken(Cookie.get('access_token'));
        dispatch(userAuthenticate());
        console.log('Logged in user');
    }
    const handlePasswordShow = () => {
        SetShowPassword(!showpassword);
    }
    return (
        <LogProtectedRoute>
            <MainLayout>
                <AuthLayout>
                    <Head>
                        <title>Behold Login - Get creative</title>
                    </Head>
                    <AuthExtraLogin></AuthExtraLogin>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <AuthInputField
                            type="email"
                            name="email"
                            value={email}
                            handleChange={handleChange}
                            placeholder="Email Address" error={autherror.email}>
                        </AuthInputField>
                        <AuthInputField
                            type={showpassword ? 'text' : 'password'}
                            name="password"
                            value={password}
                            handleChange={handleChange}
                            placeholder="Password" error={autherror.password}>
                            <i className={showpassword ? "ri-eye-line" : "ri-eye-off-line"} onClick={handlePasswordShow}></i>
                        </AuthInputField>
                        <button className="form-btn btn-primary" type="submit">Login</button>
                        <div className="form-links">
                            <Link href="/forgetpassword"><a>Forget Password ?</a></Link>
                            <Link href="/register"><a>Don't have account? Join In</a></Link>
                        </div>
                    </form>
                </AuthLayout>
            </MainLayout>
        </LogProtectedRoute>
    )
}

export default login
