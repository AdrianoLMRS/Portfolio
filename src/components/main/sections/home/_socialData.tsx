import links from '@utils/links';

type params = {
    htmlTag: any; 
    onClick: () => void; 
    className: string;
    src: string; 
    alt: string; 
}

type socialDataType = Array< params > ; // Need Array (ts is strange...)

const html = 'img' // <img> tag in HTML
const l = links; // Links shortcut
const c : string = 'icon'; // Class name
const size : string = '48'; // Size of icons in pixels

const socialData: socialDataType = [
    {
        htmlTag: html,
        onClick: () => window.open(l.github, '_blank'),
        className: c,
        src: `https://img.icons8.com/ios-glyphs/${size}/github.png`,
        alt: 'GitHub Icon',
    },
    {
        htmlTag: html,
        onClick: () => window.open(l.linkedin, '_blank'),
        className: c,
        src: `https://img.icons8.com/ios-glyphs/${size}/linkedin.png`,
        alt: 'LinkedIn Icon',
    },
    {
        htmlTag: html,
        onClick: () => window.open(l.email, '_blank'),
        className: c,
        src: `https://img.icons8.com/ios-filled/${size}/new-post.png`,
        alt: 'Email Icon',
    },
    {
        htmlTag: html,
        onClick: () => window.open(l.phone, '_blank'),
        className: c,
        src: `https://img.icons8.com/ios-filled/${size}/phone.png`,
        alt: 'Phone Icon',
    },
];

export default socialData;