import React, { useState, useEffect } from "react";

export default function Form() {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchShows = async () => {
      if (!query) {
        setShows([]);
        return;
      }
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await response.json();
      setShows(data);
      
    };

    fetchShows();
  }, [query]); // Jalankan fetchShows setiap kali query berubah

  const handleSearch = (e) => {
    e.preventDefault();
  };

  console.log(query);
  console.log(shows);

    return (
        <div>
        <form className="flex" onSubmit={handleSearch}>
            <input className=" border border-transparent border-b-gray-400 xl:w-[290px] sm:w-[230px] focus:outline-none focus:border-b-red-500" 
            type="text"
            value={query}
            name='query'
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search show..."/>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#797979" d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0s.41-1.08 0-1.49zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg></button>
        </form>

        {
          query && (
          <div className="search absolute mt-1 right-7 sm:right-1/14 md:right-1/25 lg:right-1/30 max-h-[100vh] rounded-sm overflow-scroll z-10">
            {shows.map((index) => (
                <a key={index.show.id} href="#" className="flex gap-3 p-1 h-30 sm:h-35 lg:h-38 xl:h-40 w-[205px] sm:w-[230px] md:w-[250px] xl:w-[280px] bg-gray-50 border border-transparent border-b-gray-300">
                    {index.show.image && <img className="w-20 sm:w-25 lg:w-27 rounded-sm" src={index.show.image.medium} alt={index.show.name} />}
                    <div>
                      <h3 className="text-sm font-medium sm:text-[15px] mt-1 sm:mt-2 xl:mt-3  line-clamp-2">{index.show.name}</h3>
                      <p className="genre text-xs sm:text-[13px] mt-1 mb-3 line-clamp-2">{index.show.genres.join(', ')}</p>
                      <br className="hidden lg:inline"/>
                      <p className="text-xs sm:text-[13px] font-semibold">❤ {index.show.rating.average || '-'}</p>
                    </div>
                </a>
            ))}
        </div> )
        }
        </div>
    )
}