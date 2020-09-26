import React, { useEffect } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { ListItemAvatar } from "@material-ui/core";
import FlipMove from "react-flip-move";
import Aos from "aos";
import "aos/dist/aos.css";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images.unsplash.com/photo-1557682260-96773eb01377?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=715&q=80"
          alt=""
        />
        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout_title"> Your Shopping Basket </h2>
          {basket.map(item => (
            <div
              className="flip"
              data-aos="fade-up"
              style={{ position: "relative" }}
            >
              <FlipMove>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </FlipMove>
            </div>
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
