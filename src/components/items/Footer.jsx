import React from "react";
import ig from "../../assets/ig.png"
import fb from "../../assets/fb.webp"
import x from "../../assets/x.png"
import yt from "../../assets/yt.png"

const sosmed = [
    {
        id:1,
        name:'Instagram',
        imgSrc: ig,
    },
    {
        id: 2,
        name:'X',
        imgSrc: x,
    },
    {
        id: 3,
        name:'Facebook',
        imgSrc: fb,
    },
    {
        id: 4,
        name:'Youtube',
        imgSrc: yt,
    },
]

const other = [
    {
        id: 1,
        title: 'About Us',
    },
    {
        id: 2,
        title: 'Support',
    },
    {
        id: 3,
        title: 'Advertising',
    },
    {
        id: 4,
        title: 'FAQ',
    },
    {
        id: 5,
        title: 'Terms',
    },
    {
        id: 6,
        title: 'Privacy',
    },
    {
        id: 7,
        title: 'Cookie',
    },
]

export default function Footer() {
    return (
        <section className="bg-gray-100 w-full text-center">
            <div className="text-sm md:text-base text-gray-600 pt-5 md:py-10">
                <h1 className="mb-5 md:mb-8 font-bold ">Follow Us :</h1>
                <div className="flex flex-wrap e gap-x-15 gap-y-4 justify-center items-center mb-8">
                    {
                        sosmed.map((index) => (
                            <a key={index.id} href="#" className="flex gap-2 items-center font-medium hover:text-red-500">
                                <img src={index.imgSrc} alt="" className="w-auto h-5" />
                                <p> {index.name}</p>
                            </a>
                        ))
                    }
                </div>
                
                <div className="flex flex-wrap my-8 gap-10 gap-y-2 justify-center items-center">
                    {
                        other.map((index) => (
                            <a key={index.id} href="#" className="hover:text-red-500">{index.title}</a>
                        ))
                    }
                </div>
            </div>

            <div className="copyright text-sm p-2 font-medium">
                &copy; 2025 by Dafa Al Farezi
            </div>
        </section>
    )
}