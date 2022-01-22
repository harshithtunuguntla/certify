import React from "react";
import { NavLink } from "react-router-dom";
const Home = (props) => {
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <div className="ui large black header">
                    <em>Grab</em>,<em>Verify</em> and <em>Generate</em> your
                    <br />
                    certificates at one stop
                </div>
                <NavLink to="/getCertificate">
                    <button className="ui button teal">
                        <i className="address card icon"></i>
                        Grab My Certificate
                    </button>
                </NavLink>
                <NavLink to="/verifyCertificate">
                    <button className="ui button teal">
                        <i className="check circle icon"></i>
                        Verify My Certificate
                    </button>
                </NavLink>
            </div>
        </div>
    );
};
export default Home;
