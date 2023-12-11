import React, { useEffect } from "react";
import GoogleLogoSVG from "../../../components/SVGs/GoogleLogoSVG";
// import FacebookLogoSVG from "../../../components/SVGs/FacebookLogoSVG";
import AppleLogoSVG from "../../../components/SVGs/AppleLogoSVG";
import MicrosoftLogoSVG from "../../../components/SVGs/MicrosoftLogoSVG";
import BlackEmailLogoSVG from "../../../components/SVGs/BlackEmailLogoSVG";
import BlackLockLogoSVG from "../../../components/SVGs/BlackLockLogoSVG";

function ApplicationLoginPage() {
    useEffect(() => {
        document.title = "WisNu - Masuk Akun";
    }, []);
    return (
        <>
            <div className="bg-gray flex h-full items-center justify-center p-4 md:h-full md:items-start md:bg-red-orange-600 md:p-0">
                <div className="flex flex-col gap-8 rounded-lg bg-white p-8 shadow-md md:max-h-full md:min-h-screen md:p-12 md:shadow-none">
                    <div>
                        <h1 className="text-3xl font-bold">Masuk ke WisNu</h1>
                        <p className="text-gray">
                            Masuk untuk menggunakan WisNu dengan pengalaman
                            penuh!
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <button className="flex justify-center rounded-full border px-4 py-3">
                            <div className="flex items-center gap-4">
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <GoogleLogoSVG height="24" />
                                </div>
                                <span>Masuk dengan Google</span>
                            </div>
                        </button>
                        {/* <button className="flex justify-center rounded-full border px-4 py-3">
                            <div className="flex items-center gap-4">
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <FacebookLogoSVG height="24" />
                                </div>
                                <span>Masuk dengan Facebook</span>
                            </div>
                        </button> */}
                        <button className="flex justify-center rounded-full border px-4 py-3">
                            <div className="flex items-center gap-4">
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <MicrosoftLogoSVG height="24" />
                                </div>
                                <span>Masuk dengan Microsoft</span>
                            </div>
                        </button>
                        <button className="flex justify-center rounded-full border px-4 py-3">
                            <div className="flex items-center gap-4">
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <AppleLogoSVG height="24" />
                                </div>
                                <span>Masuk dengan Apple</span>
                            </div>
                        </button>
                    </div>
                    <div className="flex w-full items-center">
                        <hr className="w-full border-gray-300" />
                        <div className="mx-4 text-gray-400">Atau</div>
                        <hr className="w-full border-gray-300" />
                    </div>
                    <form className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                            <BlackEmailLogoSVG height="16" />
                            <input
                                className="w-full border-0 outline-none"
                                type="text"
                                placeholder="Masukkan alamat email..."
                            />
                        </div>
                        <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                            <BlackLockLogoSVG height="16" />
                            <input
                                className="w-full border-0 outline-none"
                                type="password"
                                placeholder="Masukkan password..."
                            />
                        </div>
                        <div className="flex justify-end">
                            <a
                                href="/"
                                className="text-red-orange-600 hover:underline"
                            >
                                Lupa password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                        >
                            Lanjutkan dengan email
                        </button>
                    </form>
                    <div className="flex w-full items-center justify-center">
                        <div className="mx-4">
                            Belum punya akun?{" "}
                            <a
                                href="/register"
                                className="text-red-orange-600 hover:underline"
                            >
                                Buat akun
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden h-screen w-full justify-center gap-4 p-12 text-white md:flex md:flex-col">
                    <h1 className="text-7xl font-bold">
                        Selamat datang kembali di WisNu: Wisata Nusantara!
                    </h1>
                    <p className="text-2xl">Silahkan masuk untuk lanjut.</p>
                </div>
            </div>
        </>
    );
}

export default ApplicationLoginPage;
