import React, { useState } from 'react';
import './Carousel.css'; // Asegúrate de crear este archivo CSS

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='carousel'>
            <span className='carousel__left-arrow' onClick={prevSlide}>&lsaquo;</span>
            <span className='carousel__right-arrow' onClick={nextSlide}>&rsaquo;</span>
            {slides.map((slide, index) => (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && (
                        <>
                            <img src={slide.image} alt={slide.caption} className='image' />
                            <button className="slide__name">{slide.name}</button> {/* Button con el nombre */}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Carousel;
