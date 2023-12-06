// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Produtos from './pages/Produtos';
import React from 'react';
import Entrar from './pages/Entrar';
import NotaFiscal from './pages/NotaFiscal';
import Sobre from './pages/Sobre'
import { useState, useEffect } from 'react'

function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Produtos" element={<Produtos/>}/>
          <Route path="/Entrar" element={<Entrar/>}/>
          <Route path="/NotaFiscal" element={<NotaFiscal/>}/>
          <Route path="/Sobre" element={<Sobre/>}/>

          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
