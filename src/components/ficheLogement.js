import React from "react";
//import Collapse from "../components/collapse"
import logements from "../data/logement.json"
import Slideshow from "../components/slideshow"
import { useParams } from 'react-router-dom'
import Proprio from "../components/prorio"


const FicheLogement = () => {
    const { id } = useParams()
    const logement = logements.find(logement => logement.id === id)

    return (
        <section className='logement-page'>
            <div className="logement-page__carousel">
                <Slideshow slides={logement?.pictures} />
            </div>
            <div className="logement-page__proprietaire">
                <Proprio
                    name={logement?.host.name}
                    picture={logement?.host.picture}
                />
            </div>
        </section>
    )
}

export default FicheLogement