import {useEffect} from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/UI/InputError.jsx';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Head, Link, useForm} from '@inertiajs/react';
import Left from "@/Components/Login/Left.jsx";
import Right from "@/Components/Login/Right.jsx";
import Style from "./Login.module.css"

export default function Login({status, canResetPassword}) {

    return (
        <GuestLayout>
            <Head title="Log in"/>

            <section className={`sign-in-page ${Style.signInPage}`}>
                <div className="container sign-in-page-bg mt-4 p-0">
                    <div className="row no-gutters pl-5">
                        <Left/>
                        <Right/>

                    </div>
                </div>
            </section>

        </GuestLayout>
    );
}
