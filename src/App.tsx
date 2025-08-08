import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// ========== Link Web User ========== //
import Home from "./users/pages/Home";
import Product from "./users/pages/Product";
import Contact from "./users/pages/Contact";
import Cart from "./users/pages/Cart";
import Favourite from "./users/pages/Favourite";
import Login from "./users/auth/Login";
import Register from "./users/auth/Register";
import Layout from "./users/components/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* ========== Link Web User ========== */}
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="favourite" element={<Favourite />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
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
