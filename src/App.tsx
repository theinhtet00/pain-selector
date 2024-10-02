import React from 'react';
import AbdomenSelector from './components/AbdomenSelector';
import FingerSelector from './components/FingerSelector';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/abdominal' element={<AbdomenSelector/>}/>
        <Route path='/finger' element={<FingerSelector/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
