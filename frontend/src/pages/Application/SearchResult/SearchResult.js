import React from "react";
import { useParams } from "react-router-dom";

function ApplicationSearchQueryResult() {
    const { query } = useParams();
    return (
        <>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-gray-100 px-6 py-2 pt-20">
                Showing results for: {query}
            </div>
        </>
    );
}

export default ApplicationSearchQueryResult;
