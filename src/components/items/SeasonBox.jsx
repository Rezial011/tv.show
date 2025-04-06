import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SeasonBox({cover, name}) {
    const [seasons, setSeasons] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`https://api.tvmaze.com/shows/${id}/seasons`)

            const data = response.data
            setSeasons(data)
        }
        fetch()
    }, [id])
    console.log("season", seasons)

    return (
        <div className="flex flex-wrap gap-3 justify-between">
        {
        seasons.map((season) => (
            <div key={season.id} href="#" className="movieBox relative pb-3 w-[110px] h-auto sm:w-[130px] md:w-[185px] lg:w-[190px] xl:w-[200px] rounded-sm my-1 text-wrap overflow-hidden shadow-lg">
                <img className="w-full object-cover h-[160px] sm:h-[180px] md:h-[250px] lg:h-[265px] xl:h-[280px]" src={season.image?.original || season.image?.medium || cover} alt="no image found" />
                <h1 className="mx-2 md:mx-3 font-medium text-[14px] sm:text-[16px] line-clamp-2 leading-4 mt-2 mb-1">{name}</h1>
                <h1 className="mx-2 md:mx-3 font-medium genre text-[14px] sm:text-[16px] line-clamp-2 leading-4 mt-2 mb-1">{season?.name || `Season ${season.number}`}
                    <span className="font-light text-xs text-gray-500">{season.premiereDate ? '' : ' (Coming soon)'}</span>
                </h1>
            </div>
        ))
        }
        <div className="ms-auto"></div>
        </div>
    )
}