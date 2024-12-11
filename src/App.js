import Nav from "./Component/Navbar/Nav";
import Hero from "./Component/Hero/Hero";
import Services from "./Component/Divisions/Services";
import Product from "./Component/Divisions/Product";
import About from "./Component/Divisions/About";
import Contact from "./Component/Divisions/Contact";
import Footer from "./Component/Divisions/Footer";
function App() {
  return (
    <>
    <Nav />
    <Hero/>
    <Services/>
    <Product/>
    <About />
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
