import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Download } from 'react-bootstrap-icons';
import './ResourceCard.css';

interface ResourceCardProps {
    title: string;
    description: string;
    image: string;
    category: string;
    size: string;
    downloads: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, image, category, size, downloads }) => {
    return (
        <Card className="h-100 shadow-sm border-0 resource-card">
            <div className="card-img-container">
                <Card.Img variant="top" src={image} />
                <div className="card-img-overlay-top">
                    <Badge bg="primary">{category}</Badge>
                </div>
            </div>
            <Card.Body>
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text className="text-muted">{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0 d-flex justify-content-between align-items-center">
                <div className="text-muted small">
                    {size} - {downloads.toLocaleString()} downloads
                </div>
                <Button variant="outline-primary" className="download-btn">
                    <Download className="me-2" />
                    Download
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default ResourceCard;