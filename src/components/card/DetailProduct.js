import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { urlApi } from "../../utils/ApiUrl";
import { SelectedProduct } from "../../redux/actions/produtcActions";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dataProduct = useSelector((state) => state.selectProduct);
  const { title, description, category, stock, price, thumbnail } = dataProduct;
  console.log(dataProduct);
  const fetchProductDetail = async () => {
    try {
      const res = await axios.get(`${urlApi}/${id}`);
      dispatch(SelectedProduct(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, []);

  return (
    <div>
      <div className="card">
        <img src={thumbnail} alt="detail-product" />

        <div className="body">
          <h3>{title}</h3>
          <p>
            {description} <span>{category}</span>
          </p>
          <h5>
            {stock} {price}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
