//import { createAsyncThunk } from "@reduxjs/toolkit/dist/createAsyncThunk";
import {createAsyncThunk} from "@reduxjs/toolkit";
import { IProduct } from "../../components/models/products/models/IProduct";
import { ProductService } from "../../components/models/products/services/ProductService";

export const getAllProductsAction:any=createAsyncThunk("products/getAllProductsAction",
async (payload:{},{rejectWithValue}):Promise<IProduct[]|any> => {
    try{
const response=await ProductService.getAllProducts();
return response.data
    }catch(error:any){
if(!error.response){
    throw error
}
return rejectWithValue(error)
}
})
export const getProductAction:any=createAsyncThunk("products/getProductsAction",
async (payload:{productId:string},{rejectWithValue}):Promise<IProduct|any> => {
    try{
        const {productId}=payload
const response=await ProductService.getProduct(productId);
return response.data
    }catch(error:any){
if(!error.response){
    throw error
}
return rejectWithValue(error)
}
})

export const createProductAction:any=createAsyncThunk("products/createProductsAction",
async (payload:{product:IProduct},{rejectWithValue}):Promise<IProduct|any> => {
    try{
        const {product}=payload
const response=await ProductService.createProduct(product);
return response.data
    }catch(error:any){
if(!error.response){
    throw error
}
return rejectWithValue(error)
}
})

export const updateProductAction:any=createAsyncThunk("products/updateProductsAction",
async (payload:{product:IProduct,productId:string},{rejectWithValue}):Promise<IProduct|any> => {
    try{
        const {product,productId}=payload
const response=await ProductService.updateProduct(product,productId);
return response.data
    }catch(error:any){
if(!error.response){
    throw error
}
return rejectWithValue(error)
}
})

export const deleteProductAction:any=createAsyncThunk("products/DeleteProductAction",
async (payload:{productId:string},{rejectWithValue}):Promise<{}|any> => {
    try{
        const {productId}=payload
const response=await ProductService.deleteProduct(productId);
return response.data
    }catch(error:any){
if(!error.response){
    throw error
}
return rejectWithValue(error)
}
})
