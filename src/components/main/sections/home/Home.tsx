import { useEffect, useRef } from 'react';
import navItems from '@utils/navItems';
import socialData from './_socialData';
import links from '@utils/links';
import './index.scss';

function Home() {
    const job : string = 'Desenvolvedor Full-Stack' 

    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Handle end of cursor animation.
        const cursor = cursorRef.current;

        const handleAnimationEnd = () => {
            if (cursor) {
                cursor.style.display = 'none';
            }
        };

        cursor?.addEventListener('animationend', handleAnimationEnd);

        return () => {
            cursor?.removeEventListener('animationend', handleAnimationEnd);
        };
    }, []);

    return(
        <section id='home' className="home">
            <div className="content">
                <h1>
                    <span className='h1-span'>Olá!</span><img src="/greeting.png" alt="Greetings Emoji" />
                    <br />Me chamo Adriano
                </h1>

                <div className="job">
                    <h2 className='cursor-container'>
                        <p className="type-cursor typewriter-animation">
                        <span className='html-tag'>&#60;/</span>
                        {job}
                        <span className='html-tag'>&gt;</span>
                        </p>
                        <div ref={cursorRef} className="cursor"></div>
                    </h2>
                    <p className='quotes-p'>
                        <q>
                        Como Desenvolvedor Full-Stack, trago experiência prática em construir aplicações
                        completas e escaláveis.
                        </q>
                    </p>
                </div>

                <div className="social">
                    {   navItems ( ...socialData )    }
                </div>

                <div className="cv">
                    <a className='button2' href={links.cv} target="_blank" rel="noopener noreferrer">See CV</a>
                    <a className='button1' href={links.cvRaw} target="_blank" rel="noopener noreferrer">Download CV</a>
                </div>
            </div>
        </section>
    );
}

export default Home;