import React, { useState } from "react";
import ApplicationNavigationBar from "../../../components/Application/NavigationBar";
import LandingPageFooter from "../../../components/landingPage/Footer";
import { useParams } from "react-router-dom";
import DestinationSlick from "../../../components/Application/DestinationSlick";

function DestinationView() {
    const { destinationId } = useParams();
    const [activeTab, setActiveTab] = useState("description");

    const handleTabClick = (tabName) => setActiveTab(tabName);
    return (
        <>
            <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
                <ApplicationNavigationBar />
            </div>
            <div className="flex h-full flex-col gap-8 overflow-hidden bg-gray-100 px-6 py-2 pt-24">
                <p className="rounded-md border border-green-400 bg-green-200 p-4">
                    WisNu sedang membuka pendaftaran untuk Mitra atau
                    penyelenggara destinasi wisata, silahkan untuk melakukan
                    pendaftaran untuk proses registrasi yang cepat.
                </p>
                <div className="flex flex-col gap-4">
                    <DestinationSlick
                        destinationData={[
                            { id: 1, image: "/images/landing-bg.jpg" },
                            { id: 2, image: "/images/landing-bg.jpg" },
                            { id: 3, image: "/images/landing-bg.jpg" },
                            { id: 4, image: "/images/landing-bg.jpg" },
                            { id: 5, image: "/images/landing-bg.jpg" },
                        ]}
                    />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">Destination Name</h1>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1 text-xs font-bold text-yellow-500">
                                <p>&#9733; 9.2 Sangat menarik</p>
                                <p className="font-normal text-gray-600">
                                    (dari 1000 ulasan)
                                </p>
                            </div>
                            <h1 className="w-fit bg-red-orange-200 px-2 py-1 text-xs text-gray-700">
                                Destination Category
                            </h1>
                        </div>

                        <hr className="my-2" />

                        <div className="flex flex-col gap-1">
                            <h1 className="text-lg font-bold">
                                Destination Location
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
                                        Cras fermentum odio eu feugiat lide par
                                        naso tierra. Justo eget nada terra videa
                                        magna derita valies darta donna mare
                                        fermentum iaculis eu non diam phasellus.
                                    </>
                                )}
                                {activeTab === "history" && (
                                    <>
                                        Justo eget nada terra videa magna derita
                                        valies darta donna mare fermentum
                                        iaculis eu non diam phasellus. Cras
                                        fermentum odio eu feugiat lide par naso
                                        tierra.
                                    </>
                                )}
                                {activeTab === "facility" && <>Facility</>}
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div className="flex w-full flex-col gap-1">
                            <h1 className="text-lg font-bold">
                                Jam Buka dan Tutup
                            </h1>
                            <div className="flex w-full flex-col gap-1">
                                <div className="flex">
                                    <p className="w-full font-bold">Minggu</p>
                                    <p className="w-full">07.00 - 17.30</p>
                                </div>
                                <div className="flex">
                                    <p className="w-full font-bold">Senin</p>
                                    <p className="w-full">07.00 - 17.30</p>
                                </div>
                                <div className="flex">
                                    <p className="w-full font-bold">Selasa</p>
                                    <p className="w-full">07.00 - 17.30</p>
                                </div>
                                <div className="flex">
                                    <p className="w-full font-bold">Rabu</p>
                                    <p className="w-full">07.00 - 17.30</p>
                                </div>
                                <div className="flex">
                                    <p className="w-full font-bold">Kamis</p>
                                    <p className="w-full">07.00 - 17.30</p>
                                </div>
                                <div className="flex">
                                    <p className="w-full font-bold">Jum'at</p>
                                    <p className="w-full">07.00 - 17.30</p>
                                </div>
                                <div className="flex">
                                    <p className="w-full font-bold">Sabtu</p>
                                    <p className="w-full">07.00 - 17.30</p>
                                </div>
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div className="flex w-full flex-col gap-1">
                            <h1 className="text-lg font-bold">Beli Tiket</h1>
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex flex-col rounded-md border border-gray-300 p-3">
                                    <p className="w-full font-bold">
                                        Tiket Reguler
                                    </p>
                                    <p className="text-md w-full text-gray-600">
                                        Akses reguler dan terbatas untuk 2
                                        wahana
                                    </p>
                                    <hr className="my-1" />
                                    <div className="flex w-full justify-between">
                                        <p className="font-bold text-red-orange-600">
                                            Rp 150.000
                                        </p>
                                        <button className="flex items-center justify-center rounded-full  bg-red-orange-600 px-2 py-1 text-white">
                                            Beli tiket
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col rounded-md border border-gray-300 p-3">
                                    <p className="w-full font-bold">
                                        Tiket Terusan
                                    </p>
                                    <p className="text-md w-full text-gray-600">
                                        Akses reguler untuk seluruh wahana tanpa
                                        batas
                                    </p>
                                    <hr className="my-1" />
                                    <div className="flex w-full justify-between">
                                        <p className="font-bold text-red-orange-600">
                                            Rp 300.000
                                        </p>
                                        <button className="flex items-center justify-center rounded-full  bg-red-orange-600 px-2 py-1 text-white">
                                            Beli tiket
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col rounded-md border border-gray-300 p-3">
                                    <p className="w-full font-bold">
                                        Tiket Terusan + Fast Track
                                    </p>
                                    <p className="text-md w-full text-gray-600">
                                        Akses reguler untuk seluruh wahana tanpa
                                        batas dan tanpa antrian
                                    </p>
                                    <hr className="my-1" />
                                    <div className="flex w-full justify-between">
                                        <p className="font-bold text-red-orange-600">
                                            Rp 500.000
                                        </p>
                                        <button className="flex items-center justify-center rounded-full  bg-red-orange-600 px-2 py-1 text-white">
                                            Beli tiket
                                        </button>
                                    </div>
                                </div>
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
                                <div className="h-16 w-16 rounded-full bg-black"></div>
                                <h1 className="w-full text-center text-lg font-bold">
                                    Nama Mitra
                                </h1>
                                <p className="w-full text-center text-lg text-gray-600">
                                    Badan Perusahaan
                                </p>
                                <div className="flex w-full items-center justify-center gap-1 text-gray-600">
                                    <p className="font-bold text-yellow-500">
                                        &#9733; 9.0
                                    </p>
                                    <span>/</span>
                                    <p className="">10</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <p>X Destinasi Wisata</p>
                                    <span>|</span>
                                    <p>X Tiket Terjual</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <LandingPageFooter />
            </div>
        </>
    );
}

export default DestinationView;
