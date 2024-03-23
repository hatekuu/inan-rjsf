import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, message, array }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
    if (array === 1) {
      window.location.reload(true);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity"></div>
      <div className="relative w-full max-w-md p-6 mx-auto bg-white rounded shadow-lg border border-gray-300 transition-transform transform">
        <div className="absolute top-0 right-0 p-2">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={handleClose}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"></path>
            </svg>
          </button>
        </div>
        <div className="p-4">
          {Array.isArray(message) ? (
            message.map((msg, index) => (
              <div key={index} className="mb-2">
                {msg}
              </div>
            ))
          ) : (
            <p>{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
