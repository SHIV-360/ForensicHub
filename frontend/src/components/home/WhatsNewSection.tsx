import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Book, Mortarboard, PlusCircle } from 'react-bootstrap-icons';

const newItems = [
    { title: "Advanced Blockchain Forensics", type: "Expert", category: "New Challenge", link: "#" },
    { title: "Mobile Device Analysis Guide", type: "Popular", category: "Resource Update", link: "#" },
    { title: "European GDPR Compliance", type: "Important", category: "Legal Update", link: "#" }
];

const WhatsNewSection = () => {
    const getBadgeVariant = (type: string) => {
        switch (type) {
            case 'Expert': return 'danger';
            case 'Popular': return 'success';
            case 'Important': return 'warning';
            default: return 'secondary';
        }
    };

    return (
        <Container className="py-5">
            <Row>
                {/* What's New Column */}
                <Col md={8} className="mb-4 mb-md-0">
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4">
                            <Card.Title className="fw-bold mb-4">What's New</Card.Title>
                            {newItems.map((item, index) => (
                                <a key={index} href={item.link} className="whats-new-item">
                                    <div>
                                        <div className="fw-bold">{item.title}</div>
                                        <small className="text-muted">{item.category}</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Badge bg={getBadgeVariant(item.type)} className="me-3">{item.type}</Badge>
                                        <PlusCircle size={20} className="text-primary" />
                                    </div>
                                </a>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>

                {/* Quick Start Column - UPDATED */}
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm">
                        <Card.Body className="p-4 d-flex flex-column">
                            <Card.Title className="fw-bold mb-4">Quick Start</Card.Title>
                            {/* Changed Buttons to styled Links */}
                            <a href="#" className="quick-start-item primary">
                                <Mortarboard className="me-2" /> Take a Challenge
                            </a>
                            <a href="#" className="quick-start-item secondary">
                                <Book className="me-2" /> Browse Resources
                            </a>
                            <a href="#" className="quick-start-item secondary">
                                Join Community
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default WhatsNewSection;