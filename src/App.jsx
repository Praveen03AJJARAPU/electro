import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import {Nav, Home, Product } from './components/index'
import { StateContext } from "../context/StateContext";


function App() {
  
  return (
    <div className="app">
        <StateContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/product/:id`} element={<Product />} />
        </Routes>
    </StateContext>
      </div>
  );
}

export default App
