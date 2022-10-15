import React from "react";
import { useParams } from "react-router-dom";
import { CartState } from "../Context/UseContext";

const Product = () => {
  const { id } = useParams();

  const {
    state: { products },
  } = CartState();

  const singleProduct = products.data.filter((product) => product.id === id);

  return (
    <div>
      {singleProduct?.map((singleProduct, index) => (
        <div key={index}>
          <h2>{singleProduct.name}</h2>
          <img src={singleProduct.img} alt={singleProduct.name} />
          <p>{singleProduct.description}</p>
          <h3>{singleProduct.price.toFixed(2) + "€"}</h3>
        </div>
      ))}
    </div>
  );
};

export default Product;
