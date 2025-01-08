import Card from './projectCard'
import './index.scss';
import projectsInfo from "@utils/projectsInfo";
import links from "@utils/links";

function Home() {
    const pousadaTao = projectsInfo.pousadaTao;
    const imageToAscii = projectsInfo.imageToAscii;

    const placeholderScale : string = '600x600' // in px

    return(
        <section className="projects" id="projects">
            <div className="content">
                <h2>Projetos</h2>
                <div className="projects-container">
                    <Card 
                        images={[
                            `https://iili.io/2gmKuTl.webp`, 
                            `https://iili.io/2gmKIp4.webp`,
                            `https://iili.io/2gmKzvf.webp`,
                        ]} 
                        alt={pousadaTao.title + ' Demo image'}
                        title={pousadaTao.title}
                        text={pousadaTao.main}
                        onClick={() => {window.open(links.pousadaTao)}}
                    />
                    <Card 
                        images={[
                            `https://iili.io/2gmA7na.webp`, 
                            `https://iili.io/2gmAa6v.webp`,
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