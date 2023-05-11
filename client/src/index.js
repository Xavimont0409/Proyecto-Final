import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Redux/store';
import App from './App';

import { Provider } from 'react-redux';
import { BrowserRouter, redirect } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

import './index.css';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
  
);
