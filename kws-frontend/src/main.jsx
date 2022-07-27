import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./Home"
import SeminarPage from './SeminarPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/seminars/:id' element={<SeminarPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
