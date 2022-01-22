import React from "react";

// ? Components
import Home from "../components/Home";
import GetCertificate from "../components/GetCertificate";
import GenerateCertificate from "../components/GenerateCertificate";
import VerifyCertificate from "../components/VerifyCertificate";
import About from "../components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Register from "../components/Register";
const Routing = (props) => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/getCertificate" element={<GetCertificate />} />

                <Route
                    path="/generateCertificate"
                    element={<GenerateCertificate />}
                />
                <Route path="/getCertificate/login" element={<Login />} />
                <Route path="/getCertificate/register" element={<Register />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/verifyCertificate"
                    element={<VerifyCertificate />}
                />
            </Routes>
        </Router>
    );
};
export default Routing;
