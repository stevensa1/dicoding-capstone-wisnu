import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
import { toast } from "react-toastify";
import Barcode from "react-barcode";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function TransactionHistory() {
    const navigate = useNavigate();
    const [tickets, setTickets] = useState([]);
    const [dataLoad, setDataLoad] = useState(false);
    const sessionToken = Cookie.get("sessionToken");
    useEffect(() => {
        document.title = "WisNu - Riwayat Pembelian";
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        if (!sessionToken) {
            toast.error("Anda belum login, silahkan login terlebih dahulu.");
            navigate("/login");
        } else {
            axios
                .get(`${process.env.REACT_APP_BACKEND_HOST}/api/ticket`, {
                    headers: {
                        Authorization: `Bearer ${sessionToken}`,
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        setTickets(res.data.tickets.reverse());
                        setDataLoad(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Terjadi kesalahan saat mengambil data tiket.");
                });
        }
    }, [sessionToken, navigate]);
    return (
        <>
            <div className="flex min-h-screen flex-col gap-8 overflow-x-hidden bg-gray-100 px-6 py-2 pt-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">Riwayat Pembelian</h1>
                    <p className="text-lg">
                        Berikut adalah daftar riwayat pembelian yang telah Anda
                        pesan.
                    </p>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
                    {dataLoad ? (
                        <>
                            {tickets.length > 0 ? (
                                <>
                                    {tickets.map((ticket, index) => (
                                        <div className="flex flex-col rounded-md border border-gray-300 bg-white p-4 transition duration-300 ease-out hover:shadow-lg md:w-[49%]">
                                            <div className="flex flex-col-reverse md:flex-row">
                                                <div className="flex w-full flex-col md:w-1/2">
                                                    <h1 className="text-2xl font-bold">
                                                        Rp
                                                        {ticket.ticketPrice.toLocaleString(
                                                            "id-ID",
                                                        )}
                                                    </h1>
                                                    <h1 className="text-lg">
                                                        Pembelian tiket untuk{" "}
                                                        {ticket.destinationName}{" "}
                                                        ({ticket.ticketKind})
                                                        atas nama{" "}
                                                        {
                                                            ticket.ticketNameHolder
                                                        }{" "}
                                                        (
                                                        {ticket.ticketAgeHolder}
                                                        )
                                                    </h1>
                                                    <p>
                                                        {new Date(
                                                            ticket.purchasedTime,
                                                        ).toLocaleDateString(
                                                            "id-ID",
                                                            {
                                                                weekday: "long",
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
                                                                hour: "numeric",
                                                                minute: "numeric",
                                                                second: "numeric",
                                                            },
                                                        )}
                                                    </p>
                                                </div>
                                                <div className="flex w-full flex-col items-center md:w-1/2 md:items-end">
                                                    <Barcode
                                                        value={
                                                            ticket.ticketBarcode
                                                        }
                                                        format="CODE128"
                                                        width={2}
                                                        height={50}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex w-full items-center justify-center text-xs font-semibold text-gray-400">
                                                Proof of Payment
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <div className="flex w-full flex-col items-center justify-center gap-2">
                                        <h1 className="text-2xl font-bold">
                                            Anda belum riwayat pembelian
                                        </h1>
                                        <p className="text-lg text-gray-500">
                                            Silahkan pesan tiket terlebih
                                            dahulu.
                                        </p>
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <Skeleton height={50} />
                            <Skeleton height={50} />
                            <Skeleton height={50} />
                            <Skeleton height={50} />
                            <Skeleton height={50} />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default TransactionHistory;
