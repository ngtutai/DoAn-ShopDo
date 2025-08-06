import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// ========== Link Web User ========== //
import Home from "./users/pages/Home";
import Product from "./users/pages/Product";
import Contact from "./users/pages/Contact";
import Cart from "./users/pages/Cart";
import Login from "./users/auth/Login";
import Register from "./users/auth/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* ========== Link Web User ========== */}
          <Route path="" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>

        {/* 🔔 Toast Thông báo */}
        <ToastContainer
          position="top-right"
          autoClose={1500}
          pauseOnHover
          closeOnClick
          draggable
          theme="colored"
        />
      </Router>
    </>
  );
}

export default App;
