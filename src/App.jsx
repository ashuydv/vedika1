import {
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
      <Brands />
      <LinkedIn />
      <Twitter />
      <Payment />
      <Statistics />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
