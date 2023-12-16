import React, { useState, useEffect } from "react";
// import { Bar } from 'react-chartjs-2';
import Sidebar from "../../components/Sidebar";
import NavigationBar from "../../components/NavigationBar";
import CustomBox from "../../components/CustomBox";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import axios from "axios";
import Cookie from "js-cookie";

function KelolaSitusWisata() {
    const sessionToken = Cookie.get("sessionToken");
    useEffect(() => {
        document.title = "WisNu Partner - Kelola Situs Wisata";
    }, []);
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_BACKEND_HOST}/api/partner/destination/`,
                {
                    headers: {
                        Authorization: `Bearer ${sessionToken}`,
                    },
                },
            )
            .then((res) => {
                setDestinations(res.data.destinations);
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [filesUploaded, setFilesUploaded] = useState(false);
    const [registrationModal, setRegistrationModal] = useState(false);
    const [destinationStep, setDestinationStep] = useState(1);
    const [registerDestination, setRegisterDestination] = useState({
        destinationName: "",
        destinationCategory: "",
        destinationAddress: "",
        destinationDescription: "",
        destinationHistory: "",
    });
    const initialFacility = {
        facilityName: "",
        facilityDescription: "",
    };
    const [facilities, setFacilities] = useState([initialFacility]);
    const [destinationPictures, setDestinationPictures] = useState([null]); // [ Files ]
    const [openTime, setOpenTime] = useState([
        {
            openTimeDay: "Minggu",
            openTimeStart: "",
            openTimeEnd: "",
            isClosed: false,
        },
        {
            openTimeDay: "Senin",
            openTimeStart: "",
            openTimeEnd: "",
            isClosed: false,
        },
        {
            openTimeDay: "Selasa",
            openTimeStart: "",
            openTimeEnd: "",
            isClosed: false,
        },
        {
            openTimeDay: "Rabu",
            openTimeStart: "",
            openTimeEnd: "",
            isClosed: false,
        },
        {
            openTimeDay: "Kamis",
            openTimeStart: "",
            openTimeEnd: "",
            isClosed: false,
        },
        {
            openTimeDay: "Jumat",
            openTimeStart: "",
            openTimeEnd: "",
            isClosed: false,
        },
        {
            openTimeDay: "Sabtu",
            openTimeStart: "",
            openTimeEnd: "",
            isClosed: false,
        },
    ]);
    const initialTicket = {
        ticketName: "",
        ticketDescription: "",
        ticketPrice: 0,
        ticketQuota: 0,
    };
    const [tickets, setTickets] = useState([initialTicket]);
    const siteStats = [
        {
            name: "Situs Wisata Terdaftar",
            value: "10",
            backgroundColor: "rgba(78, 255, 234, 0.5)",
        },
        {
            name: "Situs Wisata Aktif",
            value: "7",
            backgroundColor: "rgba(95, 255, 130, 0.5)",
        },
        {
            name: "Situs Wisata Nonaktif",
            value: "3",
            backgroundColor: "rgba(199, 199, 199, 0.5)",
        },
        {
            name: "Situs Wisata Perlu Perhatian",
            value: "3",
            backgroundColor: "rgba(252, 42, 31, 0.5)",
        },
    ];

    const StatisticBox = ({ name, value, backgroundColor }) => {
        return (
            <div
                className="flex h-28 w-full flex-col items-start justify-between rounded-xl p-4 md:h-32"
                style={{ backgroundColor: backgroundColor }}
            >
                <div className="md:text-md self-stretch font-poppins text-sm font-semibold text-black">
                    {name}
                </div>
                <div className="flex items-center justify-between self-stretch">
                    <div className="text-md font-poppins font-bold text-black md:text-xl">
                        {value}
                    </div>
                    <div className="h-9 w-9 rounded-full bg-red-950"></div>
                </div>
            </div>
        );
    };

    const BoxWithImage = ({
        url = "/",
        title,
        location,
        category,
        views,
        likes,
        favorites,
        imageHighlight,
    }) => {
        return (
            <Link
                to={url}
                target="_blank"
                className="flex w-full flex-col items-start gap-4 md:flex-row"
            >
                <img
                    className="aspect-video w-full shrink-0 grow-0 rounded-md md:h-[135px] md:w-[240px]"
                    src={`https://${process.env.REACT_APP_BUCKET_URL}${imageHighlight}`}
                    alt={`Gambar Wisata ${title}`}
                />
                <div className="flex h-full w-full flex-col">
                    <div className="mb-2 flex w-full flex-col">
                        <div className="text-xl font-semibold text-zinc-800">
                            {title}
                        </div>
                        <div className="text-base font-normal tracking-tight text-zinc-800">
                            {location}
                        </div>
                        <div className="text-base font-normal tracking-tight text-zinc-800">
                            {category}
                        </div>
                    </div>
                    <div className="flex h-full items-end justify-between">
                        <div className="text-base font-semibold text-zinc-800">
                            {views}
                        </div>
                        <div className="text-base font-semibold text-zinc-800">
                            {likes}
                        </div>
                        <div className="text-base font-semibold text-zinc-800">
                            {favorites}
                        </div>
                    </div>
                </div>
            </Link>
        );
    };

    const BoxLinks = () => {
        return (
            <div className="p-4 text-red-500 hover:text-red-700">
                <button
                    onClick={() => setRegistrationModal(true)}
                    className="mb-2 block text-red-500 hover:text-red-700"
                >
                    Register Situs Wisata
                </button>
                <a
                    href="/"
                    className="mb-2 block text-red-500 hover:text-red-700"
                >
                    Atur Status Situs Wisata
                </a>
                <a
                    href="/"
                    className="mb-2 block text-red-500 hover:text-red-700"
                >
                    Kelola Tiket Situs Wisata
                </a>
                <a
                    href="/"
                    className="mb-2 block text-red-500 hover:text-red-700"
                >
                    Kelola Kode Promo
                </a>
                <a
                    href="/"
                    className="mb-2 block text-red-500 hover:text-red-700"
                >
                    Push Notifikasi Wisata
                </a>
                <a
                    href="/"
                    className="mb-2 block text-red-500 hover:text-red-700"
                >
                    Push Notifikasi Pembeli
                </a>
                <a
                    href="/"
                    className="mb-2 block text-red-500 hover:text-red-700"
                >
                    Hapus Situs Wisata
                </a>
            </div>
        );
    };

    const handleInformationChange = (e) => {
        const { name, value } = e.target;
        setRegisterDestination({
            ...registerDestination,
            [name]: value,
        });
    };

    const handleFacilityChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...facilities];
        list[index] = {
            ...list[index],
            [name]: value,
        };
        setFacilities(list);
    };

    const handleAddFacility = () => {
        setFacilities([...facilities, initialFacility]);
    };

    const handleRemoveFacility = (index) => {
        const updatedFacilities = [...facilities];
        updatedFacilities.splice(index, 1);
        setFacilities(updatedFacilities);
    };

    const handlePictureChange = (index, e) => {
        const file = e.target.files[0];
        const MAX_FILE_SIZE = 1024 * 1024 * 10; // 10 MB

        // Check file size
        if (file.size > MAX_FILE_SIZE) {
            alert(
                `File size is too large! Maximum allowed size is ${
                    MAX_FILE_SIZE / 1024 / 1024
                } MB.`,
            );
            return; // Prevent setting state if size exceeds limit
        }
        const list = [...destinationPictures];
        list[index] = file;
        setDestinationPictures(list);
    };

    const handleAddPicture = () => {
        setDestinationPictures([...destinationPictures, null]);
    };

    const handleRemovePicture = (index) => {
        const updatedPictures = [...destinationPictures];
        updatedPictures.splice(index, 1);
        setDestinationPictures(updatedPictures);
    };

    const handleOpenTimeChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...openTime];
        if (name === "isClosed") {
            list[index] = {
                ...list[index],
                [name]: !list[index].isClosed,
            };
            // Reset previous value
            list[index] = {
                ...list[index],
                openTimeStart: "",
                openTimeEnd: "",
            };
            setOpenTime(list);
            return;
        }
        list[index] = {
            ...list[index],
            [name]: value,
        };
        setOpenTime(list);
    };

    const handleTicketChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...tickets];
        list[index] = {
            ...list[index],
            [name]: value,
        };
        setTickets(list);
    };

    const handleAddTicket = () => {
        setTickets([...tickets, initialTicket]);
    };

    const handleRemoveTicket = (index) => {
        const updatedTickets = [...tickets];
        updatedTickets.splice(index, 1);
        setTickets(updatedTickets);
    };

    const uploadFile = async (file, destinationName, index) => {
        const fileType = file.type.split("/")[1];
        const fileKey = `destination/${destinationName}/${index}.${fileType}`;
        const res = await axios.get(
            `${process.env.REACT_APP_BACKEND_HOST}/presigned-url?filename=${fileKey}`,
        );
        const presignedUrl = res.data.presignedUrl;

        await axios.put(presignedUrl, file, {
            headers: {
                "Content-Type": file.type,
            },
        });

        return `/${fileKey}`;
    };

    const [pictureDirectory, setPictureDirectory] = useState([]);
    const handleSubmission = async (e) => {
        e.preventDefault();
        // Use Promise.all to wait for all uploadFile promises
        const uploadedFiles = await Promise.all(
            destinationPictures.map(async (picture, index) => {
                if (picture) {
                    const filePath = await uploadFile(
                        picture,
                        registerDestination.destinationName,
                        index,
                    );

                    return {
                        alt: `Destination ${
                            registerDestination.destinationName
                        }-${index + 1}`,
                        imageAddress: filePath,
                    };
                }

                return null;
            }),
        );

        // Filter out null values
        const filteredFiles = uploadedFiles.filter((file) => file !== null);

        // Update pictureDirectory with the uploaded files
        setPictureDirectory([...pictureDirectory, ...filteredFiles]);

        // Set filesUploaded to true after setPictureDirectory is complete
        setFilesUploaded(true);
    };

    useEffect(() => {
        // Check if files have been uploaded
        if (filesUploaded && pictureDirectory.length > 0) {
            // Post destination to backend
            axios
                .post(
                    `${process.env.REACT_APP_BACKEND_HOST}/api/partner/destination/`,
                    {
                        destinationPictures: pictureDirectory,
                        destinationName: registerDestination.destinationName,
                        destinationCategory:
                            registerDestination.destinationCategory,
                        destinationAddress:
                            registerDestination.destinationAddress,
                        destinationDescription:
                            registerDestination.destinationDescription,
                        destinationHistory:
                            registerDestination.destinationHistory,
                        destinationFacility: facilities,
                        destinationOpenTime: openTime,
                        destinationTicket: tickets,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${sessionToken}`,
                        },
                    },
                )
                .then((res) => {
                    alert(
                        `Berhasil membuat destinasi wisata ${registerDestination.destinationName}`,
                    );
                    setRegistrationModal(false);
                    setDestinationStep(1);
                    setPictureDirectory([]);
                    setFilesUploaded(false); // Reset filesUploaded state
                    window.location.reload();
                })
                .catch((err) => {
                    alert(
                        `Gagal membuat destinasi wisata ${registerDestination.destinationName}`,
                    );
                    setPictureDirectory([]);
                    setFilesUploaded(false); // Reset filesUploaded state
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filesUploaded, pictureDirectory]);

    return (
        <>
            <Modal toggle={registrationModal}>
                <div className="flex w-[350px] flex-col p-4 md:w-[800px] md:p-8">
                    <div className="flex justify-between">
                        <h1 className="w-full text-lg font-semibold">
                            Buat Destinasi Wisata Baru
                        </h1>
                        <button
                            onClick={() => {
                                setRegistrationModal(false);
                                setDestinationStep(1);
                            }}
                            className="rounded-md bg-red-500 p-4 text-white"
                        ></button>
                    </div>
                    <hr className="my-2" />
                    <div className="flex flex-col">
                        <form onSubmit={handleSubmission}>
                            {destinationStep === 1 && (
                                <>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label
                                                className="text-sm font-bold text-gray-500"
                                                htmlFor="destinationName"
                                            >
                                                Nama Destinasi Wisata
                                            </label>
                                            <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                <input
                                                    required
                                                    className="w-full border-0 outline-none"
                                                    name="destinationName"
                                                    type="text"
                                                    value={
                                                        registerDestination.destinationName
                                                    }
                                                    onChange={
                                                        handleInformationChange
                                                    }
                                                    placeholder="Masukkan nama destinasi wisata"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                className="text-sm font-bold text-gray-500"
                                                htmlFor="destinationCategory"
                                            >
                                                Kategori Destinasi Wisata
                                            </label>
                                            <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                <select
                                                    required
                                                    placeholder="Pilih provinsi"
                                                    name="destinationCategory"
                                                    className="w-full border-0 outline-none"
                                                    value={
                                                        registerDestination.destinationCategory
                                                    }
                                                    onChange={
                                                        handleInformationChange
                                                    }
                                                >
                                                    <option
                                                        key="0"
                                                        value=""
                                                        disabled
                                                    >
                                                        Pilih kategori destinasi
                                                        wisata
                                                    </option>
                                                    <option value="Gunung">
                                                        Gunung
                                                    </option>
                                                    <option value="Danau">
                                                        Danau
                                                    </option>
                                                    <option value="Air Terjun">
                                                        Air Terjun
                                                    </option>
                                                    <option value="Taman">
                                                        Taman
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                className="text-sm font-bold text-gray-500"
                                                htmlFor="destinationAddress"
                                            >
                                                Alamat Destinasi Wisata
                                            </label>
                                            <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                <textarea
                                                    required
                                                    className="w-full border-0 outline-none"
                                                    name="destinationAddress"
                                                    type="text"
                                                    placeholder="Alamat destinasi wisata"
                                                    value={
                                                        registerDestination.destinationAddress
                                                    }
                                                    onChange={
                                                        handleInformationChange
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                className="text-sm font-bold text-gray-500"
                                                htmlFor="destinationDescription"
                                            >
                                                Deskripsi Destinasi Wisata
                                            </label>
                                            <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                <textarea
                                                    required
                                                    className="w-full border-0 outline-none"
                                                    name="destinationDescription"
                                                    type="text"
                                                    placeholder="Deskripsi destinasi wisata"
                                                    value={
                                                        registerDestination.destinationDescription
                                                    }
                                                    onChange={
                                                        handleInformationChange
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label
                                                className="text-sm font-bold text-gray-500"
                                                htmlFor="destinationHistory"
                                            >
                                                Sejarah Destinasi Wisata
                                            </label>
                                            <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                <textarea
                                                    required
                                                    className="w-full border-0 outline-none"
                                                    name="destinationHistory"
                                                    type="text"
                                                    placeholder="Sejarah tentang destinasi wisata"
                                                    value={
                                                        registerDestination.destinationHistory
                                                    }
                                                    onChange={
                                                        handleInformationChange
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="flex w-full justify-end">
                                            <button
                                                onClick={() =>
                                                    setDestinationStep(2)
                                                }
                                                className="w-fit rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                            >
                                                Lanjut
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                            {destinationStep === 2 && (
                                <>
                                    <div className="flex flex-col gap-4">
                                        {facilities.map((facility, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col gap-2"
                                            >
                                                <div className="flex flex-col gap-2">
                                                    <label
                                                        className="text-sm font-bold text-gray-500"
                                                        htmlFor="facilityName"
                                                    >
                                                        Nama Fasilitas
                                                    </label>
                                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                        <input
                                                            required
                                                            className="w-full border-0 outline-none"
                                                            name="facilityName"
                                                            type="text"
                                                            value={
                                                                facility.facilityName
                                                            }
                                                            placeholder="Masukkan judul fasilitas"
                                                            onChange={(e) =>
                                                                handleFacilityChange(
                                                                    index,
                                                                    e,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label
                                                        className="text-sm font-bold text-gray-500"
                                                        htmlFor="facilityDescription"
                                                    >
                                                        Deskripsi Fasilitas
                                                    </label>
                                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                        <textarea
                                                            required
                                                            className="w-full border-0 outline-none"
                                                            name="facilityDescription"
                                                            type="text"
                                                            value={
                                                                facility.facilityDescription
                                                            }
                                                            placeholder="Masukkan deskripsi fasilitas"
                                                            onChange={(e) =>
                                                                handleFacilityChange(
                                                                    index,
                                                                    e,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                {facilities.length > 1 && (
                                                    <button
                                                        className="mt-4 rounded-md border border-red-orange-600 px-4 py-2 text-red-orange-600 transition duration-300 hover:bg-red-orange-200"
                                                        onClick={() =>
                                                            handleRemoveFacility(
                                                                index,
                                                            )
                                                        }
                                                    >
                                                        Hapus Fasilitas
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <button
                                            onClick={handleAddFacility}
                                            className="mt-4 rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                        >
                                            + Tambah Fasilitas
                                        </button>
                                        <hr className="my-2" />
                                        <div className="flex w-full justify-end gap-2">
                                            <button
                                                onClick={() =>
                                                    setDestinationStep(1)
                                                }
                                                className="w-fit rounded-md border border-red-orange-600 px-4 py-2 text-red-orange-600 transition duration-300 hover:bg-red-orange-200"
                                            >
                                                Kembali
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setDestinationStep(3)
                                                }
                                                className="w-fit rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                            >
                                                Lanjut
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                            {destinationStep === 3 && (
                                <>
                                    <div className="flex flex-col gap-4">
                                        {destinationPictures.map(
                                            (picture, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col gap-2"
                                                >
                                                    <div className="flex flex-col gap-2">
                                                        <label
                                                            className="text-sm font-bold text-gray-500"
                                                            htmlFor="facilityName"
                                                        >
                                                            Gambar {index + 1}
                                                        </label>
                                                        <div>
                                                            <img
                                                                src={
                                                                    picture
                                                                        ? URL.createObjectURL(
                                                                              picture,
                                                                          )
                                                                        : "https://via.placeholder.com/250x150"
                                                                }
                                                                alt={`Destination ${
                                                                    index + 1
                                                                }`}
                                                                style={{
                                                                    maxWidth:
                                                                        "200px",
                                                                    maxHeight:
                                                                        "200px",
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                            <input
                                                                type="file"
                                                                accept="image/*"
                                                                onChange={(e) =>
                                                                    handlePictureChange(
                                                                        index,
                                                                        e,
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    {destinationPictures.length >
                                                        1 && (
                                                        <button
                                                            className="mt-4 rounded-md border border-red-orange-600 px-4 py-2 text-red-orange-600 transition duration-300 hover:bg-red-orange-200"
                                                            onClick={() =>
                                                                handleRemovePicture(
                                                                    index,
                                                                )
                                                            }
                                                        >
                                                            Hapus Gambar
                                                        </button>
                                                    )}
                                                </div>
                                            ),
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <button
                                            onClick={handleAddPicture}
                                            className="mt-4 rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                        >
                                            + Tambah Gambar
                                        </button>
                                        <hr className="my-2" />
                                        <div className="flex w-full justify-end gap-2">
                                            <button
                                                onClick={() =>
                                                    setDestinationStep(2)
                                                }
                                                className="w-fit rounded-md border border-red-orange-600 px-4 py-2 text-red-orange-600 transition duration-300 hover:bg-red-orange-200"
                                            >
                                                Kembali
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setDestinationStep(4)
                                                }
                                                className="w-fit rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                            >
                                                Lanjut
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                            {destinationStep === 4 && (
                                <>
                                    <div className="flex w-full flex-col gap-4">
                                        {openTime.map((time, index) => (
                                            <div className="flex w-full flex-col gap-2">
                                                <p className="text-sm font-bold text-gray-500">
                                                    {time.openTimeDay}
                                                </p>
                                                <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                    <input
                                                        required
                                                        className="w-full border-0 outline-none"
                                                        name="openTimeStart"
                                                        type="time"
                                                        placeholder="Masukkan nama destinasi wisata"
                                                        disabled={time.isClosed}
                                                        value={
                                                            time.openTimeStart
                                                        }
                                                        onChange={(e) => {
                                                            handleOpenTimeChange(
                                                                index,
                                                                e,
                                                            );
                                                        }}
                                                    />
                                                    <input
                                                        required
                                                        className="w-full border-0 outline-none"
                                                        name="openTimeEnd"
                                                        type="time"
                                                        placeholder="Masukkan nama destinasi wisata"
                                                        disabled={time.isClosed}
                                                        value={time.openTimeEnd}
                                                        onChange={(e) => {
                                                            handleOpenTimeChange(
                                                                index,
                                                                e,
                                                            );
                                                        }}
                                                    />
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        name="isClosed"
                                                        type="checkbox"
                                                        checked={time.isClosed}
                                                        onChange={(e) => {
                                                            handleOpenTimeChange(
                                                                index,
                                                                e,
                                                            );
                                                        }}
                                                    />
                                                    <label
                                                        className="text-sm font-bold text-gray-500"
                                                        htmlFor="isClosed"
                                                    >
                                                        Tutup
                                                    </label>
                                                </div>
                                            </div>
                                        ))}

                                        <hr className="my-2" />
                                        <div className="flex w-full justify-end gap-2">
                                            <button
                                                onClick={() =>
                                                    setDestinationStep(3)
                                                }
                                                className="w-fit rounded-md border border-red-orange-600 px-4 py-2 text-red-orange-600 transition duration-300 hover:bg-red-orange-200"
                                            >
                                                Kembali
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setDestinationStep(5)
                                                }
                                                className="w-fit rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                            >
                                                Lanjut
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                            {destinationStep === 5 && (
                                <>
                                    <div className="flex flex-col gap-4">
                                        {tickets.map((ticket, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-col gap-2"
                                            >
                                                <h1 className="text-xl font-bold">
                                                    Jenis Tiket {index + 1}
                                                </h1>
                                                <div className="flex flex-col gap-2">
                                                    <label
                                                        className="text-sm font-bold text-gray-500"
                                                        htmlFor="ticketName"
                                                    >
                                                        Nama Tiket
                                                    </label>
                                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                        <input
                                                            required
                                                            className="w-full border-0 outline-none"
                                                            name="ticketName"
                                                            type="text"
                                                            value={
                                                                ticket.ticketName
                                                            }
                                                            placeholder="Masukkan nama tiket"
                                                            onChange={(e) =>
                                                                handleTicketChange(
                                                                    index,
                                                                    e,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label
                                                        className="text-sm font-bold text-gray-500"
                                                        htmlFor="ticketDescription"
                                                    >
                                                        Deskripsi Tiket
                                                    </label>
                                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                        <textarea
                                                            required
                                                            className="w-full border-0 outline-none"
                                                            name="ticketDescription"
                                                            type="text"
                                                            value={
                                                                ticket.ticketDescription
                                                            }
                                                            placeholder="Deskripsikan benefit dari tiket jenis ini."
                                                            onChange={(e) =>
                                                                handleTicketChange(
                                                                    index,
                                                                    e,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label
                                                        className="text-sm font-bold text-gray-500"
                                                        htmlFor="ticketPrice"
                                                    >
                                                        Harga Tiket
                                                    </label>
                                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                        <input
                                                            required
                                                            className="w-full border-0 outline-none"
                                                            name="ticketPrice"
                                                            type="number"
                                                            value={
                                                                ticket.ticketPrice
                                                            }
                                                            placeholder="Masukkan harga tiket"
                                                            onChange={(e) =>
                                                                handleTicketChange(
                                                                    index,
                                                                    e,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label
                                                        className="text-sm font-bold text-gray-500"
                                                        htmlFor="ticketQuota"
                                                    >
                                                        Kuota Tiket
                                                    </label>
                                                    <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                                        <input
                                                            required
                                                            className="w-full border-0 outline-none"
                                                            name="ticketQuota"
                                                            type="number"
                                                            value={
                                                                ticket.ticketQuota
                                                            }
                                                            placeholder="Masukkan harga tiket"
                                                            onChange={(e) =>
                                                                handleTicketChange(
                                                                    index,
                                                                    e,
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                {tickets.length > 1 && (
                                                    <button
                                                        className="mt-4 rounded-md border border-red-orange-600 px-4 py-2 text-red-orange-600 transition duration-300 hover:bg-red-orange-200"
                                                        onClick={() =>
                                                            handleRemoveTicket(
                                                                index,
                                                            )
                                                        }
                                                    >
                                                        Hapus Jenis Tiket
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <button
                                            onClick={handleAddTicket}
                                            className="mt-4 rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                        >
                                            + Tambah Jenis Tiket
                                        </button>
                                        <hr className="my-2" />
                                        <div className="flex w-full justify-end gap-2">
                                            <button
                                                onClick={() =>
                                                    setDestinationStep(4)
                                                }
                                                className="w-fit rounded-md border border-red-orange-600 px-4 py-2 text-red-orange-600 transition duration-300 hover:bg-red-orange-200"
                                            >
                                                Kembali
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setDestinationStep(6)
                                                }
                                                className="w-fit rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                            >
                                                Lanjut
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                            {destinationStep === 6 && (
                                <>
                                    <div className="flex flex-col gap-4">
                                        <div className="gap flex flex-col">
                                            <p className="text-md text-gray-500">
                                                Nama Destinasi Wisata
                                            </p>
                                            <p className="text-md font-bold text-gray-900">
                                                {
                                                    registerDestination.destinationName
                                                }
                                            </p>
                                        </div>
                                        <div className="gap flex flex-col">
                                            <p className="text-md text-gray-500">
                                                Deskripsi Wisata
                                            </p>
                                            <p className="text-md font-bold text-gray-900">
                                                {
                                                    registerDestination.destinationDescription
                                                }
                                            </p>
                                        </div>
                                        <div className="gap flex flex-col">
                                            <p className="text-md text-gray-500">
                                                Kategori Wisata
                                            </p>
                                            <p className="text-md font-bold text-gray-900">
                                                {
                                                    registerDestination.destinationCategory
                                                }
                                            </p>
                                        </div>
                                        <div className="gap flex flex-col">
                                            <p className="text-md text-gray-500">
                                                Alamat Wisata
                                            </p>
                                            <p className="text-md font-bold text-gray-900">
                                                {
                                                    registerDestination.destinationAddress
                                                }
                                            </p>
                                        </div>
                                        <div className="gap flex flex-col">
                                            <p className="text-md text-gray-500">
                                                Sejarah Wisata
                                            </p>
                                            <p className="text-md font-bold text-gray-900">
                                                {
                                                    registerDestination.destinationHistory
                                                }
                                            </p>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="gap flex flex-col">
                                            <p className="text-md text-gray-500">
                                                Jumlah Fasilitas
                                            </p>
                                            <p className="text-md font-bold text-gray-900">
                                                {facilities.length}
                                            </p>
                                        </div>
                                        <div className="gap flex flex-col">
                                            <p className="text-md text-gray-500">
                                                Jumlah Jenis Tiket
                                            </p>
                                            <p className="text-md font-bold text-gray-900">
                                                {tickets.length}
                                            </p>
                                        </div>
                                        <div className="gap flex flex-col">
                                            <p className="text-md text-gray-500">
                                                Gambar Wisata
                                            </p>
                                            <p className="text-md font-bold text-gray-900">
                                                {destinationPictures.length}
                                            </p>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="gap flex flex-col">
                                            <p className="text-md text-gray-500">
                                                Jam Buka Wisata
                                            </p>
                                            <div className="text-md flex flex-col gap-1 font-bold text-gray-900">
                                                {openTime.map((time) => (
                                                    <div
                                                        key={time.openTimeDay}
                                                        className="mb-2 flex"
                                                    >
                                                        {time.isClosed ? (
                                                            <div className="text-red-500">
                                                                {
                                                                    time.openTimeDay
                                                                }
                                                                : Tutup
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <span className="font-bold">
                                                                    {
                                                                        time.openTimeDay
                                                                    }
                                                                    :
                                                                </span>{" "}
                                                                {
                                                                    time.openTimeStart
                                                                }{" "}
                                                                -{" "}
                                                                {
                                                                    time.openTimeEnd
                                                                }
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <hr className="my-2" />
                                        <div className="flex w-full justify-end gap-2">
                                            <button
                                                onClick={() =>
                                                    setDestinationStep(4)
                                                }
                                                className="w-fit rounded-md border border-red-orange-600 px-4 py-2 text-red-orange-600 transition duration-300 hover:bg-red-orange-200"
                                            >
                                                Kembali
                                            </button>
                                            <button
                                                type="submit"
                                                className="w-fit rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                            >
                                                Upload Destinasi Wisata
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </Modal>
            <div className="flex h-full">
                <Sidebar activeMenu="Kelola Situs Wisata" />
                <div className="inline-flex w-full flex-col items-start justify-start gap-6 bg-red-50 p-6">
                    <NavigationBar activeMenu="Kelola Situs Wisata" />
                    <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-5 self-stretch">
                        <div className="flex w-full">
                            <div className="flex w-full shrink-0 flex-wrap items-center justify-between gap-5 md:flex-nowrap">
                                {siteStats.map((stat, index) => (
                                    <StatisticBox
                                        key={index}
                                        name={stat.name}
                                        value={stat.value}
                                        backgroundColor={stat.backgroundColor}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start justify-between gap-5 rounded-xl md:flex-row">
                            <div className="flex w-full">
                                <CustomBox title="Daftar Situs Wisata">
                                    <div className="flex w-full flex-col gap-4">
                                        {destinations.map(
                                            (destination, index) => {
                                                return (
                                                    <BoxWithImage
                                                        key={index}
                                                        title={
                                                            destination.destinationName
                                                        }
                                                        location={
                                                            destination.destinationAddress
                                                        }
                                                        category={
                                                            destination.destinationCategory
                                                        }
                                                        views={
                                                            destination.destinationViews
                                                        }
                                                        rating="-/10"
                                                        favorites={
                                                            destination.destinationFavorites
                                                        }
                                                        imageHighlight={
                                                            destination
                                                                .destinationPictures[0]
                                                                .imageAddress
                                                        }
                                                    />
                                                );
                                            },
                                        )}
                                    </div>
                                </CustomBox>
                            </div>
                            <div className="flex w-full font-poppins font-light md:w-1/3">
                                <CustomBox title="Kelola Wisata">
                                    <BoxLinks />
                                </CustomBox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KelolaSitusWisata;
