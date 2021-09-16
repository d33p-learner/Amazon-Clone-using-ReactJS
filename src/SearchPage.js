import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
import { itemsArray } from "./Items";
import Header from "./Header";
import { useState } from "react";
import { Card, CardColumns, Button } from "react-bootstrap";

function SearchPage({ match }) {
  const keyword = match.params.keyword;
  console.log(keyword);
  const [state, dispatch] = useStateValue();
  const { basket, user } = state;

  const res = itemsArray.filter(
      (item) => 
        item.title.toLowerCase().includes(keyword)
    );

  return (
    <div className="home">
        <Header/>
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      {/* <div className="home__row">
        
      </div> */}

      {res.map((item) => (
          <Product
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          />
        ))}

      {!user && <Login />}
    </div>
  );
}

export default SearchPage;
