import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider,ColorModeProvider} from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './components/context/ThemeProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>

  <BrowserRouter>
  <ColorModeProvider>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </ColorModeProvider>
  </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
