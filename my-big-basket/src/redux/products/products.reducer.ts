import { SerializedError } from "@reduxjs/toolkit/dist/createAsyncThunk";
//import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
import { createSlice } from "@reduxjs/toolkit";
//import { isRejectedWithValue } from "@reduxjs/toolkit/dist/matchers";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { IProduct } from "../../components/models/products/models/IProduct";
import * as productAction from "./products.actions"
export const productFeatureKey="productFeature";

export interface InitialState{
    loading:boolean;
    errorMessage:SerializedError;
    products:IProduct[];
    product:IProduct;
}
const initialState:InitialState={
    loading:false,
    errorMessage:{} as SerializedError,
    products:[] as IProduct[],
    product:{} as IProduct,
}
export const contactSlice=createSlice({
    name:"productSlice",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        // Get All Products
        builder
        .addCase(productAction.getAllProductsAction.pending,(state ,action)=>{
            state.loading=true;
        })
        .addCase(productAction.getAllProductsAction.fulfilled,(state ,action)=>{
            state.loading=false;
            state.products=action.payload;
        })
        .addCase(productAction.getAllProductsAction.rejected,(state ,action)=>{
            state.loading=false;
            if(isRejectedWithValue(action)){
                state.errorMessage=action.payload
            }
        })
        // Get Product
        builder
        .addCase(productAction.getProductAction.pending,(state ,action)=>{
            state.loading=true;
        })
        .addCase(productAction.getProductAction.fulfilled,(state ,action)=>{
            state.loading=false;
            state.product=action.payload;
        })
        .addCase(productAction.getProductAction.rejected,(state ,action)=>{
            state.loading=false;
            if(isRejectedWithValue(action)){
                state.errorMessage=action.payload
            }
        })
        // Create Product
        builder
        .addCase(productAction.createProductAction.pending,(state ,action)=>{
            state.loading=true;
        })
        .addCase(productAction.createProductAction.fulfilled,(state ,action)=>{
            state.loading=false;
            
        })
        .addCase(productAction.createProductAction.rejected,(state ,action)=>{
            state.loading=false;
            if(isRejectedWithValue(action)){
                state.errorMessage=action.payload
            }
        })

        // Update Product
        builder
        .addCase(productAction.updateProductAction.pending,(state ,action)=>{
            state.loading=true;
        })
        .addCase(productAction.updateProductAction.fulfilled,(state ,action)=>{
            state.loading=false;
            
        })
        .addCase(productAction.updateProductAction.rejected,(state ,action)=>{
            state.loading=false;
            if(isRejectedWithValue(action)){
                state.errorMessage=action.payload
            }
        })

        // Delete Product
        builder
        .addCase(productAction.deleteProductAction.pending,(state ,action)=>{
            state.loading=true;
        })
        .addCase(productAction.deleteProductAction.fulfilled,(state ,action)=>{
            state.loading=false;
        })
        .addCase(productAction.deleteProductAction.rejected,(state ,action)=>{
            state.loading=false;
            if(isRejectedWithValue(action)){
                state.errorMessage=action.payload
            }
        })
    }
})