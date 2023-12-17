import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingHomePage from "./pages/LandingPage";
import ApplicationHome from "./pages/Application/Home";
import NotFoundPage from "./pages/Application/NotFound";
import ApplicationSearchQueryResult from "./pages/Application/SearchResult/SearchResult";
import ApplicationLoginPage from "./pages/Application/LoginAndRegister/LoginPage";
import ApplicationRegisterPage from "./pages/Application/LoginAndRegister/RegisterPage";
import DestinationView from "./pages/Application/ViewDestination";
import ApplicationLayout from "./layout/ApplicationLayout";
import MyTicket from "./pages/Application/MyTicket";
import TransactionHistory from "./pages/Application/TransactionHistory";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingHomePage />} />
                <Route path="/login" element={<ApplicationLoginPage />} />
                <Route path="/register" element={<ApplicationRegisterPage />} />
                <Route path="/home" element={<ApplicationHome />} />
                <Route element={<ApplicationLayout />}>
                    <Route path="/my/ticket" element={<MyTicket />} />
                    <Route
                        path="/my/transactions"
                        element={<TransactionHistory />}
                    />
                    <Route
                        path="/destination/:destinationId"
                        element={<DestinationView />}
                    />
                    <Route
                        path="/search/:query"
                        element={<ApplicationSearchQueryResult />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
