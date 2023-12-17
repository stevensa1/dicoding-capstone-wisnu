import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DestinationSlick from "../../../components/Application/DestinationSlick";
import axios from "axios";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function DestinationView() {
    const { destinationId } = useParams();
    const [destinationData, setDestinationData] = useState({});
    const [partnerData, setPartnerData] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);
    const [activeTab, setActiveTab] = useState("description");
    useEffect(() => {
        window.scrollTo(0, 0);
        axios
            .get(
                `${process.env.REACT_APP_BACKEND_HOST}/api/destination/${destinationId}`,
            )
            .then((response) => {
                setDestinationData(response.data.destination);
                axios
                    .get(
                        `${process.env.REACT_APP_BACKEND_HOST}/api/partner/${response.data.destination.destinationManagerPartnerId}`,
                    )
                    .then((r) => {
                        setPartnerData(r.data);
                        setDataLoaded(true);
                    })
                    .catch((e) => {
                        console.log(e);
                        alert("Terjadi kesalahan atau mitra tidak ditemukan");
                    });
            })
            .catch((error) => {
                alert(
                    "Terjadi kesalahan atau destinasi tidak ditemukan",
                    error.message,
                );
                window.location.href = "/home";
            });
    }, [destinationId]);
    const handleTabClick = (tabName) => setActiveTab(tabName);
    return (
        <>
            <div className="flex h-full flex-col gap-8 overflow-hidden bg-gray-100 px-6 py-2 pt-24">
                <p className="rounded-md border border-green-400 bg-green-200 p-4">
                    WisNu sedang membuka pendaftaran untuk Mitra atau
                    penyelenggara destinasi wisata, silahkan untuk melakukan
                    pendaftaran untuk proses registrasi yang cepat.
                </p>
                <div className="flex flex-col gap-4">
                    <DestinationSlick
                        destinationData={
                            dataLoaded
                                ? destinationData.destinationPictures
                                : []
                        }
                    />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">
                            {dataLoaded ? (
                                destinationData.destinationName
                            ) : (
                                <Skeleton />
                            )}
                        </h1>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1 text-xs font-bold text-yellow-500">
                                <p>&#9733; 9.2 Sangat menarik</p>
                                <p className="font-normal text-gray-600">
                                    (dari 1000 ulasan)
                                </p>
                            </div>
                            <h1 className="w-fit bg-red-orange-200 px-2 py-1 text-xs text-gray-700">
                                {dataLoaded ? (
                                    destinationData.destinationCategory
                                ) : (
                                    <Skeleton />
                                )}
                            </h1>
                        </div>

                        <hr className="my-2" />

                        <div className="flex flex-col gap-1">
                            <h1 className="text-lg font-bold">
                                {dataLoaded ? (
                                    destinationData.destinationAddress
                                ) : (
                                    <Skeleton />
                                )}
                            </h1>
                            <p className="text-xs text-gray-600">
                                {destinationId}
                            </p>
                        </div>
                        <div className="flex w-full flex-col items-center gap-1">
                            <nav className="flex w-full gap-2">
                                <button
                                    onClick={() =>
                                        handleTabClick("description")
                                    }
                                    className={`inline-flex w-full items-center justify-center rounded-lg border border-gray-400 px-2 py-1 font-semibold
                                        ${
                                            activeTab === "description"
                                                ? "bg-gray-200 text-gray-800"
                                                : ""
                                        }
                                    `}
                                >
                                    Deskripsi
                                </button>
                                <button
                                    onClick={() => handleTabClick("history")}
                                    className={`inline-flex w-full items-center justify-center rounded-lg border border-gray-400 px-2 py-1 font-semibold
                                        ${
                                            activeTab === "history"
                                                ? "bg-gray-200 text-gray-800"
                                                : ""
                                        }
                                    `}
                                >
                                    Sejarah
                                </button>
                                <button
                                    onClick={() => handleTabClick("facility")}
                                    className={`inline-flex w-full items-center justify-center rounded-lg border border-gray-400 px-2 py-1 font-semibold
                                        ${
                                            activeTab === "facility"
                                                ? "bg-gray-200 text-gray-800"
                                                : ""
                                        }
                                    `}
                                >
                                    Fasilitas
                                </button>
                            </nav>
                            <div className="flex w-full items-start py-4">
                                {activeTab === "description" && (
                                    <>
                                        {dataLoaded ? (
                                            destinationData.destinationDescription
                                        ) : (
                                            <Skeleton count={5} />
                                        )}
                                    </>
                                )}
                                {activeTab === "history" && (
                                    <>
                                        {dataLoaded ? (
                                            destinationData.destinationHistory
                                        ) : (
                                            <Skeleton count={5} />
                                        )}
                                    </>
                                )}
                                {activeTab === "facility" && (
                                    <>
                                        {dataLoaded ? (
                                            <div className="flex flex-col gap-2">
                                                {destinationData.destinationFacility.map(
                                                    (facility, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex w-full items-center gap-2"
                                                        >
                                                            <div className="flex flex-col">
                                                                <p className="font-bold">
                                                                    {
                                                                        facility.facilityName
                                                                    }
                                                                </p>
                                                                <p className="text-sm text-gray-600">
                                                                    {
                                                                        facility.facilityDescription
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        ) : (
                                            <Skeleton count={5} />
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div className="flex w-full flex-col gap-1">
                            <h1 className="text-lg font-bold">
                                Jam Buka dan Tutup
                            </h1>
                            <div className="flex w-full flex-col gap-1">
                                {dataLoaded ? (
                                    destinationData.destinationOpenTime.map(
                                        (day, index) => (
                                            <div key={index} className="flex">
                                                {day.isClosed ? (
                                                    <>
                                                        <p className="w-full font-bold text-red-500">
                                                            {day.openTimeDay}
                                                        </p>
                                                        <p className="w-full text-red-500">
                                                            Tutup
                                                        </p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <p className="w-full font-bold">
                                                            {day.openTimeDay}
                                                        </p>
                                                        <p className="w-full">
                                                            {day.openTimeStart}{" "}
                                                            - {day.openTimeEnd}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        ),
                                    )
                                ) : (
                                    <Skeleton count={7} />
                                )}
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div className="flex w-full flex-col gap-1">
                            <h1 className="text-lg font-bold">Beli Tiket</h1>
                            <div className="flex w-full flex-col gap-2">
                                {dataLoaded ? (
                                    destinationData.destinationTicket.map(
                                        (ticket, index) => (
                                            <>
                                                <div className="flex flex-col rounded-md border border-gray-300 p-3">
                                                    <p className="w-full font-bold">
                                                        {ticket.ticketName}
                                                    </p>
                                                    <p className="text-md w-full text-gray-600">
                                                        {
                                                            ticket.ticketDescription
                                                        }
                                                    </p>
                                                    <hr className="my-1" />
                                                    <div className="flex w-full justify-between">
                                                        <p className="font-bold text-red-orange-600">
                                                            {new Intl.NumberFormat(
                                                                "id-ID",
                                                                {
                                                                    style: "currency",
                                                                    currency:
                                                                        "IDR",
                                                                },
                                                            ).format(
                                                                ticket.ticketPrice,
                                                            )}
                                                        </p>
                                                        <button className="flex items-center justify-center rounded-full  bg-red-orange-600 px-2 py-1 text-white">
                                                            Beli tiket
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        ),
                                    )
                                ) : (
                                    <>
                                        <Skeleton count={7} />
                                    </>
                                )}
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div className="flex w-full flex-col gap-1">
                            <h1 className="text-lg font-bold">
                                Apa Kata Mereka
                            </h1>
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex flex-col gap-2 rounded-md border border-gray-300 p-3">
                                    <div className="flex w-full justify-between">
                                        <p className=" font-bold">
                                            Nama Pengguna
                                        </p>
                                        <div className="flex items-center gap-1 text-xs text-gray-600">
                                            <p className="font-bold text-yellow-500">
                                                &#9733; 9.0
                                            </p>
                                            <span>/</span>
                                            <p className="">10</p>
                                        </div>
                                    </div>
                                    <p className="text-md w-full text-gray-600">
                                        Cras fermentum odio eu feugiat lide par
                                        naso tierra. Justo eget nada terra videa
                                        magna derita valies darta donna mare
                                        fermentum iaculis eu non diam phasellus.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 rounded-md border border-gray-300 p-3">
                                    <div className="flex w-full justify-between">
                                        <p className=" font-bold">
                                            Nama Pengguna
                                        </p>
                                        <div className="flex items-center gap-1 text-xs text-gray-600">
                                            <p className="font-bold text-yellow-500">
                                                &#9733; 9.0
                                            </p>
                                            <span>/</span>
                                            <p className="">10</p>
                                        </div>
                                    </div>
                                    <p className="text-md w-full text-gray-600">
                                        Cras fermentum odio eu feugiat lide par
                                        naso tierra. Justo eget nada terra videa
                                        magna derita valies darta donna mare
                                        fermentum iaculis eu non diam phasellus.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 rounded-md border border-gray-300 p-3">
                                    <div className="flex w-full justify-between">
                                        <p className=" font-bold">
                                            Nama Pengguna
                                        </p>
                                        <div className="flex items-center gap-1 text-xs text-gray-600">
                                            <p className="font-bold text-yellow-500">
                                                &#9733; 9.0
                                            </p>
                                            <span>/</span>
                                            <p className="">10</p>
                                        </div>
                                    </div>
                                    <p className="text-md w-full text-gray-600">
                                        Cras fermentum odio eu feugiat lide par
                                        naso tierra. Justo eget nada terra videa
                                        magna derita valies darta donna mare
                                        fermentum iaculis eu non diam phasellus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div className="flex w-full flex-col gap-1">
                            <h1 className="text-lg font-bold">Dikelola Oleh</h1>
                            <div className="flex w-full flex-col items-center">
                                {dataLoaded ? (
                                    partnerData.partnerLogo ? (
                                        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-full">
                                            <img
                                                className="h-12 w-12 rounded-full object-cover object-center"
                                                src={`https://${process.env.REACT_APP_BUCKET_URL}${partnerData.partnerLogo}`}
                                                alt={`${partnerData.partnerName} Logo`}
                                            />
                                        </div>
                                    ) : (
                                        <Skeleton circle={true} />
                                    )
                                ) : (
                                    <Skeleton circle={true} />
                                )}
                                <h1 className="w-full text-center text-lg font-bold">
                                    {dataLoaded ? (
                                        partnerData.partnerName
                                    ) : (
                                        <Skeleton />
                                    )}
                                </h1>
                                {/* <p className="w-full text-center text-lg text-gray-600">
                                    Badan Perusahaan
                                </p> */}
                                <div className="flex w-full items-center justify-center gap-1 text-gray-600">
                                    <p className="font-bold text-yellow-500">
                                        &#9733;{" "}
                                        {dataLoaded ? (
                                            partnerData.averageRating
                                        ) : (
                                            <Skeleton />
                                        )}
                                    </p>
                                    <span>/</span>
                                    <p className="">10</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <p>
                                        {dataLoaded ? (
                                            partnerData.destinationCount
                                        ) : (
                                            <Skeleton />
                                        )}{" "}
                                        Destinasi Wisata
                                    </p>
                                    <span>|</span>
                                    <p>
                                        {dataLoaded ? (
                                            partnerData.destinationSales
                                        ) : (
                                            <Skeleton />
                                        )}{" "}
                                        Tiket Terjual
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DestinationView;
