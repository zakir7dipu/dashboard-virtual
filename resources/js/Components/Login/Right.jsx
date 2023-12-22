import React, {useEffect} from 'react';
import InputError from "@/Components/UI/InputError.jsx";
import {Link, useForm} from "@inertiajs/react";

function Right() {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className="col-md-6 position-relative">
            <div className="sign-in-from">
                <form onSubmit={submit}>
                    <Link className="sign-in-logo text-center mb-3 " href="/">
                        <img src="https://virtualistbd.com/uploads/settings/1695028643-sec-logo.png"
                             className="img-fluid" alt="Bizz"/>
                    </Link>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            name="email"
                            type="email"
                            className={`form-control mb-0 ${errors?.email ? "is-invalid" : ""}`}
                            id="email"
                            placeholder="Enter email"
                            value={data.email}
                            autoFocus={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-2"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            type="password"
                            className={`form-control mb-0 ${errors?.password ? "is-invalid" : ""}`}
                            id="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-2"/>
                    </div>
                    <div className="d-inline-block w-100">
                        <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember
                                Me</label>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Sign in</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Right;
