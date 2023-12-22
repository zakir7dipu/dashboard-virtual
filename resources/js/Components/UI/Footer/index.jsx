import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "@inertiajs/react";

function Index(props) {
    return (
        <footer className="bg-white iq-footer mr-0" style={{margin:"0"}}>
            <div className="container-fluid">
                <Row>
                    <Col lg={6}>
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <Link href="#">Privacy Policy</Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="#">Terms of Use</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={6} className="text-right">
                        <p className={`m-0`}>Design & developed for <Link href={"/"}>Company Name</Link> By <Link
                            href={`https://virtualistbd.com/`}>Virtualist BD</Link></p>
                    </Col>
                </Row>
            </div>
        </footer>
    );
}

export default Index;
