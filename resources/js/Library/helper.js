export const detectOutsideClick = (ref) => {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            // Clicked outside the dropdown, close it
            ref.current.classList.remove("iq-show")
            ref.current.querySelector('a').classList.remove("active")
        }
    };

    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}
