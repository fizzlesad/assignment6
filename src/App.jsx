import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../src/views/HomeView.jsx";
import RegisterView from "../src/views/RegisterView.jsx";
import LoginView from "../src/views/LoginView.jsx";
import GenreView from "../src/views/GenreView.jsx";
import MoviesView from "../src/views/MoviesView.jsx";
import DetailView from "../src/views/DetailView.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/movies" element={<MoviesView />}>
          <Route path="genre/:genre_id" element={<GenreView />} />
          <Route path="details/:id" element={<DetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
