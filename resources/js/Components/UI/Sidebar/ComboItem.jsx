import React, {createRef, useEffect} from 'react';
import {Link} from "@inertiajs/react";
import {FaChevronRight} from "react-icons/fa";
import {detectOutsideClick} from "@/Library/helper.js";

function ComboItem({icon, name, url, isActive, children}) {
    const parentRef = createRef()
    const childRef = createRef()

    const navAction = (e) => {
        e.preventDefault()
        childRef.current.classList.toggle('show')
        childRef.current.closest("li").classList.toggle("active")
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (childRef.current && parentRef.current && !childRef.current.contains(event.target) && !parentRef.current.contains(event.target)) {
                // Clicked outside the dropdown, close it
                childRef.current.classList.remove("show")
                childRef.current.closest("li").classList.remove("active")
            }
        };

        // Add event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [childRef])

    return (
        <li ref={parentRef}>
            <Link href={url} className="iq-waves-effect collapsed" data-toggle="collapse"
                  aria-expanded="false" onClick={e=>navAction(e)}>
                {icon}
                <span>{name}</span>
                <FaChevronRight className={`iq-arrow-right`}/>
            </Link>
            <ul ref={childRef} id="recruitment" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                {children}
            </ul>
        </li>
    );
}

export default ComboItem;
