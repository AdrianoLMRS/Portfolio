import { default as AboutParagraph } from '@components/others/aboutMe';
import Item from './itemImg'
import { default as imgSrc } from '@data/imgSrc' // General imgs srcs
// import TechSlider from '@components/others/techSlider';
import './index.scss';

const src = imgSrc.tech;

function About() {

    return (
        <section id='about' className="about">
            <div className="content">
                <div className="about-container">
                    <h2>Sobre mim</h2>
                    <AboutParagraph />
                </div>
                <div className="stack-container">
                    <h2>Stack atual</h2>
                    <div className="img-container">
                        <Item 
                            src={src.react}
                            alt="ReactJS Icon"
                            title="ReactJS"
                        />
                        <Item 
                            src={src.typescript}
                            alt="Typescript Icon" 
                            title="Typescript" 
                        />
                        <Item 
                            src={src.nodejs}
                            alt="NodeJS Icon" 
                            title="NodeJS" 
                        />
                        <Item 
                            src={src.mongodb}
                            alt="MongoDB Icon" 
                            title="MongoDB" 
                        />
                        <Item 
                            src={src.sass}
                            alt="Sass Icon" 
                            title="Sass" 
                        />
                        <div className="item">
                            <a href="/#tech" className="button1">Stack completa</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;