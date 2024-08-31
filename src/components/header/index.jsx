import { Link, NavLink, useNavigate } from "react-router-dom"
import Logo from "../../../public/image/logo.png";
import userIcon from "../../../public/image/user.png"
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";





export default function Header() {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();


    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchValue)
    }


    // menu items here 
    const menuItems = [
        {
            id: 1,
            label: "TV Show",
            href: "tv",
            icon: <PiTelevisionFill />
        },
        {
            id: 2,
            label: "Movies",
            href: "movies",
            icon: <BiSolidMoviePlay />
        }
    ];


    useEffect(() => {
        if (searchValue?.length > 0) {
            navigate(`/search?q=${searchValue}`)
        }
    }, [searchValue, navigate])


    return (
        <header className="bg-black opacity-60 fixed top-0 w-full h-16 backdrop-blur-2xl z-40  ">
            <div className="container mx-auto px-4 flex items-center h-full">
                <Link to="/">
                    <img
                        src={Logo}
                        alt="logo"
                        width={120}
                    />
                </Link>

                <nav className="hidden lg:flex items-center gap-4 ml-5 z-10">
                    {
                        menuItems.map(item => (
                            <NavLink
                                key={item.id}
                                to={`/${item.href}`}
                                className={({ isActive }) => `
                                    ${isActive ? "text-neutral-100" : ""}
                                      px-2 hover:text-neutral-100
                                `}
                            >
                                {item.label}
                            </NavLink>
                        ))
                    }
                </nav>
                <div className="ml-auto flex items-center gap-5">
                    <form
                        onSubmit={handleSearch}
                        className="flex items-center text-white"
                    >
                        <input
                            type="text"
                            name="search"
                            placeholder="Search here..."
                            className="px-4 py-1 bg-transparent rounded outline-none border-none hidden lg:block"
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button className="text-2xl ">
                            <IoSearchOutline />
                        </button>
                    </form>
                    <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
                        <img
                            src={userIcon}
                            alt=""
                            width="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}
