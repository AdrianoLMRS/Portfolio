import Card from './projectCard'
import './index.scss';
import projectsInfo from "@utils/projectsInfo";

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
                        src={`https://placehold.jp/${placeholderScale}.png`} 
                        alt={pousadaTao.title + ' Demo image'}
                        title={pousadaTao.title}
                        text={pousadaTao.main}
                    />
                    <Card 
                        src={`https://placehold.jp/${placeholderScale}.png`} 
                        alt={imageToAscii.title + ' Demo image'}
                        title={imageToAscii.title}
                        text={imageToAscii.main}
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;