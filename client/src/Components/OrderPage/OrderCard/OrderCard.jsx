import React from 'react'

const OrderCard = (props) => {
  return (
    <div className='col-3 mb-6' >
      <div className="card mt-4 mb-4" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={props.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body text-center bg-primary">
          <h5 className="card-title">{props.name}</h5>
          <div className='container w-100 p-0' style={{ height: "38px" }}>
            <span className='m-1'>{props.qty}</span>
            <span className='m-1'>{props.size}</span>
            <span className='m-1'>{props.data}</span>
            <div className=' d-inline ms-2 h-100 w-20 fs-5' >
              ₹{props.price}/-
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default OrderCard