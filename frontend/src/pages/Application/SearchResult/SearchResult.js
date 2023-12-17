import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DestinationBoxSearch from "../../../components/Application/DestinationBoxSearch";
import NotFoundSVG from "./../../../components/SVGs/NotFoundSVG";

function ApplicationSearchQueryResult() {
    const { query } = useParams();
    const lowercaseQuery = query.toLowerCase();
    const [destinations, setDestinations] = useState([]);
    const [dataLoad, setDataLoad] = useState(false);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_HOST}/api/destination/`)
            .then((res) => {
                if (res.status !== 200) {
                    alert("Terjadi kesalahan saat mengambil data destinasi.");
                    return;
                }
                const matchingDestinations = res.data.destinations.filter(
                    (destination) => {
                        const lowercaseName =
                            destination.destinationName.toLowerCase();
                        return lowercaseName.includes(lowercaseQuery);
                    },
                );
                setDestinations(matchingDestinations);
                setDataLoad(true);
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return (
        <>
            <div className="flex min-h-screen flex-col gap-8 overflow-x-hidden bg-gray-100 px-6 py-2 pt-20">
                <div>
                    Menampilkan hasil pencarian: <b>{query}</b>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
                    {!dataLoad ? (
                        <Skeleton height={300} width={300} />
                    ) : (
                        destinations.map((destination, index) => (
                            <DestinationBoxSearch
                                key={index}
                                url={`/destination/${destination._id}`}
                                image={`https://${process.env.REACT_APP_BUCKET_URL}${destination.destinationPictures[0].imageAddress}`}
                                name={destination.destinationName}
                                category={destination.destinationCategory}
                                location={destination.destinationAddress}
                                description={destination.destinationDescription.slice(
                                    0,
                                    100,
                                )}
                                rating={4}
                            />
                        ))
                    )}
                    {!dataLoad ? (
                        <Skeleton height={300} width={300} />
                    ) : (
                        <>
                            {destinations.length === 0 ? (
                                <div className="flex w-full flex-col items-center justify-center gap-2">
                                    <NotFoundSVG height="100" />
                                    <div className="text-xl font-bold">
                                        Tidak ada hasil pencarian
                                    </div>
                                    <div className="text-center text-gray-500">
                                        Tidak ada hasil pencarian untuk{" "}
                                        <b>{query}</b>. Silahkan untuk mencoba
                                        kata kunci lain.
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default ApplicationSearchQueryResult;
