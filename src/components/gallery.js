import React from "react";
import Card from "../components/card"
import logements from "../data/logement.json"


const Gallery = () => {
    return (
        <div className="gallery">
            {logements.map(logement => {
                return (
                    <Card image={logement.cover} title={logement.title}/>
                    )
                }
            )}
        </div>
    )
}

export default Gallery;