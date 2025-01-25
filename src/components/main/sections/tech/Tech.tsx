import Card from './card'
import './index.scss';

function Tech() {

    return (
        <section id='tech' className="tech">
            <h3>Tech Stack</h3>
            <Card imgSrc="https://placehold.jp/96x96.png" techName="React" />
            <Card imgSrc="https://placehold.jp/96x96.png" techName="TypeScript" />
        </section>
    );
}

export default Tech;