import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import App from "./App";
import { ChakraProvider } from '@chakra-ui/react';

const root = document.getElementById("root");
ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
