import Card from './projectCard'
import './index.scss';
import projectsInfo from "@utils/projectsInfo";

function Home() {
    const pousadaTao = projectsInfo.pousadaTao;
    // const imageToAscii = projectsInfo.imageToAscii;

    return(
        <div className="projects" id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
            <Card 
                src='' 
                alt="Pousada Tao Demo image"
                title={pousadaTao.title}
                text={pousadaTao.main}
            />
            </div>
        </div>
    );
}

export default Home;