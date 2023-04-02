import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as productAction from "../../../../../redux/products/products.actions" 
import * as productReducer from "../../../../../redux/products/products.reducer";
import { AppDispatch ,useAppDispatch,RootState} from '../../../../../redux/store';
import { IProduct } from '../../models/IProduct';
export const CreateProduct = () => {

const dispatch:AppDispatch=useAppDispatch();
const navigate=useNavigate();

//get the data from redux
const productState:productReducer.InitialState=useSelector((store:RootState)=>{
return store[productReducer.productFeatureKey];
})
const {loading}=productState;
const [product,setProduct]=useState<IProduct>({
    name : "",
    image : "",
    price : "",
    qty : "",
    info : "",
    id:""
});

useEffect(()=>{
 dispatch(productAction.getAllProductsAction());
},[])


const updateInput=(event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setProduct({
        ...product,
        [event.target.name]:event.target.value
    })
};
const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
event.preventDefault();
dispatch(productAction.createProductAction({product:product})).then((response:any)=>{
    if(!response.error){
        navigate('/product/admin');
    }
});
};
  return (
    <React.Fragment>
    {/* <pre>{JSON.stringify(state.product)}</pre>*/}
     <section className="mt-3">
         <div className="container">
             <div className="row">
                 <div className="col">
                     <p className="h3 text-success">Create New</p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eos exercitationem harum id illum in, ipsa maiores minus, mollitia nisi pariatur, perspiciatis quos repellat sapiente soluta tempore voluptas. Nihil, placeat.</p>
                 </div>
             </div>
         </div>
     </section>
     <section className="mt-3">
         <div className="container">
             <div className="row">
                 <div className="col-md-4">
                     <div className="card">
                         <div className="card-header bg-success text-white">
                             <p className="h4">Create Product</p>
                         </div>
                         <div className="card-body rgba-green-light">
                             <form onSubmit={e => handleSubmit(e)} >
                                 <div className="mb-3">
                                     <input
                                         required
                                         name="name"
                                         value={product.name}
                                       onChange={e => updateInput(e)}
                                         type="text" className="form-control" placeholder="Name"/>
                                 </div>


                                 <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'image'}
                                        value={product.image}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="Image Url" type="text"/>
                                         {
                                         product?.image &&
                                             <img src={product.image} alt="" width="25" height="25"/>
                                     }
                                </div>


                                 {/* <div className="mb-3">
                                     <input
                                         required
                                         name="image"
                                         value={product.image}
                                       onChange={e => updateInput(e)}
                                       
                                         className="form-control" type="file" id="formFile"/>
                                     {
                                         product?.image &&
                                             <img src={product.image} alt="" width="25" height="25"/>
                                     } 
                                 </div> */}
                                 <div className="mb-3">
                                     <input
                                         required
                                         name="price"
                                         value={product.price}
                                       onChange={e => updateInput(e)}
                                         type="number" className="form-control" placeholder="Price"/>
                                 </div>
                                 <div className="mb-3">
                                     <input
                                         required
                                         name="qty"
                                         value={product.qty}
                                         onChange={e => updateInput(e)}
                                         type="number" className="form-control" placeholder="Qty"/>
                                 </div>
                                 <div className="mb-3">
                                     <textarea
                                         required
                                         name="info"
                                         value={product.info}
                                         onChange={e => updateInput(e)}
                                         rows={3} className="form-control" placeholder="Info"/>
                                 </div>
                                 <div className="">
                                     <input type="submit" className="btn btn-success btn-sm" value="Create"/>
                                 </div>
                             </form>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>
 </React.Fragment>
  )
}
