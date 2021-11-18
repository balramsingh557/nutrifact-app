import React, { useEffect, createRef } from 'react';
import M from 'materialize-css';

export default function Carousel() {

    const carouselDOM = createRef();

     useEffect(() => {
        let carousel = M.Carousel.init(carouselDOM.current,
            {
                indicators: true,
                fullWidth: true,
            });
        setInterval(function() {
            carousel.next();
        }, 3500);
    }, [])

    return (
        <div className="carousel carousel-slider center"
        ref={carouselDOM}>
            
        <div className="carousel-item white-text" id="carousel-1" href="#one!">
            <h4> Health Matters</h4>
            <h5>
                To include right type of food in diet, one need to
            </h5>
            <h5>
                check what are its nutrient contents.  We are here to help you with that
            </h5>
        </div>
        <div className="carousel-item white-text" id="carousel-2" href="#two!">
            <h4>Customised diet plan</h4>
            <h5>
                Our team of experts have experience of more than 9 years
                to provide healthy food options to our clients
            </h5>
            
        </div>
        <div className="carousel-item white-text" id="carousel-3" href="#three!">
            <h4>Age is just a number</h4>
            <h5 >
                Start including healthy foods in your diet,
                no matter what age group you belong.
            </h5>
        </div>
        <div className="carousel-item white-text" id="carousel-4" href="#four!">
            <h4>Customised exercise</h4>
            <h5>
               Our experts can provide exercise and yoga plan
               that will easily fit into your busy life
            </h5>
        </div>
        </div>
    )
}
