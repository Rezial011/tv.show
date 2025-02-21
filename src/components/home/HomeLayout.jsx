import React, {useState, useEffect} from "react";
import MovieBox from "../items/MovieBox";
import Form from "../items/Form";
import Banner from "../items/Banner";
import Navbar from "../items/navbar";
import Footer from "../items/Footer";

export default function HomeLayout() {  
    return (
        <section className="flex justify-center items-center flex-col">
            <Banner/>
            <div className="randomShow flex flex-col pb-5 md:px-3 mt-[-30px] lg:mt-[-55px] bg-white rounded-sm w-[95vw] sm:w-[90vw] md:w-[80vw]">
                <div className="flex items-center sticky top-0 z-10 bg-white p-5 sm:py-0 mb-3 rounded-sm border border-transparent border-b-gray-300">
                    <Navbar/>
                    <Form/>
                </div>
                <div className="flex flex-wrap justify-around items-center">
                    <MovieBox/>
                </div>
            </div>
            <Footer/>
        </section>
    )
}