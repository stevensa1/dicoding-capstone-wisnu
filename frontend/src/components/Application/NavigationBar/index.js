import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ApplicationNavigationBar() {
    const navigate = useNavigate();

    const [searchForm, setSearchForm] = useState("");

    const handleFormChange = (e) => {
        setSearchForm(e.target.value);
        console.log(searchForm);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // alert(`WisNu System: Search result for ${searchForm}.`);
        navigate(`/search/${searchForm}`);
    };

    return (
        <>
            <div className="flex items-center justify-between gap-2 bg-red-orange-600 px-6 py-2 text-white shadow-md transition-all duration-300 md:gap-5 md:px-8">
                <h1 className="hidden text-lg md:flex">
                    <Link
                        to="/home"
                        className="flex text-2xl font-bold transition duration-300 hover:text-red-orange-200"
                    >
                        WisNu
                    </Link>
                </h1>
                <button
                    onClick={() => {
                        alert("WisNu System: Menu is not setup yet");
                    }}
                    className="flex pr-2 md:hidden"
                >
                    <svg
                        width="30"
                        viewBox="0 0 54 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 2.5H52"
                            stroke="white"
                            stroke-width="4"
                            stroke-linecap="round"
                        />
                        <path
                            d="M2 18H34"
                            stroke="white"
                            stroke-width="4"
                            stroke-linecap="round"
                        />
                        <path
                            d="M2 33H47"
                            stroke="white"
                            stroke-width="4"
                            stroke-linecap="round"
                        />
                    </svg>
                </button>
                <div className="flex w-full justify-center md:justify-end">
                    <div class="flex w-full rounded-md bg-white p-2 px-2 md:w-1/2 md:p-1 md:px-1">
                        <div class="flex w-full">
                            <svg
                                className="flex md:hidden"
                                width="15"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.0426 20.0984L27.9317 25.9861L25.9861 27.9317L20.0984 22.0426C17.9076 23.7988 15.1828 24.754 12.375 24.75C5.544 24.75 0 19.206 0 12.375C0 5.544 5.544 0 12.375 0C19.206 0 24.75 5.544 24.75 12.375C24.754 15.1828 23.7988 17.9076 22.0426 20.0984ZM19.2844 19.0781C21.0294 17.2836 22.0039 14.8781 22 12.375C22 7.05787 17.6921 2.75 12.375 2.75C7.05787 2.75 2.75 7.05787 2.75 12.375C2.75 17.6921 7.05787 22 12.375 22C14.8781 22.0039 17.2836 21.0294 19.0781 19.2844L19.2844 19.0781Z"
                                    fill="gray"
                                />
                            </svg>
                            <form
                                className="flex w-full"
                                onSubmit={handleFormSubmit}
                            >
                                <input
                                    name="search"
                                    className="w-full rounded-md border-red-orange-600 bg-transparent px-2 text-black outline-0 ring-inset focus:outline-none focus:ring-0"
                                    type="text"
                                    placeholder="Cari destinasi wisata di Nusantara"
                                    onChange={handleFormChange}
                                />
                                <button
                                    type="submit"
                                    class="hidden items-center justify-center rounded-sm bg-red-orange-500 px-5 py-2.5 md:flex"
                                >
                                    <svg
                                        width="15"
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M22.0426 20.0984L27.9317 25.9861L25.9861 27.9317L20.0984 22.0426C17.9076 23.7988 15.1828 24.754 12.375 24.75C5.544 24.75 0 19.206 0 12.375C0 5.544 5.544 0 12.375 0C19.206 0 24.75 5.544 24.75 12.375C24.754 15.1828 23.7988 17.9076 22.0426 20.0984ZM19.2844 19.0781C21.0294 17.2836 22.0039 14.8781 22 12.375C22 7.05787 17.6921 2.75 12.375 2.75C7.05787 2.75 2.75 7.05787 2.75 12.375C2.75 17.6921 7.05787 22 12.375 22C14.8781 22.0039 17.2836 21.0294 19.0781 19.2844L19.2844 19.0781Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="rounded-md border px-4 py-2 text-white transition duration-500 hover:bg-red-orange-950">
                        Daftar
                    </button>
                    <button className="hidden rounded-md border px-4 py-2 text-white transition duration-500 hover:bg-red-orange-950 md:flex">
                        Masuk
                    </button>
                </div>
            </div>
        </>
    );
}

export default ApplicationNavigationBar;
