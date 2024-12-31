import './index.scss'

function Home() {
    return(
        <section className="home">
            <div className="content">
                <h1>
                    <span className='h1-span'>Olá!</span><img src="public/greeting.png" alt="Greetings Emoji" />
                    <br />Me chamo Adriano
                </h1>
                <div className="job">
                    <h2>
                        <span className='html-tag'>&#60;/</span>
                        Desenvolvedor Full-Stack
                        <span className='html-tag'>&gt;</span>
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