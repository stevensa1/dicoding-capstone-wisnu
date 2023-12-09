import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingHomePage from './pages/LandingPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingHomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
