import React from "react";

function LandingPageFooter() {
    return (
        <>
            <div className="flex flex-col gap-8 px-8 pb-8 pt-16">
                <div className="text-md flex flex-col gap-8 text-gray-600 md:flex-row">
                    <div className="flex flex-col gap-4 md:w-1/4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold text-black">
                                WisataNusantara
                            </h1>
                            <p>
                                Cras fermentum odio eu feugiat lide par naso
                                tierra. Justo eget nada terra videa magna derita
                                valies darta donna mare fermentum iaculis eu non
                                diam phasellus.
                            </p>
                        </div>
                        <div className="flex gap-2 md:gap-4">
                            <button className="h-12 w-12 rounded-full bg-gray-500 transition duration-300 hover:bg-red-orange-600"></button>
                            <button className="h-12 w-12 rounded-full bg-gray-500 transition duration-300 hover:bg-red-orange-600"></button>
                            <button className="h-12 w-12 rounded-full bg-gray-500 transition duration-300 hover:bg-red-orange-600"></button>
                            <button className="h-12 w-12 rounded-full bg-gray-500 transition duration-300 hover:bg-red-orange-600"></button>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="flex w-36 flex-col gap-2">
                            <h2 className="font-xl font-bold text-black">
                                Link Cepat
                            </h2>
                            <div className="flex flex-col gap-1">
                                <p className="cursor-pointer transition duration-150 hover:text-red-orange-800">
                                    Beranda
                                </p>
                                <p className="cursor-pointer transition duration-150 hover:text-red-orange-800">
                                    Tentang kami
                                </p>
                                <p className="cursor-pointer transition duration-150 hover:text-red-orange-800">
                                    Mitra kami
                                </p>
                                <p className="cursor-pointer transition duration-150 hover:text-red-orange-800">
                                    Tim kami
                                </p>
                                <p className="cursor-pointer transition duration-150 hover:text-red-orange-800">
                                    Kontak kami
                                </p>
                            </div>
                        </div>
                        <div className="flex w-36 flex-col gap-2">
                            <h2 className="font-xl font-bold text-black">
                                Layanan Kami
                            </h2>
                            <div className="flex flex-col gap-1">
                                <p className="cursor-pointer transition duration-150 hover:text-red-orange-800">
                                    Jelajah Nusantara
                                </p>
                                <p className="cursor-pointer transition duration-150 hover:text-red-orange-800">
                                    Beli tiket
                                </p>
                                <p className="cursor-pointer transition duration-150 hover:text-red-orange-800">
                                    Komunitas WisNu
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <h2 className="font-xl font-bold text-black">
                            Kontak Kami
                        </h2>
                        <p>Kertajaya Indah No. 2A/32</p>
                        <p>Surabaya, Jawa Timur 60115</p>
                        <div className="flex flex-col items-center gap-1 md:items-start">
                            <p>
                                <b>Nomor HP:</b> +62 877-0303-2800
                            </p>
                            <p>
                                <b>Email:</b> steven.soewignyo@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 px-8 py-8 text-center">
                    © Copyright <b>WisNu</b>, All Rights Reserved, designed by
                    team capstone CODE-TEAM
                </div>
            </div>
        </>
    );
}

export default LandingPageFooter;
