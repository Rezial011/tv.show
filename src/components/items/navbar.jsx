import React, { useState, useEffect } from "react";
import logo from "../../assets/logo2.png"
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const open = () => {
        setIsOpen(true)
    }

    const close = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        const Resize = () => {
          if (window.innerWidth > 640) {
            setIsOpen(false);
          }
        };
    
        window.addEventListener("resize", Resize);
        return () => window.removeEventListener("resize", Resize);
      }, []);

    return (
        <>
            <div className="navbar uppercase text-sm text-gray-500 sm:flex justify-between w-full pe-7 md:pe-8 lg:pe-19 xl:pe-29 xl:ps-10">
                <svg className="sm:hidden" onClick={open} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#797979" fill-rule="evenodd" d="M2 8a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0-4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>
                <a className="hidden sm:inline" href="#">Home</a>
                <a className="hidden sm:inline" href="#">Charts</a>
                <a className="hidden sm:inline" href="#">Coming Soon</a>
                <a className="hidden sm:inline" href="#">More</a>
            </div>

            <div className={`burger flex flex-col z-20 items-start fixed top-0 left-0 ps-0 text-center text-gray-50 bg-gray-500 h-full overflow-hidden ${isOpen ? "w-[40vw]" : "w-0"}`}>
                <button onClick={close} className="self-start mt-6 mb-4 ms-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>
                </button>
                <a href="#">Home</a>
                <a href="#">Charts</a>
                <a href="#">Coming Soon</a>
                <a href="#">More</a>
                <img src={logo} alt="" className="mt-auto ms-6 mb-[-10px] h-19"/>
            </div>
        </>
    )
}