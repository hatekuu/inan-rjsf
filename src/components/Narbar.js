import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Realm from 'realm-web';

const Navbar = () => {
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });
  const userId = app.currentUser?.id;
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = async () => {
    if (userId) {
      try {
        await app.allUsers[userId].logOut();
        console.log("Logout successful");
        navigate('/inan-rjsf/login');
      } catch (error) {
        console.log(error.error);
      }
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 right-4 z-50">
      <div className="relative inline-block">
        <div
          onClick={toggleDropdown}
          className={`cursor-pointer text-white p-2 rounded-full bg-indigo-500 ${
            isDropdownOpen ? 'ring ring-blue-400' : ''
          } transition-all duration-300`}
        >
          ☰
        </div>
        {isDropdownOpen && (
          <div className="absolute right-0 bottom-full rounded overflow-hidden mt-2 z-50">
            {/* Add z-50 to the dropdown container */}
            <div className="bg-white rounded shadow-md p-2 border border-gray-200" onClick={toggleDropdown}>
              {!userId ? (
                <>
                  <Link
                    to="/inan-rjsf/login"
                    className="block px-4 py-2 text-indigo-500 hover:bg-gray-100 whitespace-nowrap"
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    to="/inan-rjsf/register"
                    className="block px-4 py-2 text-indigo-500 hover:bg-gray-100 whitespace-nowrap"
                  >
                    Đăng ký
                  </Link>
                </>
              ) : (
                <div>
                   <Link
                    to="/inan-rjsf/products"
                    className="block px-4 py-2 text-indigo-500 hover:bg-gray-100 whitespace-nowrap"
                  >
                    Trang chủ
                  </Link>
                  <Link
                    to="/inan-rjsf/products/productform"
                    className="block px-4 py-2 text-indigo-500 hover:bg-gray-100 whitespace-nowrap"
                  >
                    form
                  </Link>
                  <Link
                    to="/inan-rjsf/products/Mycart"
                    className="block px-4 py-2 text-indigo-500 hover:bg-gray-100 whitespace-nowrap"
                  >
                    Giỏ hàng
                  </Link>
                  <button
                    onClick={handleButtonClick}
                    className="block px-4 py-2 text-indigo-500 hover:bg-gray-100 whitespace-nowrap"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;