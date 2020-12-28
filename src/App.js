// import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/About/About';
import Certifications from './pages/Certifications/Certifications';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/projects';
import Skills from './pages/Skills/Skills';

function App() {
  return (
    <div className="App">
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
