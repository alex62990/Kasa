import React from "react";
import logo from "../assets/image/LOGO.png";
import Nav from "../components/nav";

const header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="logo" src={logo} alt="logo de Kasa" />
            </div>
            <Nav className="nav-header" />
        </header>
    );
};

export default header;