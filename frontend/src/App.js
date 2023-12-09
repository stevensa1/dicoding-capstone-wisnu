import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingHomePage from "./pages/LandingPage";
import ApplicationHome from "./pages/Application/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingHomePage />} />
                <Route path="/home" element={<ApplicationHome />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
