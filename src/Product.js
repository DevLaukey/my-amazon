import React, { useEffect } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Aos from "aos";
import "aos/dist/aos.css";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="product" data-aos="fade-up">
      <div className="product_Info" data-aos="fade-right">
        <p>{title} </p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <span role="image">🌟</span>{" "}
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" data-aos="fade-up" />
      <button data-aos="slide-down" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
