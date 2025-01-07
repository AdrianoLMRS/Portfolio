import { default as AboutParagraph } from '@components/others/aboutMe';
import Item from './itemImg'
// import TechSlider from '@components/others/techSlider';
import './index.scss';

function About() {
    const itemImgSize : string = '96'; // In pixels 96px

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
                            src={`https://img.icons8.com/office/${itemImgSize}/react.png`} 
                            alt="ReactJS Icon"
                            title="ReactJS"
                        />
                        <Item 
                            src={`https://img.icons8.com/external-tal-revivo-color-tal-revivo/${itemImgSize}/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-color-tal-revivo.png`} 
                            alt="Typescript Icon" 
                            title="Typescript" 
                        />
                        <Item 
                            src={`https://img.icons8.com/color/${itemImgSize}/nodejs.png`} 
                            alt="NodeJS Icon" 
                            title="NodeJS" 
                        />
                        <Item 
                            src={`https://img.icons8.com/color/${itemImgSize}/mongo-db.png`} 
                            alt="MongoDB Icon" 
                            title="MongoDB" 
                        />
                        <Item 
                            src={`https://img.icons8.com/color/${itemImgSize}/sass.png`} 
                            alt="Sass Icon" 
                            title="Sass" 
                        />
                        <div className="item">
                            <button onClick={() => {alert('WIP - Em desenvolvimento')}} className='button1' type="button">Stack completa</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;