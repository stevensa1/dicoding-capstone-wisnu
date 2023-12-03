import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <div className='flex flex-col text-center justify-center align-middle items-center h-screen w-screen bg-red-orange-200 text-red-orange-950'>
                            <h1 className='text-center justify-center items-center'>
                                Under Maintenance
                            </h1>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
