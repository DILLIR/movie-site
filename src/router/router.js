import Genres from "../pages/Genres";
import CurrentMovies from "../pages/CurrentMovies";
import FilmsQuery from "../pages/FilmsQuery";

export const routs = [
  { path: "/movie-site/", element: CurrentMovies },
  { path: "/movie-site/genres/:genreId", element: Genres },
  { path: "/movie-site/search/:query", element: FilmsQuery },
  { path: "/movie-site/search/", element: FilmsQuery },
];
