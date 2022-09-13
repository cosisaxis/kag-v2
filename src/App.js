import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Programs from './components/Programs/Programs';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Services />
          <Testimonials />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
