import React, { Fragment } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


function Checkout() {
  
  const [{ basket, user, drawer }, dispatch] = useStateValue();

  return (
    <Fragment>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            alt=""
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />
          <div>
            <h3>Hello {user?.email}</h3>
            <h2 className="checkout__title">Your Shopping Basket</h2>
          </div>
          <FinalProducts />
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </Fragment>
  );
}

const FinalProducts = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Fragment>
      {basket.map((item) => (
        <CheckoutProduct
          id={item.id}
          price={item.price}
          rating={item.rating}
          image={item.image}
          title={item.title}
        />
      ))}
    </Fragment>
  );
};

export default Checkout;