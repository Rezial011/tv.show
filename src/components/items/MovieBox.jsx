import React, { useState, useEffect, useRef } from "react";

const random = Math.floor(Math.random() * 225)
// console.log(r)

export default function MovieBox() {
    const [shows, setShow] = useState([]);
    const isFetched = useRef(false);

    useEffect(() => {
    if (isFetched.current) return;
      const fetchShows = async () => {
          const response = await fetch(`https://api.tvmaze.com/shows`);
    
          const data = await response.json();
          
          setShow(data.slice(random, random+15));
      };

      fetchShows()
      isFetched.current = true; 
    }, [])

      console.log('shows',shows)
      
    return (
        <>
        {
        shows.map((index) => (
            <a key={index.id} href="#" className="movieBox relative w-[110px] h-[240px] sm:w-[130px] sm:h-[270px] md:w-[185px] md:h-[335px] lg:w-[190px] lg:h-[350px] xl:w-[200px] xl:h-[360px] rounded-sm my-1 text-wrap overflow-hidden shadow-lg">
                <img className="w-full h-[160px] sm:h-[180px] md:h-[250px] lg:h-[265px] xl:h-[280px]" src={index.image.original} alt="" />
                <h1 className="mx-2 md:mx-3 font-medium text-[14px] sm:text-[16px] line-clamp-2 leading-4 mt-2 mb-1">{index.name}</h1>
                <p className="genre mx-2 md:mx-3 text-xs sm:text-[13px] line-clamp-1 md:line-clamp-2">{`${index.genres?.join(", ")}`} </p>
                <div className="absolute h-10 w-10 lg:h-11 lg:w-11 xl:h-12 xl:w-12 px-1 sm:py-1 xl:px-2 bottom-0 right-0 flex justify-end items-end">
                    <p className="text-[13px] font-semibold text-gray-50">{index.rating.average}</p>
                </div>
            </a>
        ))
        }
        </>
    )
}