import { combineReducers } from "redux";
import { ProductReducer, SelectedProductReducer } from "./productReducer";

const rootReducers = combineReducers({
  allProducts: ProductReducer,
  selectProduct: SelectedProductReducer,
});

export default rootReducers;
