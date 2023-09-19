import React from 'react';

const Location = (props) => {
    return (
      <>
        <h2 className="location-title">{props.title}</h2>
        <p className="location-ville">{props.location}</p>
      </>
    )
}

export default Location