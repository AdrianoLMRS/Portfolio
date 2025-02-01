// import { useState } from 'react';
import Card from './projectCard';
import './index.scss';
import projectsInfo from '@data/projectsInfo';
import links from '@data/links';
import ScrollAnimation from '@components/others/ScrollAnimation';
// import { default as Modal } from '@components/modals/pousadaTao'

function Home() {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => setIsModalOpen(true);
    // const closeModal = () => setIsModalOpen(false);

    const pousadaTao = projectsInfo.pousadaTao;
    const imageToAscii = projectsInfo.imageToAscii;
    // const wip = async () => {  window.alert('WIP - Em desenvolvimento\n\nWIP - Work in progress');  };

    return(
        <section className="projects" id="projects">
            <div className="content">
                <h2>Projetos</h2>
                <div className="projects-container" >
                    <ScrollAnimation className='project-animator' threshold={ 0.2 }>
                        <Card // Pousada TAO
                            images={[
                                'https://iili.io/2gmKuTl.webp', 
                                'https://iili.io/2gmKIp4.webp',
                                'https://iili.io/2gmKzvf.webp',
                            ]} 
                            alt={pousadaTao.title}
                            title={pousadaTao.title}
                            text={pousadaTao.main}
                            github={links.portfolioGithub}
                            action={links.pousadaTao}
                        />
                    </ScrollAnimation>
                    <ScrollAnimation className="project-animator" threshold={ 0.2 }>
                        <Card // Image to ASCII
                            images={[
                                'https://iili.io/2LykzMv.webp', 
                                'https://iili.io/2LykxoJ.webp',
                                'https://iili.io/2gmA7na.webp', 
                                'https://iili.io/2gmAa6v.webp',
                            ]} 
                            alt={imageToAscii.title}
                            title={imageToAscii.title}
                            text={imageToAscii.main}
                            github={links.imageToAscii}
                            action={'javascript:void(0)'}
                        />
                    </ScrollAnimation>

                    {/* <Modal isModalOpen={isModalOpen} closeModal={closeModal} /> */}
                </div>
            </div>
        </section>
    );
}

export default Home;