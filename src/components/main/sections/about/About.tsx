import { default as AboutParagraph } from '@components/others/aboutMe';  // Corrigido para começar com letra maiúscula
import TechSlider from '@components/others/techSlider';
import './index.scss';

function About() {
    return (
        <section id='about' className="about">
            <div className="content">
                <div className="about-text">
                    <h2>Sobre mim</h2>
                    <AboutParagraph />
                </div>
                <div className="stack">
                    <TechSlider />
                </div>
            </div>
        </section>
    );
}

export default About;