import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Stockpage from './pages/Stockpage'
import CorrHeatmapPage from './pages/CorrHeatmapPage'
const App = () => {
  return <>
  <Router>
    <Routes>
      <Route path="/" element={<Stockpage/>} />
      <Route path="/heatmap" element={<CorrHeatmapPage/>} />
    </Routes>
  </Router>  </>
}

export default App

