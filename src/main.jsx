import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CharactersProvider } from "./assets/context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CharactersProvider>
        <App />
      </CharactersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
