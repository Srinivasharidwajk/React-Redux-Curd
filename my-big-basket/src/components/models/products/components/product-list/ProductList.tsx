import React from 'react'
import image1 from "../../../../../assets/products/apple.jpg"

export const ProductList = () => {
  return (
    <React.Fragment>
    {/*  <pre>{JSON.stringify(products)}</pre>*/}
      <section className="mt-3">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <p className="h3 text-success">Products List</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eos exercitationem harum id illum in, ipsa maiores minus, mollitia nisi pariatur, perspiciatis quos repellat sapiente soluta tempore voluptas. Nihil, placeat.</p>
                  </div>
              </div>
          </div>
      </section>
    
              <React.Fragment>
                  <section className="mt-3">
                      <div className="container">
                          <div className="row">
                              {/* {
                                  products.length > 0 &&
                                      products.map(product => {
                                          return ( */}
                                              <div className="col-md-3" >
                                                  <div className="card mt-3">
                                                      <div className="card-header text-center bg-white">
                                                          <img src={image1} alt="" width="150" height="150"/>
                                                      </div>
                                                      <div className="card-body">
                                                          <ul className="list-group">
                                                              <li className="list-group-item">
                                                                  NAME : Apple
                                                              </li>
                                                              <li className="list-group-item">
                                                                  Price : &#8377; 35
                                                              </li>
                                                              <li className="list-group-item">
                                                                  Qty : 100 Kgs
                                                              </li>
                                                          </ul>
                                                      </div>
                                                  </div>
                                              </div>
                                          {/* )
                                      })
                              } */}
                          </div>
                      </div>
                  </section>
              </React.Fragment>
    
  </React.Fragment>
  )
}
