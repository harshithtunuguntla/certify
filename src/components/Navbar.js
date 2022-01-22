import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
    const [tab, setTab] = useState(window.location.pathname);

    return (
            // <h2 className="ui header">
            //     <img className="ui image" src="../../public/logo.png"/>
            // </h2>
        <div className="ui secondary pointing menu">
                <NavLink
                    to="/"
                >
                    {" "}
                    <a className={`item`}>
                        Certify
                    </a>{" "}
                </NavLink>
            <div className="right menu">
                <NavLink
                    onClick={(isActive) => {
                        setTab("/");
                    }}
                    to="/"
                >
                    {" "}
                    <a className={`item ${tab === "/" ? "active" : ""}`}>
                        Home
                    </a>{" "}
                </NavLink>
                <NavLink
                    onClick={(isActive) => {
                        setTab("/getCertificate");
                    }}
                    to="/getCertificate"
                >
                    {" "}
                    <a
                        className={`item ${
                            tab === "/getCertificate" ? "active" : ""
                        }`}
                    >
                        Get Certificate
                    </a>{" "}
                </NavLink>
                <NavLink
                    onClick={(isActive) => {
                        setTab("/verifyCertificate");
                    }}
                    to="/verifyCertificate"
                >
                    {" "}
                    <a
                        className={`item ${
                            tab === "/verifyCertificate" ? "active" : ""
                        }`}
                    >
                        Verify Certificate
                    </a>{" "}
                </NavLink>
                <NavLink
                    onClick={(isActive) => {
                        setTab("/generateCertificate");
                    }}
                    to="/generateCertificate"
                >
                    {" "}
                    <a
                        className={`item ${
                            tab === "/generateCertificate" ? "active" : ""
                        }`}
                    >
                        Generate Certificate
                    </a>{" "}
                </NavLink>
                <NavLink
                    onClick={(isActive) => {
                        setTab("/about");
                    }}
                    to="/about"
                >
                    {" "}
                    <a className={`item ${tab === "/about" ? "active" : ""}`}>
                        About
                    </a>{" "}
                </NavLink>
            </div>
        </div>
    );
};
export default Navbar;
