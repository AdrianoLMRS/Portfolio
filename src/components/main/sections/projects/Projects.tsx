import Card from './projectCard'
import './index.scss';
import projectsInfo from "@utils/projectsInfo";
import links from "@utils/links";

function Home() {
    const pousadaTao = projectsInfo.pousadaTao;
    const imageToAscii = projectsInfo.imageToAscii;

    const placeholderScale : string = '300x300' // in px

    return(
        <section className="projects" id="projects">
            <div className="content">
                <h2>Projects</h2>
                <div className="projects-container">
                    <Card 
                        images={[
                            `https://placehold.jp/${placeholderScale}.png?text=image+1`, 
                            `https://placehold.jp/${placeholderScale}.png?text=image+2`,
                            `https://placehold.jp/${placeholderScale}.png?text=image+3`,
                        ]} 
                        alt={pousadaTao.title + ' Demo image'}
                        title={pousadaTao.title}
                        text={pousadaTao.main}
                        onClick={() => {window.open(links.pousadaTao)}}
                    />
                    <Card 
                        images={[
                            `https://placehold.jp/${placeholderScale}.png?text=image+1`, 
                            `https://placehold.jp/${placeholderScale}.png?text=image+2`,
                            `https://placehold.jp/${placeholderScale}.png?text=image+3`,
                        ]} 
                        alt={imageToAscii.title + ' Demo image'}
                        title={imageToAscii.title}
                        text={imageToAscii.main}
                        onClick={() => {window.open(links.imageToAscii)}}
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;