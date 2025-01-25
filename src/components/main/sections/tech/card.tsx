const scale : string = '96x96'
export default function Card() {

    return (
        <div className="card">
            <div className="card-content">
                <img src={`https://placehold.jp/${scale}.png`} alt="Placeholder" />
                <p className="card-text">Tech name</p>
            </div>
        </div>
    );
}

