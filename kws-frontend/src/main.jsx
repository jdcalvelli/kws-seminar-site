import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from "./App"
import SeminarPage from './SeminarPage'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/seminars/:id' element={<SeminarPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
