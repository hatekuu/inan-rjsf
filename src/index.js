import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const googleId = process.env.REACT_APP_GOOGLEID;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
