import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import GoogleLogoSVG from "../../../components/SVGs/GoogleLogoSVG";
import AppleLogoSVG from "../../../components/SVGs/AppleLogoSVG";
import MicrosoftLogoSVG from "../../../components/SVGs/MicrosoftLogoSVG";
import BlackEmailLogoSVG from "../../../components/SVGs/BlackEmailLogoSVG";
import BlackLockLogoSVG from "../../../components/SVGs/BlackLockLogoSVG";

function ApplicationLoginPage() {
    useEffect(() => {
        document.title = "WisNu - Masuk Akun";
    }, []);

    useEffect(() => {
        const sessionToken = Cookie.get("sessionToken");
        console.log(sessionToken);
    });

    const [formData, setFormData] = useState({
        userName: "",
        password: "",
    });

    const [isUserNameNotExist, setIsUserNameNotExist] = useState(false);
    const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setIsUserNameNotExist(false);
        setIsPasswordIncorrect(false);

        axios
            .post(`${process.env.REACT_APP_BACKEND_HOST}/api/login`, formData)
            .then((res) => {
                if (res.status === 200) {
                    Cookie.set("sessionToken", res.data.token, {
                        expires: 1,
                    });
                    window.location.href = "/home";
                }
            })
            .catch((e) => {
                if (e.response.status === 404) {
                    setIsUserNameNotExist(true);
                } else if (e.response.status === 401) {
                    setIsPasswordIncorrect(true);
                } else {
                    console.error(e);
                    alert("Terjadi kesalahan. Silahkan coba lagi.");
                }
            });
    };
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
                    <form
                        onSubmit={handleLogin}
                        className="flex flex-col gap-4"
                    >
                        <div
                            className={`flex items-center gap-2 rounded-md px-4 py-2 ${
                                isUserNameNotExist
                                    ? "border-2 border-red-500"
                                    : "border"
                            }`}
                        >
                            <BlackEmailLogoSVG height="16" />
                            <input
                                required
                                name="userName"
                                value={formData.userName}
                                className="w-full border-0 outline-none"
                                type="text"
                                placeholder="Masukkan alamat email/username"
                                onChange={handleFormChange}
                            />
                        </div>
                        <div
                            className={`flex items-center gap-2 rounded-md px-4 py-2 ${
                                isPasswordIncorrect || isUserNameNotExist
                                    ? "border-2 border-red-500"
                                    : "border"
                            }`}
                        >
                            <BlackLockLogoSVG height="16" />
                            <input
                                required
                                className="w-full border-0 outline-none"
                                name="password"
                                value={formData.password}
                                type="password"
                                placeholder="Masukkan password..."
                                onChange={handleFormChange}
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
