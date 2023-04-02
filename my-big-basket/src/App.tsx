import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Home } from './components/models/layout/home/Home';
import { Navbar } from './components/models/layout/navbar/Navbar';
import NotFound404 from './components/models/layout/notfound404/NotFound404';
import { CreateProduct } from './components/models/products/components/create-product/CreateProduct';
import { ProductAdmin } from './components/models/products/components/product-admin/ProductAdmin';
import { ProductList } from './components/models/products/components/product-list/ProductList';
import { UpdateProduct } from './components/models/products/components/update-product/UpdateProduct';
import { ViewProduct } from './components/models/products/components/view-product/ViewProduct';

function App() {
  return (
    <div className="App">
     <React.Fragment>
  
     <BrowserRouter>
    
     <Navbar/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/product/admin'} element={<ProductAdmin/>}/>
                    <Route path={'/product/add'} element={<CreateProduct/>}/>
                    <Route path={'/product/list'} element={<ProductList/>}/>
                    <Route path={'/product/edit/:productId'} element={<UpdateProduct/>}/>
                    <Route path={'/product/view/:productId'} element={<ViewProduct/>}/>
                    <Route path={'*'} element={<NotFound404/>}/>
                </Routes>
            </BrowserRouter>
   
     </React.Fragment>
    </div>
  );
}

export default App;
