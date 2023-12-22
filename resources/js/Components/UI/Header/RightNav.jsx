import React, {createRef, useEffect} from 'react';
import User09 from "../../../../images/user/09.jpg";
import {Link} from "@inertiajs/react";
import {detectOutsideClick} from "@/Library/helper.js";
import {FaKey, FaPowerOff, FaUserTie} from "react-icons/fa";

function RightNav({user}) {
    const navRef = createRef()

    const actionHandler = (e) => {
        e.preventDefault()
        navRef.current.classList.toggle("iq-show")
        navRef.current.querySelector('a').classList.toggle("active")
    }

    useEffect(()=>{
        detectOutsideClick(navRef)
    },[navRef])

    return (
        <ul className="navbar-list">
            <li ref={navRef}>
                <Link href="#" className="search-toggle iq-waves-effect d-flex align-items-center" onClick={e=> actionHandler(e)}>
                    <img className="img-fluid rounded mr-3" src={User09}/>
                    <div className="caption">
                        <h6 className="mb-0 line-height"></h6>
                        <span className="font-size-12">{user?.name}</span>
                    </div>
                </Link>

                <div className="iq-sub-dropdown iq-user-dropdown">
                    <div className="iq-card shadow-none m-0">
                        <div className="iq-card-body p-0 ">
                            <div className="bg-primary p-3">
                                <h5 className="mb-0 text-white line-height">Hello </h5>
                                <span className="text-white font-size-12">{user?.name}</span>
                            </div>
                            <Link href={route('profile.edit')} className="iq-sub-card iq-bg-primary-hover">
                                <div className="media align-items-center">
                                    <div className="rounded iq-card-icon iq-bg-primary">
                                        <FaUserTie className="f-18"/>
                                    </div>
                                    <div className="media-body ml-3">
                                        <h6 className="mb-0 ">My Profile</h6>
                                        <p className="mb-0 font-size-12">View personal profile details.</p>
                                    </div>
                                </div>
                            </Link>

                            <Link href={route('password.edit')}
                               className="iq-sub-card iq-bg-primary-hover">
                                <div className="media align-items-center">
                                    <div className="rounded iq-card-icon iq-bg-primary">
                                        <FaKey className="f-18"/>
                                    </div>
                                    <div className="media-body ml-3">
                                        <h6 className="mb-0 ">Account settings</h6>
                                        <p className="mb-0 font-size-12">Manage your password.</p>
                                    </div>
                                </div>
                            </Link>
                            <div className="d-inline-block w-100 text-center p-3">

                                <Link className="bg-primary iq-sign-btn" method="post" href={route('logout')}>

                                    <FaPowerOff className="f-18"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default RightNav;
