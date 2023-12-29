import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/GlobalStyle';
// import Home from './pages/Home';
// import Ordes from './pages/Orders'
import Routes from './routes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Routes />
    <GlobalStyle />
  </>
);

