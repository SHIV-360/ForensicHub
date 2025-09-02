import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Nav, Form, InputGroup, Button } from 'react-bootstrap';
import { Search, Megaphone } from 'react-bootstrap-icons';
import { getLawsData } from '../../data/mockData'; // Import the new async function
import LawCard from '../laws/LawCard';
import '../laws/LawsPage.css';

// Define the type for a single law object for type safety
interface Law {
    title: string;
    description: string;
    image: string;
    category: string;
    updates?: number;
}

const LawsPage: React.FC = () => {
    const [laws, setLaws] = useState<Law[]>([]); // State to hold the fetched laws
    const [loading, setLoading] = useState(true); // State to handle loading
    const [filter, setFilter] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const data = await getLawsData();
            if (data) {
                setLaws(data);
            }
            setLoading(false);
        };
        loadData();
    }, []); // The empty dependency array ensures this runs only once

    // --- Filter logic ---
    const filteredLaws = laws.filter((law) => {
        const matchesCategory = filter === "all" || law.category.toLowerCase() === filter;
        const matchesSearch = law.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-light">
            <Container className="py-5 laws-page">
                {/* --- Header --- */}
                <h1 className="mb-4 fw-bold">Laws & Regulations</h1>
                <p className="lead text-muted">
                    Stay informed about the latest legal frameworks governing digital forensics.
                </p>

                {/* --- Search Bar --- */}
                <InputGroup className="my-4 shadow-sm">
                    <Form.Control
                        placeholder="Search laws and regulations..."
                        aria-label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button variant="outline-secondary">
                        <Search />
                    </Button>
                </InputGroup>

                {/* --- Recent Legal Updates Banner --- */}
                <Card 
                    className="text-white my-4 border-0 shadow-sm" 
                    style={{ backgroundColor: 'var(--brand-orange)' }}
                >
                    <Card.Body className="d-flex justify-content-between align-items-center p-4">
                        <div>
                            <Card.Title className="fw-bold">
                                <Megaphone className="me-2" />Recent Legal Updates
                            </Card.Title>
                            <Card.Text>
                                New amendments to the Digital Evidence Act effective January 2025.
                            </Card.Text>
                        </div>
                        <Button variant="light">View Details</Button>
                    </Card.Body>
                </Card>

                {/* --- Filter Tabs --- */}
                <Nav variant="pills" activeKey={filter} onSelect={(selectedKey) => setFilter(selectedKey || "all")} className="mb-4">
                    <Nav.Item><Nav.Link eventKey="all">All</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="federal">Federal</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="international">International</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="procedural">Procedural</Nav.Link></Nav.Item>
                </Nav>

                {/* --- Laws Grid --- */}
                {loading ? (
                    <p>Loading laws...</p>
                ) : (
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {filteredLaws.length > 0 ? (
                            filteredLaws.map((law, index) => (
                                <Col key={index}>
                                    <LawCard {...law} />
                                </Col>
                            ))
                        ) : (
                            <p className="text-muted"> 🚫 No Laws found for this filter.</p>
                        )}
                    </Row>
                )}
            </Container>
        </div>
    );
};

export default LawsPage;