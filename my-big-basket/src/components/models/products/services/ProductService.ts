import axios from "axios";
import { IProduct } from "../models/IProduct";
export class ProductService{
private static serverUrl:string=`http://localhost:9090`;
/*
   @usage : GET All Products
   @url : http://localhost:9090/products
   @method : GET
   @fields : no-fields
   @access : PUBLIC
 */
public static getAllProducts():Promise<{data:IProduct[]}>{
    const dataUrl:string=`${this.serverUrl}/products`;
    return axios.get(dataUrl);
}

/*
   @usage : GET single Product
   @url : http://localhost:9090/products/:productId
   @method : GET
   @fields : no-fields
   @access : PUBLIC
 */
public static getProduct(productId:string):Promise<{data:IProduct}>{
    const dataUrl:string=`${this.serverUrl}/products/${productId}`;
    return axios.get(dataUrl);
}

/*
   @usage : CREATE a Product
   @url : http://localhost:9090/products/
   @method : POST
   @fields : name , image , price , qty , info
   @access : PUBLIC
 */
public static createProduct(product:IProduct):Promise<{data:IProduct}>{
    const dataUrl:string=`${this.serverUrl}/products/`;
    return axios.post(dataUrl,product);
}

/*
   @usage : UPDATE a Product
   @url : http://localhost:9090/products/:productId
   @method : PUT
   @fields : name , image , price , qty , info
   @access : PUBLIC
 */
public static updateProduct(product:IProduct,productId:string):Promise<{data:IProduct}>{
    const dataUrl:string=`${this.serverUrl}/products/${productId}`;
    return axios.put(dataUrl,product)
}

/*
   @usage : DELETE a Product
   @url : http://localhost:9090/products/:productId
   @method : DELETE
   @fields : no-fields
   @access : PUBLIC
 */
public static deleteProduct(productId:string):Promise<{data:{}}>{
const dataUrl:string=`${this.serverUrl}/products/${productId}`;
return axios.delete(dataUrl);
}
}