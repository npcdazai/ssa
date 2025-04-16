import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from "../assets/SSA-Logo.svg";

const navItems = [
    { id: 1, title: "about us", path: "/about" },
    { id: 2, title: "matches", path: "/matches" },
    { id: 3, title: "programs", path: "/programs" },
    { id: 4, title: "coaches", path: "/coaches" },
    { id: 5, title: "amenities", path: "/amenities" },
    { id: 6, title: "events", path: "/events" },
    { id: 7, title: "blogs", path: "/blogs" },
];

const Header = () => {
    const location = useLocation();

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
                            <NavLink
                                key={val.id}
                                to={val.path}
                                className={`text-white text-capitalize nav-hover Matter px-2 ${location.pathname === val.path ? 'fw-bold' : ''}`}
                                style={{ fontSize: "13px", textDecoration: "none" }}
                            >
                                {val.title}
                            </NavLink>
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
