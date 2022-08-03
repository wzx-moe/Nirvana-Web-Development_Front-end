import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="aboutPage" element={<AboutPage/>}/>
        <Route path="contactUsPage" element={<ContactUsPage/>}/>
        <Route path="detailPage" element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
