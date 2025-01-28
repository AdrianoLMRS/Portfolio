import Card from './card';
import imgSrc from '@data/imgSrc';
import './index.scss';

const src = imgSrc.tech;

function Tech() {

    return (
        <section id='tech' className="tech">
            <div className="content">
                <h2>Tech Stack</h2>
                <div className="stack">
                    {/* Frontend */}
                    <Card imgSrc={src.react} techName="React" />
                    <Card imgSrc={src.typescript} techName="TypeScript" />
                    <Card imgSrc={src.sass} techName="SASS" />
                    <Card imgSrc={src.nodejs} techName="Node.js" />
                    <Card imgSrc={src.mongodb} techName="MongoDB" />
                    <Card imgSrc={src.mysql} techName="MySQL" />
                    
                    {/* Backend */}
                    <Card imgSrc={src.express} techName="Express.js" />
                    <Card imgSrc={src.redis} techName="Redis" />
                    
                    {/* Deployment & Tools */}
                    <Card imgSrc={src.docker} techName="Docker" />
                    <Card imgSrc={src.vite} techName="Vite" />
                    <Card imgSrc={src.aws} techName="AWS" />
                    <Card imgSrc={src.cmake} techName="CMake" />
                    <Card imgSrc={src.github} techName="GitHub Pages" />
                    <Card imgSrc={src.render} techName="Render" />
                    
                    {/* Dev Tools */}
                    <Card imgSrc={src.vscode} techName="VS Code" />
                    <Card imgSrc={src.postman} techName="Postman" />
                    <Card imgSrc={src.git} techName="Git" />
                    {/* <Card imgSrc={src.mongodbCompass} techName="MongoDB Compass" /> */}
                    
                    {/* OS */}
                    <Card imgSrc={src.windows} techName="Windows" />
                    <Card imgSrc={src.ubuntu} techName="Ubuntu" />
                    <Card imgSrc={src.linux} techName="Linux" />
                </div>
            </div>
        </section>
    );
}

export default Tech;