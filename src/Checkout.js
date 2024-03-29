import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Login from "./Login";

function Checkout() {
  const [state, dispatch] = useStateValue();
  const { basket, user } = state;
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hey, {state.user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hiddenButton={false}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        {user && <Subtotal />}
        {!user && <Login />}
      </div>
    </div>
  );
}

export default Checkout;
