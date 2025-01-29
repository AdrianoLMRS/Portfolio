import { stringObject as imgSrcType } from './types.js';

const itemImgSize : string = String( 96 ); // In pixels 96px
const linksImgSize : string = String( 48 ); // In pixels 48px

const imgSrc = {
    tech: {
        c: `https://img.icons8.com/fluency/${itemImgSize}/c-programming.png`,
        python: `https://img.icons8.com/color/${itemImgSize}/python--v1.png`,
        jest: `https://img.icons8.com/external-tal-revivo-filled-tal-revivo/${itemImgSize}/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-filled-tal-revivo.png`,
        sqlite: `https://img.icons8.com/ios-filled/${itemImgSize}/sqlite.png`,
        eslint: `https://img.icons8.com/color/${itemImgSize}/eslint.png`,
        markdown: `https://img.icons8.com/ios-filled/${itemImgSize}/markdown.png`,
        css: `https://img.icons8.com/fluency/${itemImgSize}/css3.png`,
        html: `https://img.icons8.com/color/${itemImgSize}/html-5--v1.png`,
        react: `https://img.icons8.com/office/${itemImgSize}/react.png`,
        typescript: `https://img.icons8.com/external-tal-revivo-color-tal-revivo/${itemImgSize}/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-color-tal-revivo.png`,
        nodejs: `https://img.icons8.com/color/${itemImgSize}/nodejs.png`,
        mongodb: `https://img.icons8.com/color/${itemImgSize}/mongo-db.png`,
        sass: `https://img.icons8.com/color/${itemImgSize}/sass.png`,
        mysql: `https://img.icons8.com/color/${itemImgSize}/mysql-logo.png`,
        express: `https://img.icons8.com/nolan/${itemImgSize}/express-js.png`,
        redis: `https://img.icons8.com/color/${itemImgSize}/redis.png`,
        docker: `https://img.icons8.com/color/${itemImgSize}/docker.png`,
        vite: `https://img.icons8.com/color/${itemImgSize}/vite.png`,
        aws: `https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/${itemImgSize}/external-amazon-web-services-a-subsidiary-of-amazon-that-provides-on-demand-cloud-computing-logo-shadow-tal-revivo.png`,
        cmake: `https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/${itemImgSize}/external-cmake-a-cross-platform-free-and-open-source-software-tool-logo-shadow-tal-revivo.png`,
        github: `https://img.icons8.com/color/${itemImgSize}/github.png`,
        render: 'https://iili.io/2L33MH7.webp', // Fixed scale ...
        vscode: `https://img.icons8.com/color/${itemImgSize}/visual-studio-code-2019.png`,
        postman: `https://img.icons8.com/external-tal-revivo-color-tal-revivo/${itemImgSize}/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png`,
        git: `https://img.icons8.com/color/${itemImgSize}/git.png`,
        windows: `https://img.icons8.com/color/${itemImgSize}/windows-10.png`,
        ubuntu: `https://img.icons8.com/color/${itemImgSize}/ubuntu.png`,
        linux: `https://img.icons8.com/color/${itemImgSize}/linux.png`,
    },
    social: {
        github: `https://img.icons8.com/ios-glyphs/${linksImgSize}/github.png`,
        linkedin: `https://img.icons8.com/ios-glyphs/${linksImgSize}/linkedin.png`,
        mail: `https://img.icons8.com/ios-filled/${linksImgSize}/new-post.png`,
        phone: `https://img.icons8.com/ios-filled/${linksImgSize}/phone.png`,
    }
} satisfies imgSrcType;   

export default imgSrc;