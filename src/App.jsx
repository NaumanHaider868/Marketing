import './assets/css/style.css'
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import Rating from "./componets/Rating";
import Digital from "./componets/Digital";
import Studies from './componets/studies';
import Marketing from './componets/Marketing';
import Services from './componets/Services';
import WhyUs from './componets/WhyUs';
import Pricing from './componets/Pricing';
import Impact from './componets/Impact';
import Team from './componets/Team';
import Testimonials from './componets/Testimonials';
import FAQ from './componets/FAQ';
import Map from './componets/Map';
import Subscribe from './componets/Subscribe';
import Footer from './componets/Footer';

function App() {

  return (
    <div className="pt-3">
      <Navbar />
      <Home />
      <Rating />
      <Digital />
      <Studies />
      <Marketing />
      <Services />
      <WhyUs />
      <Pricing />
      <Impact />
      <Team />
      <Testimonials />
      <FAQ />
      <Map />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App;
