import React, { useState } from "react";
import "./Product.css";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

function Product() {
  const [value, setValue] = useState(2);

  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
      </div>
      <div className="product__rating">
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
