import React from "react";
import "./Product.css";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product__rating">
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={rating} readOnly />
        </Box>
      </div>
      <img src={image} alt={title} />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
