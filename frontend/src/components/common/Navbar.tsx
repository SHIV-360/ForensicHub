// frontend/src/components/common/Navbar.tsx

import { useEffect, useRef } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import './Navbar.css'; 

const AppNavbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation(); // Hook to detect route changes
    const navRef = useRef<HTMLDivElement>(null); // Ref to attach to the Nav container

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        // Find the sliding indicator, or create it if it doesn't exist
        let indicator = nav.querySelector('.nav-indicator') as HTMLSpanElement;
        if (!indicator) {
            indicator = document.createElement('span');
            indicator.className = 'nav-indicator';
            nav.appendChild(indicator);
        }

        const updateIndicator = (el: HTMLElement) => {
            const navRect = nav.getBoundingClientRect();
            const rect = el.getBoundingClientRect();
            indicator.style.width = `${rect.width}px`;
            indicator.style.height = `${rect.height}px`;
            indicator.style.left = `${rect.left - navRect.left}px`;
            indicator.style.top = `${rect.top - navRect.top}px`;
        };

        const activeLink = nav.querySelector('.nav-link.active') as HTMLElement;

        if (activeLink) {
            updateIndicator(activeLink);
        }

    }, [location]);

    return (
        <Navbar bg="white" expand="lg" className="shadow-sm">
            <Container>
                <Link to="/" className="navbar-brand fw-bold" style={{ color: 'var(--brand-green)', fontSize: '2rem' }}>
                    ForensicHub
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Attach the ref to the Nav component */}
                    <Nav ref={navRef} className="ms-auto align-items-center position-relative">
                        <Nav.Link as={NavLink} to="/" className="mx-3">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/laws" className="mx-3">Laws</Nav.Link>
                        <Nav.Link as={NavLink} to="/case-studies" className="mx-3">Case Studies</Nav.Link>
                        <Nav.Link as={NavLink} to="/resources" className="mx-3">Resources</Nav.Link>
                        <Nav.Link as={NavLink} to="/playground" className="mx-3">Playground</Nav.Link>
                        <Nav.Link as={NavLink} to="/profile" className="mx-3">Profile</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="mx-3">Contact</Nav.Link>
                        
                        {isAuthenticated ? (
                            <Button variant="outline-secondary" onClick={logout} className="ms-3">
                                Logout
                            </Button>
                        ) : (
                            <Button onClick={() => navigate('/login')} variant="primary" className="ms-3" style={{backgroundColor: 'var(--brand-green)', borderColor: 'var(--brand-green)'}}>
                                Login
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;