import { useEffect, useState } from 'react';
import { navItems } from './navItems';
import './index.scss';

function getCssVariable(varName: string) : number {
    return parseInt(getComputedStyle(document.documentElement).getPropertyValue(varName), 10);
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const positionNavbar = async () => {
    const nav = document.getElementById('navbar');
    const btn = document.getElementById('navBtn');
    if (nav && btn) {
        if (nav.style.right !== '0px') {
            nav.style.transition = 'right 300ms ease-in';
            nav.style.right = '0';
            btn.style.right = '90vw';
        } else {
            nav.style.right = '-90vw';
            btn.style.right = '0';
            await sleep(300);
            nav.style.transition = '';
        }
    } else {
        console.log('Navbar not found...');
    }
};

function Navbar() {
    const [isSidebar, setIsSidebar] = useState(false);
    const mdBreakpoint : number | string = getCssVariable('--md-breakpoint');

    useEffect(() => {
        const handleResize = () => {
            setIsSidebar(window.innerWidth <= mdBreakpoint);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            <nav className={isSidebar ? 'sidebar navigation' : 'navbar navigation'} id='navbar'>
                {navItems(
                    { name: 'Home', href: '/#home', dataContent: 'home' },
                    { name: 'Sobre mim', href: '/#about', dataContent: 'about' },
                    { name: 'Projetos', href: '/#projects', dataContent: 'projects' },
                    { name: 'Terminal', href: '/terminal', dataContent: 'terminal' }
                )}
            </nav>
            <button onClick={positionNavbar} type="button" className="nav-btn" id="navBtn"></button>
            <hr className="header-hr" />
        </header>
    );
}

export default Navbar;
