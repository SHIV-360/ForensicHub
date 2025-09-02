import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, ProgressBar, Alert, ListGroup, Badge } from 'react-bootstrap';
import { Trophy, Star, TrophyFill } from 'react-bootstrap-icons';
import {
    getChallengesData,
    getLeaderboardData,
    getUserProfileData // Import the user profile fetch function
} from '../../data/mockData';
import ChallengeCard from '../playground/ChallengeCard';
import '../playground/PlaygroundPage.css';

// Define types for our data
interface Challenge {
    title: string;
    category: string;
    image: string;
    points: number;
    progress: number;
    difficulty: string;
}
interface LeaderboardEntry {
    name: string;
    points: number;
}
interface UserProfile {
    stats: {
        completed: number;
        streak: number;
        xp: number;
        level: number;
    };
    learningProgress: {
        overall: number;
    }
}

const PlaygroundPage = () => {
    // State for each piece of data
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    // Fetch all data when the component mounts
    useEffect(() => {
        const loadData = async () => {
            const [challengesData, leaderboardData, profileData] = await Promise.all([
                getChallengesData(),
                getLeaderboardData(),
                getUserProfileData()
            ]);
            setChallenges(challengesData || []);
            setLeaderboard(leaderboardData || []);
            setUserProfile(profileData);
        };
        loadData();
    }, []);

    // Render a loading state while data is being fetched
    if (!userProfile) {
        return <Container className="py-5">Loading...</Container>;
    }

    return (
        <div className="bg-light">
            <Container className="py-5 playground-page">
                <Row className="mb-4 align-items-center">
                    <Col>
                        <h1 className="fw-bold">Welcome to the Playground</h1>
                        <p className="lead text-muted">Your digital forensics journey continues.</p>
                    </Col>
                    <Col xs="auto" className="text-end">
                        <Badge className="p-2 fs-6 badge-level">
                            <TrophyFill className="me-2" /> Level {userProfile.stats.level}
                        </Badge>
                    </Col>
                </Row>

                <Card className="mb-4 shadow-sm border-0">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col md={2}><strong>Overall Progress</strong></Col>
                            <Col md={10}>
                                <ProgressBar now={userProfile.learningProgress.overall} label={`${userProfile.stats.xp} / 2,000 XP`} className="progress-bar-brand" />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Alert variant="light" className="d-flex align-items-center shadow-sm alert-brand">
                    <Star size={24} className="me-3" />
                    <div>
                        <Alert.Heading className="mb-0 fw-bold">New Challenge Available!</Alert.Heading>
                        <p className="mb-0">Advanced Blockchain Forensics challenge is now live.</p>
                    </div>
                </Alert>

                <Row className="mt-4">
                    {/* Main Content */}
                    <Col lg={8}>
                        <Row xs={1} md={2} className="g-4">
                            {challenges.map((challenge, index) => (
                                <Col key={index}>
                                    <ChallengeCard {...challenge} />
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    {/* Sidebar */}
                    <Col lg={4}>
                        <div className="sidebar">
                            <Card className="mb-4 shadow-sm border-0">
                                <Card.Body>
                                    <Card.Title className="fw-bold">Quick Stats</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="d-flex justify-content-between">Challenges Completed <span>{userProfile.stats.completed}</span></ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between">Current Streak <span>{userProfile.stats.streak} days</span></ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between">Total Points <span>{userProfile.stats.xp}</span></ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>

                            <Card className="mb-4 shadow-sm border-0">
                                <Card.Body>
                                    <Card.Title className="fw-bold"><Trophy className="me-2" />Leaderboard</Card.Title>
                                    <ListGroup variant="flush" numbered>
                                        {leaderboard.map((user, index) => (
                                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">{user.name}</div>
                                                <Badge pill className="badge-brand-green">{user.points}</Badge>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaygroundPage;