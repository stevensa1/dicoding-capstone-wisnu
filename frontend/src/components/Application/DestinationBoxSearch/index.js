import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

function DestinationBoxSearch({
    url = "/",
    image,
    name,
    category,
    location,
    description,
    rating,
}) {
    return (
        <Link
            to={url}
            className="w-full overflow-hidden rounded border border-gray-300 bg-white transition duration-300 ease-in-out hover:shadow-lg md:w-72"
        >
            {(
                <img
                    src={image}
                    alt={`Destination ${name}`}
                    className="h-40 w-full object-cover"
                />
            ) || <Skeleton height={160} />}
            <div className="p-4">
                <div className="mb-2 text-lg font-semibold">
                    {name || <Skeleton />}
                </div>
                <div className="mb-2 text-sm font-semibold">
                    {location || <Skeleton />}
                </div>
                <div className="mb-4 text-sm text-gray-700">
                    {(
                        <>
                            {description}...{" "}
                            <Link className="text-red-orange-600" to={url}>
                                Baca lebih lanjut
                            </Link>
                        </>
                    ) || <Skeleton count={2} />}
                </div>
                <div className="w-fit bg-red-orange-200 px-2 py-1 text-xs text-gray-700">
                    {category || <Skeleton />}
                </div>
                <div className="flex items-center">
                    <div className="text-yellow-500">
                        {Array.from({ length: rating }, (_, index) => (
                            <span key={index}>&#9733;</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default DestinationBoxSearch;