import GuestLayout from '@/Layouts/GuestLayout';
import {Col, Row} from "react-bootstrap";

import Footer from "@/Components/UI/Footer/index.jsx";
import Header from "@/Components/UI/Header/index.jsx";
import Sidebar from "@/Components/UI/Sidebar/index.jsx"

export default function Authenticated({user, children}) {

    return (
        <GuestLayout>
            <div className="wrapper">
                <Sidebar/>
                <div id="content-page" className="content-page">
                    <Header user={user}/>
                    <main>
                        <div id="main-body" className="container-fluid">
                            <Row>
                                <Col className={`p-0`}>
                                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                        <div className="iq-card-body pb-0" style={{height: "73vh"}}>
                                            {children}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </main>
                    <Footer/>
                </div>
            </div>
        </GuestLayout>
    )
        ;
}
