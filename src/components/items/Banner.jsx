import React, {useState, useEffect} from "react";
import Logo from "./Logo";

export default function Banner() {
    const [banner, setbanner] = useState([]); // State untuk menyimpan URL gambar
    const [image, setimage] = useState('')
    useEffect(() => {
      // Fungsi untuk mengambil gambar acak dari TVmaze API
      const fetchBanner = async () => {
        try {
          // Ambil data acak dari TVmaze API
          const response = await fetch('https://api.tvmaze.com/shows');
          const data = await response.json();
  
          // Pilih acara TV acak dari respons
          const randomShow = data[Math.floor(Math.random() * data.length)];
          console.log(randomShow)

          // Ambil URL gambar dari properti `image.medium`
          if (randomShow.image && randomShow.image.original) {
            setbanner(randomShow);
            setimage(randomShow.image.original)
          } else {
            setbanner([]); // Jika tidak ada gambar, set ke string kosong
          }
          
        } catch (error) {
          console.error('Gagal mengambil gambar:', error);
          setbanner([]); // Fallback jika terjadi error
        }
      };
  
      fetchBanner(); // Panggil fungsi fetch
    }, []); // Jalankan sekali saat komponen dimount

    return (
        <div className="banner flex flex-col justify-center items-baseline w-full h-[45vh] sm:h-[50vh] md:h-[80vh] lg:h-[100vh] px-8 sm:px-12 md:px-24 xl:px-38 text-gray-50" style={{backgroundImage: `url(${image})`}}>
            <a href="" className="w-15 sm:w-17 md:w-24 lg:w-30 xl:w-33 absolute top-1">
              <Logo/>
            </a>
            <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-[500px]">{banner.name}</h1>
            <p className="font-base uppercase tracking-wider text-xs sm:text-sm lg:text-base xl:text-lg mt-2 md:mt-3 md:mb-7 mb-5 xl:mt-4 xl:mb-10 text-gray-300">{banner.genres?.join(" ")}</p>
            <a href="#">
            <button className="font-light text-sm sm:text-base md:text-lg lg:text-[19px] xl:text-[20px] px-3 py-1 lg:px-4 rounded-full flex gap-3 lg:gap-5 items-center justify-center">
                Preview <svg className="lg:h-[18px] lg:w-[18px]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.407 35L33.14 24L20.407 13" stroke-width="3"/></svg>
            </button>

            </a>
        </div>
    )
}