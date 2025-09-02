import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { PersonCircle, Twitter, Linkedin, Facebook, EnvelopeFill, TelephoneFill, GeoAltFill } from 'react-bootstrap-icons';
import { 
    getContactInfo, 
    getOfficeHours, 
    getTeamMembers 
} from '../../data/mockData'; // Import the new async functions
import '../contact/ContactPage.css';


interface ContactInfo {
    icon: string;
    value: string;
    href: string;
}
interface OfficeHour {
    days: string;
    hours: string;
}
interface TeamMember {
    name: string;
    title: string;
}

const ContactPage = () => {
    // State for each piece of data
    const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
    const [officeHours, setOfficeHours] = useState<OfficeHour[]>([]);
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch all data when the component mounts
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const [contactData, hoursData, teamData] = await Promise.all([
                getContactInfo(),
                getOfficeHours(),
                getTeamMembers()
            ]);
            setContactInfo(contactData || []);
            setOfficeHours(hoursData || []);
            setTeamMembers(teamData || []);
            setLoading(false);
        };
        loadData();
    }, []);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'EnvelopeFill': return <EnvelopeFill className="me-3 icon-brand-green flex-shrink-0" size={22} />;
            case 'TelephoneFill': return <TelephoneFill className="me-3 icon-brand-green flex-shrink-0" size={22} />;
            case 'GeoAltFill': return <GeoAltFill className="me-3 icon-brand-green flex-shrink-0" size={22} />;
            default: return null;
        }
    };

    if (loading) {
        return <Container className="py-5 text-center"><h2>Loading...</h2></Container>;
    }

    return (
        <div className="bg-light contact-page">
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h1 className="display-5 fw-bold">Get in Touch</h1>
                    <p className="lead text-muted">
                        Connect with our team of digital forensics experts and join our growing community.
                    </p>
                </div>

                <Row>
                    {/* Left Column: Contact Form */}
                    <Col lg={7} className="mb-4 mb-lg-0">
                        <Card className="p-lg-4 p-3 shadow-sm border-0 h-100">
                            <Card.Body>
                                <h3 className="fw-bold mb-4">Send us a Message</h3>
                                <Form>
                                    <Row>
                                        <Col md={6}><Form.Group className="mb-3"><Form.Label>First Name</Form.Label><Form.Control type="text" placeholder="John" /></Form.Group></Col>
                                        <Col md={6}><Form.Group className="mb-3"><Form.Label>Last Name</Form.Label><Form.Control type="text" placeholder="Doe" /></Form.Group></Col>
                                    </Row>
                                    <Form.Group className="mb-3"><Form.Label>Email Address</Form.Label><Form.Control type="email" placeholder="john.doe@example.com" /></Form.Group>
                                    <Form.Group className="mb-3"><Form.Label>Subject</Form.Label><Form.Control type="text" placeholder="Question about a case study" /></Form.Group>
                                    <Form.Group className="mb-3"><Form.Label>Message</Form.Label><Form.Control as="textarea" rows={5} placeholder="Your detailed message..." /></Form.Group>
                                    <Button type="submit" className="w-100 btn-brand-green mt-2">Send Message</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Right Column: Contact Details */}
                    <Col lg={5}>
                        <div className="contact-info-sidebar">
                            <h4 className="fw-bold mb-3">Contact Information</h4>
                            <ListGroup variant="flush" className="mb-4">
                                {contactInfo.map((item, index) => (
                                    <ListGroup.Item key={index} as="a" href={item.href} className="d-flex align-items-center">
                                        {getIcon(item.icon)}
                                        <span>{item.value}</span>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>

                            <h4 className="fw-bold mb-3">Office Hours</h4>
                            {officeHours.map((item, index) => (
                                <p key={index} className="mb-2"><strong>{item.days}:</strong><br/>{item.hours}</p>
                            ))}
                            <hr className="my-4" />

                            <h4 className="fw-bold mb-3">Follow Us</h4>
                            <div>
                                <a href="#" className="social-icon me-3"><Twitter size={24} /></a>
                                <a href="#" className="social-icon me-3"><Linkedin size={24} /></a>
                                <a href="#" className="social-icon"><Facebook size={24} /></a>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* --- Meet Our Team Section --- */}
                <Row className="mt-5">
                    <Col>
                        <h2 className="text-center fw-bold mb-4">Meet Our Team</h2>
                        <p className="text-center text-muted mb-4">
                            Experienced professionals advancing the field of digital forensics.
                        </p>
                        <Row xs={2} sm={3} md={4} lg={6} className="g-3 justify-content-center">
                            {teamMembers.map((member, index) => (
                                <Col key={index}>
                                    <Card className="team-card text-center h-100">
                                        <Card.Body>
                                            <PersonCircle size={40} className="mb-2 text-secondary" />
                                            <div className="fw-bold small">{member.name}</div>
                                            <div className="text-muted extra-small">{member.title}</div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactPage;