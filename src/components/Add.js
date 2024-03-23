import React, { useState,useEffect } from 'react';
import * as Realm from 'realm-web';
import Modal from './Modal';
const Add = () => {
  const app = new Realm.App({ id: process.env.REACT_APP_KEY });

  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
 const [message,setMessage]=useState('')
  const [isOpen,setIsOpen]=useState(false)
  const handleChange = async (e) => {

    const FunctionName = 'autoComplete';
    setSearch(e.target.value);
    if (e.target.value !== "") {
      const result = await app?.currentUser?.callFunction(FunctionName, e.target.value);
      setSuggestions(result);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleClick = async () => {
    const FunctionName = 'AddToCart';
    const args=[search,app?.currentUser?.id]
    if (search !== "") {
    try {
      
     const result=  await app?.currentUser?.callFunction(FunctionName,...args);
       setIsOpen(true)
       setMessage(result?.message)
     setShowModal(false);
     setSearch('')
    
window.location.reload(true)

    } catch (error) {
      console.log(error)
    }
    }
  };
  const handleSuggestionClick = async (name) => {

    setShowSuggestions(false)
    setSearch(name)
  };
const closeModal =()=>{
    setIsOpen(false)
}
 
  return (
    <div>
        <button
          type="button"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setShowModal(true)}
        >
          Thêm sản phẩm
        </button>
     
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 border rounded shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Search:
              </label>
              <input
                className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-indigo-500"
                type="text"
                value={search}
                onChange={handleChange}
              />
              {showSuggestions && suggestions?.length > 0 && (
                <div className="absolute bg-white border rounded shadow-lg mt-1 w-auto">
                  <ul>
                    {suggestions?.map((suggestion, index) => (
                      <li key={index} className=" px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSuggestionClick(suggestion?.productName)}>
                        {suggestion?.productName}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={ handleClick}>Thêm</button>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setShowModal(false)}>Đóng</button>
          </div>
        </div>
      )}
   <Modal isOpen={isOpen} onClose={closeModal} message={message} array={0} />
    </div>
  );
};

export default Add;
