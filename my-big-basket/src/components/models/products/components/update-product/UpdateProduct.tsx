import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch, RootState, useAppDispatch } from '../../../../../redux/store';
import * as productAction  from "../../../../../redux/products/products.actions";
import * as productReducer from "../../../../../redux/products/products.reducer"
import { useSelector } from 'react-redux';
import { IProduct } from '../../models/IProduct';

export const UpdateProduct = () => {
    const {productId} = useParams();
    const dispatch:AppDispatch = useAppDispatch();
    const navigate=useNavigate();
  

  

// get data from Redux Store
const productState:productReducer.InitialState=useSelector((state:RootState)=>{
    return state[productReducer.productFeatureKey]
})
    const {loading,product:productRedux,errorMessage}=productState;
    const [product,setProduct]=useState<IProduct>({
        name : "",
        image : "",
        price : "",
        qty : "",
        info : "",
        id:""
    });
   


    useEffect(() => {
      if(productId){
        getProduct();
      }
  }, [productId])
  
  const getProduct=():void=>{
      dispatch(productAction.getProductAction({productId:productId}));
  }
  

    useEffect(()=>{
        if(productRedux){

            setProduct({
                ...product,
                name:productRedux.name?productRedux.name:"",
                image:productRedux.image?productRedux.image:"",
                price:productRedux.price?productRedux.price:"",
                qty:productRedux.qty?productRedux.qty:"",
                info:productRedux.info?productRedux.info:"",
                id:productRedux.id?productRedux.id:""
            })

        }
    },[productRedux]);

const updateInput=(event:React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>)=>{
    setProduct({
        ...product,
        [event.target.name]:event.target.value
    })
}
const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
event.preventDefault();
if(productId){
dispatch(productAction.updateProductAction({product:product,productId:productId}))
.then((response:any)=>{
    if(!response.error){
        navigate("/product/admin")
    }
})
}
}
  return (
    <React.Fragment>
    {/* <pre>{JSON.stringify(state.product)}</pre>*/}
     <section className="mt-3">
         <div className="container">
             <div className="row">
                 <div className="col">
                     <p className="h3 text-success">Update Product</p>
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
                             <p className="h4">Update Product</p>
                         </div>
                         <div className="card-body rgba-green-light">
                             <form  onSubmit={e => handleSubmit(e)} >
                                 <div className="mb-3">
                                     <input
                                         required={true}
                                         name={"name"}
                                         value={product.name}
                                         onChange={e => updateInput(e)}                      
                                         type="text" className="form-control" placeholder="Name"/>
                                 </div>
                                 <div className="mb-3">
                                     <input
                                         required={true}
                                         name={"image"}
                                         value={product.image}
                                         onChange={e => updateInput(e)}
                                         className="form-control" type="text" id="formFile"/>
                                     {
                                         product?.image &&
                                             <img src={product.image} alt="" width="25" height="25"/>
                                     } 
                                 </div>
                                 <div className="mb-3">
                                     <input
                                         required={true}
                                         name={"price"}
                                         value={product.price}
                                         onChange={e => updateInput(e)}
                                         type="text" className="form-control" placeholder="Price"/>
                                 </div>
                                 <div className="mb-3">
                                     <input
                                         required={true}
                                         name={"qty"}
                                         value={product.qty}
                                         onChange={e => updateInput(e)}
                                         type="text" className="form-control" placeholder="Qty"/>
                                 </div>
                                 <div className="mb-3">
                                     <input
                                         required={true}
                                         name={"info"}
                                         value={product.info}
                                         onChange={e => updateInput(e)}
                                         type="text" className="form-control" placeholder="Info"/>
                                 </div>
                                 <div className="">
                                     <input type="submit" className="btn btn-success btn-sm" value="Update"/>
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
