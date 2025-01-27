import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import ScrollAnimation from '@components/others/ScrollAnimation';
import navItems from '@utils/navItems';
import socialData from './_socialData';
import links from '@data/links';
import { getCssVariable } from '@utils/misc';
import './index.scss';

function Home() {
    const classSmall: string = ' small-div';
    const defaultJobTitle: string = 'Desenvolvedor Full-Stack';
    const callbackJobTitle: string = 'Full-Stack';
    const resizeTimeMs : number = 20;

    const sxBreakpoint: number = getCssVariable('--sx-breakpoint');

    const [isSmall, setIsSmall] = useState(false);
    const [jobTitle, setJobTitle] = useState(defaultJobTitle);

    const cursorRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    // Debounce function to handle resize event
    const handleResize = useCallback(() => {
        setIsSmall(window.innerWidth <= sxBreakpoint);
    }, [sxBreakpoint]);

    useEffect(() => {
        const debouncedResize = () => {
            clearTimeout(window.resizeTimeout);
            window.resizeTimeout = setTimeout(handleResize, resizeTimeMs); // 100ms debounce
        };

        window.addEventListener('resize', debouncedResize);
        handleResize(); // Initial check

        // Handle end of cursor animation
        const cursor = cursorRef.current;
        const handleAnimationEnd = () => {
            if (cursor) {
                cursor.style.display = 'none';
            }
        };
        cursor?.addEventListener('animationend', handleAnimationEnd);

        return () => {
            clearTimeout(window.resizeTimeout);
            cursor?.removeEventListener('animationend', handleAnimationEnd);
            window.removeEventListener('resize', debouncedResize);
        };
    }, [handleResize]);

    useEffect(() => {
        setJobTitle(isSmall ? callbackJobTitle : defaultJobTitle);
    }, [isSmall]);

    // Memorizing class names and JSX to avoid unnecessary re-renders
    const contentClass = useMemo(() => {
        return `content${isSmall ? classSmall : ''}`;
    }, [isSmall]);

    return (
        <ScrollAnimation repeat={true}>
            <section id='home' className="home">
                <div className={contentClass}>
                    <h1>
                        <span className='h1-span'>Olá!</span><img src="/greeting.png" alt="Greetings Emoji" loading="lazy" />
                        <br />Me chamo Adriano
                    </h1>

                    <div className="job">
                        <h2 className='cursor-container'>
                            <p className="type-cursor typewriter-animation">
                                <span className='html-tag'>&#60;/</span>
                                {jobTitle}
                                <span className='html-tag'>&gt;</span>
                            </p>
                            <div ref={cursorRef} className="cursor"></div>
                        </h2>
                        <p className='quotes-p'>
                            <q>
                                Como <strong>Desenvolvedor Full-Stack</strong>, trago experiência prática em construir aplicações
                                <strong> completas e escaláveis.</strong>
                            </q>
                        </p>
                    </div>

                    <div className="social">
                        {navItems(...socialData)}
                    </div>

                    <div className="cv">
                        <a className='button2' href={links.cv} target="_blank" rel="noopener noreferrer">See CV</a>
                        <a className='button1' href={links.cvRaw} target="_blank" rel="noopener noreferrer">Download CV</a>
                    </div>
                </div>
            </section>
        </ScrollAnimation>
    );
}

export default Home;
