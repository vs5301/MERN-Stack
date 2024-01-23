import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import AdminPage from "./components/AdminPage"
import AuthRoute from "./components/AuthRoute"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Products from "./components/Products"
import Product from "./components/Product"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/admin" element={<AuthRoute><AdminPage /></AuthRoute>} />
        {/* 404 */}
        <Route path="*" element={<h1 style={{textAlign:"center"}}>404. Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;