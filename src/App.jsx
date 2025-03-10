import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import HomeLayout from "./components/home/HomeLayout";
import MovieDetails from "./components/items/MovieDetails";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
