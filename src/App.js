import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Programs from './components/Programs/Programs';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import { Testing1 } from './components/Testing/Testing1';
function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Services />
          <Testimonials />
          <Join />
          <Footer />
          <Testing1 />
    </div>
  );
}

export default App;
