import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/home/Home";
import Login from "./screens/login/Login";
import Signup from "./screens/signup/Signup";
import MyOrders from "./screens/myorders/MyOrders";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './Components/ContextReducer';
import ContactUs from "./screens/ContactUs/ContactUs";

function App() {
  // const user = localStorage.getItem('authToken');

  return (
    <CartProvider>

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myOrders" element={<MyOrders />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </div>
      </Router>

    </CartProvider>
  );
}

export default App;
