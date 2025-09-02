import { useState, useEffect } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Book, People, ChatLeftText } from 'react-bootstrap-icons';
import { getCaseStudiesData } from '../../data/mockData'; 
import CaseStudyCard from '../casestudies/CaseStudyCard';

const CaseStudiesPage = () => {
    const [caseStudies, setCaseStudies] = useState<any[]>([]); 
    const [activeKey, setActiveKey] = useState('all');

    // Fetch data when the component mounts
    useEffect(() => {
        const loadData = async () => {
            const data = await getCaseStudiesData();
            if (data) {
                setCaseStudies(data);
            }
        };
        loadData();
    }, []); // Empty dependency array means this runs once on mount

    // Filter logic based on tags
    const filteredData =
        activeKey === 'all'
            ? caseStudies
            : caseStudies.filter((study) =>
                study.tags.some(
                    (tag: string) => tag.toLowerCase().replace(/\s+/g, '') === activeKey
                )
            );

    return (
        <div className="bg-light">
            <Container className="py-5">
                <h1 className="display-5 fw-bold">Case Studies</h1>
                <p className="lead text-muted mb-4">
                    Learn from real-world digital forensics investigations.
                </p>

                
                <Nav
                    variant="pills"
                    activeKey={activeKey}
                    onSelect={(selectedKey) => setActiveKey(selectedKey || 'all')}
                    className="mb-4"
                >
                    <Nav.Item>
                        <Nav.Link eventKey="all">All Cases</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="networksecurity">Network Security</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="mobileforensics">Mobile Forensics</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="emailforensics">Email Forensics</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="malwareanalysis">Malware Analysis</Nav.Link>
                    </Nav.Item>
                </Nav>

                {/* Filtered Case Studies */}
                {filteredData.length > 0 ? (
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {filteredData.map((study, index) => (
                            <Col key={index}>
                                <CaseStudyCard {...study} />
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <p className="text-muted"> 🚫 No Case Study found for this filter.</p>
                )}

                {/* Learning Resources Section */}
                <div className="bg-white p-5 mt-5 rounded shadow-sm">
                    <h3 className="fw-bold mb-4">Learning Resources</h3>
                    <Row className="text-center">
                        <Col md={4}>
                            <Book size={30} className="text-success mb-2" />
                            <h5 className="fw-bold">Case Templates</h5>
                            <p className="text-muted">
                                Structured templates for documenting your own investigations.
                            </p>
                        </Col>
                        <Col md={4}>
                            <People size={30} className="text-success mb-2" />
                            <h5 className="fw-bold">Expert Insights</h5>
                            <p className="text-muted">
                                Commentary and analysis from leading forensics professionals.
                            </p>
                        </Col>
                        <Col md={4}>
                            <ChatLeftText size={30} className="text-success mb-2" />
                            <h5 className="fw-bold">Community Discussion</h5>
                            <p className="text-muted">
                                Engage with peers and share insights on complex cases.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CaseStudiesPage;