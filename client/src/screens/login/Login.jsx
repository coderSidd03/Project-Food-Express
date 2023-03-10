import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoginImg from '../../asset/images/auth/log-in.png';
import { MdAlternateEmail } from 'react-icons/md'
import { CgPassword } from 'react-icons/cg'
import './login.css'
import NavBar from "../../Components/NavBar/NavBar";

const Login = () => {
  const [info, setinfo] = useState({ email: "", password: "", })
  const [isCorrect, setcorrect] = useState(true)

  // true navigate for navigating to home when handleSubmit is called
  let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await fetch("http://localhost:5000/api/user/login",
    //   {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json', },
    //     body: JSON.stringify({ email: info.email, password: info.password })
    //   }
    // )
    // const json = await response.json();
    // console.log(json);

    const BASE_URL = process.env.REACT_APP_BASE_URL
    const response = await axios.post(`${BASE_URL}/api/user/login`, {
      email: info.email,
      password: info.password
    })

    // console.log(response.data);
    let fetchedData = response.data;
    console.log(fetchedData);

    if (fetchedData.success === true) {

      localStorage.setItem('user', JSON.stringify(fetchedData.user));

      // storing token & userEmail in localstorage
      localStorage.setItem('authToken', JSON.stringify(fetchedData.authToken));
      localStorage.setItem('userName', `${fetchedData.user.name}`);
      localStorage.setItem('userEmail', JSON.stringify(info.email));

      console.log(localStorage.getItem('authToken'));
      navigate('/');

    } else {
      window.alert('warning: Invalid Credentials !!!');
      setcorrect(false);
    }
  }

  const handleChange = (e) => {
    setinfo({ ...info, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div>
        <NavBar />
        <div className="container log-in-container">

          {/* image */}
          <div>
            <div className='text-div'>
              <h1 className="text-center heading-cont mb-5">Log in</h1>
            </div>
            <div className='login-img'>
              <img src={LoginImg} alt="" className='image-lt' />
            </div>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className='login-form'>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label log-in-form-label">
                <MdAlternateEmail />
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={info.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label log-in-form-label">
                <CgPassword />
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={info.password}
                onChange={handleChange}
              />
            </div>

            <span style={
              {
                display: isCorrect ? "none" : "block",
                color: "red", fontSize: "13px", alignSelf: "flex-end", marginRight: "5px"
              }
            }>
              ** Password mismatch please recheck your password
            </span>

            <div>
              <Link
                to="/signup"
                className="fs-6 login-text text-dark fw-bold"
                style={{ textDecoration: "none" }}
              >
                <p>Don't have an account !! SignUp..</p>
              </Link>
            </div>

            <div className="btn-div">
              <button type="submit" className="m-2 btn btn-info signup-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


export default Login;
