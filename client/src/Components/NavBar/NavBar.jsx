import React, { useState } from "react";
import './NavBar.css'
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../asset/images/Logo.png";
import { BsCartCheckFill } from 'react-icons/bs'
import Badge from "react-bootstrap/badge"
import Modal from "../../Modal";
import Cart from "../../screens/cart/Cart";
import { useCart } from "../../Components/ContextReducer";


const NavBar = () => {
  const [cartView, setCartView] = useState(false);
  let data = useCart();

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    navigate("/");
  };
  // className="sticky-sm-top"
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-info navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4 fst-italic fw-bold" to="/">
            Food
            <img src={Logo} alt="" style={{ height: "3rem" }} />
            Express
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fs-6" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {(localStorage.getItem("authToken"))
                ? <Link className="nav-link active fs-6" aria-current="page" to="/myOrders">My Orders</Link>
                : ""
              }
              <li className="nav-item">
                <Link className="nav-link active fs-6" aria-current="page" to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>

            {localStorage.getItem('authToken') &&
              <div className="name-div">
                <div className="nav-user-name fw-bold">welcome, {localStorage.getItem('userName')}</div>
              </div>
            }

            {(!localStorage.getItem("authToken"))
              ?
              <div className="d-flex ">
                <Link className="btn text-info mx-3 fs-5 fw-bold auth-btn" style={{ backgroundColor: "white", borderRadius: "2rem" }} to="/login">Login</Link>

                <Link className="btn text-success mx-3 fs-5 fw-bold auth-btn" style={{ backgroundColor: "white", borderRadius: "2rem" }} to="/signup">SignUp</Link>
              </div>

              :
              <div>
                <div
                  className="btn text-success mx-3 fs-6 fw-bold auth-btn"
                  style={{ backgroundColor: "white", borderRadius: "2rem" }}
                  onClick={() => {
                    data.length > 0
                      ? setCartView(true)
                      : window.alert('please add something in cart first !!!')
                  }}
                >
                  <BsCartCheckFill /> My Cart {"   "}
                  <Badge pill bg="danger">{data.length}</Badge>
                </div>

                {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}

                <div className="btn text-danger mx-3 fs-5 fw-bold auth-btn" style={{ backgroundColor: "white", borderRadius: "2rem" }} onClick={handleLogOut}>LogOut</div>
              </div>
            }
          </div>
        </div>
      </nav>

    </div>
  );
};

export default NavBar;
