import React, { useRef } from 'react';
import InputError from '@/Components/UI/InputError.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import TextInput from '@/Components/TextInput.jsx';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import {Input} from "postcss";

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div className="form-group">
                    <label htmlFor="current_password">Current Password</label>

                    <input
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        type="password"
                        className={`form-control mb-0 ${errors?.current_password ? "is-invalid" : ""}`}
                        autoComplete="current-password"
                    />

                    <InputError message={errors.current_password} className="mt-2" />
                </div>

                <div className="form-group">
                    <label htmlFor="current_password">New Password</label>

                    <input
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className={`form-control mb-0 ${errors?.password ? "is-invalid" : ""}`}
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="form-group">
                    <label htmlFor="current_password">Confirm Password</label>

                    <input
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        type="password"
                        className={`form-control mb-0 ${errors?.password_confirmation ? "is-invalid" : ""}`}
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="d-inline-block w-100">
                    <button type="submit" className="btn btn-primary float-right">Save</button>
                </div>
            </form>
        </section>
    );
}
