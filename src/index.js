import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';


ReactDOM.render(
  <React.StrictMode>

    <ColorModeScript />
    <ChakraProvider>
      <App />
    </ChakraProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


