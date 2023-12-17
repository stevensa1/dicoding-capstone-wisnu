import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function DestinationBox({
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
                <LazyLoadImage
                    src={image}
                    height={160}
                    width="100%"
                    alt={`Destination ${name}`}
                    effect="blur"
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
                        <span>&#9733;</span> {rating.toFixed(2) || <Skeleton />}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default DestinationBox;
