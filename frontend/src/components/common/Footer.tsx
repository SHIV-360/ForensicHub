import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <Container>
                <Row>
                    <Col md={4} className="mb-3">
                        <h5 className="fw-bold">ForensicHub</h5>
                        <p className="text-white-50">
                            Your central hub for mastering digital forensics.
                        </p>
                    </Col>
                    <Col md={{ span: 2, offset: 2 }} className="mb-3">
                        <h5 className="fw-bold">Quick Links</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/resources" className="text-white-50 p-0 mb-2">Resources</Nav.Link>
                            <Nav.Link href="/case-studies" className="text-white-50 p-0 mb-2">Case Studies</Nav.Link>
                            <Nav.Link href="/contact" className="text-white-50 p-0 mb-2">Contact</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5 className="fw-bold">Legal</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="#" className="text-white-50 p-0 mb-2">Privacy Policy</Nav.Link>
                            <Nav.Link href="#" className="text-white-50 p-0 mb-2">Terms of Service</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center text-white-50">
                        <p>&copy; {currentYear} ForensicHub. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;