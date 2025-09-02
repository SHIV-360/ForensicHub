import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import './HomePage.css'; 

const CommunitySection = () => {
    return (
        <Container className="py-5">
            <Card className="text-center border-0 shadow-sm p-lg-5 p-3">
                <Row className="align-items-center">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <Image
                            
                            src="/assets/images/hero-bg.png"
                            rounded
                            fluid 
                            style={{
                                height: '300px',
                                objectFit: 'cover',
                                width: '100%',
                                maxWidth: '550px',
                            }}
                        />
                    </Col>
                    <Col lg={6}>
                        <h2 className="fw-bold">Join Our Global Community</h2>
                        <p className="lead my-4 text-muted">
                            Connect with forensic investigators, security professionals, and learners from around the world.
                        </p>
                        <div>
                            <Button size="lg" className="px-5 btn-brand-orange">Get Started Today</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default CommunitySection;