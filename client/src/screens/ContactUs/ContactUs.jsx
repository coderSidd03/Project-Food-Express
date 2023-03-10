import React from 'react'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import './contactUs.css'


const ContactUs = () => {
  return (
    <div>
      <div className='' id='nav'>
        <NavBar />
      </div>

      <div>
        <h4 className='text-center mt-2'>-: Our Location :-</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.7003678966012!2d88.39072215794583!3d22.8985854670933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f893e2b297a05f%3A0xeae7ca0e2b6e85b!2sGoaltuli%20Rd%2C%20Chinsurah%20R%20S%2C%20Chinsurah%2C%20West%20Bengal%20712101!5e0!3m2!1sen!2sin!4v1678137434719!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          title="our location"
          referrerpolicy="no-referrer-when-downgrade"></iframe>


        <div className="container contact-container">
          <h2 className="common-heading text-center mt-2 mb-4 text-dark fw-bold" >Feel free to reach us</h2>
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xayzjzra"
              method="POST"
              className="contact-inputs">
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />

              <textarea
                name="message"
                cols="30"
                rows="6"
                autoComplete="off"
                placeholder="Your message"
                required></textarea>

              <button type="submit" value="send" className='contact-btn '> send </button>
            </form>
          </div>
        </div>

      </div>



      <div>
        <Footer />
      </div>

    </div>
  )
}

export default ContactUs