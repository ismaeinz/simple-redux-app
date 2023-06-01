import React from "react";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import { Container } from "react-bootstrap";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { store } from "./rtk/store";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Provider store={store}>
          <AppNavbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </Container>
  );
}

export default App;
