import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function ViewPort() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path='/results' element={<ResultsPage />} />
      </Routes>
    </BrowserRouter> 
    )
}

export default ViewPort
