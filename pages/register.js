import Joi from '@hapi/joi';
import Link from 'next/link'
import Head from "next/head"
import Router from "next/router"
import AuthLayout from "../components/hoc/AuthLayout"
import AuthExtraLogin from "../components/auth/AuthExtraLogin"
import AuthInputField from "../components/auth/AuthInputField"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { validatefield, validate, isEmpty } from "../store/utils/handlers"
import { toast } from 'react-toastify';
import { userRegister } from "../store/actions/authAction"
import MainLayout from '../components/hoc/MainLayout';
import LogProtectedRoute from '../store/utils/LogProtectedRoute';

const Register = () => {
    const dispatch = useDispatch();
    const [User, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = User;

    let schema = {
        name: Joi.string().min(3).required().label('Full Name'),
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
    const handleSubmit = e => {
        e.preventDefault();
        const errorobj = validate(Joi, schema, { name, email, password }, { abortEarly: false });;
        if (!isEmpty(errorobj)) {
            setAuthError(errorobj);
            toast.error(errorobj[Object.keys(errorobj)[0]]);
            return;
        }
        dispatch(userRegister(User, Router));
    }
    const handlePasswordShow = () => {
        SetShowPassword(!showpassword);
    }
    return (
        <LogProtectedRoute>
            <MainLayout>
                <AuthLayout>
                    <Head>
                        <title>Behold Register - Get creative</title>
                    </Head>
                    <AuthExtraLogin></AuthExtraLogin>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <AuthInputField
                            type="name"
                            name="name"
                            value={name}
                            handleChange={handleChange}
                            placeholder="Full Name"
                            error={autherror.name}>
                        </AuthInputField>
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
                        <button className="form-btn btn-primary" type="submit">Join</button>
                        <div className="form-links">
                            <Link href="/login"><a>Have account? Sign In</a></Link>
                        </div>
                    </form>
                </AuthLayout>
            </MainLayout>
        </LogProtectedRoute>
    )
}

export default Register
