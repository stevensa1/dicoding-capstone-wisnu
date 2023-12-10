import React from "react";
import ApplicationNavigationBar from "../../../components/Application/NavigationBar";
import LandingPageFooter from "../../../components/landingPage/Footer";
import DestinationBox from "../../../components/Application/DestinationBox";
import NewsSlick from "../../../components/Application/NewsSlick";

function ApplicationHome() {
    return (
        <>
            <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
                <ApplicationNavigationBar />
            </div>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-gray-100 px-6 py-2 pt-20">
                <p className="rounded-md border border-green-400 bg-green-200 p-4">
                    WisNu sedang membuka pendaftaran untuk Mitra atau
                    penyelenggara destinasi wisata, silahkan untuk melakukan
                    pendaftaran untuk proses registrasi yang cepat.
                </p>
                <NewsSlick />
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Layanan WisNu</h1>
                    <div className="flex flex-wrap gap-1">
                        <div className="flex flex-col items-center gap-1">
                            <div className="h-12 w-12 rounded-full bg-black"></div>
                            <div className="w-24 text-center text-sm">
                                Destinasi Wisata
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="h-12 w-12 rounded-full bg-black"></div>
                            <div className="w-24 text-center text-sm">
                                Tiket Saya
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="h-12 w-12 rounded-full bg-black"></div>
                            <div className="w-24 text-center text-sm">
                                Voucher dan Promo
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="h-12 w-12 rounded-full bg-black"></div>
                            <div className="w-24 text-center text-sm">
                                Riwayat Pembelian
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="h-12 w-12 rounded-full bg-black"></div>
                            <div className="w-24 text-center text-sm">
                                Customer Service
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Destinasi Populer</h1>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <DestinationBox
                            image="images/landing-bg.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                        <DestinationBox
                            image="images/landing-section-number.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                        <DestinationBox
                            image="images/landing-bg.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                        <DestinationBox
                            image="images/landing-bg.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Destinasi Viral</h1>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <DestinationBox
                            image="images/landing-bg.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                        <DestinationBox
                            image="images/landing-section-number.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                        <DestinationBox
                            image="images/landing-bg.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                        <DestinationBox
                            image="images/landing-bg.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Destinasi Baru</h1>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <DestinationBox
                            image="images/landing-bg.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                        <DestinationBox
                            image="images/landing-section-number.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                        <DestinationBox
                            image="images/landing-bg.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                        <DestinationBox
                            image="images/landing-bg.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">
                        Lengkapi Pengalaman Anda Berpetualang di Nusantara
                    </h1>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <DestinationBox
                            image="images/landing-bg.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                        <DestinationBox
                            image="images/landing-section-number.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                        <DestinationBox
                            image="images/landing-bg.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
                        <DestinationBox
                            image="images/landing-bg.jpg"
                            name="Destination Name"
                            category="Gunung"
                            location="Kota Surabaya"
                            description="Short description of the destination."
                            rating={4}
                        />
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
