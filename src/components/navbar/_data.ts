import links from '@data/links';

type functionType = { htmlTag: keyof JSX.IntrinsicElements; name: string; href: string; 'data-content': string; className: string; };
type navDataType = Array< functionType > ; // Need Array (ts is strange...)

const html = 'a' // </a> tag in HTML
const l = links.navbar; // Links shortcut
const c : string = 'nav-item'; // Class name

const navData: navDataType = [
    { htmlTag: html, name: 'Home', href: l.home, 'data-content': 'home', className: c },
    { htmlTag: html, name: 'Sobre mim', href: l.about, 'data-content': 'about', className: c },
    { htmlTag: html, name: 'Projetos', href: l.projects, 'data-content': 'projects', className: c },
    { htmlTag: html, name: 'Terminal', href: l.terminal, 'data-content': 'terminal', className: c }
];

export default navData;