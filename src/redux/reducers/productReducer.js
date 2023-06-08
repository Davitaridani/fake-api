import { ActionTypes } from "../constants/actions-type";
const initialState = {
  products: [],
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
export const SelectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

// Reducer ==> Function yang menerima object state dan object action, tujuannya untuk menentukan bagaimana suatu state akan diubah. Output reducer adalah state baru.
