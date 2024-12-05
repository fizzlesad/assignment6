import "./Genres.css";

function Genres(props) {
  return (
    <div class="genres-container">
      <ul>
        {props.genresList.map((item) => {
          return (
            <a href={`/movies/genre/${item.id}`}>
              <li key={item.id}>{item.genre}</li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}

export default Genres;
