import React from 'react';

const Proprio = (props) => {
    return (
      <>
        <span className="nom-Proprio">{props.name}</span>
        <img
          className="photo-proprio"
          src={props.picture}
          alt="Propriétaire"
        />
      </>
    )
}

export default Proprio