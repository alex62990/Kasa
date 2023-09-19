import React from "react";
import Collapse from "../components/collapse"
import logements from "../data/logement.json"
import Slideshow from "../components/slideshow"
import { useParams } from 'react-router-dom'
import Proprio from "../components/prorio"
import Location from "../components/location"
import Tag from "../components/tag"
import Rating from "../components/rating"


const FicheLogement = () => {
    const { id } = useParams()
    const logement = logements.find(logement => logement.id === id)

    const tagsLogement = logement?.tags.map((tags, i) => {
        return <Tag key={i} props={tags} />
    })

    const equipments = logement?.equipments.map((equipment, i) => {
        return (
            <ul key={i}>
                <li>{equipment}</li>
            </ul>
        )
    }
    )

    return (
        <section className='logement-page'>
            <div className="logement-page__carousel">
                <Slideshow slides={logement?.pictures} />
            </div>
            <div className="logement-page__localProprio">
                <div className="logement-page__localisation">
                    <Location title={logement?.title} location={logement?.location} />
                </div>
                <div className="logement-page__proprietaire">
                    <Proprio name={logement?.host.name} picture={logement?.host.picture} />
                </div>
            </div>
            <div className="logement-page__tagRating">
                <div className="logement-page__tag">
                    {tagsLogement}
                </div>
                <div className="logement-page__rating">
                    <Rating score={logement?.rating} />
                </div>
            </div>
            <div className="logement-page__collapse">
                <div className="logement-page__collapse__description">
                    <Collapse
                        title="Description"
                        content={logement?.description}
                    />
                </div>
                <div className="logement-page__collapse__equipements">
                    <Collapse title="Équipements" content={equipments} />
                </div>
            </div>
        </section >
    )
}

export default FicheLogement