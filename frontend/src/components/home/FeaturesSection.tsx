import { Container, Row, Col, Card } from 'react-bootstrap';
import { Puzzle, Book, JournalRichtext, ShieldLock, ArrowRight } from 'react-bootstrap-icons';
import './FeaturesSection.css';

const features = [
    { icon: <Puzzle size={30} />, title: 'Interactive Challenges' },
    { icon: <Book size={30} />, title: 'Learning Resources' },
    { icon: <JournalRichtext size={30} />, title: 'Case Studies' },
    { icon: <ShieldLock size={30} />, title: 'Laws & Regulations' }
];

const FeaturesSection = () => {
    return (
        <Container className="py-5">
            <Card className="border-0 shadow-sm">
                <Card.Body className="p-5">
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="fw-bold" style={{ color: 'var(--brand-green)' }}>Everything You Need to Excel</h2>
                            <p className="lead text-muted">
                                From beginner-friendly tutorials to advanced investigation techniques, we provide the tools and knowledge for every skill level.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {features.map((feature, index) => (
                            <Col key={index} md={6} lg={3} className="mb-4 d-flex align-items-stretch">
                                <Card className="w-100 text-center feature-card p-3">
                                    <Card.Body className="d-flex flex-column">
                                        <div className="feature-icon mb-3" style={{ color: 'var(--brand-green)' }}>
                                            {feature.icon}
                                        </div>
                                        <Card.Title className="fw-bold fs-5">{feature.title}</Card.Title>
                                        <a 
                                            href="#" 
                                            className="mt-auto text-decoration-none fw-bold feature-explore-link"
                                            style={{ color: 'var(--brand-green)' }}
                                        >
                                            Explore <ArrowRight />
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FeaturesSection;