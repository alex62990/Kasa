import React from "react";
import Card from "../components/card"
import logements from "../data/logement.json"
import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <div className="gallery">
            {logements.map(logement => {
                return (
                    <article key={logement.id}>
                        <Link to={`/logement/${logement.id}`}>
                            <Card image={logement.cover} title={logement.title}/>
                        </Link>
                    </article>
                    )
                }
            )}
        </div>
    )
}

export default Gallery;