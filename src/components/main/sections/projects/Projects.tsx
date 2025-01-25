import { useState } from 'react';
import Card from './projectCard'
import './index.scss';
import projectsInfo from "@data/projectsInfo";
import links from "@data/links";
import { default as Modal } from '@components/modals/pousadaTao'

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const pousadaTao = projectsInfo.pousadaTao;
    const imageToAscii = projectsInfo.imageToAscii;
    // const wip = async () => {  window.alert('WIP - Em desenvolvimento')  }

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
                        alt={pousadaTao.title}
                        title={pousadaTao.title}
                        text={pousadaTao.main}
                        github={links.portfolioGithub}
                        onClick={openModal}
                    />
                    <Card 
                        images={[
                            `https://iili.io/2gmA7na.webp`, 
                            `https://iili.io/2gmAa6v.webp`,
                        ]} 
                        alt={imageToAscii.title}
                        title={imageToAscii.title}
                        text={imageToAscii.main}
                        github={links.imageToAscii}
                        onClick={openModal}
                    />
                    <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
                </div>
            </div>
        </section>
    );
}

export default Home;