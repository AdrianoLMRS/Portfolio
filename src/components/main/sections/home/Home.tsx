import './index.scss'

function Home() {
    const job : string = 'Desenvolvedor Full-Stack'
    return(
        <section className="home">
            <div className="content">
                <h1>
                    <span className='h1-span'>Olá!</span><img src="/greeting.png" alt="Greetings Emoji" />
                    <br />Me chamo Adriano
                </h1>
                <div className="job">
                    <h2 className='cursor-container'>
                        <p className="type-cursor typewriter-animation">
                        <span className='html-tag'>&#60;/</span>
                        {job}
                        <span className='html-tag'>&gt;</span>
                        </p>
                        <div className="cursor"></div>
                    </h2>
                    <p className='quotes-p'>
                        <q>
                        Como Desenvolvedor Full-Stack, trago experiência prática em construir aplicações
                        completas e escaláveis.
                        </q>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home;