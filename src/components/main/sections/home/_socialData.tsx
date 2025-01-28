import links from '@data/links';
import imgSrc from '@data/imgSrc';

const src = imgSrc.social;

type params = {
    htmlTag: 'img' | 'a' | 'div'; 
    onClick: () => void; 
    className: string;
    src: string; 
    alt: string; 
}

type socialDataType = Array< params > ; // Need Array (ts is strange...)

const html = 'img'; // <img> tag in HTML
const l = links; // Links shortcut
const c : string = 'icon'; // Class name

const socialData: socialDataType = [
    {
        htmlTag: html,
        onClick: () => window.open(l.github, '_blank'),
        className: c,
        src: src.github,
        alt: 'GitHub Icon',
    },
    {
        htmlTag: html,
        onClick: () => window.open(l.linkedin, '_blank'),
        className: c,
        src: src.linkedin,
        alt: 'LinkedIn Icon',
    },
    {
        htmlTag: html,
        onClick: () => window.open(l.email, '_blank'),
        className: c,
        src: src.mail,
        alt: 'Email Icon',
    },
    {
        htmlTag: html,
        onClick: () => window.open(l.phone, '_blank'),
        className: c,
        src: src.phone,
        alt: 'Phone Icon',
    },
];

export default socialData;