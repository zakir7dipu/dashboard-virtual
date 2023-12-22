import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import "../../css/all.css";
import "../../css/responsive.css";
import "../../css/style.css";

export default function Guest({ children }) {
    return (
        <div id="app">
            {children}
        </div>
    );
}
