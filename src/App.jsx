import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
