import React, { useState } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Collapse = ({ title, content }) => {
    
    const [isOpen, setIsOpen] = useState(false)

    const display = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='collapse__dropdown__container'>
            <div className='collapse__dropdown__title'>
                <h2>{title}</h2>
                <p onClick={display}>
                    {isOpen ? (
                        <FontAwesomeIcon icon={faChevronDown} size="2xl"/>
                    ) : (
                        <FontAwesomeIcon icon={faChevronUp} size="2xl"/>
                    )}
                </p>
            </div>
            <div className='collapse__dropdown__content'>
                {isOpen && <p>{content}</p>}
            </div>
        </div>
    )
}

export default Collapse