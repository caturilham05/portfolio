import './App.css';
import Header from './components/header/Header.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Service from './components/service/Service.jsx'
import Contact from './components/contact/Contact.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
