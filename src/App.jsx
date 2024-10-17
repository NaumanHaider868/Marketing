import './assets/css/style.css'
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import Rating from "./componets/Rating";
import Digital from "./componets/Digital";
import Studies from './componets/studies';
import Marketing from './componets/Marketing';
import Services from './componets/Services';
import WhyUs from './componets/WhyUs';

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
    </div>
  )
}

export default App;
