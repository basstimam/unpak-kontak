import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

import ContactList from './components/ContactList';
import Header from './components/Header';

import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>

      <Header />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<ContactList />} />
          {/* <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />




    </div>
  );
}

export default App;
