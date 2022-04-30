import {
  About,
  Header,
  Hero,
  Brands,
  Payment,
  Statistics,
  Testimonials,
  Footer,
  Feature,
  LinkedIn,
  Twitter,
} from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Feature />
      <About/>
      <Brands />
      <LinkedIn />
      <Twitter />
  
      <Statistics />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
