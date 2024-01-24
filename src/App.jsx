import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <Router>
      <div className="flex w-full h-screen">
        <NavBar />
        <div className="flex-1 flex flex-col px-3 py-2 pb-0 overflow-y-scroll">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/cart" exact element={<CartPage />} />
            <Route path="/order" exact element={<OrderPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
