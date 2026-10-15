import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboarddd from './pages/Dashboarddd'

const App = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<Dashboarddd/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App