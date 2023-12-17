import React from "react";
import { Outlet } from "react-router-dom";
import ApplicationNavigationBar from "../components/Application/NavigationBar";
import LandingPageFooter from "../components/landingPage/Footer";

function ApplicationLayout() {
    return (
        <>
            <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
                <ApplicationNavigationBar />
            </div>
            <Outlet />
            <div className="flex flex-col">
                <LandingPageFooter />
            </div>
        </>
    );
}

export default ApplicationLayout;
