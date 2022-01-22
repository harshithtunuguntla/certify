import React from "react";
import { Link } from "react-router-dom";
const GenerateCertificate = (props)=>{
 
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <div className="ui large black header">
                    Please authenticate to generate certificate 
                </div>
                <Link to="/getCertificate/login">
                    <button className="ui button teal">
                        Login
                    </button>
                </Link>
                <Link to="/getCertificate/register">
                    <button className="ui button teal">
                        Register
                    </button>
                </Link>
            </div>
        </div>
    );
};
export default GenerateCertificate;
