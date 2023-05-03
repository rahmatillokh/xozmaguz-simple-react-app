import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Single from '../singleRouter/Single'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path="/product/:id" element = {<Single/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App