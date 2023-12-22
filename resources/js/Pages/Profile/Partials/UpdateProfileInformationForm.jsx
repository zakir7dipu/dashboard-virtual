import InputError from '@/Components/UI/InputError.jsx';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Link, useForm, usePage} from '@inertiajs/react';
import {Transition} from '@headlessui/react';
import React from "react";

export default function UpdateProfileInformation({mustVerifyEmail, status, className = ''}) {
    const user = usePage().props.auth.user;

    const {data, setData, patch, errors, processing, recentlySuccessful} = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>

            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        className={`form-control mb-0 ${errors?.email ? "is-invalid" : ""}`}
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoComplete={true}
                    />

                    <InputError className="mt-2" message={errors.name}/>
                </div>

                <div className="form-group">
                    <label htmlFor="name">Email</label>

                    <input
                        id="email"
                        type="email"
                        className={`form-control mb-0 ${errors?.email ? "is-invalid" : ""}`}
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email}/>
                </div>

                <div className="d-inline-block w-100">
                    <button type="submit" className="btn btn-primary float-right">Save</button>
                </div>
            </form>
        </section>
    );
}
