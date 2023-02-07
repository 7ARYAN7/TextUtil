import React from "react";
import '../components/Navbar.css';
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <a className="navbar-brand new-page-a " href="/">Home</a>
                    {/* <a className="navbar-brand new-page-a " href="/about">{props.aboutText}</a> */}
                </div>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'info'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeType} DarkMode</label>
                </div>
            </div>

        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Title here",
    aboutText: "About"
}