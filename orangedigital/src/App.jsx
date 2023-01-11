import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Gallery from './pages/Gallery';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="detailpage" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
