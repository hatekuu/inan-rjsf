import React from 'react';
import './Modal.css'; // Style file for the modal

const Modal = ({ isOpen, onClose, message,array}) => {

  if (!isOpen) return null;
 if(array===1)return(
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <div className="close-wrapper">
        <button className="close-button" onClick={onClose}>X</button>
      </div>
      {message?.map((message,index)=>(
        <div key={index}>
            {message}
        </div>
      ))}
    </div>
  </div>)
 return(
  <div className="modal-overlay" onClick={onClose}>
  <div className="modal-content" onClick={e => e.stopPropagation()}>
    <div className="close-wrapper">
      <button className="close-button" onClick={onClose}>X</button>
    </div>

  <p>{message}</p>
          
    

  </div>
</div>
 )
}

export default Modal;
