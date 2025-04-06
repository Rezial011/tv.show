import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cast from "../items/Cast";
import Navbar from "../items/navbar";
import Form from "../items/Form";
import Footer from "../items/Footer";
import SeasonBox from "../items/SeasonBox";
import tag from "../../assets/icon-park-solid--tag.svg"

export default function SinglePage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);

      setMovie(response.data);
    };
    
    fetchMovie();
}, [id]);

let [webStream, setwebStream] = useState()
useEffect(() => {
  if (movie.webChannel === null) setwebStream()
    else setwebStream(<a href={movie.officialSite} target="_blank" className=" text-center py-1 px-2 text-xs sm:text-sm lg:text-base text-white bg-cyan-500 rounded-sm">{movie.webChannel?.name}</a>)
}, [movie.webChannel])

let [status, setStatus] = useState('')
useEffect(() => {
    if (movie.status === "Ended") setStatus('red-600')
      else setStatus('emerald-400')

}, [movie.status])

let [time, setTime] = useState('')
useEffect(() => {
    if (movie.schedule?.time === "") setTime('')
      else setTime(`( ${movie.schedule?.time} )`)

}, [movie.schedule?.time])

console.log("movie", movie);

  return (
    <section className="flex justify-center items-center flex-col">
      <div className="response flex flex-col pb-5 md:px-3 bg-white rounded-sm w-[92vw] md:w-[95vw] lg:w-[90vw] xl:w-[87vw]">
        <div className="flex items-center z-10 bg-white p-5 sm:py-0 mb-3 rounded-sm border border-transparent border-b-gray-300">
          <Navbar />
          <Form />
        </div>
        <div>
            <div className="flex">
            <img
                src={movie.image?.original}
                alt={movie.name}
                className="rounded-sm w-[42vw] sm:w-[30vw] md:w-[33vw] lg:w-[22vw] xl:w-[17vw] object-cover"
                style={{boxShadow : 'rgba(0, 0, 0, 0.16) 2.4px 2.4px 5px'}}
            />
            <div className="flex flex-col justify-center w-full mx-5 sm:ms-8 md:ms-10 lg:ms-12">
                <h1 className="title font-bold text-3xl sm:text-4xl lg:text-5xl line-clamp-3">{movie.name}</h1>
                <p className="genre text-sm sm:text-base lg:text-lg">{movie.genres?.join(", ")}</p>
                
                <p className="text-sm sm:text-base md:text-lg font-medium md:font-semibold lg:font-bold text-gray-400 mt-3">{movie.network?.name}</p>
                <p className="text-gray-500 text-sm md:text-base lg:text-lg font-light ">{movie.schedule?.days.join(", ")} {time}</p>

                <div className="rating flex items-start justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl lg:self-end mt-5 xl:mt-10 xl:me-15 w-max font-bold text-white ">
                  <img src={tag} alt="" className="sm:w-[42px] md:w-[47px] lg:w-[70px] xl:w-[80px]" />
                  <p className="absolute mt-1 lg:mt-2 xl:mt-3">{movie.rating?.average || 'N/A'} </p>
                </div>
            </div>
          </div>
          <div className="flex gap-x-2 mt-9 mb-3 text-xs sm:text-sm lg:text-base">
            <p className={`text-center py-1 px-2 text-white bg-${status} rounded-sm`}>{movie.status}</p>
            <p className=" text-center py-1 px-2 text-white bg-indigo-400 rounded-sm">{movie.type}</p>
            <p className=" text-center py-1 px-2 text-white bg-yellow-500 rounded-sm">{movie.language}</p>
            {webStream}
          </div>
          {/* <p className="font-bold text-md mb-1">Synopsis</p> */}
          <p className="text-justify md:text-lg lg:text-[19px]" dangerouslySetInnerHTML={{ __html: movie.summary }} />
        </div>
        <div>
        <h1 className="font-semibold text-lg md:text-xl mb-2 mt-7 lg:mt-10">Cast</h1>
          <Cast />
        <h1 className="font-semibold text-lg md:text-xl mb-2 mt-5">Season</h1>
          <SeasonBox cover={movie.image?.original} name={`${movie.name}`}/>
        </div>
      </div>
      <Footer />
    </section>
  );
}
