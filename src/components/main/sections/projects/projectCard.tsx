import ImageSlider from '@components/others/imageSlider';

interface CardProps {
    images: string[]; 
    alt: string;
    title: string;
    text: string;
    github: string;
    action?: string;
    blank?: boolean;
}

const Card: React.FC<CardProps> = ({ 
    title, 
    text, 
    images, 
    alt, 
    action = 'javascript:void(0)', 
    github, 
    blank = false 
}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <ImageSlider images={images} alt={alt} />
                <p className="card-text">{text}</p>
                <div className="actions">
                    <a className="button2" href={github} target="_blank" rel="noopener noreferrer">
              Github
                    </a>
                    <a 
                        className="button1" 
                        href={action} 
                        target={blank ? '_blank' : '_self'} 
                        rel={blank ? 'noopener noreferrer' : undefined}
                    >
              Ver mais
                    </a>
                </div>
            </div>
        </div>
    );
};
  

export default Card;
