import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faLinkedin,
    faTiktok,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function LandingPageFooter() {
    return (
        <>
            <div className="flex flex-col gap-8 px-8 pb-8 pt-16">
                <div className="text-md flex flex-col gap-8 text-gray-600 md:flex-row">
                    <div className="flex flex-col gap-4 md:w-1/4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-bold text-black">
                                WisNu
                            </h1>
                            <p className="text-justify">
                                WisataNusantara atau WisNu adalah platform
                                perjalanan yang menyediakan informasi dan
                                pengalaman seru tentang destinasi wisata di
                                seluruh Indonesia. Temukan keindahan alam,
                                warisan budaya, dan petualangan menarik di
                                setiap sudut nusantara. Jadikan setiap
                                perjalanan Anda tak terlupakan dengan panduan
                                lengkap dari WisataNusantara.
                            </p>
                        </div>
                        <div className="flex gap-2 md:gap-4">
                            <button className="h-12 w-12 rounded-full border border-gray-500 transition duration-300 hover:bg-red-orange-200">
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    size="2xl"
                                    className="text-gray-500 transition duration-300 hover:text-red-orange-800"
                                />
                            </button>
                            <button className="h-12 w-12 rounded-full border border-gray-500 transition duration-300 hover:bg-red-orange-200">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    size="2xl"
                                    className="text-gray-500 transition duration-300 hover:text-red-orange-800"
                                />
                            </button>
                            <button className="h-12 w-12 rounded-full border border-gray-500 transition duration-300 hover:bg-red-orange-200">
                                <FontAwesomeIcon
                                    icon={faXTwitter}
                                    size="2xl"
                                    className="text-gray-500 transition duration-300 hover:text-red-orange-800"
                                />
                            </button>
                            <button className="h-12 w-12 rounded-full border border-gray-500 transition duration-300 hover:bg-red-orange-200">
                                <FontAwesomeIcon
                                    icon={faTiktok}
                                    size="2xl"
                                    className="text-gray-500 transition duration-300 hover:text-red-orange-800"
                                />
                            </button>
                            <button className="h-12 w-12 rounded-full border border-gray-500 transition duration-300 hover:bg-red-orange-200">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    size="2xl"
                                    className="text-gray-500 transition duration-300 hover:text-red-orange-800"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="flex w-36 flex-col gap-2">
                            <h2 className="font-xl font-bold text-black">
                                Link Cepat
                            </h2>
                            <div className="flex flex-col gap-1">
                                <a
                                    href="/home"
                                    className="cursor-pointer text-left transition duration-150 hover:text-red-orange-800"
                                >
                                    Beranda
                                </a>
                                <button
                                    onClick={() => {
                                        toast.error("Halaman belum tersedia.");
                                    }}
                                    className="cursor-pointer text-left transition duration-150 hover:text-red-orange-800"
                                >
                                    Tentang kami
                                </button>
                                <button
                                    onClick={() => {
                                        toast.error("Halaman belum tersedia.");
                                    }}
                                    className="cursor-pointer text-left transition duration-150 hover:text-red-orange-800"
                                >
                                    Mitra kami
                                </button>
                                <button
                                    onClick={() => {
                                        toast.error("Halaman belum tersedia.");
                                    }}
                                    className="cursor-pointer text-left transition duration-150 hover:text-red-orange-800"
                                >
                                    Tim kami
                                </button>
                                <button
                                    onClick={() => {
                                        toast.error("Halaman belum tersedia.");
                                    }}
                                    className="cursor-pointer text-left transition duration-150 hover:text-red-orange-800"
                                >
                                    Kontak kami
                                </button>
                            </div>
                        </div>
                        <div className="flex w-36 flex-col gap-2">
                            <h2 className="font-xl font-bold text-black">
                                Layanan Kami
                            </h2>
                            <div className="flex flex-col gap-1">
                                <a
                                    href="/"
                                    className="cursor-pointer text-left transition duration-150 hover:text-red-orange-800"
                                >
                                    Jelajah Nusantara
                                </a>
                                <a
                                    href="/eksplorasi"
                                    className="cursor-pointer text-left transition duration-150 hover:text-red-orange-800"
                                >
                                    Beli tiket
                                </a>
                                <button
                                    onClick={() => {
                                        toast.error("Fitur belum tersedia");
                                    }}
                                    className="cursor-pointer text-left transition duration-150 hover:text-red-orange-800"
                                >
                                    Komunitas WisNu
                                </button>
                                <a
                                    href="https://partner.wisnu.store/login"
                                    className="cursor-pointer text-left transition duration-150 hover:text-red-orange-800"
                                >
                                    Manajemen Mitra
                                </a>
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
                    team capstone <b>C523-PS033</b>
                </div>
            </div>
        </>
    );
}

export default LandingPageFooter;
