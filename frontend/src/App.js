import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingHomePage from "./pages/LandingPage";
import ApplicationHome from "./pages/Application/Home";
import NotFoundPage from "./pages/Application/NotFound";
import ApplicationSearchQueryResult from "./pages/Application/SearchResult/SearchResult";
import ApplicationLoginPage from "./pages/Application/LoginAndRegister/LoginPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingHomePage />} />
                <Route path="/login" element={<ApplicationLoginPage />} />
                <Route path="/home" element={<ApplicationHome />} />
                <Route
                    path="/search/:query"
                    element={<ApplicationSearchQueryResult />}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
