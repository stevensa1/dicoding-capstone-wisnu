import React from "react";
import { useParams } from "react-router-dom";
import ApplicationNavigationBar from "../../../components/Application/NavigationBar";
import LandingPageFooter from "../../../components/landingPage/Footer";

function ApplicationSearchQueryResult() {
    const { query } = useParams();
    return (
        <>
            <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
                <ApplicationNavigationBar />
            </div>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-gray-100 px-6 py-2 pt-20">
                Showing results for: {query}
            </div>
            <div className="flex flex-col">
                <LandingPageFooter />
            </div>
        </>
    );
}

export default ApplicationSearchQueryResult;
