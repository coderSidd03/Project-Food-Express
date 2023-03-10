import React from 'react'
import Navbar from '../../Components/NavBar/NavBar';
import OrderPage from '../../Components/OrderPage/OrderPage';
import { AiOutlineToTop } from 'react-icons/ai';
import './myOrders.css'


const MyOrders = () => {
  return (
    <>
      <div className='' id='nav'>
        <Navbar />
      </div>

      <div>
        <OrderPage />
      </div>

      <div className="sticky-lg-bottom down-btn-div fixed-bottom">
        <a href="#nav" className='scroll_up'>
          <AiOutlineToTop size="30px" />
        </a>
      </div>
    </>
  )
}

export default MyOrders