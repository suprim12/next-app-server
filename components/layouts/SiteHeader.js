import React, { useEffect, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import Loader from './Loader';
import { toggletheme } from '../../store/actions/themeAction';
import { userLogout } from '../../store/actions/authAction';
import { clearProfile } from '../../store/actions/userAction';
import CustomDropdown from '../UI/CustomDropdown';

const SiteHeader = () => {
    const { isAuthenticated, user, loading } = useSelector(state => state.auth);
    const { mode, activedropdown } = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const handlelogout = () => {
        dispatch(userLogout());
        dispatch(clearProfile());
    }
    const UnAuthLinks = () => {
        return (
            <Fragment>
                <ul className="nav-extend">
                    <li className="nav-link">
                        <Link href="/login" ><a className="text">Login</a></Link>
                    </li>
                    <li className="nav-link nav-btn nav-btn-primary">
                        <Link href="/register" ><a className="text">Join</a></Link>
                    </li>
                </ul>

            </Fragment>
        )
    }

    const AuthLinks = () => {
        return (
            <Fragment>
                <ul className="nav-extend">
                    <li className="nav-link">
                        <Link href={`/@${user.username}`} ><a className="text">Home</a></Link>
                    </li>

                    <li className="nav-profile dropdown">
                        <CustomDropdown
                            droddownbtn={<img src={`${process.env.NEXT_PUBLIC_APP_IMAGE_PATH}/images/users/${user.image}`} alt="user-img"></img>}
                            target="#user">
                            <div className="dropdown-menu-section">
                                <div className="nav-profile-section">
                                    <div className="nav-profile-section-img">
                                        <img src={`${process.env.NEXT_PUBLIC_APP_IMAGE_PATH}/images/users/${user.image}`} alt="user-img"></img>
                                    </div>
                                    <div className="nav-profile-section-content">
                                        <h2>{user.name}</h2>
                                        <h4>@{user.username}</h4>
                                    </div>
                                </div>
                            </div>
                            <ul className="dropdown-menu-section">
                                <li><Link href="/as"><a>New story</a></Link></li>
                                <li><Link href="/as"><a>Stories</a></Link></li>
                                <li><Link href="/asxz"><a>Stories</a></Link></li>
                            </ul>
                            <ul className="dropdown-menu-section">
                                <li><Link href="/as"><a>New story</a></Link></li>
                                <li><Link href="/as"><a>Stories</a></Link></li>
                                <li><Link href="/me/settings"><a>Settings</a></Link></li>
                                <li><Link href="/login" ><a onClick={handlelogout}>Sign out <span className="right-icon"><i className="ri-logout-box-r-line"></i></span></a></Link></li>
                            </ul>
                        </CustomDropdown>
                    </li>
                </ul>
            </Fragment>
        )
    }

    const handlethemetoggle = () => {
        dispatch(toggletheme());
        localStorage.setItem('darktheme', !mode);
        if (!mode) {
            document.body.classList.toggle('darkmode');
        } else {
            document.body.classList.toggle('darkmode');
        }
    }

    return (
        <Fragment>
            <header className="site-header">
                {loading && <Loader></Loader>}
                <nav className="nav-bar">
                    <div className="wrapper">
                        <div className="site-logo">
                            <Link href="/"><a>Behold</a></Link>
                            <span className="darkmodetoggle" onClick={handlethemetoggle}></span>
                        </div>
                        <div className="collapse">
                            <ul className="nav-links right">
                                <li className="nav-link">
                                    <Link href="/"><a className="icon"><i className="ri-search-2-line"></i></a></Link>
                                </li>
                                <li className="nav-link dropdown">
                                    <CustomDropdown
                                        droddownbtn={
                                            <span className="icon">
                                                <i className="ri-notification-2-line "></i>
                                            </span>
                                        }
                                        target="#notification">
                                        <div className="dropdown-menu-section">
                                            <h2>Notification</h2>
                                        </div>
                                    </CustomDropdown>
                                </li>
                                {!loading ? isAuthenticated ? AuthLinks() : UnAuthLinks() : null}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment >
    )
}

export default SiteHeader
