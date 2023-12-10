import React from "react";
import ApplicationNavigationBar from "../../../components/Application/NavigationBar";
import LandingPageFooter from "../../../components/landingPage/Footer";
import { useNavigate } from "react-router-dom";
import NotFoundSVG from "../../../components/SVGs/NotFoundSVG";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
                <ApplicationNavigationBar />
            </div>
            <div className="flex h-screen w-screen flex-col-reverse items-center gap-8 px-16 py-2 md:flex-row">
                <div className="flex w-full flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-bold">Ooopsss!</h1>
                        <h2 className="text-3xl text-gray-700">
                            Halaman tidak ditemukan
                        </h2>
                    </div>
                    <p className="text-lg">
                        Sepertinya halaman yang Anda tuju tidak atau belum
                        tersedia, harap periksa kembali laman yang Anda tuju
                        atau hubungi administrator kami.
                    </p>
                    <button
                        onClick={() => {
                            navigate(-1);
                        }}
                        className="flex w-fit items-center gap-2 rounded-md bg-red-orange-600 px-4 py-2 text-white shadow-md transition-all duration-300 hover:bg-red-orange-700"
                    >
                        Kembali
                    </button>
                </div>
                <div className="flex w-full flex-col items-center">
                    <div className="hidden md:flex">
                        <NotFoundSVG height="200" />
                    </div>
                    <div className="flex md:hidden">
                        <NotFoundSVG height="150" />
                    </div>
                    <div className="flex w-full flex-col items-center">
                        <p className="text-lg">Page not found.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <LandingPageFooter />
            </div>
        </>
    );
}

export default NotFoundPage;
