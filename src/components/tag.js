import React from "react";

const Tag = ({props}) => {
    return (
        <div className="tag-container">
      <span className="tag-container__button">{props}</span>
    </div>
    )
}

export default Tag