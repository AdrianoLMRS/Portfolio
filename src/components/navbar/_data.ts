import links from '@utils/links';

type navDataType = Array<{ htmlTag: keyof JSX.IntrinsicElements; name: string; href: string; 'data-content': string; className: string; }> ;
const navData: navDataType = [
    { htmlTag: 'a', name: 'Home', href: links.navbar.home, 'data-content': 'home', className: 'nav-item' },
    { htmlTag: 'a', name: 'Sobre mim', href: links.navbar.about, 'data-content': 'about', className: 'nav-item' },
    { htmlTag: 'a', name: 'Projetos', href: links.navbar.projects, 'data-content': 'projects', className: 'nav-item' },
    { htmlTag: 'a', name: 'Terminal', href: links.navbar.terminal, 'data-content': 'terminal', className: 'nav-item' }
];

export default navData;