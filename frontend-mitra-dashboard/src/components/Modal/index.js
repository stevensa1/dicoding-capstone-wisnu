import React from "react";

function Modal({ toggle, children }) {
    return (
        <>
            {toggle && (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:h-screen sm:align-middle"></span>
                            &#8203;
                            <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-max sm:align-middle">
                                {children}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Modal;
