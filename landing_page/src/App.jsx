import "./App.css";
import NavBar from "./components/NavBar";

import About from "./components/About";
import Price from "./components/Price";
import Footer from "./components/Footer";

import Product from "./components/Product";

function App() {
  return (
    <>
      <NavBar />
      <Product />
      <About />
      <Price />
      <Footer />
    </>
  );
}

export default App;
