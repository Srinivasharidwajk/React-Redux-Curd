import React,{ useEffect}  from 'react'
import { useParams } from 'react-router-dom';
import * as productAction from "../../../../../redux/products/products.actions";
import * as productReducer from  "../../../../../redux/products/products.reducer";

import { AppDispatch, RootState, useAppDispatch } from '../../../../../redux/store';
import { useSelector } from 'react-redux';

export const ViewProduct = () => {
  const {productId} = useParams();
  const dispatch:AppDispatch = useAppDispatch();

  // get data from Redux Store
  const productState:productReducer.InitialState=useSelector((state:RootState)=>{
      return state[productReducer.productFeatureKey]
  })

  const [isZoomed, setIsZoomed] = React.useState(false);
  const {loading,product,errorMessage}=productState
  useEffect(() => {
    if(productId){
      getProduct();
    }
}, [productId])

const getProduct=():void=>{
    dispatch(productAction.getProductAction({productId:productId}));
}



  return (
    <React.Fragment>
   
      <pre>{productId}</pre>
   

      <div>
        <div className="container">
        <div className="row mt-3 align-items-center">



              <div className="col-sm-3 zoomable-image-container"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}>
                  <img alt=""
                       className="img-fluid rounded-circle shadow-lg"
                       src={product.image}/>
      
              </div>
              <div className="col-sm-8 offset-1">
                  <ul className="list-group">
                      <li className="list-group-item">
                          Name : <span className="fw-bold">{product.name}</span>
                      </li>
                      <li className="list-group-item">
                          Price : <span className="fw-bold">&#8377; {product.price}</span>
                      </li>
                      <li className="list-group-item">
                          Quantity : <span className="fw-bold">{product.qty}</span>
                      </li>
                      <li className="list-group-item">
                          Information : <span className="fw-bold">{product.info}</span>
                      </li>
                     
                  </ul>
              </div>
          </div>
        </div>


      {/* <form >
                                 <div className="mb-3">
                                     <input
                                         required
                                         name="name"
                                         value={product.name}
                                       onChange={e => updateInput(e)}
                                         type="text" className="form-control" placeholder="Name"/>
                                 </div>
                                 <div className="mb-3">
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
                                 </div>
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
                             </form> */}

      </div>
      
      {
          <div className="container d-flex  justify-content-center text-center">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                      
                        <div className="card-body">
                        {isZoomed && (
        <div className="zoomable-image-popup">
          <img src={product.image} alt="" className="zoomed-image " height={400} width={600}/>
        </div>
      )}
                        </div>
                    </div>

                </div>
            </div>

        </div>
}
      </React.Fragment>
  )
}
