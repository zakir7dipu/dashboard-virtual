import React from 'react';
import {Head} from "@inertiajs/react";
import {Col, Row} from "react-bootstrap";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import UpdatePasswordForm from "@/Pages/Profile/Password/UpdatePasswordForm.jsx";

function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Profile" />

            <Row>
                <Col lg={6}>
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">Update Password</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            Ensure your account is using a long, random password to stay secure.
                        </p>
                    </header>
                </Col>
                <Col lg={4}>
                    <UpdatePasswordForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </Col>
            </Row>

        </AuthenticatedLayout>
    );
}

export default Edit;
