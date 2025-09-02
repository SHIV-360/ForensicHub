// frontend/src/components/casestudies/CaseStudyCard.tsx

import { Card, Button, Badge } from 'react-bootstrap';
import { Tools, Film } from 'react-bootstrap-icons';
import './CaseStudyCard.css';

interface CaseStudyCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    duration: string;
    tools: number;
    videos: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, image, tags, duration, tools, videos }) => {
    return (
        <Card className="h-100 shadow-sm border-0 case-study-card">
            <div className="card-img-container">
                <Card.Img variant="top" src={image} />
                <div className="card-img-overlay-top">
                    <div>
                        {tags.map((tag, index) => (
                            <Badge key={index} bg="dark" className="me-2">{tag}</Badge>
                        ))}
                    </div>
                    <Badge pill bg="light" text="dark">{duration}</Badge>
                </div>
            </div>
            <Card.Body>
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text className="text-muted">{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0 d-flex justify-content-between align-items-center">
                <div className="text-muted small">
                    <Tools className="me-1" /> {tools} tools
                    <Film className="ms-3 me-1" /> {videos} videos
                </div>
                <Button variant="success">View Case Study</Button>
            </Card.Footer>
        </Card>
    );
};

export default CaseStudyCard;