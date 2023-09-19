import React, { useState } from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Slideshow = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='slideshow'>
            <p className='slideshow__arrow-left' onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </p>

            <p className='slideshow__arrow-right' onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
            </p>

            {slides.map((picture, index) => {
                return (
                    <div key={index}>
                        {index === currentIndex && (
                            <img src={picture} alt="appartement" className='slideshow__img' />
                        )}
                        {index === currentIndex && length > 1 && (
                            <span className='slideshow__number'>{currentIndex + 1}/{length}</span>
                        )}
                    </div>
                )
            })}
        </div>
    )

}

export default Slideshow