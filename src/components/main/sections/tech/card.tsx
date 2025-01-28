interface CardProps {
  imgSrc: string;
  techName: string;
}

const scale: string = '96x96';

export default function Card({ imgSrc, techName }: CardProps) {
    return (
        <div className="card">
            <div className="card-content">
                <img fetchPriority="low" loading="lazy" src={imgSrc || `https://placehold.jp/${scale}.png`} alt={techName} />
                <p className="card-text">{techName}</p>
            </div>
        </div>
    );
}
