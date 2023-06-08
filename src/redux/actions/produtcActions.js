import { ActionTypes } from "../constants/actions-type";

export const SetProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const SelectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

// Actions ===> Sebuah JavaScript Object yang mewakili apa yang terjadi di dalam aplikasi.
