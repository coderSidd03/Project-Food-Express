import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard/OrderCard'

export default function OrderPage() {
  const [orderData, setorderData] = useState("")
  const fetchOrder = async () => {
    console.log(localStorage.getItem('userEmail'))

    const BASE_URL = process.env.REACT_APP_BASE_URL
    await fetch(`${BASE_URL}/api/orders/orderHistory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: localStorage.getItem('userEmail')
      })
    }).then(async (res) => {
      let response = await res.json()
      await setorderData(response)
    })
  }

  useEffect(() => {
    fetchOrder()
  }, [])


  return (
    <div className='container'>
      <div className="row col-12">
        {orderData !== {}
          ? Array(orderData).map((data) => {
            return (
              data.orderData ?
                data.orderData.order_data.slice(0).reverse().map((item) => {
                  return (
                    item.map((arrayData) => {
                      return (
                        <div>
                          {arrayData.order_date
                            ? <div className='m-auto mt-5'>

                              {data = `${arrayData.order_date} -- ${arrayData.order_time}`}
                              
                              <hr />
                            </div>

                            : <div className='order-card-div'>
                              <OrderCard
                                img={arrayData.img}
                                name={arrayData.name}
                                qty={arrayData.qty}
                                size={arrayData.size}
                                price={arrayData.price}
                                data={data}
                              />
                            </div>
                          }

                        </div>
                      )
                    })

                  )
                }) : <div className='text-center mt-5'>
                  <h1>OOPS !!! no orders found from this account...</h1>
                </div>
            )
          }) : ""}
      </div>
    </div>
  )
}