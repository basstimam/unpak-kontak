import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';
import Header from './components/Header';
import EditContact from './components/EditContact';
import AddContact from './components/AddContact';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Header />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<ContactList />} />
          {/* <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} /> */}
        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
