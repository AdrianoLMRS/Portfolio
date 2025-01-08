import ImageSlider from '@components/others/imageSlider';

interface CardProps {
    images: string[]; 
    alt: string;
    title: string;
    text: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, text, images, alt, onClick }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                    <ImageSlider images={images} alt={alt} />
                <p className="card-text">{text}</p>
                <div className='actions'>
                    <button className='button2' onClick={onClick} type="button">Github</button>
                    <button className='button1' onClick={onClick} type="button">Ver mais</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
