import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Book } from 'react-bootstrap-icons';
import './LawCard.css';

interface LawCardProps {
    title: string;
    description: string;
    image: string;
    category: string;
    updates?: number;
}

const LawCard: React.FC<LawCardProps> = ({ title, description, image, category, updates }) => {
    return (
        <Card className="h-100 shadow-sm border-0 law-card">
            <div className="card-img-container">
                <Card.Img variant="top" src={image} />
                {updates && (
                    <div className="card-img-overlay-top">
                        <Badge bg="primary">{updates} updates</Badge>
                    </div>
                )}
            </div>
            <Card.Body>
                <Badge bg="secondary" className="mb-2">{category}</Badge>
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text className="text-muted">{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
                <Button variant="outline-primary" className="w-100">
                    <Book className="me-2" /> View Details
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default LawCard;