import React, {createRef, useEffect, useState} from 'react';
import {Link} from "@inertiajs/react";
import {IoIosLink} from "react-icons/io";
import Style from "@/Components/UI/Sidebar/Sidebar.module.css";
import {FaChevronRight} from "react-icons/fa";
import {detectOutsideClick} from "@/Library/helper.js";

function MenuItem({icon, name, url, isActive}) {

    return (
        <li className={isActive ? "active" : ""}>
            <Link href={url} className="iq-waves-effect">
                {icon}
                <span>{name}</span>
            </Link>
        </li>

    );
}

export default MenuItem;
