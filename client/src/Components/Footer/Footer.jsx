import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../asset/images/Logo.png'
import { AiOutlineToTop } from 'react-icons/ai';
import './footer.css';


const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top"
        style={{ backgroundColor: 'black' }}
      >
        <p className="col-md-4 mb-0 text-muted">© 2023 Food Express, Inc</p>

        <Link
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >

          <img src={Logo} style={{ width: "3rem", height: "3rem" }} alt="logo" />
        </Link>


        <ul className="nav col-md justify-content-end footer-lower-div">
          <div className="container lower-menu">
            <Link to="/" className="lower-link">Home</Link>
            <Link to="/contact-us" className="lower-link">Contact-us</Link>
            {(localStorage.getItem("authToken"))
              ? <Link className="lower-link" aria-current="page" to="/myOrders">My Orders</Link>
              : ""
            }

            <a href="#nav" className='scroll__up'>
              <AiOutlineToTop size="30px" />
            </a>
          </div>
        </ul>

      </footer>
    </div>
  );
};

export default Footer;
