import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from "../assets/SSA-Logo.svg";

const navItems = [
    { id: 1, title: "about us", path: "#about-section" },
    { id: 2, title: "matches", path: "#matches-section" },
    { id: 3, title: "programs", path: "#programs-section" },
    { id: 4, title: "coaches", path: "#professionals-section" },
    { id: 5, title: "amenities", path: "#facilities-section" },
    { id: 6, title: "events", path: "#banners-section" },
    { id: 7, title: "blogs", path: "#blogs-section" },
];

const Header = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const handleNavClick = (e, path) => {
        e.preventDefault();
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState({}, '', path);
        }
    };

    return (
        <Navbar
            expand="lg"
            sticky="top"
            className="py-3 bg-dark bg-opacity-75" // better contrast and visibility
            style={{ zIndex: 100 ,  }}
        >
            <Container>
                {/* Logo */}
                <Navbar.Brand as={NavLink} to="/">
                    <img src={Logo} alt="SSA Logo" width="60" height="38" />
                </Navbar.Brand>

                {/* Toggle Button */}
                <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

                {/* Collapsible Content */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto gap-3 text-center text-lg-start">
                        {navItems.map((val) => (
                            <a
                                key={val.id}
                                href={val.path}
                                onClick={(e) => handleNavClick(e, val.path)}
                                className="text-white text-capitalize nav-hover Matter px-2"
                                style={{ fontSize: "13px", textDecoration: "none" }}
                            >
                                {val.title}
                            </a>
                        ))}
                    </Nav>

                    {/* Contact Button */}
                    <div className="d-flex justify-content-center justify-content-lg-end mt-3 mt-lg-0">
                        <Button
                            variant="outline-light"
                            className="rounded-pill px-4 py-2"
                            style={{
                                fontSize: "12px",
                                fontWeight: "bold",
                                height: "37px",
                                width: "136px",
                            }}
                        >
                            Contact
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
