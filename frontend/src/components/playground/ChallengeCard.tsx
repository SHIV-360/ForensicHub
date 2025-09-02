import React from 'react';
import { Card, ProgressBar, Button, Badge } from 'react-bootstrap';
import './ChallengeCard.css';

interface ChallengeCardProps {
    title: string;
    category: string;
    image: string;
    points: number;
    progress: number;
    difficulty: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({ title, category, image, points, progress, difficulty }) => {
    const isStarted = progress > 0;

    return (
        <Card className="h-100 shadow-sm border-0 challenge-card">
            <div className="card-img-container">
                <Card.Img variant="top" src={image} />
                <div className="card-img-overlay-top">
                    <Badge bg="dark">{difficulty}</Badge>
                    <Badge pill className="badge-brand-green">{points} pts</Badge>
                </div>
            </div>
            <Card.Body>
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text className="text-muted small">{category}</Card.Text>
                <ProgressBar now={progress} label={`${progress}%`} className="mt-3 progress-bar-brand" />
            </Card.Body>
            <Card.Footer className="bg-white border-0">
                <Button 
                    variant={isStarted ? 'outline-primary' : 'primary'}
                    className="w-100"
                >
                    {isStarted ? 'Continue' : 'Start Challenge'}
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default ChallengeCard;