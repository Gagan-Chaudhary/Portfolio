// import logo from './logo.svg';
import Particles from 'react-particles-js';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/Nav/Navbar';
import particlesConfig from './config/particlesjs-config';
import particlejsBubble from './config/particlesjs-config-bubble';
import About from './pages/About/About';
import Certifications from './pages/Certifications/Certifications';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/projects';
import Skills from './pages/Skills/Skills';



function App() {
  return (
    <div className="App container-box" >
    
      <Header/>
      <About/>
      <Skills/>
      <Certifications/>
      <Projects/>
      <Contact/>
      <Footer/>
 
    </div>
  );
}


export default App;
