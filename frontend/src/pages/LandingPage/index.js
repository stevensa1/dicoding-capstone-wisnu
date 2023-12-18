import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLocationDot,
    faPeopleGroup,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import NavigationBar from "../../components/landingPage/NavigationBar";
import LandingPageFooter from "../../components/landingPage/Footer";

function LandingHomePage() {
    const [currentSection, setCurrentSection] = useState("Beranda");
    const [statLoad, setStatLoad] = useState(false);
    const [siteStats, setSiteStats] = useState({});
    useEffect(() => {
        AOS.init();
        // window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_HOST}/api/v1/site-stats`)
            .then((res) => {
                setSiteStats(res.data);
                setStatLoad(true);
            })
            .catch((err) => {
                toast.error("Error while fetching site statistics.");
            });
    }, []);
    return (
        <>
            <ToastContainer />
            <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
                <NavigationBar activeMenu={currentSection} />
            </div>
            <div className="flex flex-col bg-gray-100">
                <div
                    className="flex h-screen flex-col justify-center gap-2 bg-black/50 bg-cover bg-center px-8 py-36 text-white md:px-16 md:pt-48"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/images/landing-bg.webp")',
                    }}
                >
                    <h1
                        data-aos="fade-up"
                        className="text-6xl font-bold md:text-7xl"
                    >
                        Selamat Datang di{" "}
                        <p>
                            <span className="text-red-orange-300">Wis</span>
                            ata <span className="text-red-orange-300">Nu</span>
                            santara.
                        </p>
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="50"
                        className="text-lg text-gray-200"
                    >
                        Permudah, Percepat, dan Perluas Akses Wisata Nusantara
                    </p>
                    <div className="pt-4">
                        <a
                            href="/home"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="rounded-sm bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                        >
                            Jelajah Nusantara
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4 bg-white px-8 py-8 md:px-16">
                    <div className="flex flex-wrap justify-between gap-4 transition-all duration-300">
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 text-lg font-bold transition duration-300 hover:bg-red-orange-700 hover:text-white"
                        >
                            #1
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 text-lg font-bold transition duration-300 hover:bg-red-orange-700 hover:text-white"
                        >
                            #2
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 text-lg font-bold transition duration-300 hover:bg-red-orange-700 hover:text-white"
                        >
                            #3
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 text-lg font-bold transition duration-300 hover:bg-red-orange-700 hover:text-white"
                        >
                            #4
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 text-lg font-bold transition duration-300 hover:bg-red-orange-700 hover:text-white"
                        >
                            #5
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-400 text-lg font-bold transition duration-300 hover:bg-red-orange-700 hover:text-white"
                        >
                            #6
                        </div>
                    </div>
                </div>
                <div
                    id="tentang"
                    className="flex flex-col items-center gap-4 px-8 py-8 md:px-16 lg:flex-row"
                >
                    <div className="flex w-full flex-col gap-5 lg:w-1/2">
                        <p className="text-md w-fit grow-0 rounded-sm bg-red-orange-200 px-4 py-2 font-medium tracking-wider text-red-orange-700">
                            Tentang Kami
                        </p>
                        <div className="flex flex-col">
                            <p className="text-2xl font-bold text-black">
                                Apa itu WisNu - Wisata Nusantara?
                            </p>
                            <p>
                                WisNu adalah sebuah aplikasi pariwisata yang
                                dirancang untuk mendukung Sosial dan Budaya yang
                                berkelanjutan dengan memberikan informasi
                                lengkap, akurat, dan relevan tentang berbagai
                                destinasi wisata di Indonesia. Nama "WisNu"
                                sendiri merupakan singkatan dari "Wisata
                                Nusantara," mencerminkan tujuan aplikasi untuk
                                menggali dan mengenalkan potensi pariwisata yang
                                ada di Nusantara atau Indonesia.
                            </p>
                        </div>
                        <button className="w-fit rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-500 hover:bg-red-orange-950">
                            Baca Lebih Lanjut
                        </button>
                    </div>
                    <div className="flex w-full flex-col gap-5 lg:w-1/2">
                        <p className="text-md w-fit grow-0 rounded-sm font-medium tracking-wider text-black">
                            Misi Kami
                        </p>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <div className="flex flex-col rounded-md bg-white px-4 py-8 shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-orange-100">
                                    <svg
                                        height="25"
                                        viewBox="0 0 50 64"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M47.8 0H2.2C2.1 0 1.99 0.01 1.88 0.03C1.83 0.04 1.7 0.07 1.67 0.09C1.56 0.12 1.43 0.16 1.33 0.25C1.28 0.28 1.24 0.3 1.24 0.31C1.15 0.36 1.07 0.43 0.99 0.51C0.78 0.72 0.63 0.99 0.59 1.2C0.53 1.35 0.5 1.52 0.5 1.7V62.28C0.5 62.47 0.52 62.63 0.57 62.76C0.65 63.04 0.79 63.29 0.91 63.39C1.01 63.53 1.13 63.61 1.13 63.61C1.34 63.79 1.6 63.91 1.89 63.96C1.98 63.99 2.09 64 2.2 64H47.8C48.74 64 49.5 63.24 49.5 62.3V1.7C49.5 0.76 48.74 0 47.8 0ZM46.09 60.59H11.79L34.92 54.11C35.33 54 35.61 53.62 35.61 53.2V10.06C35.61 9.63 35.32 9.26 34.9 9.15L12.61 3.41H46.09V60.59ZM26.94 34.16V29.11C26.94 28.59 27.37 28.16 27.89 28.16C28.41 28.16 28.84 28.59 28.84 29.11V34.16C28.84 34.68 28.41 35.11 27.89 35.11C27.37 35.11 26.94 34.68 26.94 34.16Z"
                                            fill="#A01B14"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-lg font-bold">
                                    Pintu Nusantara
                                </h1>
                                <p>
                                    Menyajikan informasi lengkap dan inspiratif
                                    tentang destinasi wisata di Indonesia,
                                    membuka pintu keindahan alam, budaya, dan
                                    petualangan Nusantara.
                                </p>
                            </div>
                            <div className="flex flex-col rounded-md bg-white px-4 py-8 shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-orange-100">
                                    <svg
                                        height="25"
                                        viewBox="0 0 63 63"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M52.8927 3.54492C51.2127 3.54492 49.5371 4.19242 48.2552 5.47867L37.4577 16.2587L11.234 11.5949L5.04772 17.7812L28.1477 25.5818L14.8433 38.9474L9.67209 37.8624L3.48584 44.0487L14.3708 48.6249L18.9515 59.5099L25.1465 53.3237L24.0877 48.1962L37.4533 34.8305L45.3065 57.8868L51.4927 51.7005L46.8508 25.4374L57.5302 14.758C58.1411 14.1492 58.6258 13.4258 58.9565 12.6292C59.2872 11.8326 59.4574 10.9786 59.4574 10.1162C59.4574 9.25369 59.2872 8.3997 58.9565 7.60314C58.6258 6.80659 58.1411 6.08315 57.5302 5.4743C56.922 4.86396 56.1992 4.37973 55.4034 4.04939C54.6076 3.71905 53.7544 3.54473 52.8927 3.54492Z"
                                            stroke="#A01B14"
                                            strokeWidth="6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-lg font-bold">
                                    Memudahkan Perjalanan
                                </h1>
                                <p>
                                    Membuat perjalanan Anda lebih mudah dan
                                    menyenangkan dengan antarmuka ramah pengguna
                                    dan layanan pembelian tiket online.
                                </p>
                            </div>
                            <div className="flex flex-col rounded-md bg-white px-4 py-8 shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-orange-100">
                                    <svg
                                        height="25"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M60.0999 12.3999C61.2999 13.5999 61.2999 15.4999 60.0999 16.5999L51.5999 25.0999C50.9999 25.6999 50.0999 26.0999 49.1999 25.9999C48.2999 25.8999 47.4999 25.3999 46.9999 24.5999C46.1999 23.3999 46.3999 21.7999 47.4999 20.7999L49.0999 19.1999C49.3999 18.8999 49.4999 18.4999 49.2999 18.0999C49.0999 17.6999 48.7999 17.4999 48.3999 17.4999H17.8999C17.2999 17.4999 16.8999 17.8999 16.8999 18.4999C16.8999 19.0999 17.2999 19.4999 17.8999 19.4999H45.8999C44.2999 21.1999 43.9999 23.7999 45.2999 25.6999C46.0999 26.9999 47.4999 27.7999 48.9999 27.8999H49.4999C50.7999 27.8999 52.0999 27.3999 52.9999 26.3999L61.4999 17.8999C63.3999 15.9999 63.3999 12.7999 61.4999 10.7999L55.8999 5.1999C55.4999 4.7999 54.8999 4.7999 54.4999 5.1999C54.0999 5.5999 54.0999 6.1999 54.4999 6.5999L60.0999 12.3999Z"
                                            fill="#A01B14"
                                        />
                                        <path
                                            d="M5.99996 36.9999C8.79996 36.9999 11 34.7999 11 31.9999V22.2999C11 20.7999 12.2 19.4999 13.8 19.4999C14.4 19.4999 14.8 19.0999 14.8 18.4999C14.8 17.8999 14.4 17.4999 13.8 17.4999C11.2 17.4999 8.99996 19.5999 8.99996 22.2999V31.9999C8.99996 33.6999 7.69996 34.9999 5.99996 34.9999C4.29996 34.9999 2.99996 33.6999 2.99996 31.9999V20.0999C2.99996 17.7999 3.89996 15.5999 5.49996 13.9999C7.09996 12.3999 9.29996 11.4999 11.6 11.4999H48.2C48.6 11.4999 49 11.2999 49.1 10.8999C49.3 10.4999 49.2 10.0999 48.9 9.79989L47.2 8.09989C46.6 7.49989 46.2 6.59988 46.3 5.69988C46.4 4.79988 46.9 3.99989 47.7 3.49989C48.9 2.69989 50.5 2.89989 51.5 3.99989C51.9 4.39989 52.5 4.39989 52.9 3.99989C53.3 3.59989 53.3 2.99989 52.9 2.59989C51.2 0.899885 48.5 0.599885 46.6 1.89989C45.3 2.69989 44.5 4.09988 44.4 5.59988C44.2 7.09988 44.8 8.49989 45.8 9.59989H11.7C8.89996 9.59989 6.19996 10.6999 4.19996 12.6999C2.19996 14.6999 1.09996 17.3999 1.09996 20.1999V31.9999C0.999958 34.7999 3.19996 36.9999 5.99996 36.9999ZM48.3 52.4999H46.1C45.5 52.4999 45.1 52.8999 45.1 53.4999C45.1 54.0999 45.5 54.4999 46.1 54.4999H48.3C48.9 54.4999 49.3 54.0999 49.3 53.4999C49.3 52.8999 48.8 52.4999 48.3 52.4999Z"
                                            fill="#A01B14"
                                        />
                                        <path
                                            d="M58.0002 27C55.3002 27 53.0002 29.2 53.0002 32V41.7C53.0002 43.2 51.8002 44.5 50.2002 44.5H18.1002C19.7002 42.8 20.0002 40.2 18.7002 38.3C17.9002 37 16.5002 36.2 15.0002 36.1C13.5002 35.9 12.0002 36.5 10.9002 37.5L2.5002 46C0.600195 47.9 0.600195 51.1 2.5002 53.1L10.9002 61.5C11.9002 62.5 13.2002 63 14.6002 63C15.5002 63 16.5002 62.7 17.3002 62.2C18.6002 61.4 19.4002 60 19.5002 58.5C19.7002 57 19.1002 55.6 18.1002 54.5H42.2002C42.8002 54.5 43.2002 54.1 43.2002 53.5C43.2002 52.9 42.8002 52.5 42.2002 52.5H15.7002C15.3002 52.5 14.9002 52.7 14.8002 53.1C14.7002 53.5 14.7002 53.9 15.0002 54.2L16.7002 55.9C17.3002 56.5 17.7002 57.4 17.6002 58.3C17.5002 59.2 17.0002 60 16.2002 60.5C15.0002 61.3 13.4002 61.1 12.4002 60L4.0002 51.6C2.8002 50.4 2.8002 48.5 4.0002 47.4L12.5002 38.9C13.1002 38.3 14.0002 37.9 14.9002 38C15.8002 38.1 16.6002 38.6 17.1002 39.4C17.9002 40.6 17.7002 42.2 16.6002 43.2L15.0002 44.8C14.7002 45.1 14.6002 45.5 14.8002 45.9C15.0002 46.3 15.3002 46.5 15.7002 46.5H50.2002C52.8002 46.5 55.0002 44.4 55.0002 41.7V32C55.0002 30.3 56.3002 29 58.0002 29C59.7002 29 61.0002 30.3 61.0002 32V43.8C61.0002 48.6 57.1002 52.5 52.3002 52.5C51.7002 52.5 51.3002 52.9 51.3002 53.5C51.3002 54.1 51.7002 54.5 52.3002 54.5C58.2002 54.5 63.0002 49.7 63.0002 43.8V32C63.0002 29.2 60.7002 27 58.0002 27Z"
                                            fill="#A01B14"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-lg font-bold">
                                    Pariwisata Berkelanjutan
                                </h1>
                                <p>
                                    Mendukung pengembangan pariwisata
                                    berkelanjutan, menjaga keindahan alam, dan
                                    memberikan manfaat ekonomi bagi masyarakat
                                    lokal.
                                </p>
                            </div>
                            <div className="flex flex-col rounded-md bg-white px-4 py-8 shadow-md">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-orange-100">
                                    <svg
                                        height="25"
                                        viewBox="0 0 30 30"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M25.9416 17.9839C26.7819 17.2766 27.3843 16.328 27.6673 15.2668C27.9503 14.2056 27.9002 13.083 27.5237 12.0512C27.1473 11.0194 26.4627 10.1284 25.5627 9.49875C24.6628 8.86914 23.591 8.53145 22.4927 8.53145C21.3944 8.53145 20.3227 8.86914 19.4227 9.49875C18.5228 10.1284 17.8382 11.0194 17.4617 12.0512C17.0853 13.083 17.0352 14.2056 17.3182 15.2668C17.6012 16.328 18.2036 17.2766 19.0438 17.9839C18.8046 18.107 18.5722 18.2428 18.3476 18.3909C17.3899 16.3602 15.7535 14.7275 13.7206 13.7745C15.076 12.8935 16.1103 11.5979 16.6694 10.0811C17.2284 8.5642 17.2822 6.90726 16.8228 5.35733C16.3633 3.80739 15.4151 2.44747 14.1197 1.48035C12.8243 0.513237 11.251 -0.00927734 9.63439 -0.00927734C8.01778 -0.00927734 6.44447 0.513237 5.14905 1.48035C3.85363 2.44747 2.9055 3.80739 2.44602 5.35733C1.98654 6.90726 2.04034 8.5642 2.59939 10.0811C3.15843 11.5979 4.19278 12.8935 5.54821 13.7745C3.89121 14.5513 2.48955 15.7836 1.50706 17.3275C0.524568 18.8715 0.00184791 20.6631 0 22.4931V28.9196C0 29.2037 0.112846 29.4761 0.313713 29.677C0.51458 29.8779 0.787014 29.9907 1.07108 29.9907H28.9192C29.2033 29.9907 29.4757 29.8779 29.6766 29.677C29.8775 29.4761 29.9903 29.2037 29.9903 28.9196V24.6353C29.9892 23.2622 29.6111 21.9157 28.8971 20.7428C28.1832 19.5699 27.1608 18.6155 25.9416 17.9839ZM19.2795 13.9245C19.2795 13.289 19.4679 12.6677 19.821 12.1393C20.1741 11.6109 20.6759 11.199 21.2631 10.9558C21.8502 10.7126 22.4963 10.649 23.1196 10.773C23.7429 10.897 24.3155 11.203 24.7648 11.6524C25.2142 12.1018 25.5203 12.6743 25.6442 13.2976C25.7682 13.9209 25.7046 14.567 25.4614 15.1541C25.2182 15.7413 24.8063 16.2431 24.2779 16.5962C23.7495 16.9493 23.1282 17.1377 22.4927 17.1377C21.6405 17.1377 20.8232 16.7992 20.2206 16.1966C19.618 15.594 19.2795 14.7767 19.2795 13.9245ZM4.28433 7.49799C4.28433 6.43879 4.59842 5.40338 5.18688 4.52269C5.77534 3.64199 6.61174 2.95558 7.59031 2.55024C8.56889 2.1449 9.64568 2.03885 10.6845 2.24549C11.7234 2.45213 12.6776 2.96218 13.4266 3.71115C14.1756 4.46011 14.6856 5.41436 14.8923 6.45321C15.0989 7.49205 14.9928 8.56885 14.5875 9.54742C14.1822 10.526 13.4957 11.3624 12.615 11.9509C11.7344 12.5393 10.6989 12.8534 9.63974 12.8534C8.2194 12.8534 6.85723 12.2892 5.85289 11.2848C4.84856 10.2805 4.28433 8.91834 4.28433 7.49799ZM16.0662 27.8486H2.14216V22.4931C2.14216 20.5047 2.93209 18.5976 4.33815 17.1916C5.74422 15.7855 7.65126 14.9956 9.63974 14.9956C11.6282 14.9956 13.5353 15.7855 14.9413 17.1916C16.3474 18.5976 17.1373 20.5047 17.1373 22.4931V27.8486H16.0662ZM27.8481 27.8486H19.2795V22.4931C19.2816 21.8385 19.217 21.1853 19.0867 20.5438C20.0349 19.7296 21.243 19.2813 22.4927 19.2799C23.9131 19.2799 25.2752 19.8441 26.2796 20.8485C27.2839 21.8528 27.8481 23.215 27.8481 24.6353V27.8486Z"
                                            fill="#A01B14"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-lg font-bold">
                                    Teman Setia Para Petualang
                                </h1>
                                <p>
                                    Menjadi komunitas para petualang, memberikan
                                    ruang untuk berbagi pengalaman, menciptakan
                                    kenangan indah, dan menjadikan setiap
                                    perjalanan sebagai petualangan tak
                                    terlupakan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center justify-between gap-4 bg-cover bg-center px-16 py-32 text-white md:flex-row md:py-28"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/images/landing-section-number.webp")',
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-6xl font-bold md:text-4xl">
                            {statLoad ? (
                                siteStats.numberOfRegisteredUsers
                            ) : (
                                <>
                                    <Skeleton width={100} />
                                </>
                            )}
                        </h1>
                        <p className="md:text-md text-lg font-bold text-gray-300">
                            Pengguna Terdaftar
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-6xl font-bold md:text-4xl">
                            {statLoad ? (
                                siteStats.numberOfRegisteredPartners
                            ) : (
                                <>
                                    <Skeleton width={100} />
                                </>
                            )}
                        </h1>
                        <p className="md:text-md text-lg font-bold text-gray-300">
                            Mitra Wisata
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-6xl font-bold md:text-4xl">
                            {statLoad ? (
                                siteStats.numberOfRegisteredDestinations
                            ) : (
                                <>
                                    <Skeleton width={100} />
                                </>
                            )}
                        </h1>
                        <p className="md:text-md text-lg font-bold text-gray-300">
                            Destinasi Wisata
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-6xl font-bold md:text-4xl">
                            {statLoad ? (
                                siteStats.numberOfPurchasedTickets
                            ) : (
                                <>
                                    <Skeleton width={100} />
                                </>
                            )}
                        </h1>
                        <p className="md:text-md text-lg font-bold text-gray-300">
                            Tiket Terjual
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 px-8 py-8 md:px-16">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex items-center justify-center gap-2 md:gap-4">
                            <svg
                                width="75"
                                height="4"
                                viewBox="0 0 75 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 3.5H164"
                                    stroke="#A01B14"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <h1 className="text-center text-3xl font-bold">
                                Layanan Kami
                            </h1>
                            <svg
                                width="75"
                                height="4"
                                viewBox="0 0 75 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 3.5H164"
                                    stroke="#A01B14"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <p className="text-center text-lg">
                            Layanan yang memudahkan wisatawan Nusantara
                        </p>
                    </div>
                    <div className="flex flex-col justify-between gap-8 md:grid md:grid-cols-2">
                        <div className="group flex flex-col gap-4">
                            <div className="flex gap-1">
                                <div className="h-[2px] w-8 bg-red-orange-800"></div>
                                <div className="h-[2px] w-full bg-gray-400"></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex w-24 justify-center rounded-full">
                                    <svg
                                        width="62"
                                        height="62"
                                        viewBox="0 0 62 62"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M25 22.25C23.4875 22.25 22.25 23.4875 22.25 25C22.25 26.5125 23.4875 27.75 25 27.75C25.7293 27.75 26.4288 27.4603 26.9445 26.9445C27.4603 26.4288 27.75 25.7293 27.75 25C27.75 24.2707 27.4603 23.5712 26.9445 23.0555C26.4288 22.5397 25.7293 22.25 25 22.25ZM25 0C11.1875 0 0 11.1875 0 25C0 38.8 11.1875 50 25 50C38.8125 50 50 38.8 50 25C50 11.1875 38.8125 0 25 0ZM30.475 30.475L10 40L19.525 19.525L40 10L30.475 30.475Z"
                                            fill="#A0A0A0"
                                        />
                                        <circle
                                            opacity="0.5"
                                            cx="49.5"
                                            cy="49.5"
                                            r="12.5"
                                            fill="#FF6961"
                                        />
                                    </svg>
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                    <h1 className="text-xl font-bold transition duration-300 group-hover:text-red-orange-800">
                                        Eksplorasi Destinasi Unik
                                    </h1>
                                    <p className="text-lg">
                                        Temukan keindahan Nusantara melalui
                                        fitur ini yang memungkinkan Anda
                                        menjelajahi destinasi wisata eksklusif
                                        dan tersembunyi. Dapatkan informasi
                                        mendalam tentang tempat-tempat menarik
                                        dan pengalaman lokal yang tak
                                        terlupakan.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col gap-4">
                            <div className="flex gap-1">
                                <div className="h-[2px] w-8 bg-red-orange-800"></div>
                                <div className="h-[2px] w-full bg-gray-400"></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-24 rounded-full">
                                    <svg
                                        width="56"
                                        height="59"
                                        viewBox="0 0 56 59"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            opacity="0.5"
                                            cx="43.5"
                                            cy="46.5"
                                            r="12.5"
                                            fill="#FF6961"
                                        />
                                        <path
                                            d="M22.1877 42.8333C22.5341 43.1828 22.9462 43.4603 23.4003 43.6498C23.8544 43.8393 24.3415 43.9371 24.8336 43.9375C25.3291 43.9398 25.8202 43.8434 26.278 43.6538C26.7359 43.4642 27.1514 43.1853 27.5002 42.8333L29.1252 41.1875L30.7711 42.8333C31.2982 43.3525 31.9664 43.7051 32.6925 43.8473C33.4186 43.9895 34.1705 43.9149 34.8546 43.6328C35.5386 43.3508 36.1245 42.8737 36.5394 42.2611C36.9543 41.6485 37.1797 40.9273 37.1877 40.1875C37.1833 39.1882 36.7869 38.2306 36.0836 37.5208L34.4377 35.8958L36.0836 34.25C36.7845 33.5436 37.1779 32.5888 37.1779 31.5937C37.1779 30.5986 36.7845 29.6438 36.0836 28.9375C35.3772 28.2365 34.4224 27.8431 33.4273 27.8431C32.4322 27.8431 31.4774 28.2365 30.7711 28.9375L29.1461 30.5833L27.5002 28.9375C26.7837 28.256 25.8328 27.876 24.844 27.876C23.8552 27.876 22.9042 28.256 22.1877 28.9375C21.4957 29.6294 21.0998 30.5632 21.0836 31.5416C21.0839 32.0337 21.1817 32.5208 21.3712 32.9749C21.5607 33.429 21.8382 33.8411 22.1877 34.1875L23.8336 35.8333L22.1877 37.4583C21.8312 37.8092 21.5481 38.2275 21.3548 38.6889C21.1615 39.1503 21.062 39.6456 21.062 40.1458C21.062 40.646 21.1615 41.1413 21.3548 41.6027C21.5481 42.0641 21.8312 42.4824 22.1877 42.8333ZM16.3336 3.87496C16.3437 3.12964 16.1316 2.3982 15.7241 1.77402C15.3167 1.14983 14.7325 0.661222 14.0462 0.370571C13.3598 0.0799203 12.6023 0.00041446 11.8706 0.142204C11.1388 0.283994 10.4659 0.640646 9.93772 1.16663L8.29189 2.81246L6.64605 1.16663C5.94327 0.466916 4.99193 0.0740807 4.00022 0.0740807C3.0085 0.0740807 2.05717 0.466916 1.35439 1.16663C0.993344 1.51738 0.708848 1.9391 0.518815 2.40522C0.328782 2.87134 0.23733 3.37176 0.250219 3.87496C0.250609 4.36701 0.348373 4.85413 0.537879 5.30823C0.727385 5.76232 1.00488 6.17443 1.35439 6.52079L2.97939 8.16663L1.35439 9.81246C0.832275 10.3369 0.476984 11.004 0.333246 11.7299C0.189508 12.4558 0.263749 13.208 0.546622 13.8918C0.829494 14.5756 1.30835 15.1604 1.9229 15.5726C2.53746 15.9848 3.26023 16.206 4.00022 16.2083C4.49098 16.2118 4.97756 16.1178 5.43174 15.9319C5.88591 15.7459 6.29866 15.4716 6.64605 15.125L8.29189 13.4791L9.93772 15.125C10.2851 15.4716 10.6979 15.7459 11.152 15.9319C11.6062 16.1178 12.0928 16.2118 12.5836 16.2083C13.0743 16.2118 13.5609 16.1178 14.0151 15.9319C14.4692 15.7459 14.882 15.4716 15.2294 15.125C15.5795 14.7747 15.8572 14.359 16.0467 13.9014C16.2362 13.4439 16.3336 12.9535 16.3336 12.4583C16.3332 11.9662 16.2354 11.4791 16.0459 11.025C15.8564 10.5709 15.5789 10.1588 15.2294 9.81246L13.6044 8.16663L15.2294 6.54163C15.9327 5.83179 16.3292 4.8742 16.3336 3.87496Z"
                                            fill="#A0A0A0"
                                        />
                                        <path
                                            d="M28.9373 12.375V3.56248L29.8123 4.37498C30.004 4.5569 30.2565 4.66088 30.5207 4.66665C30.6649 4.66519 30.8073 4.63495 30.9397 4.57772C31.0721 4.52048 31.1917 4.43739 31.2915 4.33332C31.3891 4.23648 31.4666 4.12127 31.5195 3.99433C31.5724 3.8674 31.5996 3.73124 31.5996 3.59373C31.5996 3.45622 31.5724 3.32007 31.5195 3.19313C31.4666 3.06619 31.3891 2.95099 31.2915 2.85415L28.604 0.395815C28.4054 0.22969 28.1546 0.138672 27.8957 0.138672C27.6367 0.138672 27.386 0.22969 27.1873 0.395815L24.5623 2.85415C24.4647 2.95099 24.3872 3.06619 24.3343 3.19313C24.2815 3.32007 24.2542 3.45622 24.2542 3.59373C24.2542 3.73124 24.2815 3.8674 24.3343 3.99433C24.3872 4.12127 24.4647 4.23648 24.5623 4.33332C24.6574 4.43032 24.7708 4.50739 24.8961 4.56C25.0213 4.61261 25.1557 4.63971 25.2915 4.63971C25.4273 4.63971 25.5618 4.61261 25.687 4.56C25.8122 4.50739 25.9256 4.43032 26.0207 4.33332L26.8957 3.52082V12.375C26.8957 13.9406 26.2752 15.4424 25.1701 16.5513C24.065 17.6603 22.5654 18.2861 20.9998 18.2916H14.229C12.107 18.2971 10.0732 19.1411 8.57082 20.6396C7.06841 22.1381 6.21917 24.1697 6.20818 26.2916V29.1666C4.45616 29.4295 2.86828 30.345 1.76298 31.7296C0.657679 33.1141 0.116678 34.8653 0.248469 36.6321C0.380261 38.3988 1.1751 40.0504 2.47359 41.2556C3.77208 42.4608 5.47822 43.1306 7.24985 43.1306C9.02148 43.1306 10.7276 42.4608 12.0261 41.2556C13.3246 40.0504 14.1194 38.3988 14.2512 36.6321C14.383 34.8653 13.842 33.1141 12.7367 31.7296C11.6314 30.345 10.0435 29.4295 8.29152 29.1666V26.2916C8.29703 24.7205 8.92502 23.2157 10.0379 22.1067C11.1508 20.9977 12.6579 20.375 14.229 20.375H20.9582C23.0763 20.3695 25.1058 19.5242 26.6016 18.0245C28.0974 16.5248 28.9374 14.4931 28.9373 12.375ZM12.2707 36.0625C12.2748 37.0399 11.9887 37.9966 11.4487 38.8113C10.9087 39.626 10.139 40.2621 9.23716 40.639C8.33532 41.0159 7.34191 41.1166 6.38276 40.9285C5.42361 40.7403 4.54188 40.2717 3.84928 39.582C3.15667 38.8923 2.68434 38.0126 2.49214 37.0543C2.29993 36.0959 2.39648 35.1021 2.76957 34.1987C3.14266 33.2952 3.77549 32.5229 4.5879 31.9794C5.40032 31.4359 6.35575 31.1458 7.33318 31.1458C8.62459 31.1676 9.85606 31.6946 10.7635 32.6137C11.6709 33.5328 12.1821 34.7709 12.1873 36.0625H12.2707Z"
                                            fill="#A0A0A0"
                                        />
                                    </svg>
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                    <h1 className="text-xl font-bold transition duration-300 group-hover:text-red-orange-800">
                                        Rencanakan Perjalanan Anda Sendiri
                                    </h1>
                                    <p className="text-lg">
                                        Personalisasi perjalanan impian Anda
                                        dengan fitur perencanaan perjalanan yang
                                        dapat disesuaikan. Pilih destinasi,
                                        kegiatan, dan akomodasi sesuai keinginan
                                        Anda untuk membuat pengalaman perjalanan
                                        yang unik.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col gap-4">
                            <div className="flex gap-1">
                                <div className="h-[2px] w-8 bg-red-orange-800"></div>
                                <div className="h-[2px] w-full bg-gray-400"></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-24 rounded-full">
                                    <svg
                                        width="62"
                                        height="62"
                                        viewBox="0 0 62 62"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            opacity="0.5"
                                            cx="49.5"
                                            cy="49.5"
                                            r="12.5"
                                            fill="#FF6961"
                                        />
                                        <path
                                            d="M49.9998 19.2251L48.3028 5.674C48.1778 4.70081 47.7352 3.79603 47.0437 3.09995C46.3522 2.40386 45.4504 1.95536 44.4781 1.82398L30.927 0.0509388C29.8739 -0.076194 28.8056 0.0353837 27.8015 0.377396C26.7974 0.719409 25.8832 1.28308 25.1266 2.02661L1.3679 25.6587C0.930032 26.0978 0.583666 26.6194 0.348878 27.1933C0.11409 27.7672 -0.00444994 28.382 0.000127694 29.0021C0.0220135 30.2508 0.531026 31.4416 1.41856 32.3202L17.5785 48.5815C18.0228 49.0301 18.5514 49.3863 19.1339 49.6298C19.7164 49.8732 20.3413 49.999 20.9726 50C22.1922 50.0053 23.3652 49.5325 24.2401 48.6828L47.9735 25.0508C48.7327 24.2983 49.31 23.3822 49.6612 22.3725C50.0123 21.3629 50.1282 20.2863 49.9998 19.2251ZM26.9756 18.8958C26.9756 19.6973 26.738 20.4809 26.2926 21.1473C25.8473 21.8138 25.2144 22.3332 24.4739 22.64C23.7333 22.9467 22.9185 23.027 22.1323 22.8706C21.3462 22.7142 20.6241 22.3282 20.0573 21.7615C19.4905 21.1947 19.1046 20.4726 18.9482 19.6864C18.7918 18.9003 18.8721 18.0854 19.1788 17.3449C19.4855 16.6044 20.005 15.9714 20.6714 15.5261C21.3379 15.0808 22.1214 14.8431 22.923 14.8431C23.9978 14.8431 25.0286 15.2701 25.7886 16.0301C26.5487 16.7902 26.9756 17.821 26.9756 18.8958ZM15.3242 24.5949H30.5217C31.0255 24.5949 31.5087 24.795 31.865 25.1513C32.2213 25.5075 32.4214 25.9907 32.4214 26.4945C32.4214 26.9984 32.2213 27.4816 31.865 27.8378C31.5087 28.1941 31.0255 28.3942 30.5217 28.3942H15.3242C14.8204 28.3942 14.3372 28.1941 13.981 27.8378C13.6247 27.4816 13.4246 26.9984 13.4246 26.4945C13.4246 25.9907 13.6247 25.5075 13.981 25.1513C14.3372 24.795 14.8204 24.5949 15.3242 24.5949ZM41.3626 13.906C41.0064 14.2617 40.5235 14.4615 40.0201 14.4615C39.5167 14.4615 39.0339 14.2617 38.6777 13.906L34.9543 10.0306C34.6801 9.89964 34.4413 9.70477 34.2579 9.46239C34.0746 9.22 33.9521 8.93717 33.9007 8.63764C33.8493 8.3381 33.8705 8.03061 33.9626 7.74097C34.0546 7.45134 34.2148 7.18801 34.4297 6.97312C34.6446 6.75822 34.9079 6.59801 35.1976 6.50596C35.4872 6.4139 35.7947 6.39268 36.0942 6.44407C36.3938 6.49546 36.6766 6.61797 36.919 6.80131C37.1614 6.98464 37.3562 7.22346 37.4872 7.4977L41.2866 11.2971C41.6301 11.6399 41.8294 12.1013 41.8436 12.5864C41.8577 13.0715 41.6856 13.5437 41.3626 13.906ZM18.8703 34.1693C18.8703 33.3677 19.108 32.5842 19.5533 31.9177C19.9986 31.2513 20.6316 30.7318 21.3721 30.4251C22.1126 30.1184 22.9275 30.0381 23.7136 30.1945C24.4998 30.3508 25.2219 30.7368 25.7886 31.3036C26.3554 31.8704 26.7414 32.5925 26.8978 33.3786C27.0541 34.1648 26.9739 34.9796 26.6671 35.7201C26.3604 36.4607 25.841 37.0936 25.1745 37.5389C24.5081 37.9842 23.7245 38.2219 22.923 38.2219C22.3843 38.222 21.851 38.1147 21.3543 37.9063C20.8576 37.6979 20.4074 37.3926 20.0301 37.0082C19.6528 36.6238 19.3559 36.168 19.1567 35.6675C18.9576 35.167 18.8602 34.6318 18.8703 34.0933V34.1693Z"
                                            fill="#A0A0A0"
                                        />
                                        <path
                                            d="M23.936 34.093C23.936 33.8926 23.8766 33.6967 23.7652 33.5301C23.6539 33.3635 23.4957 33.2336 23.3106 33.1569C23.1254 33.0802 22.9217 33.0602 22.7252 33.0993C22.5286 33.1384 22.3481 33.2348 22.2064 33.3765C22.0647 33.5182 21.9682 33.6988 21.9291 33.8953C21.89 34.0918 21.9101 34.2955 21.9868 34.4807C22.0635 34.6658 22.1933 34.824 22.3599 34.9354C22.5266 35.0467 22.7224 35.1061 22.9228 35.1061C23.1915 35.1061 23.4492 34.9994 23.6392 34.8094C23.8293 34.6194 23.936 34.3617 23.936 34.093ZM21.9097 18.8955C21.9097 19.0959 21.9691 19.2918 22.0804 19.4584C22.1917 19.625 22.35 19.7548 22.5351 19.8315C22.7202 19.9082 22.924 19.9283 23.1205 19.8892C23.317 19.8501 23.4976 19.7536 23.6392 19.6119C23.7809 19.4702 23.8774 19.2897 23.9165 19.0931C23.9556 18.8966 23.9356 18.6929 23.8589 18.5078C23.7822 18.3226 23.6523 18.1644 23.4857 18.0531C23.3191 17.9417 23.1232 17.8823 22.9228 17.8823C22.6541 17.8823 22.3964 17.9891 22.2064 18.1791C22.0164 18.3691 21.9097 18.6268 21.9097 18.8955Z"
                                            fill="#A0A0A0"
                                        />
                                    </svg>
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                    <h1 className="text-xl font-bold transition duration-300 group-hover:text-red-orange-800">
                                        Promo dan Diskon Khusus
                                    </h1>
                                    <p className="text-lg">
                                        Manfaatkan penawaran istimewa dan diskon
                                        eksklusif untuk pengguna WisNu. Dapatkan
                                        harga terbaik untuk paket perjalanan,
                                        tiket masuk, dan penginapan di berbagai
                                        destinasi.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col gap-4">
                            <div className="flex gap-1">
                                <div className="h-[2px] w-8 bg-red-orange-800"></div>
                                <div className="h-[2px] w-full bg-gray-400"></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-24 rounded-full">
                                    <svg
                                        width="52"
                                        height="52"
                                        viewBox="0 0 52 52"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            opacity="0.5"
                                            cx="39.5"
                                            cy="39.5"
                                            r="12.5"
                                            fill="#FF6961"
                                        />
                                        <path
                                            d="M13.7082 14.9998C17.7368 14.9998 20.9998 11.7368 20.9998 7.70817C20.9998 3.67952 17.7368 0.416504 13.7082 0.416504C9.67953 0.416504 6.4165 3.67952 6.4165 7.70817C6.4165 11.7368 9.67953 14.9998 13.7082 14.9998ZM36.6248 11.354C36.6248 14.5193 34.061 17.0832 30.8957 17.0832C27.7304 17.0832 25.1665 14.5193 25.1665 11.354C25.1665 8.18859 27.7304 5.62484 30.8957 5.62484C34.061 5.62484 36.6248 8.18859 36.6248 11.354ZM13.7082 17.0832C16.5557 17.0832 21.1905 17.9697 24.2302 19.7344C25.4717 20.9983 26.2082 22.3763 26.2082 23.7498V29.5832H0.166504V23.7498C0.166504 19.3165 9.18859 17.0832 13.7082 17.0832ZM41.8332 29.5832H28.2915V23.7498C28.2915 22.2745 27.7588 20.9166 26.9128 19.7046C28.5179 19.3462 30.0981 19.1665 31.3047 19.1665C35.1885 19.1665 41.8332 21.0277 41.8332 24.722V29.5832Z"
                                            fill="#A0A0A0"
                                        />
                                    </svg>
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                    <h1 className="text-xl font-bold transition duration-300 group-hover:text-red-orange-800">
                                        Panduan Lokal oleh Penduduk Asli
                                    </h1>
                                    <p className="text-lg">
                                        Jelajahi destinasi dengan panduan lokal
                                        yang memberikan wawasan unik dan tips
                                        eksklusif. Dapatkan panduan pribadi dari
                                        penduduk asli yang tahu rahasia
                                        tempat-tempat menarik di sekitar mereka.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col gap-4">
                            <div className="flex gap-1">
                                <div className="h-[2px] w-8 bg-red-orange-800"></div>
                                <div className="h-[2px] w-full bg-gray-400"></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-24 rounded-full">
                                    <svg
                                        width="62"
                                        height="62"
                                        viewBox="0 0 62 62"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M25 0C20.0555 0 15.222 1.46622 11.1108 4.21326C6.99953 6.96029 3.79521 10.8648 1.90302 15.4329C0.0108322 20.0011 -0.484251 25.0277 0.480379 29.8773C1.44501 34.7268 3.82603 39.1813 7.32234 42.6777C10.8187 46.174 15.2732 48.555 20.1227 49.5196C24.9723 50.4842 29.9989 49.9892 34.5671 48.097C39.1352 46.2048 43.0397 43.0005 45.7867 38.8892C48.5338 34.778 50 29.9445 50 25C50 18.3696 47.3661 12.0107 42.6777 7.32233C37.9893 2.63392 31.6304 0 25 0ZM34.0909 27.2727H25C24.3972 27.2727 23.8192 27.0333 23.3929 26.6071C22.9667 26.1808 22.7273 25.6028 22.7273 25V11.3636C22.7273 10.7609 22.9667 10.1828 23.3929 9.75657C23.8192 9.33035 24.3972 9.09091 25 9.09091C25.6028 9.09091 26.1808 9.33035 26.6071 9.75657C27.0333 10.1828 27.2727 10.7609 27.2727 11.3636V22.7273H34.0909C34.6937 22.7273 35.2718 22.9667 35.698 23.3929C36.1242 23.8192 36.3636 24.3972 36.3636 25C36.3636 25.6028 36.1242 26.1808 35.698 26.6071C35.2718 27.0333 34.6937 27.2727 34.0909 27.2727Z"
                                            fill="#A0A0A0"
                                        />
                                        <circle
                                            opacity="0.5"
                                            cx="49.5"
                                            cy="49.5"
                                            r="12.5"
                                            fill="#FF6961"
                                        />
                                    </svg>
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                    <h1 className="text-xl font-bold transition duration-300 group-hover:text-red-orange-800">
                                        Pemantauan Real-Time
                                    </h1>
                                    <p className="text-lg">
                                        Tetap terinformasi dengan pemantauan
                                        real-time untuk keamanan dan informasi
                                        penting selama perjalanan Anda. Terima
                                        notifikasi tentang perubahan cuaca, lalu
                                        lintas, atau informasi darurat.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col gap-4">
                            <div className="flex gap-1">
                                <div className="h-[2px] w-8 bg-red-orange-800"></div>
                                <div className="h-[2px] w-full bg-gray-400"></div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-24 rounded-full">
                                    <svg
                                        width="52"
                                        height="62"
                                        viewBox="0 0 52 62"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M25 9.375C27.5888 9.375 29.6875 7.27633 29.6875 4.6875C29.6875 2.09867 27.5888 0 25 0C22.4112 0 20.3125 2.09867 20.3125 4.6875C20.3125 7.27633 22.4112 9.375 25 9.375ZM44.3748 18.8282C43.9842 17.7345 43.5936 16.6407 43.0467 15.6251C41.953 16.4063 40.703 16.797 39.3748 16.797C34.2967 16.797 31.328 11.0157 34.3748 6.87508C33.3592 6.3282 32.2655 5.85945 31.1717 5.54695C30.078 12.5782 19.9217 12.5782 18.9061 5.54695C17.8123 5.93758 16.7186 6.3282 15.703 6.87508C19.9217 12.5782 12.6561 19.7657 7.0311 15.547C6.48422 16.5626 6.01547 17.6563 5.70297 18.7501C12.7342 19.8438 12.7342 30.0001 5.70297 31.0157C6.0936 32.1095 6.48422 33.2032 7.0311 34.2188C8.12485 33.4376 9.37485 33.0469 10.703 33.0469C15.7811 33.0469 18.7498 38.8282 15.703 42.9688C16.7186 43.5157 17.8123 43.9845 18.9061 44.297C19.9998 37.2657 30.1561 37.2657 31.1717 44.297C32.2655 43.9063 33.3592 43.5157 34.3748 42.9688C31.4061 38.9063 34.2967 33.0469 39.3748 33.0469C40.703 33.0469 41.953 33.4376 43.0467 34.2188C43.5936 33.2032 44.0623 32.1095 44.3748 31.0157C37.3436 30.0782 37.3436 19.922 44.3748 18.8282ZM24.9998 37.5001C18.1248 37.5001 12.4998 31.8751 12.4998 25.0001C12.4998 18.1251 18.1248 12.5001 24.9998 12.5001C31.8748 12.5001 37.4998 18.1251 37.4998 25.0001C37.4998 31.8751 31.8748 37.5001 24.9998 37.5001ZM29.6875 45.3125C29.6875 47.9013 27.5888 50 25 50C22.4112 50 20.3125 47.9013 20.3125 45.3125C20.3125 42.7237 22.4112 40.625 25 40.625C27.5888 40.625 29.6875 42.7237 29.6875 45.3125ZM39.3749 15.3126C41.9638 15.3126 44.0624 13.2139 44.0624 10.6251C44.0624 8.03624 41.9638 5.93758 39.3749 5.93758C36.7861 5.93758 34.6874 8.03624 34.6874 10.6251C34.6874 13.2139 36.7861 15.3126 39.3749 15.3126ZM15.3126 39.3749C15.3126 41.9638 13.2139 44.0624 10.6251 44.0624C8.03624 44.0624 5.93758 41.9638 5.93758 39.3749C5.93758 36.7861 8.03624 34.6874 10.6251 34.6874C13.2139 34.6874 15.3126 36.7861 15.3126 39.3749ZM45.3125 29.6875C47.9013 29.6875 50 27.5888 50 25C50 22.4112 47.9013 20.3125 45.3125 20.3125C42.7237 20.3125 40.625 22.4112 40.625 25C40.625 27.5888 42.7237 29.6875 45.3125 29.6875ZM9.375 25C9.375 27.5888 7.27633 29.6875 4.6875 29.6875C2.09867 29.6875 0 27.5888 0 25C0 22.4112 2.09867 20.3125 4.6875 20.3125C7.27633 20.3125 9.375 22.4112 9.375 25ZM39.3749 44.0624C41.9638 44.0624 44.0624 41.9638 44.0624 39.3749C44.0624 36.7861 41.9638 34.6874 39.3749 34.6874C36.7861 34.6874 34.6874 36.7861 34.6874 39.3749C34.6874 41.9638 36.7861 44.0624 39.3749 44.0624ZM15.3126 10.6251C15.3126 13.2139 13.2139 15.3126 10.6251 15.3126C8.03624 15.3126 5.93758 13.2139 5.93758 10.6251C5.93758 8.03624 8.03624 5.93758 10.6251 5.93758C13.2139 5.93758 15.3126 8.03624 15.3126 10.6251Z"
                                            fill="#A0A0A0"
                                        />
                                        <circle
                                            opacity="0.5"
                                            cx="39.5"
                                            cy="49.5"
                                            r="12.5"
                                            fill="#FF6961"
                                        />
                                    </svg>
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                    <h1 className="text-xl font-bold transition duration-300 group-hover:text-red-orange-800">
                                        Komunitas Pecinta Wisata Nusantara
                                    </h1>
                                    <p className="text-lg">
                                        Bergabunglah dengan komunitas aktif
                                        pengguna WisNu untuk berbagi pengalaman,
                                        rekomendasi, dan foto perjalanan.
                                        Temukan teman perjalanan baru dan jalin
                                        hubungan dengan sesama pecinta wisata
                                        Nusantara.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 bg-white px-16 py-24">
                    <h1 className="text-4xl font-bold">
                        Tunggu Apalagi? Mari Menjelajah Nusantara bersama WisNu!
                    </h1>
                    <a
                        href="/home"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="rounded-sm bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                    >
                        Jelajah Nusantara
                    </a>
                </div>
                <div
                    id="tim"
                    className="flex flex-col gap-4 px-8 py-8 md:px-16"
                >
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex items-center justify-center gap-2 md:gap-4">
                            <svg
                                width="75"
                                height="4"
                                viewBox="0 0 75 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 3.5H164"
                                    stroke="#A01B14"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <h1 className="text-center text-3xl font-bold">
                                Tim Kami
                            </h1>
                            <svg
                                width="75"
                                height="4"
                                viewBox="0 0 75 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 3.5H164"
                                    stroke="#A01B14"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <p className="text-center text-lg">
                            Perkenalkan Tim yang ahli pada bidang Digitalisasi
                            Wisata Nusantara
                        </p>
                    </div>
                    <div className="flex flex-col justify-center md:flex-row md:flex-wrap">
                        <div className="flex w-full flex-col items-center gap-2 p-4 md:w-1/3">
                            <div className="flex w-fit items-center justify-center rounded-full bg-white p-2 transition duration-300 ease-out hover:shadow-lg">
                                <LazyLoadImage
                                    src={`https://${process.env.REACT_APP_BUCKET_URL}/team/team_steven.jpg`}
                                    alt="Placeholder"
                                    className="h-48 w-48 rounded-full object-cover object-center"
                                    effect="blur"
                                    width={192}
                                    height={192}
                                />
                                {/* IMG CONTENT USING LAZY IMAGE */}
                            </div>
                            <h1 className="w-full text-center text-lg font-bold">
                                Steven Soewignjo
                            </h1>
                            <p className="w-full text-center italic text-gray-500">
                                Product Manager
                            </p>
                            <div className="w-full text-center text-sm font-light text-gray-700">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, voluptatum.
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center gap-2 p-4 md:w-1/3">
                            <div className="flex w-fit items-center justify-center rounded-full bg-white p-2 transition duration-300 ease-out hover:shadow-lg">
                                <LazyLoadImage
                                    src={`https://${process.env.REACT_APP_BUCKET_URL}/team/team_ammar.png`}
                                    alt="Placeholder"
                                    className="h-48 w-48 rounded-full object-cover object-center"
                                    effect="blur"
                                    width={192}
                                    height={192}
                                />
                                {/* IMG CONTENT USING LAZY IMAGE */}
                            </div>
                            <h1 className="w-full text-center text-lg font-bold">
                                Muammar Najmi S
                            </h1>
                            <p className="w-full text-center italic text-gray-500">
                                Product Designer
                            </p>
                            <div className="w-full text-center text-sm font-light text-gray-700">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, voluptatum.
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center gap-2 p-4 md:w-1/3">
                            <div className="flex w-fit items-center justify-center rounded-full bg-white p-2 transition duration-300 ease-out hover:shadow-lg">
                                <LazyLoadImage
                                    src={`https://${process.env.REACT_APP_BUCKET_URL}/team/team_athaya.jpg`}
                                    alt="Placeholder"
                                    className="h-48 w-48 rounded-full object-cover object-center"
                                    effect="blur"
                                    width={192}
                                    height={192}
                                />
                                {/* IMG CONTENT USING LAZY IMAGE */}
                            </div>
                            <h1 className="w-full text-center text-lg font-bold">
                                Athaya Aqilah
                            </h1>
                            <p className="w-full text-center italic text-gray-500">
                                Front-End Developer
                            </p>
                            <div className="w-full text-center text-sm font-light text-gray-700">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, voluptatum.
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center gap-2 p-4 md:w-1/3">
                            <div className="flex w-fit items-center justify-center rounded-full bg-white p-2 transition duration-300 ease-out hover:shadow-lg">
                                <LazyLoadImage
                                    src={`https://${process.env.REACT_APP_BUCKET_URL}/team/team_annisa.png`}
                                    alt="Placeholder"
                                    className="h-48 w-48 rounded-full object-cover object-center"
                                    effect="blur"
                                    width={192}
                                    height={192}
                                />
                                {/* IMG CONTENT USING LAZY IMAGE */}
                            </div>
                            <h1 className="w-full text-center text-lg font-bold">
                                Annisa Rachmania Putri
                            </h1>
                            <p className="w-full text-center italic text-gray-500">
                                System Management
                            </p>
                            <div className="w-full text-center text-sm font-light text-gray-700">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, voluptatum.
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center gap-2 p-4 md:w-1/3">
                            <div className="flex w-fit items-center justify-center rounded-full bg-white p-2 transition duration-300 ease-out hover:shadow-lg">
                                <LazyLoadImage
                                    src={`https://${process.env.REACT_APP_BUCKET_URL}/team/team_raihan.jpg`}
                                    alt="Placeholder"
                                    className="h-48 w-48 rounded-full object-cover object-center"
                                    effect="blur"
                                    width={192}
                                    height={192}
                                />
                                {/* IMG CONTENT USING LAZY IMAGE */}
                            </div>
                            <h1 className="w-full text-center text-lg font-bold">
                                Raihan Herlambang
                            </h1>
                            <p className="w-full text-center italic text-gray-500">
                                System Management
                            </p>
                            <div className="w-full text-center text-sm font-light text-gray-700">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, voluptatum.
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="kontak"
                    className="flex flex-col gap-4 px-8 py-8 md:px-16"
                >
                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex items-center justify-center gap-2 md:gap-4">
                            <svg
                                width="75"
                                height="4"
                                viewBox="0 0 75 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 3.5H164"
                                    stroke="#A01B14"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <h1 className="text-center text-3xl font-bold">
                                Kontak Kami
                            </h1>
                            <svg
                                width="75"
                                height="4"
                                viewBox="0 0 75 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 3.5H164"
                                    stroke="#A01B14"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <p className="text-center text-lg">
                            Memiliki pertanyaan atau saran? Hubungi kami!
                        </p>
                    </div>
                    <div className="flex flex-col justify-center md:flex-row md:flex-wrap">
                        <div className="m-2 flex w-full flex-col items-start gap-4 rounded-md bg-white p-6 shadow-md transition duration-300 ease-out hover:shadow-2xl md:w-1/3">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                size="2xl"
                                style={{ color: "#e6721c" }}
                            />
                            <div>
                                <h1 className="text-2xl font-bold">Alamat</h1>
                                <p className="text-gray-700">
                                    Surabaya, Jawa Timur, Indonesia
                                </p>
                            </div>
                        </div>
                        <div className="m-2 flex w-full flex-col items-start gap-4 rounded-md bg-white p-6 shadow-md transition duration-300 ease-out hover:shadow-2xl md:w-1/3">
                            <FontAwesomeIcon
                                icon={faPhone}
                                size="2xl"
                                style={{ color: "#e6721c" }}
                            />
                            <div>
                                <h1 className="text-2xl font-bold">
                                    Nomor Kami
                                </h1>
                                <p className="text-gray-700">
                                    +62 877-0303-2800
                                </p>
                            </div>
                        </div>
                        <div className="m-2 flex w-full flex-col items-start gap-4 rounded-md bg-white p-6 shadow-md transition duration-300 ease-out hover:shadow-2xl md:w-1/3">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                size="2xl"
                                style={{ color: "#e6721c" }}
                            />
                            <div>
                                <h1 className="text-2xl font-bold">Email</h1>
                                <p className="text-gray-700">
                                    steven.soewignyo@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="m-2 flex w-full flex-col items-start gap-4 rounded-md bg-white p-6 shadow-md transition duration-300 ease-out hover:shadow-2xl md:w-1/3">
                            <FontAwesomeIcon
                                icon={faPeopleGroup}
                                size="2xl"
                                style={{ color: "#e6721c" }}
                            />
                            <div>
                                <h1 className="text-2xl font-bold">
                                    Kode Tim Dicoding
                                </h1>
                                <p className="text-gray-700">C523-PS033</p>
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

export default LandingHomePage;
