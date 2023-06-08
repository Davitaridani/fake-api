import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardProducts = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <Fragment>
      {products.map((item) => (
        <div key={item.id}>
          <Link to={`/product/${item.id}`}>
            <img src={item.thumbnail} alt="product" />
            <h3> {item.title}</h3>
            <p>{item.description}</p>
          </Link>
        </div>
      ))}
    </Fragment>
  );
};

export default CardProducts;
