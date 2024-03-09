// src/App.js
import React,{lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Navbar  from './components/Narbar';
const Home  =lazy(()=> import ('./routers/home'))
const Login  =lazy(()=> import ('./routers/userConfig/interact/login'))
const Register  =lazy(()=> import ('./routers/userConfig/interact/register'))
const ResetPassword  =lazy(()=> import ('./routers/userConfig/interact/rspassword'))
const GoogleAuth  =lazy(()=> import ('./routers/userConfig/confirm/googletoken'))
const RegisterToken  =lazy(()=> import ('./routers/userConfig/confirm/registertoken'))
const ResetPasswordToken  =lazy(()=> import ('./routers/userConfig/confirm/rstoken'))
const Products   =lazy(()=> import ( './routers/products'))
const AddProduct  =lazy(()=> import ( './admin/products'))
const  UserCart =lazy(()=> import ('./routers/cart'))
const ProductForm =lazy(()=> import ( './FormComponent'))
function App() {


  return (
 
    <Router>
  <Suspense fallback={<div>Loading...</div>}>
 {/*  <Navbar/>*/}
    <Routes>
    <Route path="/inan-rjsf/admin/addproduct" element={<AddProduct />} />
    <Route path="/inan-rjsf/products" element={<Products />} />
    <Route path="/inan-rjsf/products/productform" element={<ProductForm />} />
    <Route path="/inan-rjsf/products/Mycart" element={<UserCart />} />
   <Route path="/inan-rjsf" element={<Home />} />
   <Route path="/inan-rjsf/login" element={<Login />} />
   <Route path="/inan-rjsf/register" element={<Register />} />
   <Route path="/inan-rjsf/resetpassword" element={<ResetPassword />} />
   <Route path="/inan-rjsf/api/auth/callback/google" element={<GoogleAuth />} />
   <Route path="/inan-rjsf/rgtoken" element={<RegisterToken />} />
   <Route path="/inan-rjsf/rspwtoken" element={<ResetPasswordToken />} />
      
     </Routes>
    </Suspense>
  </Router>
);
}

export default App;
