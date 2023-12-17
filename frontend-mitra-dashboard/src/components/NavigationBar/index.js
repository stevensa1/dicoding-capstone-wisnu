import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";
import { navigationList } from "./../data/navItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function NavigationBar({ activeMenu = "Dashboard" }) {
    useEffect(() => {
        document.title = "WisNu Partner - Dashboard";
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [partnerLoggedIn, setLogin] = useState(false);
    const [partnerData, setPartnerData] = useState({
        logoAddress: "/user/profile-pictures/default-profile-picture.png",
        companyName: "",
        emailAddress: "",
    });
    const sessionToken = Cookie.get("partnerSessionToken");
    useEffect(() => {
        if (sessionToken) {
            axios
                .get(`${process.env.REACT_APP_BACKEND_HOST}/api/partner`, {
                    headers: {
                        Authorization: `Bearer ${sessionToken}`,
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        setLogin(true);
                        setPartnerData({
                            logoAddress: res.data.user.logoAddress,
                            companyName: res.data.user.companyName,
                            emailAddress: res.data.user.emailAddress,
                        });
                    }
                });
        } else {
            window.location.href = "/login";
        }
    }, [sessionToken]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Navigation Bar */}
            <div className="inline-flex items-center justify-between self-stretch">
                <div className="flex gap-5 font-poppins text-xl font-bold text-zinc-800 md:text-3xl">
                    <div
                        className="cursor-pointer font-poppins text-xl font-bold text-zinc-800 md:hidden md:text-3xl"
                        onClick={toggleMobileMenu}
                    >
                        &#9776;
                    </div>
                    {activeMenu}
                </div>

                {/* User Info */}
                <div className="flex items-center justify-start gap-6">
                    <div className="inline-flex flex-col items-end justify-center">
                        <div className="font-poppins text-sm font-semibold text-red-900 md:text-lg">
                            {partnerLoggedIn ? (
                                <>{partnerData.companyName}</>
                            ) : (
                                <Skeleton />
                            )}
                        </div>
                        <div className="md:font-sm font-poppins text-xs tracking-tight text-red-900">
                            {partnerLoggedIn ? (
                                <>{partnerData.emailAddress}</>
                            ) : (
                                <Skeleton />
                            )}
                        </div>
                    </div>
                    <div className="flex aspect-square items-center justify-center overflow-hidden rounded-full">
                        <img
                            className="h-12 w-12 rounded-full object-cover object-center"
                            src={`https://${process.env.REACT_APP_BUCKET_URL}${partnerData.logoAddress}`}
                            alt={`${partnerData.companyName} Logo`}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu - Hidden by default */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    {/* Navigation List */}
                    <div className="flex flex-col gap-2">
                        {navigationList.map((item) => (
                            <Link
                                key={item.name}
                                to={item.link}
                                className="text-md font-poppins font-semibold text-zinc-800"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default NavigationBar;
