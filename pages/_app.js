import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';
import { toast } from 'react-toastify'
import Cookie from 'js-cookie';
import { userAuthenticate } from '../store/actions/authAction';
import { setAuthToken } from '../store/utils/handlers';
import 'react-toastify/dist/ReactToastify.css'
import '../scss/main.scss'

toast.configure({
    autoClose: 5000,
    pauseOnHover: false,
    draggable: true,
    position: "bottom-right"
});
class MyApp extends App {
    // componentDidMount() {
    //     if (Cookie.get('access_token')) {
    //         setAuthToken(Cookie.get('access_token'));
    //         store.dispatch(userAuthenticate());
    //         console.log(Cookie.get('access_token'));
    //     }
    // }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);


export default wrapper.withRedux(MyApp);