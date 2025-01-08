import './imageSlider.scss'

// imageSlider.tsx
import React, { useState } from 'react';

interface ImageSliderProps {
    images: string[]; 
    alt: string; 
    onClick?: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, alt, onClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex : number) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex : number) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="image-slider">
            <button onClick={prevImage} className="slider-btn prev-btn">
                &#60;
            </button>
            <img
                src={images[currentIndex]}
                alt={`${alt} - Slide ${currentIndex + 1}`}
                onClick={onClick}
            />
            <button onClick={nextImage} className="slider-btn next-btn">
                &#62;
            </button>
        </div>
    );
};

export default ImageSlider;
