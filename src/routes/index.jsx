import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../views/home";
import ExplorePage from "../views/explore";
import MoviesDetails from "../views/movie-details";
import SearchMovie from "../views/search-movie";




export const router = createBrowserRouter([
    {
        path: "/",
        exact: true,
        element:<App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: ":explore",
                element: <ExplorePage />
            },
            {
                path: ":explore/:id",
                element: <MoviesDetails />
            },
            {
                path: "search",
                element: <SearchMovie />
            },
        ]
    }
])