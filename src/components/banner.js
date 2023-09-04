import React from "react";

const Banner = ({image, text}) => {
    return (
        <div className="banner">
            <img className="banner__img" src={image} alt="Bannière" />
            <span className="banner__text">{text}</span>
        </div>
    );
};

export default Banner;