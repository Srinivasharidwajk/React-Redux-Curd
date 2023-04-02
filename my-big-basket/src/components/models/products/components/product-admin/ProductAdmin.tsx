import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from '../../../layout/spinner/Spinner'
import * as productAction from  "../../../../../redux/products/products.actions";
import * as productReducer from  "../../../../../redux/products/products.reducer";
import { IProduct } from '../../models/IProduct';
import { AppDispatch, RootState, useAppDispatch } from '../../../../../redux/store';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';

interface IState{
    loading:boolean;
    products:IProduct[];
    errorMessage:string;
}

export const ProductAdmin = () => {
    
   
    const dispatch:AppDispatch = useAppDispatch();

    // get data from Redux Store
    const productState:productReducer.InitialState=useSelector((state:RootState)=>{
        return state[productReducer.productFeatureKey]
    })
   
    useEffect(() => {
        getAllProductsFromServer()
    }, [])

    const getAllProductsFromServer=():void=>{
        dispatch(productAction.getAllProductsAction())
    }



    const clickDeleteProduct = (productId:string|undefined):void => {
        dispatch(productAction.deleteProductAction({productId:productId})).then((response:any) => {
            if(response && !response.error){
                getAllProductsFromServer()
            }
        });
      
    };




    // const handleDelete = (id: number) => {
    //     const updatedProducts = products.filter((product) => product._id !== id);
    //     setProducts(updatedProducts);
    //   };
    const {loading,products,errorMessage}=productState
    const [isZoomed, setIsZoomed] = React.useState(false);
  return (
    <React.Fragment>
    <section className="mt-3">
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h3 text-success">Products Admin</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eos exercitationem harum id illum in, ipsa maiores minus, mollitia nisi pariatur, perspiciatis quos repellat sapiente soluta tempore voluptas. Nihil, placeat.</p>
                    <Link to="/product/add" className="btn btn-success btn-sm">Create New</Link>
                </div>
            </div>
        </div>
    </section>
   {loading && <Spinner/>}
  
            <React.Fragment>
                <section className="mt-3">
                    <div className="container">
     
                        <div className="row">
                            <div className="col">
                                <table className="table table-striped text-center table-hover">
                                    <thead className="bg-dark text-white">
                                    <tr>
                                        
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                     {
                                            products.length > 0 &&
                                                products.map(product => {
                                                    return (
                                                        <tr key={product.id}>
                                                            
                                                            <td >
                                                                
<div className="zoomable-image-container"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}>
<img   src={product.image} alt="" width="30" height="30"  className="zoomable-image"   />
{isZoomed && (
        <div className="zoomable-image-popup">
          <img src={product.image} alt="" className="zoomed-image" />
        </div>
      )}
</div>

                                                                
                                                            </td>
                                                       
      
                                                            <td>{product.name}</td>
                                                            <td>&#8377; {product.price}</td>
                                                            <td>{product.qty} Kgs</td>
                                                            <td>
                                                                <Link to={`/product/edit/${product.id}`} className="btn btn-secondary btn-sm">Update</Link>
                                                                <Link to={`/product/view/${product.id}`} className="btn btn-secondary btn-sm">View</Link>
                                                             <button onClick={()=>clickDeleteProduct(product.id)} className="btn btn-danger btn-sm">Delete</button>
                                                            </td>


                                                        </tr>
                                                    )
                                                })
                                        } 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
    
</React.Fragment>
  )
}
