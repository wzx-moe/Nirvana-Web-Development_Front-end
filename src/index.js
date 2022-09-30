import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import ControlPage from './pages/ControlPage';
import LoginPage from './pages/LoginPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="aboutPage" element={<AboutPage/>}/>
        <Route path="contactUsPage" element={<ContactUsPage/>}/>
        <Route path="detailPage" element={<DetailPage/>}/>
        <Route path="controlPage" element={<ControlPage/>}/>
        <Route path="loginPage" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
