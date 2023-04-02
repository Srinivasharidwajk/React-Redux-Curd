import {combineReducers} from "@reduxjs/toolkit";
//import * as contactReducer from "./contacts/contacts.reducer";
import * as productReducer from "./products/products.reducer";

const rootReducer: any = combineReducers({
 //   [contactReducer.contactFeatureKey] : contactReducer.contactSlice.reducer
 [productReducer.productFeatureKey]:productReducer.contactSlice.reducer
});
export default rootReducer;