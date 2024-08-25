
import { MdHome } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";

// menu items here
export const menuItems = [
    {
        id: 1,
        label: "TV Show",
        href: "tv-show",
        icon: <PiTelevisionFill />
    },
    {
        id: 2,
        label: "Movies",
        href: "movies",
        icon: <BiSolidMoviePlay />
    }
];

export const mobileMenuItems = [
    ...menuItems,
    {
        id: 3,
        label: "Home",
        href: "/",
        icon: <MdHome />
    }
];


