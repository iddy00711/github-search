import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import SearchPage from './SearchPage';
  import ResultsPage from './ResultsPage'

function ViewPort() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage/>} />
        <Route path='/ResultsPage' element={<ResultsPage/>} /> 
      </Routes>
    </BrowserRouter> 
    )
}

export default ViewPort
