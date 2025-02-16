import links from '@data/links';
import { positionNavbar } from './_utils.tsx';

type FunctionType = { 
    htmlTag: keyof JSX.IntrinsicElements; 
    name: string; 
    href: string; 
    onClick: () => Promise<void>; // Garantindo que é uma função sem parâmetros
    'data-content': string; 
    className: string; 
};
type navDataType = Array< FunctionType > ; // Need Array (ts is strange...)

const html = 'a'; // </a> tag in HTML
const l = links.navbar; // Links shortcut
const c : string = 'nav-item'; // Class name

const navData: navDataType = [
    { htmlTag: html, name: 'Home', href: l.home, onClick: positionNavbar, 'data-content': 'home', className: c },
    { htmlTag: html, name: 'Sobre mim', href: l.about, onClick: positionNavbar, 'data-content': 'about', className: c },
    { htmlTag: html, name: 'Projetos', href: l.projects, onClick: positionNavbar, 'data-content': 'projects', className: c },
    // { htmlTag: html, name: 'Terminal', href: l.terminal, 'data-content': 'terminal', className: c }
];

export default navData;