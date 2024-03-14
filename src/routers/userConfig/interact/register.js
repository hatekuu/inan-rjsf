import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Realm from "realm-web";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });
  const registerUser = async () => {
    if (isLoading) {
      return; // Tránh nhấn nút nhiều lần trong khi đang xử lý
    }

    setIsLoading(true);



    // Kiểm tra xem mật khẩu và mật khẩu xác nhận có khớp nhau không
    if (password !== confirmPassword) {
      setRegistrationStatus("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      await app.emailPasswordAuth.registerUser({ email, password });
      setRegistrationStatus("Registration successful!");
      setIsRegister(true)
    } catch (error) {
      const errorMessage = error.error;
      const uppercasedErrorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
    alert(uppercasedErrorMessage);
      setRegistrationStatus("Registration failed!");
    } finally {
      setIsLoading(false);
    }
  };
const resendConfirm = async()=>{
  await app.emailPasswordAuth.resendConfirmationEmail({ email });
}
  return (
    <>
    {isRegister?(
   <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm mx-auto">
   <p className="text-lg text-gray-800 mb-4">Vui lòng kiểm tra email của bạn để thực hiện xác thực đăng ký</p>
   <p className="text-sm text-gray-600 mb-4">Nếu bạn không nhận được email hoặc gặp sự cố, bạn có thể gửi lại:</p>
   <button 
     onClick={resendConfirm} 
     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
   >
     Gửi lại email xác thực
   </button>
 </div>):
    
    ( <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-96 border border-gray-300">
      <h2 className="text-2xl font-bold mb-4 text-center">Đăng Ký</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Mật khẩu:
        </label>
        <input
          className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
          Xác nhận mật khẩu:
        </label>
        <input
          className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button
        className={`w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={registerUser}
        disabled={isLoading}
      >
        {isLoading ? 'Đang đăng ký...' : 'Đăng ký'}
      </button>

      {registrationStatus && (
        <p className={`mt-4 ${registrationStatus === "Registration successful!" ? "text-green-500" : "text-red-500"}`}>
          {registrationStatus}
        </p>
      )}

      <p className="mt-4 text-center">
        Đã có tài khoản? <Link to="/inan-rjsf/login" className="text-indigo-500">Quay lại đăng nhập</Link>
      </p>
    </div>
  </div>)}
   
    </>
  );
};

export default Register;
