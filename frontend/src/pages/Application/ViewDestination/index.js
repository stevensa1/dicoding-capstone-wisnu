import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Cookie from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import DestinationSlick from "../../../components/Application/DestinationSlick";
import axios from "axios";
import Modal from "../../../components/Application/Modal";
import AnnouncmentCenter from "../../../components/Application/AnnouncmentCenter";

function DestinationView() {
    const sessionToken = Cookie.get("sessionToken");
    const { destinationId } = useParams();
    const [destinationData, setDestinationData] = useState({});
    const [partnerData, setPartnerData] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);
    const [reviewLoad, setReviewLoad] = useState(false);
    const [purchaseTicketModal, setPurchaseTicketModal] = useState(false);
    const [purchaseTicketData, setPurchaseTicketData] = useState({
        ticketName: "",
        ticketPrice: "",
        ticketDescription: "",
        destinationId: "",
        ticketId: "",
        nameHolder: "",
        ageHolder: 0,
        ticketDate: new Date(),
    });
    const [reviews, setReviews] = useState([]);
    const [myReview, setMyReview] = useState({
        reviewRating: 0,
        reviewComment: "",
        alreadyReviewed: false,
    });
    const [activeTab, setActiveTab] = useState("description");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_BACKEND_HOST}/api/review/destination/${destinationId}`,
            )
            .then((res) => {
                setReviews(res.data.reviews);
                setReviewLoad(true);
            })
            .catch((err) => {
                console.log(err);
                toast("Terjadi kesalahan saat mengambil ulasan", {
                    type: "error",
                });
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [destinationId, reviewLoad]);

    useEffect(() => {
        if (sessionToken) {
            axios
                .get(
                    `${process.env.REACT_APP_BACKEND_HOST}/api/review/my/${destinationId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${sessionToken}`,
                        },
                    },
                )
                .then((res) => {
                    if (res.status === 204) {
                        setMyReview({
                            reviewRating: 0,
                            reviewComment: "",
                            alreadyReviewed: false,
                        });
                    } else {
                        setMyReview({
                            reviewRating: res.data.review.reviewRating,
                            reviewComment: res.data.review.reviewComment,
                            alreadyReviewed: true,
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setMyReview({
                        reviewRating: 0,
                        reviewComment: "",
                        alreadyReviewed: false,
                    });
                    toast("Terjadi kesalahan saat mengambil ulasan", {
                        type: "error",
                    });
                });
        }
    }, [sessionToken, destinationId]);

    const handleReviewSubmission = (e) => {
        e.preventDefault();
        if (myReview.reviewRating === 0) {
            toast("Anda harus memberikan rating terlebih dahulu", {
                type: "error",
            });
            return;
        }
        if (sessionToken) {
            axios
                .post(
                    `${process.env.REACT_APP_BACKEND_HOST}/api/review/create`,
                    {
                        reviewDestinationId: destinationId,
                        reviewRating: myReview.reviewRating,
                        reviewComment: myReview.reviewComment,
                        reviewPartnerId: partnerData.id,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${sessionToken}`,
                        },
                    },
                )
                .then(() => {
                    setMyReview({
                        ...myReview,
                        alreadyReviewed: true,
                    });
                    setReviewLoad(false);
                    toast("Ulasan berhasil dikirim", {
                        type: "success",
                    });
                })
                .catch((err) => {
                    console.log(err);
                    toast("Terjadi kesalahan saat mengirim ulasan", {
                        type: "error",
                    });
                });
        } else {
            toast("Anda harus login terlebih dahulu untuk memberikan ulasan", {
                type: "error",
            });
        }
    };

    const onTicketFormChange = (e) => {
        setPurchaseTicketData({
            ...purchaseTicketData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDateChange = (date) => {
        setPurchaseTicketData({
            ...purchaseTicketData,
            ticketDate: date,
        });
    };

    const handlePurchaseSubmission = (e) => {
        e.preventDefault();
        const formattedDate = moment(purchaseTicketData.ticketDate).format();
        if (sessionToken) {
            try {
                axios
                    .post(
                        `${process.env.REACT_APP_BACKEND_HOST}/api/ticket/purchase`,
                        {
                            destinationId: purchaseTicketData.destinationId,
                            ticketId: purchaseTicketData.ticketId,
                            nameHolder: purchaseTicketData.nameHolder,
                            ageHolder: purchaseTicketData.ageHolder,
                            ticketDate: formattedDate,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${sessionToken}`,
                            },
                        },
                    )
                    .then((res) => {
                        setPurchaseTicketData({
                            ticketName: "",
                            ticketPrice: "",
                            ticketDescription: "",
                            destinationId: "",
                            ticketId: "",
                            nameHolder: "",
                            ageHolder: 0,
                            ticketDate: new Date(),
                        });
                        setPurchaseTicketModal(false);
                        toast(
                            `Tiket ${res.data.purchasedTicket.ticketKind} untuk ${res.data.purchasedTicket.ticketNameHolder} berhasil dibeli`,
                            {
                                type: "success",
                            },
                        );
                    })
                    .catch((err) => {
                        console.log(err);
                        toast("Terjadi kesalahan saat membeli tiket", {
                            type: "error",
                        });
                    });
            } catch (error) {
                toast("Terjadi kesalahan saat membeli tiket", {
                    type: "error",
                });
            }
        } else {
            toast("Anda harus login terlebih dahulu untuk membeli tiket", {
                type: "error",
            });
        }
    };

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_BACKEND_HOST}/api/destination/${destinationId}`,
            )
            .then((response) => {
                setDestinationData(response.data.destination);
                document.title = `${response.data.destination.destinationName} - Wisnu`;
                axios
                    .get(
                        `${process.env.REACT_APP_BACKEND_HOST}/api/partner/${response.data.destination.destinationManagerPartnerId}`,
                    )
                    .then((r) => {
                        setPartnerData(r.data);
                        setDataLoaded(true);
                    })
                    .catch((e) => {
                        console.log(e);
                        alert("Terjadi kesalahan atau mitra tidak ditemukan");
                    });
            })
            .catch((error) => {
                alert(
                    "Terjadi kesalahan atau destinasi tidak ditemukan",
                    error.message,
                );
                window.location.href = "/home";
            });
    }, [destinationId]);
    const handleTabClick = (tabName) => setActiveTab(tabName);
    return (
        <>
            <Modal toggle={purchaseTicketModal}>
                <div className="flex w-[350px] flex-col p-4 md:w-[800px] md:p-8">
                    <div className="flex justify-between">
                        <h1 className="w-full text-lg font-semibold">
                            Beli Tiket Wisata di{" "}
                            {dataLoaded ? (
                                destinationData.destinationName
                            ) : (
                                <Skeleton />
                            )}
                        </h1>
                        <button
                            onClick={() => {
                                setPurchaseTicketModal(false);
                            }}
                            className="aspect-square h-8 w-8 items-center rounded-md bg-red-600 align-middle text-white transition duration-300 hover:bg-red-900"
                        >
                            <FontAwesomeIcon
                                icon={faXmark}
                                style={{
                                    color: "#ffffff",
                                }}
                            />
                        </button>
                    </div>
                    <hr className="my-2" />
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <div className="gap flex flex-col">
                                <p className="text-md text-gray-500">Mitra</p>
                                <p className="text-md font-bold text-gray-900">
                                    {partnerData.partnerName}
                                </p>
                            </div>
                            <div className="gap flex flex-col">
                                <p className="text-md text-gray-500">
                                    Jenis Tiket
                                </p>
                                <p className="text-md font-bold text-gray-900">
                                    {purchaseTicketData.ticketName}
                                </p>
                            </div>
                            <div className="gap flex flex-col">
                                <p className="text-md text-gray-500">
                                    Deskripsi Tiket
                                </p>
                                <p className="text-md font-bold text-gray-900">
                                    {purchaseTicketData.ticketDescription}
                                </p>
                            </div>
                            <div className="gap flex flex-col">
                                <p className="text-md text-gray-500">
                                    Harga Tiket
                                </p>
                                <p className="text-md font-bold text-gray-900">
                                    {new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                    }).format(purchaseTicketData.ticketPrice)}
                                    /tiket
                                </p>
                            </div>
                        </div>
                        <hr className="my-2" />
                        <form
                            onSubmit={handlePurchaseSubmission}
                            className="flex flex-col gap-4"
                        >
                            <div className="gap flex flex-col">
                                <p className="text-md font-bold text-gray-900">
                                    Isi Data Pembeli Tiket
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-bold text-gray-500"
                                    htmlFor="nameHolder"
                                >
                                    Nama Pemegang Tiket
                                </label>
                                <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                    <input
                                        required
                                        className="w-full border-0 outline-none"
                                        name="nameHolder"
                                        type="text"
                                        value={purchaseTicketData.nameHolder}
                                        placeholder="Masukkan nama pemegang tiket"
                                        onChange={onTicketFormChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-bold text-gray-500"
                                    htmlFor="ageHolder"
                                >
                                    Umur Pemegang Tiket
                                </label>
                                <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                    <input
                                        required
                                        className="w-full border-0 outline-none"
                                        name="ageHolder"
                                        type="number"
                                        min="0"
                                        max="100"
                                        value={purchaseTicketData.ageHolder}
                                        placeholder="Masukkan umur pemegang tiket"
                                        onChange={onTicketFormChange}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    className="text-sm font-bold text-gray-500"
                                    htmlFor="ticketDate"
                                >
                                    Tanggal Pembelian Tiket
                                </label>
                                <div className="flex items-center gap-2 rounded-md border px-4 py-2">
                                    <DatePicker
                                        required
                                        showIcon
                                        className="w-full rounded-md border-0 bg-white p-2 text-gray-800 outline-none"
                                        selected={purchaseTicketData.ticketDate}
                                        onChange={handleDateChange}
                                        dateFormat="yyyy-MM-dd"
                                        minDate={new Date()}
                                    />
                                </div>
                            </div>
                            <hr className="my-2" />
                            <div className="flex w-full justify-end">
                                <button
                                    type="submit"
                                    className="w-fit rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                >
                                    Konfirmasi Pembelian
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
            <div className="flex h-full flex-col gap-8 overflow-hidden bg-gray-100 px-6 py-2 pt-24">
                <AnnouncmentCenter />
                <div className="flex flex-col gap-4">
                    <DestinationSlick
                        destinationData={
                            dataLoaded
                                ? destinationData.destinationPictures
                                : []
                        }
                    />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">
                            {dataLoaded ? (
                                destinationData.destinationName
                            ) : (
                                <Skeleton />
                            )}
                        </h1>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1 text-xs font-bold text-yellow-500">
                                <p>
                                    &#9733;{" "}
                                    {dataLoaded ? (
                                        destinationData.destinationAverageRating.toFixed(
                                            2,
                                        )
                                    ) : (
                                        <Skeleton />
                                    )}
                                </p>
                                <p className="font-normal text-gray-600">
                                    (dari {dataLoaded ? reviews.length : 0}{" "}
                                    ulasan)
                                </p>
                            </div>
                            <h1 className="w-fit bg-red-orange-200 px-2 py-1 text-xs text-gray-700">
                                {dataLoaded ? (
                                    destinationData.destinationCategory
                                ) : (
                                    <Skeleton />
                                )}
                            </h1>
                        </div>

                        <hr className="my-2" />

                        <div className="flex flex-col gap-1">
                            <h1 className="text-lg font-bold">
                                {dataLoaded ? (
                                    destinationData.destinationAddress
                                ) : (
                                    <Skeleton />
                                )}
                            </h1>
                            <p className="text-xs text-gray-600">
                                {destinationId}
                            </p>
                        </div>
                        <div className="flex w-full flex-col items-center gap-1">
                            <nav className="flex w-full gap-2">
                                <button
                                    onClick={() =>
                                        handleTabClick("description")
                                    }
                                    className={`inline-flex w-full items-center justify-center rounded-lg border border-gray-400 px-2 py-1 font-semibold transition duration-300 hover:bg-gray-100 
                                        ${
                                            activeTab === "description"
                                                ? "bg-gray-200 text-gray-800"
                                                : "bg-white"
                                        }
                                    `}
                                >
                                    Deskripsi
                                </button>
                                <button
                                    onClick={() => handleTabClick("history")}
                                    className={`inline-flex w-full items-center justify-center rounded-lg border border-gray-400 px-2 py-1 font-semibold transition duration-300 hover:bg-gray-100 
                                        ${
                                            activeTab === "history"
                                                ? "bg-gray-200 text-gray-800"
                                                : "bg-white"
                                        }
                                    `}
                                >
                                    Sejarah
                                </button>
                                <button
                                    onClick={() => handleTabClick("facility")}
                                    className={`inline-flex w-full items-center justify-center rounded-lg border border-gray-400 px-2 py-1 font-semibold transition duration-300 hover:bg-gray-100 
                                        ${
                                            activeTab === "facility"
                                                ? "bg-gray-200 text-gray-800"
                                                : "bg-white"
                                        }
                                    `}
                                >
                                    Fasilitas
                                </button>
                            </nav>
                            <div className="flex w-full items-start py-4">
                                {activeTab === "description" && (
                                    <>
                                        {dataLoaded ? (
                                            destinationData.destinationDescription
                                        ) : (
                                            <Skeleton count={5} />
                                        )}
                                    </>
                                )}
                                {activeTab === "history" && (
                                    <>
                                        {dataLoaded ? (
                                            destinationData.destinationHistory
                                        ) : (
                                            <Skeleton count={5} />
                                        )}
                                    </>
                                )}
                                {activeTab === "facility" && (
                                    <>
                                        {dataLoaded ? (
                                            <div className="flex flex-col gap-2">
                                                {destinationData.destinationFacility.map(
                                                    (facility, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex w-full items-center gap-2"
                                                        >
                                                            <div className="flex flex-col">
                                                                <p className="font-bold">
                                                                    {
                                                                        facility.facilityName
                                                                    }
                                                                </p>
                                                                <p className="text-sm text-gray-600">
                                                                    {
                                                                        facility.facilityDescription
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        ) : (
                                            <Skeleton count={5} />
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div className="flex w-full flex-col gap-1">
                            <h1 className="text-lg font-bold">
                                Jam Buka dan Tutup
                            </h1>
                            <div className="flex w-full flex-col gap-1">
                                {dataLoaded ? (
                                    destinationData.destinationOpenTime.map(
                                        (day, index) => (
                                            <div key={index} className="flex">
                                                {day.isClosed ? (
                                                    <>
                                                        <p className="w-full font-bold text-red-500">
                                                            {day.openTimeDay}
                                                        </p>
                                                        <p className="w-full text-red-500">
                                                            Tutup
                                                        </p>
                                                    </>
                                                ) : (
                                                    <>
                                                        <p className="w-full font-bold">
                                                            {day.openTimeDay}
                                                        </p>
                                                        <p className="w-full">
                                                            {day.openTimeStart}{" "}
                                                            - {day.openTimeEnd}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        ),
                                    )
                                ) : (
                                    <Skeleton count={7} />
                                )}
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div className="flex w-full flex-col gap-1">
                            <h1 className="text-lg font-bold">Beli Tiket</h1>
                            <div className="flex w-full flex-col gap-2">
                                {dataLoaded ? (
                                    destinationData.destinationTicket.map(
                                        (ticket, index) => (
                                            <>
                                                <div
                                                    key={index}
                                                    className="flex flex-col rounded-md border border-gray-300 bg-white p-3 transition duration-300 ease-out hover:shadow-lg"
                                                >
                                                    <p className="w-full font-bold">
                                                        {ticket.ticketName}
                                                    </p>
                                                    <p className="text-md w-full text-gray-600">
                                                        {
                                                            ticket.ticketDescription
                                                        }
                                                    </p>
                                                    <hr className="my-1" />
                                                    <div className="flex w-full justify-between">
                                                        <p className="font-bold text-red-orange-600">
                                                            {new Intl.NumberFormat(
                                                                "id-ID",
                                                                {
                                                                    style: "currency",
                                                                    currency:
                                                                        "IDR",
                                                                },
                                                            ).format(
                                                                ticket.ticketPrice,
                                                            )}
                                                        </p>
                                                        <button
                                                            onClick={() => {
                                                                if (
                                                                    sessionToken
                                                                ) {
                                                                    if (
                                                                        ticket.ticketQuota >
                                                                        0
                                                                    ) {
                                                                        setPurchaseTicketModal(
                                                                            true,
                                                                        );
                                                                        setPurchaseTicketData(
                                                                            {
                                                                                ticketName:
                                                                                    ticket.ticketName,
                                                                                ticketPrice:
                                                                                    ticket.ticketPrice,
                                                                                ticketDescription:
                                                                                    ticket.ticketDescription,
                                                                                destinationId:
                                                                                    destinationId,
                                                                                ticketId:
                                                                                    ticket._id,
                                                                                nameHolder:
                                                                                    "",
                                                                                ageHolder:
                                                                                    "",
                                                                                ticketDate:
                                                                                    "",
                                                                            },
                                                                        );
                                                                    } else {
                                                                        toast(
                                                                            "Mohon maaf, tiket sudah habis. Silahkan pilih tiket lainnya",
                                                                            {
                                                                                type: "error",
                                                                            },
                                                                        );
                                                                    }
                                                                } else {
                                                                    toast(
                                                                        "Anda harus login terlebih dahulu untuk membeli tiket",
                                                                        {
                                                                            type: "error",
                                                                        },
                                                                    );
                                                                }
                                                            }}
                                                            className="flex items-center justify-center rounded-full  bg-red-orange-600 px-2 py-1 text-white"
                                                        >
                                                            Beli tiket
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        ),
                                    )
                                ) : (
                                    <>
                                        <Skeleton count={7} />
                                    </>
                                )}
                            </div>
                        </div>
                        <hr className="my-2" />
                        <div className="flex w-full flex-col gap-4">
                            <h1 className="text-lg font-bold">
                                Apa Kata Mereka
                            </h1>
                            <div className="flex w-full flex-col gap-4">
                                {reviewLoad ? (
                                    <>
                                        {reviews.length > 0 ? (
                                            <>
                                                {reviews.map(
                                                    (review, index) => (
                                                        <>
                                                            <div
                                                                key={index}
                                                                className="flex flex-col gap-4 rounded-md border border-gray-300 bg-white p-3 transition duration-300 ease-out hover:shadow-lg"
                                                            >
                                                                <div className="flex w-full justify-between">
                                                                    <p className=" font-bold">
                                                                        {
                                                                            review.reviewUser
                                                                        }
                                                                    </p>
                                                                    <div className="text-md flex items-center gap-1 text-gray-600">
                                                                        <p className="font-bold text-yellow-500">
                                                                            &#9733;
                                                                            {review.reviewRating.toFixed(
                                                                                0,
                                                                            )}
                                                                        </p>
                                                                        <span>
                                                                            /
                                                                        </span>
                                                                        <p className="">
                                                                            10
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <p className="text-md w-full text-gray-600">
                                                                    {
                                                                        review.reviewComment
                                                                    }
                                                                </p>
                                                            </div>
                                                        </>
                                                    ),
                                                )}
                                            </>
                                        ) : (
                                            <p className="text-md text-gray-600">
                                                Belum ada ulasan. Jadilah yang
                                                pertama!
                                            </p>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <Skeleton count={3} />
                                    </>
                                )}
                            </div>
                            {sessionToken ? (
                                <>
                                    {myReview.alreadyReviewed ? (
                                        <>
                                            <h1 className="text-lg font-bold">
                                                Ulasan Anda
                                            </h1>
                                            <div className="flex w-full flex-col gap-2">
                                                <div className="flex flex-col gap-4 rounded-md border border-gray-300 bg-white p-5">
                                                    <div className="flex w-full justify-between">
                                                        <p className=" font-bold">
                                                            Anda
                                                        </p>
                                                        <div className="text-md flex items-center gap-1 text-gray-600">
                                                            <p className="font-bold text-yellow-500">
                                                                &#9733;{" "}
                                                                {myReview.reviewRating.toFixed(
                                                                    0,
                                                                )}
                                                            </p>
                                                            <span>/</span>
                                                            <p className="">
                                                                10
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p className="text-md w-full text-gray-600">
                                                        {myReview.reviewComment}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <form
                                                onSubmit={
                                                    handleReviewSubmission
                                                }
                                            >
                                                <h1 className="text-lg font-bold">
                                                    Ulasan Anda
                                                </h1>
                                                <div className="flex w-full flex-col gap-2">
                                                    <div className="flex flex-col gap-4 rounded-md border border-gray-300 bg-white p-5">
                                                        <div className="flex w-full justify-between">
                                                            <p className=" font-bold">
                                                                Buat Ulasan Anda
                                                            </p>
                                                            <div className="text-md flex items-center gap-1 text-gray-600">
                                                                <p className="font-bold text-yellow-500">
                                                                    &#9733;{" "}
                                                                    {myReview.reviewRating.toFixed(
                                                                        0,
                                                                    )}
                                                                </p>
                                                                <span>/</span>
                                                                <p className="">
                                                                    10
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <button
                                                                onClick={() => {
                                                                    setMyReview(
                                                                        {
                                                                            ...myReview,
                                                                            reviewRating: 1,
                                                                        },
                                                                    );
                                                                }}
                                                                className={`text-xl font-bold md:text-4xl ${
                                                                    myReview.reviewRating >=
                                                                    1
                                                                        ? "text-yellow-500"
                                                                        : "text-gray-400"
                                                                } `}
                                                            >
                                                                &#9733;
                                                            </button>

                                                            <button
                                                                onClick={() => {
                                                                    setMyReview(
                                                                        {
                                                                            ...myReview,
                                                                            reviewRating: 2,
                                                                        },
                                                                    );
                                                                }}
                                                                className={`text-xl font-bold md:text-4xl ${
                                                                    myReview.reviewRating >=
                                                                    2
                                                                        ? "text-yellow-500"
                                                                        : "text-gray-400"
                                                                } `}
                                                            >
                                                                &#9733;
                                                            </button>

                                                            <button
                                                                onClick={() => {
                                                                    setMyReview(
                                                                        {
                                                                            ...myReview,
                                                                            reviewRating: 3,
                                                                        },
                                                                    );
                                                                }}
                                                                className={`text-xl font-bold md:text-4xl ${
                                                                    myReview.reviewRating >=
                                                                    3
                                                                        ? "text-yellow-500"
                                                                        : "text-gray-400"
                                                                } `}
                                                            >
                                                                &#9733;
                                                            </button>

                                                            <button
                                                                onClick={() => {
                                                                    setMyReview(
                                                                        {
                                                                            ...myReview,
                                                                            reviewRating: 4,
                                                                        },
                                                                    );
                                                                }}
                                                                className={`text-xl font-bold md:text-4xl ${
                                                                    myReview.reviewRating >=
                                                                    4
                                                                        ? "text-yellow-500"
                                                                        : "text-gray-400"
                                                                } `}
                                                            >
                                                                &#9733;
                                                            </button>

                                                            <button
                                                                onClick={() => {
                                                                    setMyReview(
                                                                        {
                                                                            ...myReview,
                                                                            reviewRating: 5,
                                                                        },
                                                                    );
                                                                }}
                                                                className={`text-xl font-bold md:text-4xl ${
                                                                    myReview.reviewRating >=
                                                                    5
                                                                        ? "text-yellow-500"
                                                                        : "text-gray-400"
                                                                } `}
                                                            >
                                                                &#9733;
                                                            </button>

                                                            <button
                                                                onClick={() => {
                                                                    setMyReview(
                                                                        {
                                                                            ...myReview,
                                                                            reviewRating: 6,
                                                                        },
                                                                    );
                                                                }}
                                                                className={`text-xl font-bold md:text-4xl ${
                                                                    myReview.reviewRating >=
                                                                    6
                                                                        ? "text-yellow-500"
                                                                        : "text-gray-400"
                                                                } `}
                                                            >
                                                                &#9733;
                                                            </button>

                                                            <button
                                                                onClick={() => {
                                                                    setMyReview(
                                                                        {
                                                                            ...myReview,
                                                                            reviewRating: 7,
                                                                        },
                                                                    );
                                                                }}
                                                                className={`text-xl font-bold md:text-4xl ${
                                                                    myReview.reviewRating >=
                                                                    7
                                                                        ? "text-yellow-500"
                                                                        : "text-gray-400"
                                                                } `}
                                                            >
                                                                &#9733;
                                                            </button>

                                                            <button
                                                                onClick={() => {
                                                                    setMyReview(
                                                                        {
                                                                            ...myReview,
                                                                            reviewRating: 8,
                                                                        },
                                                                    );
                                                                }}
                                                                className={`text-xl font-bold md:text-4xl ${
                                                                    myReview.reviewRating >=
                                                                    8
                                                                        ? "text-yellow-500"
                                                                        : "text-gray-400"
                                                                } `}
                                                            >
                                                                &#9733;
                                                            </button>

                                                            <button
                                                                onClick={() => {
                                                                    setMyReview(
                                                                        {
                                                                            ...myReview,
                                                                            reviewRating: 9,
                                                                        },
                                                                    );
                                                                }}
                                                                className={`text-xl font-bold md:text-4xl ${
                                                                    myReview.reviewRating >=
                                                                    9
                                                                        ? "text-yellow-500"
                                                                        : "text-gray-400"
                                                                } `}
                                                            >
                                                                &#9733;
                                                            </button>

                                                            <button
                                                                onClick={() => {
                                                                    setMyReview(
                                                                        {
                                                                            ...myReview,
                                                                            reviewRating: 10,
                                                                        },
                                                                    );
                                                                }}
                                                                className={`text-xl font-bold md:text-4xl ${
                                                                    myReview.reviewRating >=
                                                                    10
                                                                        ? "text-yellow-500"
                                                                        : "text-gray-400"
                                                                } `}
                                                            >
                                                                &#9733;
                                                            </button>
                                                        </div>
                                                        <textarea
                                                            required
                                                            className="h-24 w-full rounded-md border-0 outline-none"
                                                            placeholder="Tulis ulasan Anda disini"
                                                            value={
                                                                myReview.reviewComment
                                                            }
                                                            onChange={(e) => {
                                                                setMyReview({
                                                                    ...myReview,
                                                                    reviewComment:
                                                                        e.target
                                                                            .value,
                                                                });
                                                            }}
                                                        ></textarea>
                                                        <div className="flex w-full justify-end">
                                                            <button
                                                                type="submit"
                                                                className="rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950"
                                                            >
                                                                Kirim Ulasan
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
                                    <p className="text-md text-gray-600">
                                        Anda harus login terlebih dahulu untuk
                                        memberikan ulasan
                                    </p>
                                </>
                            )}
                        </div>
                        <hr className="my-2" />
                        <div className="flex w-full flex-col gap-1">
                            <h1 className="text-lg font-bold">Dikelola Oleh</h1>
                            <div className="flex w-full flex-col items-center">
                                {dataLoaded ? (
                                    partnerData.partnerLogo ? (
                                        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-full">
                                            <img
                                                className="h-12 w-12 rounded-full object-cover object-center"
                                                src={`https://${process.env.REACT_APP_BUCKET_URL}${partnerData.partnerLogo}`}
                                                alt={`${partnerData.partnerName} Logo`}
                                            />
                                        </div>
                                    ) : (
                                        <Skeleton circle={true} />
                                    )
                                ) : (
                                    <Skeleton circle={true} />
                                )}
                                <h1 className="w-full text-center text-lg font-bold">
                                    {dataLoaded ? (
                                        partnerData.partnerName
                                    ) : (
                                        <Skeleton />
                                    )}
                                </h1>
                                {/* <p className="w-full text-center text-lg text-gray-600">
                                    Badan Perusahaan
                                </p> */}
                                <div className="flex w-full items-center justify-center gap-1 text-gray-600">
                                    <p className="font-bold text-yellow-500">
                                        &#9733;{" "}
                                        {dataLoaded ? (
                                            partnerData.averageRating.toFixed(2)
                                        ) : (
                                            <Skeleton />
                                        )}
                                    </p>
                                    <span>/</span>
                                    <p className="">10</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <p>
                                        {dataLoaded ? (
                                            partnerData.destinationCount
                                        ) : (
                                            <Skeleton />
                                        )}{" "}
                                        Destinasi Wisata
                                    </p>
                                    <span>|</span>
                                    <p>
                                        {dataLoaded ? (
                                            partnerData.destinationSales
                                        ) : (
                                            <Skeleton />
                                        )}{" "}
                                        Tiket Terjual
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DestinationView;
