import './index.scss'
import { Home, About, Projects } from "./sections/index";

function Main() {
    return(
        <main>
            <Home/>
            <About/>
            <Projects/>
        </main>
    );
}

export default Main;