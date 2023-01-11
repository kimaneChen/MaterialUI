import React from 'react';
import { Button } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Gallery from './pages/Gallery';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div>
      <header>Header</header>
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
