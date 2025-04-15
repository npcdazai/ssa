import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Layouts/Header'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='all' >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
