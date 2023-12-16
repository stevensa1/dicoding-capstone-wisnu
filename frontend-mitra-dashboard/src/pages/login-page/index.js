import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import BlackEmailLogoSVG from "../../components/SVGs/BlackEmailLogoSVG";
import BlackLockLogoSVG from "../../components/SVGs/BlackLockLogoSVG";

function LoginPage() {
    const sessionToken = Cookie.get("sessionToken");
    useEffect(() => {
        if (sessionToken) {
            axios
                .get(
                    `${process.env.REACT_APP_BACKEND_HOST}/api/verify/partner/`,
                    {
                        headers: {
                            Authorization: `Bearer ${sessionToken}`,
                        },
                    },
                )
                .then((res) => {
                    if (res.status === 200) {
                        window.location.href = "/dashboard";
                    }
                });
        }
    }, [sessionToken]);
    useEffect(() => {
        document.title = "WisNu Partner - Masuk";
    }, [sessionToken]);

    const [formData, setFormData] = useState({
        emailAddress: "",
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
            .post(
                `${process.env.REACT_APP_BACKEND_HOST}/api/partner/login`,
                formData,
            )
            .then((res) => {
                if (res.status === 200) {
                    Cookie.set("sessionToken", res.data.token, {
                        expires: 1,
                    });
                    window.location.href = "/dashboard";
                }
            })
            .catch((e) => {
                if (e.response?.status === 404) {
                    setIsUserNameNotExist(true);
                } else if (e.response?.status === 401) {
                    setIsPasswordIncorrect(true);
                } else {
                    console.error(e);
                    alert("Terjadi kesalahan. Silahkan coba lagi.");
                }
            });
    };
    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-center bg-red-orange-600 p-4">
                <div className="flex w-full flex-col gap-4 rounded-md bg-white p-8 md:w-max">
                    <div className="flex items-center justify-center gap-2 text-red-orange-950">
                        <div className="text-2xl font-bold">WisNu</div>
                        <div className="text-xl font-bold uppercase tracking-widest">
                            Partner
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h1 className="text-xl font-bold text-gray-600">
                            Masuk ke Akun Mitra
                        </h1>
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
                                    name="emailAddress"
                                    value={formData.emailAddress}
                                    className="w-full border-0 outline-none"
                                    type="email"
                                    placeholder="Masukkan alamat email mitra"
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
                                    placeholder="Masukkan password mitra"
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
                                Masuk
                            </button>
                        </form>
                        <div className="flex w-full items-center justify-center">
                            <div className="text-center">
                                Belum punya akun?{" "}
                                <a
                                    href="/request/partner"
                                    className="text-red-orange-600 hover:underline"
                                >
                                    Ajukan permohonan pembukaan akun mitra
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
