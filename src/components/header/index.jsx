import { NavLink } from "react-router-dom"
import Logo from "../../../public/image/logo.png"


export default function Header() {
    const menuItems = [
        {
            id: 1,
            label: "TV Show",
            href: "tv-show"
        },
        {
            id: 2,
            label: "Movies",
            href: "movies"
        }
    ]
    return (
        <header className="bg-black opacity-50 fixed top-0 w-full h-16 backdrop-blur-sm z-10  ">
            <div className="container mx-auto px-4 flex items-center h-full">
                <figure>
                    <img
                        src={Logo}
                        alt="logo"
                        width={120}
                    />
                </figure>

                <nav className="hidden lg:flex items-center gap-4 ml-5 z-10">
                    {
                        menuItems.map(item => (
                            <NavLink
                                key={item.id}
                                to={`/${item.href}`}
                                className={({ isActive }) =>`
                                    ${isActive  ? "text-neutral-100": ""}
                                      px-2 hover:text-neutral-100
                                `}
                            >
                                {item.label}
                            </NavLink>
                        ))
                    }
                </nav>
            </div>
        </header>
    )
}
