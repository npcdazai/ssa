import React from 'react';
import Logo from "../assets/SSA-Logo.svg";
import { NavLink } from 'react-router-dom';

const navItems = [
    { id: 1, title: "about us", path: "#" },
    { id: 2, title: "matches", path: "#" },
    { id: 3, title: "programs", path: "#" },
    { id: 4, title: "coaches", path: "#" },
    { id: 5, title: "amenities", path: "#" },
    { id: 6, title: "events", path: "#" },
    { id: 7, title: "blogs", path: "#" },
];

const Header = () => {
    return (
        <nav style={{zIndex:100 , position:"fixed" , top:"0px" , width:"100%" }} className="navbar navbar-expand-lg bg-transparent p-4  Matter">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <NavLink className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" width="60" height="38" className="d-inline-block align-text-top" />
                </NavLink>

                <div className="d-flex align-items-center gap-3">
                    {navItems.map((val) => (
                        <NavLink
                            key={val.id}
                            to={val.path}
                            className="nav-link text-white text-capitalize Matter"
                            style={{ fontSize: "13px", fontWeight: 400}}
                        >
                            {val.title}
                        </NavLink>
                    ))}

                </div>
                <button
                    className="btn btn-outline-light rounded-pill px-4 py-2"
                    style={{ height: "37px", width: "136px", fontSize: "12px", fontWeight: "bold" }}
                >
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Header;
