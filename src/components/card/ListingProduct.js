import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { urlApi } from "../../utils/ApiUrl";
import ProductsCompt from "./CardProducts";
import { SetProducts } from "../../redux/actions/produtcActions";

const ListingProduct = () => {
  // const products = useSelector((state) => state.allProducts.products);
  // console.log("Get Data Products", products);
  const dispatch = useDispatch();

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(urlApi);
      dispatch(SetProducts(res.data.products));
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <ProductsCompt />
    </div>
  );
};

export default ListingProduct;
