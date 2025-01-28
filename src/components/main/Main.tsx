import './index.scss';
import { Home, About, Projects, Tech } from './sections/index';

function Main() {
    return(
        <main>
            <Home />
            <About />
            <Projects />
            <Tech />
        </main>
    );
}

export default Main;