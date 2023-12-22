import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Password/UpdatePasswordForm.jsx';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import {Col, Row} from "react-bootstrap";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Profile" />

            <Row>
                <Col lg={6}>
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            Update your account's profile information and email address.
                        </p>
                    </header>
                </Col>
                <Col lg={4}>
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="max-w-xl"
                    />
                </Col>
            </Row>

        </AuthenticatedLayout>
    );
}
