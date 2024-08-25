import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";



export default function MobileNavbar() {

    // menu items here 
    const menuItems = [
        {
            id: 1,
            label: "Home",
            href: "/",
            icon: <MdHome />
        },
        {
            id: 2,
            label: "TV Show",
            href: "tv-show",
            icon: <PiTelevisionFill />
        },
        {
            id: 3,
            label: "Movies",
            href: "movies",
            icon: <BiSolidMoviePlay />
        },

        {
            id: 4,
            label: "Search",
            href: "/search",
            icon: <IoSearchOutline />
        }
    ];

    console.log(menuItems);

    return (
        <section className="lg:hidden block bg-neutral-600 bg-opacity-40 w-full h-16 fixed bottom-0">
            <div className="flex justify-around items-center h-full text-neutral-400">
                {
                    menuItems.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.href}
                            className={({ isActive }) => `
                            ${isActive ? "text-neutral-100" : ""}
                              px-2 hover:text-neutral-100 text-4xl flex flex-col items-center justify-center gap-1
                        `}
                        //     className={({ isActive }) => `
                        //     ${isActive} ? "text-white " : "text-neutral-800" 
                        // "text-4xl flex flex-col items-center justify-center gap-5"
                        
                        // `}
                        >
                            <span className="text-2xl">
                                {item.icon}
                            </span>
                            <span className="text-sm">
                                {item.label}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
        </section>
    );
}
