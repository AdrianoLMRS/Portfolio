import React from 'react';

interface CardProps {
    src: string;
    srcSet?: string;
    alt: string;
    title: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ title, text, src, srcSet, alt  }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <img src={src} alt={alt} srcSet={srcSet} />
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default Card;
