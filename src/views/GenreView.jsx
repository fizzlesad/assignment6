import "./GenreView.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function GenreView() {
  const [done, setDone] = useState(false);
  const [movieArray, setMovieArray] = useState([]);
  const [movie, setMovie] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const params = useParams();

  const movieData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${
        params.genre_id
      }&api_key=${import.meta.env.VITE_TMDB_KEY}`
    );
    setMovieArray(response.data.results);
    setMovie(movieArray);
    setTotalPages(response.data.total_pages);
    if (totalPages >= 500) {
      setTotalPages(500);
    }
    setDone(true);
  };

  const movePage = (x) => {
    setDone(false);
    if (page + x >= 500) {
      setPage(totalPages);
    } else if (page + x <= 1) {
      setPage(1);
    } else {
      setPage(page + x);
    }
    movieData();
  };

  const setCurrentPage = (x) => {
    setDone(false);
    if (x >= 500) {
      setPage(totalPages);
    } else {
      setPage(x);
    }
    movieData();
  };

  useEffect(() => {
    movieData();
  }, [done]);

  return (
    <div className="movie-posters">
      <div className="genre-view">
        <div className="movies-container">
          {movieArray.map((movies) => (
            <a key={movie.id} href={`/movies/details/${movies.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            </a>
          ))}
          <div class="pagination">
            <a onClick={() => setCurrentPage(1)}>&laquo;</a>
            <a onClick={() => movePage(-1)}>{"<"}</a>
            <a class="active">{page}</a>
            <a onClick={() => movePage(1)}>{">"}</a>
            <a onClick={() => setCurrentPage(totalPages)}>&raquo;</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenreView;
