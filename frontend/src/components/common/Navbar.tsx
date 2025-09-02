import { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';
import './Navbar.css';

const AppNavbar = () => {
    useEffect(() => {
        const nav = document.querySelector('.navbar-nav');
        if (!nav) return;

        // create sliding pill indicator
        const indicator = document.createElement('span');
        indicator.classList.add('nav-indicator');
        nav.appendChild(indicator);

        const updateIndicator = (el: HTMLElement) => {
            const rect = el.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();
            indicator.style.left = `${rect.left - navRect.left}px`;
            indicator.style.width = `${rect.width}px`;
            indicator.style.height = `${rect.height}px`;
            indicator.style.top = `${rect.top - navRect.top}px`;
        };

        const links = nav.querySelectorAll('.nav-link');
        links.forEach((link) => {
            link.addEventListener('click', () => {
                links.forEach((l) => l.classList.remove('active'));
                link.classList.add('active');
                updateIndicator(link as HTMLElement);
            });
        });

        // set initial pill on active or first link
        const activeLink = nav.querySelector('.nav-link.active') || links[0];
        if (activeLink) updateIndicator(activeLink as HTMLElement);
    }, []);

    return (
        <Navbar bg="white" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand
                    as={NavLink}
                    to="/"
                    className="fw-bold"
                    style={{
                        color: 'var(--brand-green)',
                        fontSize: '2rem'
                    }}
                >
                    ForensicHub
                </Navbar.Brand>

                {/* Toggle button */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center position-relative">
                        <Nav.Link as={NavLink} to="/" className="mx-3">
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/laws" className="mx-3">
                            Laws
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/case-studies" className="mx-3">
                            Case Studies
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/resources" className="mx-3">
                            Resources
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/playground" className="mx-3">
                            Playground
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/profile" className="mx-3">
                            Profile
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="mx-3">
                            Contact
                        </Nav.Link>

                        {/* search icon */}
                        <Nav.Link href="#search">
                            <Search size={20} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
