import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCompass,
    faTicket,
    faTags,
    faClipboardList,
    faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import DestinationBox from "../../../components/Application/DestinationBox";
import NewsSlick from "../../../components/Application/NewsSlick";

function ApplicationHome() {
    useEffect(() => {
        document.title = "WisNu - Beranda";
    }, []);

    const [destinations, setDestinations] = useState([]);
    const [dataLoad, setDataLoad] = useState(false);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_HOST}/api/destination/`)
            .then((res) => {
                if (res.status !== 200) {
                    alert("Terjadi kesalahan saat mengambil data destinasi.");
                    return;
                }
                setDestinations(res.data.destinations);
                setDataLoad(true);
            });
    }, []);
    return (
        <>
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
                            <div className="flex h-12 w-12 items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faCompass}
                                    size="2xl"
                                    style={{ color: "#731c1c" }}
                                />
                            </div>
                            <div className="w-24 text-center text-sm">
                                Destinasi Wisata
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex h-12 w-12 items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faTicket}
                                    size="2xl"
                                    style={{ color: "#731c1c" }}
                                />
                            </div>
                            <div className="w-24 text-center text-sm">
                                Tiket Saya
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex h-12 w-12 items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faTags}
                                    size="2xl"
                                    style={{ color: "#731c1c" }}
                                />
                            </div>
                            <div className="w-24 text-center text-sm">
                                Voucher dan Promo
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex h-12 w-12 items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faClipboardList}
                                    size="2xl"
                                    style={{ color: "#731c1c" }}
                                />
                            </div>
                            <div className="w-24 text-center text-sm">
                                Riwayat Pembelian
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="flex h-12 w-12 items-center justify-center">
                                <FontAwesomeIcon
                                    icon={faHeadset}
                                    size="2xl"
                                    style={{ color: "#731c1c" }}
                                />
                            </div>
                            <div className="w-24 text-center text-sm">
                                Customer Service
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Destinasi Populer</h1>
                    <div className="flex flex-col gap-4 md:flex-row">
                        Todo Sort by views
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Destinasi Viral</h1>
                    <div className="flex flex-col gap-4 md:flex-row">Todo</div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">Destinasi Baru</h1>
                    <div className="flex flex-col gap-4 md:flex-row">
                        {!dataLoad
                            ? ""
                            : destinations.map((destination, index) => (
                                  <DestinationBox
                                      key={index}
                                      url={`/destination/${destination._id}`}
                                      image={`https://${process.env.REACT_APP_BUCKET_URL}${destination.destinationPictures[0].imageAddress}`}
                                      name={destination.destinationName}
                                      category={destination.destinationCategory}
                                      location={destination.destinationAddress}
                                      description={destination.destinationDescription.slice(
                                          0,
                                          100,
                                      )}
                                      rating={4}
                                  />
                              ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-lg font-bold">
                        Lengkapi Pengalaman Anda Berpetualang di Nusantara
                    </h1>
                    <div className="flex flex-col gap-4 md:flex-row">Todo</div>
                </div>
            </div>
        </>
    );
}

export default ApplicationHome;
