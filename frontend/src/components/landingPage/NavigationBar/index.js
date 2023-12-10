import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navigationList } from "../../../staticData/LandingPageNavItem";

function NavigationBar({ activeMenu = "Beranda" }) {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        setScrolled(offset > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div
                className={`flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-8 ${
                    scrolled
                        ? "bg-white shadow-md"
                        : "bg-transparent text-white"
                }`}
            >
                <h1 className="hidden text-lg md:flex">
                    <p className="font-normal">
                        <b
                            className={`${
                                scrolled ? "text-red-orange-800" : ""
                            }`}
                        >
                            Wis
                        </b>
                        ata
                        <b
                            className={`${
                                scrolled ? "text-red-orange-800" : ""
                            }`}
                        >
                            Nu
                        </b>
                        santara
                    </p>
                </h1>
                <h1 className="flex text-xl font-bold md:hidden">WisNu</h1>
                <div className="hidden gap-5 md:flex">
                    {navigationList.map((item, index) => (
                        <Link
                            to={item.link}
                            key={index}
                            className={`px-2 ${
                                activeMenu === item.name
                                    ? "border-b-2 border-red-orange-600"
                                    : "opacity-70 transition duration-150 hover:opacity-100"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        to="/home"
                        className="rounded-sm bg-red-orange-600 px-4 py-2 text-white transition duration-500 hover:bg-red-orange-950"
                    >
                        Jelajah Nusantara
                    </Link>
                    <div className="cursor-pointer text-2xl md:hidden">
                        &#9776;
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;
