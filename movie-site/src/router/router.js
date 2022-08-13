import Genres from "../pages/Genres";
import CurrentMovies from "../pages/CurrentMovies";
import FilmsQuery from "../pages/FilmsQuery";

export const routs = [
    {path: "/", element: CurrentMovies},
    {path: "/genres", element: Genres},
    {path: "/search/:query", element: FilmsQuery},
    {path: "/search/", element: FilmsQuery}
];