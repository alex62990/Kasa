import React from "react";
import blacklogo from "../assets/image/LOGOnoirblanc.png"

const footer = () => {
    return (
        <footer className="footer">
            <img className="footer__blacklogo" src={blacklogo} alt="logo Kasa noir et blanc" />
            <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default footer;