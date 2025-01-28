import './imageSlider.scss';

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

    // Preload images onHover for better performance
    const preloadImage = (index: number) => {
        const image = new Image();
        image.src = images[index];
    };

    const handleHover = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;

        // Preload next and previous images
        preloadImage(nextIndex);
        preloadImage(prevIndex);
    };

    return (
        <div className="image-slider" onMouseEnter={handleHover}>
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
