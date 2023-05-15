import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { Authcontextprovider } from './landingcomponent/PagesMain/authfolderrr/Authcontext';
import breakpointss from "./breakponits/breakpoints";
import { extendTheme } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById('root'));
// const colortheme = colorThemes();

const theme = extendTheme({breakpoints: { ...breakpointss } });

root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Authcontextprovider>
          {" "}
          <App />
        </Authcontextprovider>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
