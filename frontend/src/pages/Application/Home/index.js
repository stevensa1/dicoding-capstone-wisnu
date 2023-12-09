import React from "react";
import ApplicationNavigationBar from "../../../components/Application/NavigationBar";
import LandingPageFooter from "../../../components/landingPage/Footer";

function ApplicationHome() {
    return (
        <>
            <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
                <ApplicationNavigationBar />
            </div>
            <div className="flex flex-col bg-gray-100 px-6 py-2 pt-20">
                Hello World, no content yet.
            </div>
            <div className="flex flex-col">
                <LandingPageFooter />
            </div>
        </>
    );
}

export default ApplicationHome;
