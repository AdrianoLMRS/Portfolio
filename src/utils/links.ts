interface Links {
    [key: string]: string | { [key: string]: string };
}

const links = {
    github: 'https://github.com/AdrianoLMRS/',
    githubRepos: 'https://github.com/AdrianoLMRS?tab=repositories',
    linkedin: 'https://www.linkedin.com/in/adrianoweb/',
    email: 'https://is.gd/adrianoemail',
    phone: 'https://criarmeulink.com.br/u/1734858351',
    portfolio: 'https://portfolio-adriano-p4dj.onrender.com/',
    portfolioGithub: 'https://github.com/AdrianoLMRS/Portfolio?tab=readme-ov-file#readme',
    pousadaTao: 'https://pousada-tao.onrender.com/',
    pousadaTaoGithub: 'https://github.com/AdrianoLMRS/Pousada-TAO?tab=readme-ov-file#readme',
    cv: 'https://github.com/AdrianoLMRS/AdrianoLMRS/blob/main/curriculo.pdf',
    get cvRaw() {   return this.cv + '?raw=True'; /* Returns cvRaw in github */  },
    courses: {
        cs50: 'https://www.youtube.com/watch?v=8mAITcNt710&pp=ygUVY3M1MCBjb21wdXRlciBzY2llbmNl',
        python: 'https://www.youtube.com/watch?v=ix9cRaBkVe0&pp=ygUQYnJvIGNvZGUgY291cnNlcw%3D%3D',
        javascript: 'https://www.youtube.com/watch?v=lfmg-EJ8gm4&t=15259s&pp=ygUUYnJvIGNvZGUgZnVsbCBjb3Vyc2U%3D',
        htmlcss: 'https://www.youtube.com/watch?v=HGTJBPNC-Gw&pp=ygUUYnJvIGNvZGUgZnVsbCBjb3Vyc2U%3D',
        mongodb: 'https://www.youtube.com/watch?v=c2M-rlkkT5o&pp=ygUUYnJvIGNvZGUgZnVsbCBjb3Vyc2U%3D',
        mysql: 'https://www.youtube.com/watch?v=5OdVJbNCSso',
    },
    navbar: {
        root: '/',
        home: '/#home',
        about: '/#about',
        projects: '/#projects',
        terminal: '/terminal',
    }
} satisfies Links;   

export default links;