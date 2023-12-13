import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleLogoSVG from "../../../components/SVGs/GoogleLogoSVG";
import AppleLogoSVG from "../../../components/SVGs/AppleLogoSVG";
import MicrosoftLogoSVG from "../../../components/SVGs/MicrosoftLogoSVG";
import BlackEmailLogoSVG from "../../../components/SVGs/BlackEmailLogoSVG";

function ApplicationRegisterPage() {
    useEffect(() => {
        document.title = "WisNu - Daftar Akun";
    }, []);

    const [step, setStep] = useState(1);
    const [registerFormData, setRegisterFormData] = useState({
        profilePictureAddress: "images/default-profile-picture.png",
        emailAddress: "",
        firstName: "",
        lastName: "",
        birthPlace: "",
        birthDate: "",
        userName: "",
        phoneNumber: "",
        address: "",
        city: "",
        province: "",
        postalCode: "",
        password: "",
        confirmPassword: "",
    });
    const [provinceId, setProvinceId] = useState("");
    const [provinceList, setProvinceList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [profileImage, setProfileImage] = useState(null);

    const [cityReady, setCityReady] = useState(false);

    useEffect(() => {
        axios
            .get(
                "https://stevensa1.github.io/api-wilayah-indonesia/api/provinces.json",
            )
            .then((res) => {
                setProvinceList(res.data);
            })
            .catch((e) => {
                throw new Error(e);
            });
    }, []);

    const handleProvinceChange = (e) => {
        setProvinceId(e.target.value);
        setRegisterFormData({
            ...registerFormData,
            [e.target.name]:
                e.target.options[e.target.selectedIndex].getAttribute("real"),
        });
    };

    useEffect(() => {
        if (provinceId !== "") {
            axios
                .get(
                    `https://stevensa1.github.io/api-wilayah-indonesia/api/regencies/${provinceId}.json`,
                )
                .then((res) => {
                    setCityList(res.data);
                    setCityReady(true);
                })
                .catch((e) => {
                    throw new Error(e);
                });
        }
    }, [provinceId]);

    const handleFormChange = (e) => {
        setRegisterFormData({
            ...registerFormData,
            [e.target.name]: e.target.value,
        });
        console.log(registerFormData);
    };

    const validateEmail = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailAddress = registerFormData.emailAddress;
        const isValidEmail = emailRegex.test(emailAddress);
        if (!isValidEmail) {
            return alert("Email address is not valid!");
        } else {
            axios
                .post(`${process.env.REACT_APP_BACKEND_HOST}/email`, {
                    emailAddress,
                })
                .then((res) => {
                    if (res.status === 200) {
                        setStep(2);
                        return alert(
                            `${registerFormData.emailAddress} is valid email address and available!`,
                        );
                    }
                })
                .catch((e) => {
                    if (e.response.status === 409) {
                        return alert(
                            `${registerFormData.emailAddress} is valid email address but already registered!`,
                        );
                    }
                    if (e.response.status === 400) {
                        return alert(
                            `${registerFormData.emailAddress} is invalid email address!`,
                        );
                    }
                    alert(
                        "Terjadi kesalahan pada sistem. Silahkan hubungi admin.",
                    );
                    // throw new Error(e);
                });
        }
    };

    const handleProfilePictureChange = (e) => {
        setProfileImage(e.target.files[0]);
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        // Process profile picture upload
        const fileKey = profileImage.name;
        axios
            .get(
                `${process.env.REACT_APP_BACKEND_HOST}/presigned-url?filename=${fileKey}`,
            )
            .then((res) => {
                const presignedUrl = res.data.presignedUrl;
                console.log(presignedUrl);
                axios
                    .put(
                        presignedUrl,
                        { data: profileImage },
                        {
                            headers: {
                                "Content-Type": profileImage.type,
                            },
                        },
                    )
                    .then((res) => {
                        console.log(res);
                        setRegisterFormData({
                            ...registerFormData,
                            profilePictureAddress: `https://${process.env.R2_BUCKET_NAME}.s3.${process.env.R2_REGION}.amazonaws.com/${fileKey}`,
                        });
                        // Process registration
                        axios
                            .post(
                                `${process.env.REACT_APP_BACKEND_HOST}/register`,
                                {
                                    firstName: registerFormData.firstName,
                                    lastName: registerFormData.lastName,
                                    birthPlace: registerFormData.birthPlace,
                                    birthDate: registerFormData.birthDate,
                                    userName: registerFormData.userName,
                                    emailAddress: registerFormData.emailAddress,
                                    phoneNumber: registerFormData.phoneNumber,
                                    address: registerFormData.address,
                                    city: registerFormData.city,
                                    province: registerFormData.province,
                                    postalCode: registerFormData.postalCode,
                                    password: registerFormData.password,
                                    profilePictureAddress:
                                        registerFormData.profilePictureAddress,
                                },
                            )
                            .then((res) => {
                                if (res.status === 201) {
                                    alert(
                                        "Registrasi berhasil! Silahkan login untuk melanjutkan.",
                                    );
                                    // window.location.href = "/login";
                                }
                            })
                            .catch((e) => {
                                alert(
                                    "Terjadi kesalahan pada sistem. Silahkan hubungi admin.",
                                );
                                throw new Error(e);
                            });
                    })
                    .catch((e) => {
                        alert(
                            "Terjadi kesalahan saat upload foto profile. Silahkan hubungi admin.",
                        );
                        console.log(e);
                    });
            })
            .catch((e) => {
                alert(
                    "Terjadi kesalahan pada presigned URL. Silahkan hubungi admin.",
                );
                console.log(e);
            });
    };

    return (
        <>
            <div className="bg-gray flex h-full flex-row-reverse items-center justify-center p-4 md:h-full md:items-start md:bg-red-orange-600 md:p-0">
                <div className="flex flex-col gap-8 rounded-lg bg-white p-8 shadow-md md:max-h-full md:min-h-screen md:p-12 md:shadow-none">
                    <div>
                        <h1 className="text-3xl font-bold">Selamat Datang!</h1>
                        <p className="text-gray">
                            Daftar untuk menggunakan WisNu dengan pengalaman
                            penuh!
                        </p>
                    </div>
                    {step === 1 && (
                        <>
                            <div className="flex flex-col gap-4">
                                <button className="flex justify-center rounded-full border px-4 py-3">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-6 w-6 items-center justify-center">
                                            <GoogleLogoSVG height="24" />
                                        </div>
                                        <span>Lanjutkan dengan Google</span>
                                    </div>
                                </button>
                                <button className="flex justify-center rounded-full border px-4 py-3">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-6 w-6 items-center justify-center">
                                            <MicrosoftLogoSVG height="24" />
                                        </div>
                                        <span>Lanjutkan dengan Microsoft</span>
                                    </div>
                                </button>
                                <button className="flex justify-center rounded-full border px-4 py-3">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-6 w-6 items-center justify-center">
                                            <AppleLogoSVG height="24" />
                                        </div>
                                        <span>Lanjutkan dengan Apple</span>
                                    </div>
                                </button>
                            </div>
                            <div className="flex w-full items-center">
                                <hr className="w-full border-gray-300" />
                                <div className="mx-4 text-gray-400">Atau</div>
                                <hr className="w-full border-gray-300" />
                            </div>
                            <form
                                onSubmit={validateEmail}
                                className="flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                    <BlackEmailLogoSVG height="16" />
                                    <input
                                        className="w-full border-0 outline-none"
                                        name="emailAddress"
                                        type="email"
                                        value={registerFormData.emailAddress}
                                        placeholder="Masukkan alamat email..."
                                        onChange={handleFormChange}
                                    />
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
                                    Sudah punya akun?{" "}
                                    <a
                                        href="/login"
                                        className="text-red-orange-600 hover:underline"
                                    >
                                        Masuk
                                    </a>
                                </div>
                            </div>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <form
                                onSubmit={() => setStep(3)}
                                className="flex flex-col gap-4"
                            >
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-sm font-bold text-gray-500"
                                        htmlFor="firstName"
                                    >
                                        Nama depan
                                    </label>
                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                        <input
                                            required
                                            className="w-full border-0 outline-none"
                                            name="firstName"
                                            value={registerFormData.firstName}
                                            type="text"
                                            placeholder="Nama depan"
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-sm font-bold text-gray-500"
                                        htmlFor="lastName"
                                    >
                                        Nama belakang
                                    </label>
                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                        <input
                                            required
                                            className="w-full border-0 outline-none"
                                            name="lastName"
                                            value={registerFormData.lastName}
                                            type="text"
                                            placeholder="Nama belakang"
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-sm font-bold text-gray-500"
                                        htmlFor="phoneNumber"
                                    >
                                        Nomor Handphone
                                    </label>
                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                        <input
                                            required
                                            className="w-full border-0 outline-none"
                                            name="phoneNumber"
                                            value={registerFormData.phoneNumber}
                                            type="tel"
                                            placeholder="Masukkan nomor handphone"
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-sm font-bold text-gray-500"
                                        htmlFor="province"
                                    >
                                        Provinsi
                                    </label>
                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                        <select
                                            required
                                            onChange={handleProvinceChange}
                                            placeholder="Pilih provinsi"
                                            value={provinceId}
                                            name="province"
                                            className="w-full border-0 outline-none"
                                        >
                                            <option key="0" value="" disabled>
                                                Silahkan pilih provinsi
                                            </option>
                                            {provinceList.map((pvc) => (
                                                <option
                                                    key={pvc.id}
                                                    value={pvc.id}
                                                    real={pvc.name}
                                                >
                                                    {pvc.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-sm font-bold text-gray-500"
                                        htmlFor="city"
                                    >
                                        Kabupaten/Kota
                                    </label>
                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                        {!cityReady ? (
                                            <select
                                                disabled
                                                className="w-full border-0 outline-none"
                                                placeholder="Pilih kabupaten/kota"
                                            >
                                                <option value="">
                                                    Pilih provinsi terlebih
                                                    dahulu
                                                </option>
                                            </select>
                                        ) : (
                                            <select
                                                required
                                                onChange={handleFormChange}
                                                placeholder="Pilih kabupaten/kota"
                                                value={registerFormData.city}
                                                name="city"
                                                className="w-full border-0 outline-none"
                                            >
                                                {cityList?.map((city) => (
                                                    <option
                                                        key={city.id}
                                                        value={city.name}
                                                    >
                                                        {city.name}
                                                    </option>
                                                ))}
                                            </select>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-sm font-bold text-gray-500"
                                        htmlFor="address"
                                    >
                                        Alamat rumah
                                    </label>
                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                        <input
                                            required
                                            className="w-full border-0 outline-none"
                                            value={registerFormData.address}
                                            name="address"
                                            type="text"
                                            placeholder="Alamat rumah"
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        required
                                        className="text-sm font-bold text-gray-500"
                                        htmlFor="postalCode"
                                    >
                                        Kode postal
                                    </label>
                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                        <input
                                            required
                                            value={registerFormData.postalCode}
                                            className="w-full border-0 outline-none"
                                            name="postalCode"
                                            type="number"
                                            placeholder="Masukkan kode postal"
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-sm font-bold text-gray-500"
                                        htmlFor="birthPlace"
                                    >
                                        Kota Tempat lahir
                                    </label>
                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                        <input
                                            required
                                            value={registerFormData.birthPlace}
                                            className="w-full border-0 outline-none"
                                            name="birthPlace"
                                            type="text"
                                            placeholder="Tempat lahir"
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-sm font-bold text-gray-500"
                                        htmlFor="birthDate"
                                    >
                                        Tanggal lahir
                                    </label>
                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                        <input
                                            required
                                            value={registerFormData.birthDate}
                                            className="w-full border-0 outline-none"
                                            name="birthDate"
                                            type="date"
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                >
                                    Lanjutkan Kredensial
                                </button>
                            </form>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <form
                                onSubmit={() => setStep(4)}
                                className="flex flex-col gap-4"
                            >
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-sm font-bold text-gray-500"
                                        htmlFor="profilePicture"
                                    >
                                        Foto Profil
                                    </label>
                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                        <input
                                            type="file"
                                            name="profilePicture"
                                            accept="image/*"
                                            onChange={
                                                handleProfilePictureChange
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label
                                        className="text-sm font-bold text-gray-500"
                                        htmlFor="userName"
                                    >
                                        Username (nama pengguna)
                                    </label>
                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                        <input
                                            required
                                            value={registerFormData.userName}
                                            className="w-full border-0 outline-none"
                                            name="userName"
                                            type="text"
                                            placeholder="Contoh: wisnu01"
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                >
                                    Tinjau Informasi Akun
                                </button>
                            </form>
                        </>
                    )}
                    {step === 4 && (
                        <>
                            <div className="flex flex-col gap-4">
                                <h2 className="mb-4 text-2xl font-bold">
                                    Pratinjau Informasi Akun
                                </h2>
                                <div className="flex flex-col gap-4 rounded-md border border-gray-300 p-4">
                                    <div className="flex flex-col">
                                        <span className="font-semibold">
                                            Nama Lengkap:
                                        </span>
                                        <span>{`${registerFormData.firstName} ${registerFormData.lastName} (${registerFormData.userName})`}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold">
                                            Email:
                                        </span>
                                        <span>
                                            {registerFormData.emailAddress}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold">
                                            Nomor Handphone:
                                        </span>
                                        <span>
                                            {registerFormData.phoneNumber}
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold">
                                            Alamat:
                                        </span>
                                        <span>{`${registerFormData.address}, ${registerFormData.city}, ${registerFormData.province}, ${registerFormData.postalCode}`}</span>
                                    </div>
                                    {/* Add other fields as needed */}
                                </div>
                                <form
                                    onSubmit={handleRegistration}
                                    className="flex flex-col gap-4"
                                >
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="text-sm font-bold text-gray-500"
                                            htmlFor="password"
                                        >
                                            Buat Kata sandi
                                        </label>
                                        <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                            <input
                                                required
                                                className="w-full border-0 outline-none"
                                                name="password"
                                                type="password"
                                                placeholder="Buat kata sandi"
                                                onChange={handleFormChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="text-sm font-bold text-gray-500"
                                            htmlFor="confirmPassword"
                                        >
                                            Konfirmasi Kata sandi
                                        </label>
                                        <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                            <input
                                                required
                                                className="w-full border-0 outline-none"
                                                name="confirmPassword"
                                                type="password"
                                                placeholder="Buat kata sandi"
                                                onChange={handleFormChange}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                    >
                                        Buat Akun
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
                <div className="hidden h-screen w-full justify-center gap-4 p-12 text-white md:flex md:flex-col">
                    <h1 className="text-7xl font-bold">
                        Selamat datang di WisNu: Wisata Nusantara!
                    </h1>
                    <p className="text-2xl">
                        Silahkan melanjutkan proses pembuatan akun untuk
                        menikmati pengalaman yang menyenangkan dalam
                        mengeksplorasi wisata di Nusantara!
                    </p>
                </div>
            </div>
        </>
    );
}

export default ApplicationRegisterPage;
