import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Cart } from "./components/pages/cart/Cart";
import { Shop } from "./components/pages/shop/Shop";
import { ShopContextProvider } from "./context/shop-context";
import Footer from "./components/Footer/Footer";
import { ReactNode } from "react";
import React from "react";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";

function App(): ReactNode {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
