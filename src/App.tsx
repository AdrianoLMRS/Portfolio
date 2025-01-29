// TODO: Make social icons components with <a> tag
// TODO: Make scroll animations

import '@styles/App.scss';
// import Header from '@components/header/Header';
import Navbar from '@components/navbar/Navbar';
import Footer from '@components/footer/Footer';
import Main from '@components/main/Main';
import BackToHome from '@components/others/backToHome';
import ThemeBtn from '@components/others/themeBtn';

declare global {
  interface Window {
    resizeTimeout?: ReturnType<typeof setTimeout>;
  }
}

function App() {
    return (
        <>
            <Navbar />
            <Main />
            <Footer />
            <BackToHome />
            <ThemeBtn />
        </>
    );
}

export default App;
