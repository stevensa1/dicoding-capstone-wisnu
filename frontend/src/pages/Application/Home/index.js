import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    faCompass,
    faTicket,
    faTags,
    faClipboardList,
    faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import DestinationBox from "../../../components/Application/DestinationBox";
import NewsSlick from "../../../components/Application/NewsSlick";
import AnnouncmentCenter from "../../../components/Application/AnnouncmentCenter";
import ApplicationNavigationBar from "../../../components/Application/NavigationBar";
import LandingPageFooter from "../../../components/landingPage/Footer";
import { Link } from "react-router-dom";

function ApplicationHome() {
    useEffect(() => {
        document.title = "WisNu - Beranda";
    }, []);
    // eslint-disable-next-line no-unused-vars
    const [destinations, setDestinations] = useState([]);
    const [popularDestinations, setPopularDestinations] = useState([]);
    const [topSalesDestination, setTopSalesDestination] = useState([]);
    const [newDestinations, setNewDestinations] = useState([]);
    const [dataLoad, setDataLoad] = useState(false);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_HOST}/api/destination/`)
            .then((res) => {
                if (res.status !== 200) {
                    alert("Terjadi kesalahan saat mengambil data destinasi.");
                    return;
                }
                setDestinations(res.data.destinations);

                const sortedDestinations = res.data.destinations
                    .sort((a, b) => b.destinationViews - a.destinationViews) // Sort by destinationViews, highest to lowest
                    .slice(0, 5); // Limit to the first 4 objects

                const topSalesDestinations = res.data.destinations
                    .sort((a, b) => b.destinationSales - a.destinationSales)
                    .slice(0, 5);
                setTopSalesDestination(topSalesDestinations);
                setPopularDestinations(sortedDestinations);
                setNewDestinations(res.data.destinations.reverse().slice(0, 5));

                setDataLoad(true);
            });
    }, []);

    return (
        <>
            <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
                <ApplicationNavigationBar home={true} />
            </div>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-gray-100 px-6 py-2 pt-20">
                <AnnouncmentCenter />
                <NewsSlick />
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Layanan WisNu</h1>
                    <div className="flex flex-wrap gap-1">
                        <Link
                            to="/eksplorasi"
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="flex h-12 w-12 items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faCompass}
                                    size="2xl"
                                    style={{ color: "#731c1c" }}
                                />
                            </div>
                            <div className="w-24 text-center text-sm">
                                Destinasi Wisata
                            </div>
                        </Link>
                        <Link
                            to="/my/ticket"
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="flex h-12 w-12 items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faTicket}
                                    size="2xl"
                                    style={{ color: "#731c1c" }}
                                />
                            </div>
                            <div className="w-24 text-center text-sm">
                                Tiket Saya
                            </div>
                        </Link>
                        <button
                            onClick={() => {
                                toast.info("Fitur ini belum tersedia.");
                            }}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="flex h-12 w-12 items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faTags}
                                    size="2xl"
                                    style={{ color: "#731c1c" }}
                                />
                            </div>
                            <div className="w-24 text-center text-sm">
                                Voucher dan Promo
                            </div>
                        </button>
                        <Link
                            to="/my/transactions"
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="flex h-12 w-12 items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faClipboardList}
                                    size="2xl"
                                    style={{ color: "#731c1c" }}
                                />
                            </div>
                            <div className="w-24 text-center text-sm">
                                Riwayat Pembelian
                            </div>
                        </Link>
                        <button
                            onClick={() => {
                                toast.info("Fitur ini belum tersedia.");
                            }}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="flex h-12 w-12 items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faHeadset}
                                    size="2xl"
                                    style={{ color: "#731c1c" }}
                                />
                            </div>
                            <div className="w-24 text-center text-sm">
                                Customer Service
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Destinasi Populer</h1>
                    <div className="flex flex-col gap-4 md:flex-row">
                        {!dataLoad
                            ? ""
                            : popularDestinations.map((destination, index) => (
                                  <DestinationBox
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
                              ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Destinasi Terlaris</h1>
                    <div className="flex flex-col gap-4 md:flex-row">
                        {!dataLoad
                            ? ""
                            : topSalesDestination.map((destination, index) => (
                                  <DestinationBox
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
                              ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Destinasi Baru</h1>
                    <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
                        {!dataLoad
                            ? ""
                            : newDestinations.map((destination, index) => (
                                  <DestinationBox
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
                              ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <LandingPageFooter />
            </div>
        </>
    );
}

export default ApplicationHome;
