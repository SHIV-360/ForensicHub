import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <div className="hero-section text-white text-center">
            <Container>
                <h1 className="display-3 fw-bold">
                    Welcome to <span className="brand-orange-text">ForensicHub</span>
                </h1>
                <p className="lead my-4">
                    Master digital forensics through hands-on challenges, comprehensive resources, and real-world case studies
                </p>
                <div>
                    <Button size="lg" className="me-3 px-4 btn-brand-orange">Start Your Journey</Button>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;