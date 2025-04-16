import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Layouts/Header'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='all' >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
