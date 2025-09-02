import { Container, Row, Col, Card } from 'react-bootstrap';

const stats = [
    { value: '2,500+', label: 'Active Investigators' },
    { value: '15,000+', label: 'Challenges Completed' },
    { value: '94%', label: 'Success Rate' },
    { value: '50+', label: 'Countries' },
];

const StatsSection = () => {
    return (
        <Container className="py-5">
            <Row>
                {stats.map((stat, index) => (
                    <Col key={index} md={3} sm={6} className="mb-4 mb-md-0">
                        <Card className="text-center shadow-sm border-0 h-100 justify-content-center py-3">
                            <Card.Body>
                                <h2 className="display-5 fw-bold text-primary">{stat.value}</h2>
                                <p className="text-muted mb-0">{stat.label}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default StatsSection;