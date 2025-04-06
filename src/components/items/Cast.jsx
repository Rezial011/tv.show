import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Cast() {
    const [casts, setCast] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getCast = async () => {
            const response = await axios.get(`https://api.tvmaze.com/shows/${id}/cast`)
            
            setCast(response.data)
        }

        getCast()

    }, [id])
    
    const [char, setChar] = useState(null)

    console.log(casts)

    return (
        <section className="slider overflow-scroll pb-3" >
            <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-max" >
            {
            casts.map((cast) => (
                <div key={cast.person.id} className="flex flex-col items-center text-center w-30 sm:w-35 lg:w-38">
                    <div className="h-40 sm:h-45 md:h-49 lg:h-55 w-full flex justify-center items-center mb-2 overflow-hidden rounded-sm" style={{boxShadow : 'rgba(0, 0, 0, 0.16) 2.4px 2.4px 5px'}}>
                        <img
                        onMouseEnter={() => setChar(cast.person.id)} 
                        onMouseLeave={() => setChar(null)}
                        src={char === cast.person.id ? cast.character.image?.original : cast.person.image?.original}
                        className={`object-cover transition-all h-full w-full ${cast.character.image?.original ? "hover:w-[120%] hover:h-[120%]" : " "}`} alt="No image found"/>
                    </div>
                    
                    <p className="font-light sm:text-lg lg:text-xl genre">{cast.person.name}</p>
                    <p className="text-xs sm:text-sm lg:text-[15px] font-semibold">{cast.character.name}</p>
                </div>
            ))
            }
            </div>
        </section>
    )
}