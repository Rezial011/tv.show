import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import Navbar from "./navbar";
import Form from "./Form";
import Footer from "./Footer";
function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <section className="flex justify-center items-center flex-col">
        <Banner />
        <div className="randomShow flex flex-col pb-5 md:px-3 mt-[-30px] lg:mt-[-55px] bg-white rounded-sm w-[95vw] sm:w-[90vw] md:w-[80vw]">
          <div className="flex items-center sticky top-0 z-10 bg-white p-5 sm:py-0 mb-3 rounded-sm border border-transparent border-b-gray-300">
            <Navbar />
            <Form />
          </div>
          <div className="flex flex-wrap justify-around items-center">
            <div
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <h1
                style={{
                  textTransform: "uppercase",
                  fontWeight: "700",
                  letterSpacing: "2px",
                }}
              >
                {movie.name}
              </h1>
              <div style={{ display: "flex", gap: "20px" }}>
                <div>
                  <img
                    src={movie.image?.original}
                    alt={movie.name}
                    style={{ width: "400px" }}
                  />
                  <p>Genres: {movie.genres?.join(", ")}</p>
                  <p>Rating: {movie.rating?.average}</p>
                </div>

                <p style={{ width: "900px" }}>{movie.summary}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default MovieDetails;
