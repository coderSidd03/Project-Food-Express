import React, { useRef, useEffect, useState } from "react";
import "./card.css";
import { useDispatchCart, useCart } from "../ContextReducer";
import { useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs"

const Card = (props) => {
  const priceRef = useRef();
  let dispatch = useDispatchCart();
  const navigate = useNavigate();
  let data = useCart()
  let options = props.options;
  let priceOptions = Object.keys(options);
  // console.log(priceOptions);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    if (localStorage.getItem("authToken")) {
      let food = [];
      for (const item of data) {
        if (item.id === props.foodItem._id) {
          food = item;
          break;
        }
      }

      if (food !== []) {
        if (food.size === size) {
          await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
          return;
        }
        else if (food.size !== size) {
          await dispatch({ type: "ADD", id: props.foodItem._id, img: props.foodItem.img, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
          return;
        }
        return;
      }
      await dispatch({ type: "ADD", id: props.foodItem._id, img: props.foodItem.img, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })


      // console.log(data);
    } else {
      window.alert("OOPS !! sign in first to add item in cart !!");
      navigate('/login')
    }
  };

  let finalPrice = qty * parseInt(options[size])

  useEffect(() => {
    setSize(priceRef.current.value);
  }, [])


  return (
    <div
      className="card m-4 food-card"
      style={{
        width: "19rem",
        height: "50rem",
        backgroundColor: "var(--hrColor)",
      }}
    >
      <img
        src={props.foodItem.img}
        className="card-img-top"
        alt="..."
        style={{ objectFit: "fill", height: "150px" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold text-dark">{props.foodItem.name}</h5>
        <p className="card-text text-dark">{props.foodItem.description}</p>
        <div className="container w-100">
          <select
            className="h-100 rounded text-dark"
            style={{ backgroundColor: "var(--pink)" }}
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className="m-2 h-100 rounded text-dark"
            ref={priceRef}
            style={{ backgroundColor: "var(--pink)" }}
            onChange={(e) => setSize(e.target.value)}
          >
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className="d-inline text-dark fw-bold">₹{finalPrice} Rs /-</div>
        </div>
        <hr />
        <div className="card-btn-div">
          <button
            href="#"
            className="card-btn btn btn-success justify-center ms-2 mt-3"
            style={{ borderRadius: "2rem 1rem" }}
            onClick={handleAddToCart}
          >
            Add to cart <BsFillCartPlusFill size='22px' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

/**
 * <div>
      <div
        className="card mt-3"
        style={{
          backgroundColor: "var(--lightSky)",
        }}
      >
        <img src="https://loremflickr.com/640/400/burger" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-dark fw-bold">Card title</h5>
          <p className="card-text text-dark">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            quos tenetur excepturi inventore eveniet a.
          </p>

          <div className="container w-100 ">
            <select
              className="h-100 rounded text-dark"
              style={{ backgroundColor: "var(--cardColor)" }}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100 rounded text-dark"
              style={{ backgroundColor: "var(--cardColor)" }}
            >
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5 text-dark">Total price</div>
          </div>

          <button href="#" className="btn btn-primary ">
            Go somewhere
          </button>
        </div>
      </div>
    </div>
 * 
 */
