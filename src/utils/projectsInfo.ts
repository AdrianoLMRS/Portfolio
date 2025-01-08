import { stringObject } from "./types.js";
import links from "./links.js";

const projectsInfo = {
    pousadaTao: {
        title: 'Pousada TAO',
        main: 'Pousada TAO é uma Web app de uma Pousada real em Campos do Jordão',
        links: {
            demo: links.pousadaTao,
            github: links.pousadaTaoGithub,
        },
        features: {
            reservas: 'Reservas online com pagamento direto pelo site via Stripe.',
            autoConfirmation: 'Confirmação automática após reserva por E-mail e SMS.',
            authentication: 'Autenticação de usuário utilizando JWT & Cookies.',
            login: 'Mecanismo de login & profile após reserva.',
            db: 'Gerenciamento eficiente das reservas utilizando MongoDB como banco de dados.',
            front: 'Interface responsiva e intuitiva desenvolvida com HTML, CSS e JavaScript puro.',
            all: '' // All the features with "\n" (breakline)
        },
        stack: {
            front: 'HTML, CSS, JavaScript',
            back: 'Node.js, Express',
            db: 'MongoDB',
            deploy: 'Docker',
            paas: 'Render',
            api: 'Stripe',
            npm: 'mongoose, bcrypt, body-parser, cookie-parser, cors, dotenv, ejs, express, jsonwebtoken, mongodb, mongoose, nodemailer, stripe, twilio, jest, nodemon',
        }
    },
    imageToAscii: {
        title: 'Image to ASCII',
        main: 'Image to ASCII é um script feito em C que converte imagens em caracteres ASCII',
        links: {
            demo: links.imageToAscii,
            github: links.imageToAsciiGithub,
        },
        features: {
            convert: 'Converta imagens normais para ASCII (sem cor)',
            convertColor: 'Converta imagens coloridas para ASCII com cores ANSI (converta para .png, .jpeg ou .webp)',
            all: '' // All the features with "\n" (breakline)
        },
        stack: {
            languages: 'C',
            build: 'cMake, Makefile',
            lib: 'openCV',
            compile: 'gcc, g++',
        },
    },
} satisfies stringObject

function makeAll(object: Record<string, string>): string {
    return Object.values(object)
        .filter(value => typeof value === 'string')
        .join('\n');
}

const pousadaTaoFeatures = projectsInfo.pousadaTao.features
pousadaTaoFeatures.all = makeAll(pousadaTaoFeatures)

const imageToAsciiFeatures = projectsInfo.imageToAscii.features
imageToAsciiFeatures.all = makeAll(imageToAsciiFeatures)

export default projectsInfo