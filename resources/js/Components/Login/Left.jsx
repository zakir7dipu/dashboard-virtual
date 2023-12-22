import React from 'react';
import Style from '../../Pages/Auth/Login.module.css'
function Left(props) {
    return (
        <div className="col-md-6 text-center ">
            <div className="sign-in-detail text-white">
                <div className={Style.logoWrapper}>
                    <div className="item login-slider">
                        <img src="https://virtualistbd.com/uploads/settings/1695028643-sec-logo.png"
                             className="img-fluid mb-2 radius-10 bg-white p-2" alt="logo"/>
                            <h4 className="mb-1 text-white">Virtualist BD</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left;
