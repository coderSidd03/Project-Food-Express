import React, { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Card from "../../Components/Card/Card";
import Footer from "../../Components/Footer/Footer";
import axios from 'axios';
import './home.css';

const Home = () => {
  const [search, setSearch] = useState('');
  const [foodCat, setfoodCat] = useState([]);
  const [foodItems, setfoodItems] = useState([]);
  const [isMouseOverSearch, setisMouseOverSearch] = useState(false);

  // const loadData = async (data) => {
  //   let response = await fetch("http://localhost:5000/api/foodData", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   response = await response.json();
  //   // console.log(response[0], response[1]);

  //   setfoodItems(response[0]);
  //   setfoodCat(response[1]);
  // };

  const loadData = async () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL
    const response = await axios.post(`${BASE_URL}/api/foodData`)
    setfoodItems(response.data[0]);
    setfoodCat(response.data[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {/* navbar part */}
      <div id="nav">
        <NavBar />
      </div>

      {/* caraosel part */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                id="carousel-input"
                className="form-control me-2 bg-light text-dark text-center"
                type="search"
                placeholder={isMouseOverSearch ? "ummm searching..." : "grab a meal !! search HERE..."}
                aria-label="Search"
                // style={{ padding: "1em", borderRadius: "9rem", fontFamily: '"Montserrat", sans-serif', }}
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                onMouseEnter={() => {
                  setisMouseOverSearch(true);
                }}
                onMouseLeave={() => {
                  setisMouseOverSearch(false);
                }}
              />
              {/* <button
                className="button btn btn-outline-info text-white fs-4 fst-italic"
                type="submit"
                style={{
                  border: "2px solid",
                  borderRadius: "3rem 0rem 3rem 0rem",
                  width: "15%",
                  fontFamily: '"Montserrat", sans-serif',
                }}
              >
                Search
              </button> */}
            </div>
          </div>

          <div className="carousel-item active carousel slide">
            <img
              src="https://source.unsplash.com/random/?pizza"
              className="d-block w-100"
              style={{ filter: "brightness(40%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/?burger"
              className="d-block w-100"
              style={{ filter: "brightness(40%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/?food"
              className="d-block w-100"
              style={{ filter: "brightness(40%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      {/* cards section */}
      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((data, index) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.categoryName}
                </div>
                <hr />
                {foodItems ? (
                  foodItems
                    .filter((item) => (item.categoryName === data.categoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                    .map((filteredItems) => {
                      return (
                        <div
                          key={filteredItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            foodItem={filteredItems}
                            options={filteredItems.options[0]}
                          // foodName={filteredItems.name}
                          // image={filteredItems.img}
                          // desc={filteredItems.description}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div> No data available </div>
                )}
              </div>
            );
          })
        ) : (
          <div>""""""""""""""""""</div>
        )}
      </div>


      <Footer />
    </div>
  );
};

export default Home;
