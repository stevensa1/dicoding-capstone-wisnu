import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DestinationBoxSearch from "../../../components/Application/DestinationBoxSearch";

function EksplorasiDestinasi() {
    const [destinations, setDestinations] = useState([]);
    const [dataLoad, setDataLoad] = useState(false);
    useEffect(() => {
        document.title = "WisNu - Eksplorasi Destinasi";
        window.scrollTo(0, 0);
        axios
            .get(`${process.env.REACT_APP_BACKEND_HOST}/api/destination/`)
            .then((res) => {
                if (res.status !== 200) {
                    toast.error(
                        "Terjadi kesalahan saat mengambil data destinasi.",
                    );
                    return;
                }
                setDestinations(res.data.destinations);
                setDataLoad(true);
            })
            .catch((err) => {
                toast.error("Terjadi kesalahan saat mengambil data destinasi.");
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <ToastContainer />
            <div className="flex flex-col gap-8 overflow-x-hidden bg-gray-100 px-6 py-2 pt-20">
                <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
                    {!dataLoad ? (
                        <Skeleton height={200} width={200} />
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
                        <Skeleton height={200} width={200} />
                    ) : (
                        <>
                            {destinations.length === 0 ? (
                                <div className="flex flex-col items-center justify-center gap-4">
                                    <div className="text-2xl font-bold">
                                        Destinasi wisata belum tersedia. Jadilah
                                        mitra kami!
                                    </div>
                                    <div className="text-center text-lg">
                                        Tidak terdapat destinasi wisata yang
                                        tersedia saat ini. Silakan hubungi kami
                                        untuk menjadi mitra kami.
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

export default EksplorasiDestinasi;
