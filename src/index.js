import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import CardList from './components/CardList.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DeatailCard } from './components/DeatailCard';

ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<CardList />} /> 
        <Route path='/pokemon/:id' element={<DeatailCard />} />


      

    </Routes>
  </BrowserRouter>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
