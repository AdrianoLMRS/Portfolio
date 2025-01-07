import React from 'react';

interface ItemProps {
    src: string;
    srcSet?: string;
    alt: string;
    title: string;
}

const Item: React.FC<ItemProps> = ({ title, src, srcSet, alt  }) => {
    return (
        <div className="item">
            <img src={src} alt={alt} srcSet={srcSet} />
            <h5 className="item-title">{title}</h5>
        </div>
    );
};

export default Item;
