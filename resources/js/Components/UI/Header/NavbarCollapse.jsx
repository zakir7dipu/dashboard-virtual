import React, {createRef, useEffect} from 'react';
import {Link} from "@inertiajs/react";
import {detectOutsideClick} from "@/Library/helper.js";


function NavbarCollapse({children, icon}) {
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
        <li ref={navRef} className="nav-item">
            <Link href="#" className="search-toggle iq-waves-effect"
                  onClick={e=> actionHandler(e)}
            >
                {icon}
            </Link>

            {children}
        </li>
    );
}

export default NavbarCollapse;
