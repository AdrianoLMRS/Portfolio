import '@styles/App.scss'
// import Header from '@components/header/Header';
import Navbar from '@components/navbar/Navbar';
import Footer from '@components/footer/Footer';
import Main from '@components/main/Main';

declare global {
  interface Window {
    resizeTimeout?: ReturnType<typeof setTimeout>;
  }
}

function App() {
  return (
    <>
      <Navbar/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App
