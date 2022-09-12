import './App.css';
import Hero from './components/Hero/Hero';
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
    </div>
  );
}

export default App;
