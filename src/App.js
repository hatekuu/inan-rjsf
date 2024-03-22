// src/App.js
import React,{lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar  from './components/Narbar';
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
const Managerhome=lazy(()=> import ('./manager/managerhome'))

function App() {
  return (
<Router>
      <Suspense fallback={<div>Loading...</div>}>
        {/* */}
        <Navbar />  
        <Routes>
          <Route path="/inan-rjsf/manager" element={<Managerhome />} />
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
// const handleGoogleLoginSuccess = async (credentialResponse) => {
//   console.log(credentialResponse);
//   const app = new Realm.App({ id: process.env.REACT_APP_KEY });
//   const code=credentialResponse?.credential
//   const credentials = Realm.Credentials.google({
//     authCode:code
//   });
//   console.log(credentials);

//   try {
//     const user = await app.logIn(credentials);
//     alert(`Logged in with id: ${user.id}`);
//     // If you need to do something with the user after logging in, you can do it here
//   } catch (error) {
//     console.error("Error logging in:", error.error);
//   }
// };
export default App;
