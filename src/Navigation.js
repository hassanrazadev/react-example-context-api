import React from "react";
import {NavLink} from "react-router-dom";

function Navigation() {

    return (
        <div className="container-fluid">
            <div className="row">
                <NavLink to="/" className="col-6 btn btn-primary">App1</NavLink>
                <NavLink to="app2" className="col-6 btn btn-primary">App2</NavLink>
            </div>
        </div>
    )
}

export default Navigation;
