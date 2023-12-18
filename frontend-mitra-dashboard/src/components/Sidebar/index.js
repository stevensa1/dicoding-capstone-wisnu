import React from "react";
import { navigationList } from "../data/navItem";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faHouse,
//     faCompassDrafting,
//     faTicket,
//     faMessage,
//     faCircleInfo,
//     faMagnifyingGlassChart,
//     faLockOpen,
// } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ activeMenu = "Dashboard" }) {
    return (
        <>
            <div className="h-min-screen hidden w-80 flex-col justify-between gap-5 bg-red-orange-950 p-6 text-red-orange-200 md:flex">
                <div className="flex flex-col gap-5">
                    <div className="text-center text-red-orange-400">
                        <div className="text-2xl font-bold">WisNu</div>
                        <div className="font-semibold uppercase tracking-widest">
                            Partner
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {navigationList.map((item, index) => (
                            <Link
                                key={index}
                                to={item.link}
                                className={`flex cursor-pointer items-center rounded-lg p-4 ${
                                    activeMenu === item.name
                                        ? "bg-red-orange-100 text-red-orange-950"
                                        : "transition duration-200 hover:bg-red-orange-800"
                                }`}
                            >
                                <div className="flex h-12 w-12 items-center justify-center">
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        size="xl"
                                        className={`
                                            ${
                                                activeMenu === item.name
                                                    ? "text-red-orange-950"
                                                    : "text-red-orange-400"
                                            }
                                        `}
                                    />
                                </div>
                                <div className="ml-4">{item.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div
                        className={`flex cursor-pointer items-center rounded-lg p-4 transition duration-200 hover:bg-red-orange-800`}
                    >
                        <div className="flex h-12 w-12 items-center justify-center">
                            <FontAwesomeIcon
                                icon="fa-solid fa-gears"
                                size="xl"
                                className="text-red-orange-400"
                            />
                        </div>
                        <div className="ml-4">Pengaturan Akun</div>
                    </div>
                    <div
                        className={`flex cursor-pointer items-center rounded-lg p-4 transition duration-200 hover:bg-red-orange-800`}
                    >
                        <div className="flex h-12 w-12 items-center justify-center">
                            <FontAwesomeIcon
                                icon="fa-solid fa-sign-out"
                                size="xl"
                                className="text-red-orange-400"
                            />
                        </div>
                        <div className="ml-4">Keluar</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
