import React from 'react';
import {FaArrowRightLong, FaEllipsis, FaEllipsisVertical} from "react-icons/fa6";
import {Link} from "@inertiajs/react";
import {MdLocationCity} from "react-icons/md";
import Style from "./Sidebar.module.css"
import {IoHomeOutline} from "react-icons/io5";
import {IoIosLink} from "react-icons/io";
import {FaChevronRight} from "react-icons/fa";
import MenuItem from "@/Components/UI/Sidebar/MenuItem.jsx";
import ComboItem from "@/Components/UI/Sidebar/ComboItem.jsx";


function Index(props) {
    return (
        <div className="iq-sidebar">
            <input type="hidden" value="#" id="base_url"/>
            <div className="iq-sidebar-logo d-flex justify-content-between">
                <a href="#">
                    <img src="https://virtualistbd.com/uploads/settings/1695028643-sec-logo.png" className="img-fluid"
                         alt="MBM"/>
                </a>
                <div className="iq-menu-bt-sidebar">
                    <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu" style={{fontSize: "20px"}}>
                            <div className="main-circle"><FaEllipsis/></div>
                            <div className="hover-circle"><FaEllipsisVertical/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="sidebar-scrollbar">
                <nav className="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" className="iq-menu">
                        {/*<li>*/}
                        {/*    <MenuItem href={`#`} style={{background: "#daf0f3", color: "#000"}}>*/}
                        {/*        <MdLocationCity className={Style.iqSidebarMenuI}/> <span> link </span>*/}

                        {/*    </MenuItem>*/}
                        {/*</li>*/}

                        <MenuItem
                            icon={<IoHomeOutline className={Style.iqSidebarMenuI}/>}
                            name={"Dashboard"}
                            url={route('dashboard')}
                            isActive={true}
                        />

                        <MenuItem
                            icon={<IoIosLink className={Style.iqSidebarMenuI}/>}
                            name={"Other Link 1"}
                            url={`#`}
                        />


                        <MenuItem
                            icon={<IoIosLink className={Style.iqSidebarMenuI}/>}
                            name={"Other Link 2"}
                            url={`#`}
                        />
                        <MenuItem
                            icon={<IoIosLink className={Style.iqSidebarMenuI}/>}
                            name={"Other Link 3"}
                            url={`#`}
                        />
                        <MenuItem
                            icon={<IoIosLink className={Style.iqSidebarMenuI}/>}
                            name={"Other Link 4"}
                            url={`#`}
                        />
                        <MenuItem
                            icon={<IoIosLink className={Style.iqSidebarMenuI}/>}
                            name={"Other Link 5"}
                            url={`#`}
                        />
                        <MenuItem
                            icon={<IoIosLink className={Style.iqSidebarMenuI}/>}
                            name={"Other Link 6"}
                            url={`#`}
                        />

                        <ComboItem
                            icon={<IoIosLink className={Style.iqSidebarMenuI}/>}
                            name={"Other Link 7"}
                            url={`#`}
                        >
                           <>
                               <li>
                                   <Link href="#">
                                       <FaArrowRightLong className={Style.iqSidebarMenuI}/>
                                       Sub Link 1
                                   </Link>
                               </li>
                               <li>
                                   <Link href="#">
                                       <FaArrowRightLong className={Style.iqSidebarMenuI}/>
                                       Sub Link 2
                                   </Link>
                               </li>
                               <li>
                                   <Link href="#">
                                       <FaArrowRightLong className={Style.iqSidebarMenuI}/>
                                       Sub Link 3
                                   </Link>
                               </li>
                               <li>
                                   <Link href="#">
                                       <FaArrowRightLong className={Style.iqSidebarMenuI}/>
                                       Sub Link 4
                                   </Link>
                               </li>
                           </>
                        </ComboItem>

                        <ComboItem
                            icon={<IoIosLink className={Style.iqSidebarMenuI}/>}
                            name={"Other Link 8"}
                            url={`#`}
                        >
                           <>
                               <li>
                                   <Link href="#">
                                       <FaArrowRightLong className={Style.iqSidebarMenuI}/>
                                       Sub Link 1
                                   </Link>
                               </li>
                               <li>
                                   <Link href="#">
                                       <FaArrowRightLong className={Style.iqSidebarMenuI}/>
                                       Sub Link 2
                                   </Link>
                               </li>
                               <li>
                                   <Link href="#">
                                       <FaArrowRightLong className={Style.iqSidebarMenuI}/>
                                       Sub Link 3
                                   </Link>
                               </li>
                               <li>
                                   <Link href="#">
                                       <FaArrowRightLong className={Style.iqSidebarMenuI}/>
                                       Sub Link 4
                                   </Link>
                               </li>
                           </>
                        </ComboItem>

                    </ul>
                </nav>
                <div className="p-3"></div>
            </div>
        </div>
    );
}

export default Index;
