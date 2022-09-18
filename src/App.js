import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/header/Header.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Service from './components/service/Service.jsx'
import Contact from './components/contact/Contact.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Footer from './components/footer/Footer.jsx'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './App.css';


function App() {
  return (
    <ParallaxProvider>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </ParallaxProvider>
  );
}

export default App;
