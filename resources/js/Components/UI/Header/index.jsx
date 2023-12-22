import React from 'react';
import {Link} from "@inertiajs/react";
import Flag01 from "../../../../images/small/flag-01.png"
import Flag02 from "../../../../images/small/flag-02.png"
import Flag03 from "../../../../images/small/flag-03.png"
import Flag04 from "../../../../images/small/flag-04.png"
import Flag05 from "../../../../images/small/flag-05.png"
import Flag06 from "../../../../images/small/flag-06.png"
import User01 from "../../../../images/user/01.jpg"
import User02 from "../../../../images/user/02.jpg"
import User03 from "../../../../images/user/03.jpg"
import User04 from "../../../../images/user/04.jpg"
import User05 from "../../../../images/user/05.jpg"
import User09 from "../../../../images/user/09.jpg"
import {MdPersonSearch} from "react-icons/md";
import {FaBell, FaComments} from "react-icons/fa";
import RightNav from "@/Components/UI/Header/RightNav.jsx";
import NavbarCollapse from "@/Components/UI/Header/NavbarCollapse.jsx";

function Index({user}) {
    return (
        <div className="iq-top-navbar">
            <div className="iq-navbar-custom">
                <div className="iq-sidebar-logo">
                    <div className="top-logo">
                        <Link href="#" className="logo">
                            <img src="https://virtualistbd.com/uploads/settings/1695028643-sec-logo.png"
                                 className="img-fluid" alt=""/>
                            <span>MBM Group</span>
                        </Link>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="iq-search-bar">
                        <form action="#" className="searchbox">
                            <input type="text" className="text search-input" placeholder="Type here to search..."/>
                            <a className="search-link" href="#">
                                <MdPersonSearch/>
                            </a>
                        </form>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto navbar-list">

                            <NavbarCollapse
                                icon={
                                    <>
                                        <img src={Flag01} alt="img-flaf" className="img-fluid mr-1"
                                             style={{height: "16px", width: "16px"}}/> English
                                        <i className="ri-arrow-down-s-line"></i>
                                    </>
                                }
                            >
                                <div className="iq-sub-dropdown">
                                    <a className="iq-sub-card" href="#">
                                        <img src={Flag02} alt="img-flaf" className="img-fluid mr-2"/>French
                                    </a>
                                    <a className="iq-sub-card" href="#">
                                        <img src={Flag03} alt="img-flaf" className="img-fluid  mr-2"/>Spanish
                                    </a>
                                    <a className="iq-sub-card" href="#">
                                        <img src={Flag04} alt="img-flaf" className="img-fluid mr-2"/>Italian
                                    </a>
                                    <a className="iq-sub-card" href="#">
                                        <img src={Flag05} alt="img-flaf" className="img-fluid mr-2"/>German
                                    </a>
                                    <a className="iq-sub-card" href="#">
                                        <img src={Flag06} alt="img-flaf" className="img-fluid mr-2"/>Japanese
                                    </a>
                                </div>
                            </NavbarCollapse>

                            <NavbarCollapse
                                icon={
                                   <>
                                       <FaBell/>
                                       <span className="bg-danger dots"></span>
                                   </>
                                }
                            >
                                <div className="iq-sub-dropdown">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3">
                                                <h5 className="mb-0 text-white">All Notifications<small
                                                    className="badge  badge-light float-right pt-1">4</small></h5>
                                            </div>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded"
                                                             src={User01} alt=""/>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Emma Watson Bini</h6>
                                                        <small className="float-right font-size-12">Just Now</small>
                                                        <p className="mb-0">95 MB</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded"
                                                             src={User02} alt=""/>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">New customer is join</h6>
                                                        <small className="float-right font-size-12">5 days ago</small>
                                                        <p className="mb-0">Jond Bini</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded"
                                                             src={User03} alt=""/>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Two customer is left</h6>
                                                        <small className="float-right font-size-12">2 days ago</small>
                                                        <p className="mb-0">Jond Bini</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded"
                                                             src={User04} alt=""/>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">New Mail from Fenny</h6>
                                                        <small className="float-right font-size-12">3 days ago</small>
                                                        <p className="mb-0">Jond Bini</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </NavbarCollapse>

                            <NavbarCollapse
                                icon={
                                   <>
                                       <FaComments/>
                                       <span className="bg-primary count-mail"></span>
                                   </>
                                }
                            >
                                <div className="iq-sub-dropdown">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3">
                                                <h5 className="mb-0 text-white">All Messages<small
                                                    className="badge  badge-light float-right pt-1">5</small></h5>
                                            </div>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded"
                                                             src={User01} alt=""/>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Bini Emma Watson</h6>
                                                        <small className="float-left font-size-12">13 Jun</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded"
                                                             src={User02} alt=""/>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                                        <small className="float-left font-size-12">20 Apr</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded"
                                                             src={User03} alt=""/>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Why do we use it?</h6>
                                                        <small className="float-left font-size-12">30 Jun</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded"
                                                             src={User04} alt=""/>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Variations Passages</h6>
                                                        <small className="float-left font-size-12">12 Sep</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded"
                                                             src={User05} alt=""/>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                        <small className="float-left font-size-12">5 Dec</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </NavbarCollapse>
                        </ul>
                    </div>

                    <RightNav user={user}/>
                </nav>
            </div>
        </div>
);
}

export default Index;
