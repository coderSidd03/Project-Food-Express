import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FiUser } from 'react-icons/fi'
import { MdAlternateEmail } from 'react-icons/md'
import { CgPassword } from 'react-icons/cg'
import { ImAddressBook } from 'react-icons/im'
import axios from "axios";
import './signup.css'
import SignUp from '../../asset/images/auth/sign-up.png'
import NavBar from '../../Components/NavBar/NavBar';
// import Footer from '../../Components/Footer/Footer';



const Signup = () => {
  const navigate = useNavigate()
  const [details, setdetails] = useState({ title: "", name: "", email: "", password: "", geolocation: "" })

  const handleChange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await fetch("http://localhost:5000/api/user/createUser",
    //   {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(
    //       { name: details.name, email: details.email, password: details.password, location: details.geolocation }
    //     )
    //   });
    //   const json = await response.json()

    // if (!json.data) {
    //   window.alert("Enter Valid Credentials: ")
    // }

    const BASE_URL = process.env.REACT_APP_BASE_URL
    const response2 = await axios.post(`${BASE_URL}/api/user/createUser`, {name: details.name, email: details.email, password: details.password, location: details.geolocation
    })

    console.log(response2.data);


    response2.data.success
      ? navigate('/login')
      : window.alert(`warning: Invalid credentials !!!`)
  };




  return (
    <>
      <div>
        <NavBar />


        <div className="container sign-up-container">
          {/* image */}
          <div>
            <div className='text-div'>
              <h1 className="text-center heading-cont mb-5">Sign Up</h1>
            </div>
            <div className='signup-img'>
              <img src={SignUp} alt="" className='image-rt' />
            </div>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className='signup-form'>
            <div className="mb-3">
              {/* <label htmlFor="name" className="form-label sign-up-form-label">Title</label>
              <select id="title" name="title" className='form-control' onChange={handleChange}>
                <option value="Mr.">Mr.</option>
                <option value="Miss.">Miss.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="master.">master.</option>
              </select> */}
              {/* <input
              type="text"
              className="form-control"
              name='name'
              value={details.name}
              onChange={handleChange}
            /> */}
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label sign-up-form-label"> <FiUser /> Full Name</label>
              <input
                type="text"
                className="form-control"
                name='name'
                value={details.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label sign-up-form-label"> <MdAlternateEmail />Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1" aria-describedby="emailHelp"
                name='email'
                value={details.email}
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label sign-up-form-label"> <CgPassword /> Password</label>
              <input
                type="password"
                className="form-control" id="exampleInputPassword1"
                name='password'
                value={details.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label sign-up-form-label"> <ImAddressBook /> Address</label>
              <input
                type="text"
                className="form-control" id="exampleInputLocation1"
                name='geolocation'
                value={details.geolocation}
                onChange={handleChange}
              />
            </div>

            <div>
              <Link to="/login" className="fs-6 text-dark fw-bold login-text" style={{ textDecoration: "none" }}>
                <p>Already have an account !! Login..</p>
              </Link>
            </div>

            <div className='btn-div'>
              <button type="submit" className="m-2 btn btn-info signup-btn" >Sign up</button>
            </div>
          </form>


        </div>
        {/* <div className='fixed-bottom sign-up-footer'>
          <Footer />
        </div> */}
      </div>
    </>
  )
}

export default Signup