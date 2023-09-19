import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const redStar = <FontAwesomeIcon icon={faStar} />
const greyStar = <FontAwesomeIcon icon={faStar} />


const Rating = (props) => {
    
    const score = props.score

    const etoiles = [1, 2, 3, 4, 5] 
    
    return (
        <div className="score-etoile">
            {etoiles.map((etoile) =>
            score >= etoile ?
            (<span key={etoile.toString()} className="score-etoile__red">{redStar}</span>)
            : (<span key={etoile.toString()} className="score-etoile__grey">{greyStar}</span>)
            )}
        </div>
    )
}

export default Rating