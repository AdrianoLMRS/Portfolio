import { stringObject as imgSrcType } from "./types.js";

const itemImgSize : string = '96'; // In pixels 96px
const linksImgSize : string = '48'; // In pixels 96px

const imgSrc = {
    tech: {
        react: `https://img.icons8.com/office/${itemImgSize}/react.png`,
        typescript: `https://img.icons8.com/external-tal-revivo-color-tal-revivo/${itemImgSize}/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-color-tal-revivo.png`,
        nodejs: `https://img.icons8.com/color/${itemImgSize}/nodejs.png`,
        mongodb: `https://img.icons8.com/color/${itemImgSize}/mongo-db.png`,
        sass: `https://img.icons8.com/color/${itemImgSize}/sass.png`,
    },
    social: {
        github: `https://img.icons8.com/ios-glyphs/${linksImgSize}/github.png`,
        linkedin: `https://img.icons8.com/ios-glyphs/${linksImgSize}/linkedin.png`,
        mail: `https://img.icons8.com/ios-filled/${linksImgSize}/new-post.png`,
        phone: `https://img.icons8.com/ios-filled/${linksImgSize}/phone.png`,
    }
} satisfies imgSrcType;   

export default imgSrc;