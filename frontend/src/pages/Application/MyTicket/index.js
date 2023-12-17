import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import Barcode from "react-barcode";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";

function MyTicket() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "WisNu - Tiket Saya";
        window.scrollTo(0, 0);
    }, []);
    const [tickets, setTickets] = useState([]);
    const [dataLoad, setDataLoad] = useState(false);
    const sessionToken = Cookie.get("sessionToken");
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
                        const today = new Date();
                        const filteredTickets = res.data.tickets.filter(
                            (ticket) => {
                                const ticketDate = new Date(ticket.ticketDate);
                                return ticketDate >= today;
                            },
                        );
                        setTickets(
                            filteredTickets.sort(
                                (a, b) =>
                                    new Date(a.ticketDate) -
                                    new Date(b.ticketDate),
                            ),
                        );
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
            <ToastContainer />
            <div className="flex min-h-screen flex-col gap-8 overflow-x-hidden bg-gray-100 px-6 py-2 pt-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">Tiket Saya</h1>
                    <p className="text-lg">
                        Berikut adalah daftar tiket yang telah Anda pesan. Tiket
                        yang sudah dibeli tidak dapat dikembalikan. Untuk
                        melihat tiket yang telah berlalu, silahkan kunjungi
                        riwayat transaksi.
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
                                                    <h1 className="text-xl font-bold">
                                                        {ticket.destinationName}
                                                    </h1>
                                                    <h1 className="text-lg font-bold">
                                                        {ticket.ticketKind}
                                                    </h1>
                                                    <p className="text-lg font-bold text-gray-600">
                                                        {
                                                            ticket.ticketNameHolder
                                                        }{" "}
                                                        {"//"}{" "}
                                                        {ticket.ticketAgeHolder}
                                                    </p>
                                                    <p>
                                                        {new Date(
                                                            ticket.ticketDate,
                                                        ).toLocaleDateString(
                                                            "id-ID",
                                                            {
                                                                weekday: "long",
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric",
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
                                                WisNu Ticketing System
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div className="flex w-full flex-col items-center justify-center gap-2">
                                    <h1 className="text-2xl font-bold">
                                        Anda belum memiliki tiket.
                                    </h1>
                                    <p className="text-lg text-gray-500">
                                        Silahkan pesan tiket terlebih dahulu.
                                    </p>
                                </div>
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

export default MyTicket;
