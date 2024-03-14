import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';

const RegisterToken = () => {
  const [isButtonPressed, setButtonPressed] = useState(false);
  const [confirmationStatus, setConfirmationStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isconfirm, setIsconfirm] =useState(false)
  // const [email,setEmail]=useState('')
  const navigate = useNavigate();
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });
  useEffect(() => {
    const confirmUser = async () => {
     

      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      const tokenId = params.get('tokenId');

      if (!token || !tokenId || !isButtonPressed) {
        return; // Không chạy nếu không có token hoặc tokenId hoặc nút chưa được nhấn
      }

      try {
        setIsLoading(true);
        await app.emailPasswordAuth.confirmUser({ token, tokenId });
        console.log('User confirmed successfully!');
        setConfirmationStatus('User confirmed successfully!');
        setIsconfirm(true)
        // Chuyển hướng về trang đăng nhập khi người dùng đã được xác nhận và nút đã được nhấn
        navigate('/inan-rjsf');
      } catch (error) {
        console.error('User confirmation failed:', error);
        setConfirmationStatus('User confirmation failed');
      } finally {
        setIsLoading(false);
      }
    };

    confirmUser();
  }, [isButtonPressed, navigate]);

  const handleButtonClick = () => {
    // Đặt trạng thái nút thành true khi nút được nhấn
    setButtonPressed(true);
  };
  
//   const handleButtonClick2 = async () => {
//     // Đặt trạng thái nút thành true khi nút được nhấn
//     await app.emailPasswordAuth.sendResetPasswordEmail({ email });
//   };
//  // const handleGoogleAuth = async () => {
  //   try {
  //     const redirectUrl = "http://localhost:3000/inan-rjsf/api/auth/callback/google";
  //     const credentials = Realm.Credentials.google({ redirectUrl });
  //     const user = await app.logIn(credentials);

  //     if (user.customData?.type === "normal") {
  //       navigate('/inan-rjsf/products');
  //     } else if (user.customData?.type === "Admin") {
  //       navigate('/inan-rjsf/admin/addproduct')
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
   <>
    {isconfirm?(
   <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm mx-auto">
   <p className="text-lg text-green-600 font-bold mb-4">Tài khoản đã được xác thực thành công</p>
   <p className="text-sm text-gray-600 mb-4">Bạn có muốn trở về trang chủ?</p>
   <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 font-bold">Ấn vào đây</a>
 </div>
    ):(
      <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <p className="mb-4">{confirmationStatus}</p>
        <button
          className={`bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleButtonClick}
          disabled={isLoading}
        >
          {isLoading ? 'Đang xác thực vui lòng chờ trong giây lát...' : 'Ấn vào đây để xác thực đăng ký'}
        </button>
      </div>
      {/* <div className="mb-4">
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
        <button
          className={`bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleButtonClick2}
          disabled={isLoading}
        >
          {isLoading ? 'Đang xác thực vui lòng chờ trong giây lát...' : 'Ấn vào đây để xác thực lại'}
        </button> */}
    </div>
    )}
 </>
  );
};

export default RegisterToken;
