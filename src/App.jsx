import { About } from './Components/About/About';
import { Experiences } from './Components/Experiences/Experiences';
import Footer from './Components/Footer/Footer';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { Skills } from './Components/Skills/Skills';
import StartProject from './Components/StartProject/StartProject';
import { Work } from './Components/Work/Work';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experiences />
        <StartProject />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
