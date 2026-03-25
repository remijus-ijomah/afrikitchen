import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Footer, Header, Home, OrderSummary } from "./components";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<OrderSummary />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
